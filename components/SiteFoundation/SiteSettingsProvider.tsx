"use client";

import { createContext, useContext, useMemo, type CSSProperties, type ReactNode } from "react";
import { mergeSiteSettings } from "./defaults";
import type { SitePalette, SiteSettings } from "./types";
import "./site-foundation.css";

const SiteSettingsContext = createContext<SiteSettings | null>(null);

function paletteVariables(prefix: "light" | "dark", palette: SitePalette) {
  return Object.fromEntries(Object.entries(palette).map(([key, value]) => [`--site-${prefix}-${key}`, value]));
}

export function SiteSettingsProvider({ settings, children, className = "" }: { settings?: Partial<SiteSettings>; children: ReactNode; className?: string }) {
  const value = useMemo(() => mergeSiteSettings(settings), [settings]);
  const style = {
    ...paletteVariables("light", value.style.light),
    ...paletteVariables("dark", value.style.dark),
    "--site-font-heading": value.style.headingFont,
    "--site-font-body": value.style.bodyFont,
    "--site-font-size": value.style.baseFontSize,
    "--site-type-scale": value.style.typeScale,
    "--site-content-width": value.style.contentWidth,
    "--site-radius": value.style.radius,
    "--site-focus-ring": value.style.focusRing,
  } as CSSProperties;
  return <SiteSettingsContext.Provider value={value}><div className={`siteFoundationRoot ${className}`} data-site-mode={value.style.mode} data-site-spacing={value.style.spacing} data-site-shadow={value.style.shadow} data-site-motion={value.style.motion} style={style}>{children}</div></SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const value = useContext(SiteSettingsContext);
  if (!value) throw new Error("useSiteSettings must be used inside SiteSettingsProvider");
  return value;
}

export function useOptionalSiteSettings() { return useContext(SiteSettingsContext); }

