"use client";
import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./ResponsiveHeader.module.css";
import { socialLinksForProfile, useOptionalSiteSettings, type ContactProfileId } from "../SiteFoundation";

export type NavigationItem = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon?: string; external?: boolean };
export interface ResponsiveHeaderProps {
  logo?: string;
  logoAlt?: string;
  homeHref?: string;
  navigation?: readonly NavigationItem[];
  socialLinks?: readonly SocialLink[];
  action?: NavigationItem;
  layout?: "inline" | "centered" | "portfolio";
  contentWidth?: "portfolio" | "full";
  maxWidth?: string;
  menuLabel?: string;
  navigationLabel?: string;
  socialLabel?: string;
  socialProfile?: ContactProfileId;
  activeHref?: string;
  appearance?: "solid" | "glass";
  fixed?: boolean;
  scrollThreshold?: number;
}

export default function ResponsiveHeader({ logo, logoAlt, homeHref, navigation, socialLinks, action, layout = "portfolio", contentWidth = "portfolio", maxWidth, menuLabel = "Menu", navigationLabel = "Main navigation", socialLabel = "Social media", socialProfile, activeHref, appearance = "glass", fixed = appearance === "glass", scrollThreshold = 20 }: ResponsiveHeaderProps) {
  const site = useOptionalSiteSettings();
  const resolvedLogo = logo ?? site?.identity.logo ?? "";
  const resolvedLogoAlt = logoAlt ?? `${site?.identity.name ?? "Site"} home`;
  const resolvedHomeHref = homeHref ?? site?.identity.homeHref ?? "/";
  const resolvedNavigation = navigation ?? site?.navigation.primary ?? [];
  const resolvedSocialLinks = socialLinks ?? (site ? socialLinksForProfile(site, socialProfile).map(item => ({ label:item.label, href:item.href, icon:item.icon, external:item.external })) : []);
  const resolvedAction = action ?? site?.navigation.action ?? undefined;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigationId = useId();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const closeOutside = (event: PointerEvent) => !headerRef.current?.contains(event.target as Node) && setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  useEffect(() => {
    if (appearance !== "glass") return;
    const update = () => setScrolled(window.scrollY > scrollThreshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [appearance, scrollThreshold]);

  const glassVisible = appearance === "glass" && (scrolled || open);
  const socialItems = <div className={styles.socialLinks} aria-label={socialLabel}>{resolvedSocialLinks.map((item) => <a key={`${item.label}-${item.href}`} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={item.label} title={item.label}>{item.icon ? <img src={item.icon} alt="" /> : <span>{item.label}</span>}</a>)}</div>;
  return <header ref={headerRef} className={`${styles.header} ${appearance === "glass" ? styles.glass : styles.solid} ${glassVisible ? styles.glassVisible : ""} ${fixed ? styles.fixed : ""}`}>
    <div style={maxWidth ? { "--responsive-header-max-width": maxWidth } as CSSProperties : undefined} className={`${styles.inner} ${styles[layout]} ${contentWidth === "full" ? styles.fullWidth : styles.portfolioWidth}`}>
      <a href={resolvedHomeHref} className={styles.logo} aria-label={resolvedLogoAlt}>{resolvedLogo ? <img src={resolvedLogo} alt="" /> : <span>{site?.identity.shortName || site?.identity.name || resolvedLogoAlt}</span>}</a>
      <nav className={styles.desktopNavigation} aria-label={navigationLabel}>{resolvedNavigation.map((item) => <a key={item.href} href={item.href} aria-current={activeHref === item.href ? "page" : undefined}>{item.label}</a>)}{resolvedAction && <a className={styles.action} href={resolvedAction.href} aria-current={activeHref === resolvedAction.href ? "page" : undefined}>{resolvedAction.label}</a>}</nav>
      <div className={styles.desktopSocials}>{socialItems}</div>
      <button type="button" className={styles.menuButton} aria-label={open ? `Close ${menuLabel.toLowerCase()}` : `Open ${menuLabel.toLowerCase()}`} aria-expanded={open} aria-controls={navigationId} onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <div id={navigationId} className={`${styles.mobilePanel} ${open ? styles.open : ""}`}><nav aria-label={navigationLabel}>{resolvedNavigation.map((item) => <a key={item.href} href={item.href} aria-current={activeHref === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}{resolvedAction && <a className={styles.action} href={resolvedAction.href} aria-current={activeHref === resolvedAction.href ? "page" : undefined} onClick={() => setOpen(false)}>{resolvedAction.label}</a>}</nav>{socialItems}</div>
  </header>;
}

