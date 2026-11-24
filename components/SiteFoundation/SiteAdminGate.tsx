"use client";

import type { ReactNode } from "react";

export type SiteAdminMode = "disabled" | "local" | "tina" | "supabase" | "custom";

export type SiteAdminAccess = {
  mode: SiteAdminMode;
  isDevelopment?: boolean;
  authorized?: boolean;
};

export function canRenderSiteAdmin(access: SiteAdminAccess): boolean {
  if (access.mode === "disabled") return false;
  if (access.mode === "local") return access.isDevelopment === true;
  return access.authorized === true;
}

export function SiteAdminGate({
  access,
  children,
  fallback = null,
}: {
  access: SiteAdminAccess;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  return canRenderSiteAdmin(access) ? children : fallback;
}

