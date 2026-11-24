export type SiteLink = { label: string; href: string; external?: boolean };
export type ContactProfileId = "company" | "personal";
export type SocialPlatform = "email" | "website" | "instagram" | "linkedin" | "youtube" | "soundcloud" | "tiktok" | "bluesky" | "spotify" | "facebook" | "github" | "discord" | "other";
export type SocialLink = SiteLink & {
  platform: SocialPlatform;
  icon?: string;
  displayValue?: string;
  copyValue?: string;
  profiles?: ContactProfileId[];
};
export type NavigationGroup = SiteLink & { links: SiteLink[] };

export type QuickContactIdentity = {
  enabled: boolean;
  name: string;
  secondaryName: string;
  role: string;
  description: string;
  logo: string;
};

export type QuickContactSettings = {
  defaultProfile: ContactProfileId;
  shareUrl: string;
  cardBackground: string;
  appIconScale: number;
  location: { enabled: boolean; label: string; directionsUrl: string };
  profiles: Record<ContactProfileId, QuickContactIdentity>;
};

export type SitePalette = {
  background: string;
  surface: string;
  text: string;
  muted: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
};

export type SiteSettings = {
  identity: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    homeHref: string;
    logo: string;
    logoDark: string;
    favicon: string;
  };
  navigation: { primary: SiteLink[]; action: SiteLink | null };
  contact: { heading: string; description: string; email: string; phone: string; address: string };
  social: SocialLink[];
  quickContact: QuickContactSettings;
  style: {
    mode: "light" | "dark" | "system";
    light: SitePalette;
    dark: SitePalette;
    headingFont: string;
    bodyFont: string;
    baseFontSize: string;
    typeScale: number;
    contentWidth: string;
    spacing: "compact" | "comfortable" | "spacious";
    radius: string;
    shadow: "none" | "subtle" | "strong";
    focusRing: string;
    motion: "reduced" | "standard" | "expressive";
  };
  seo: { titleTemplate: string; defaultTitle: string; description: string; shareImage: string; siteUrl: string };
  footer: { groups: NavigationGroup[]; legalLinks: SiteLink[]; copyright: string; creditLabel: string; creditHref: string };
  advanced: { locale: string; analyticsId: string; customHead: string };
};

