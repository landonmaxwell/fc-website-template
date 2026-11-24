import { defaultSiteSettings, mergeSiteSettings, type SocialPlatform } from "@/components/SiteFoundation";
import { siteConfig } from "@/data/site";

function platformForLabel(label: string): SocialPlatform {
  const platform = label.trim().toLowerCase();
  if (["email", "website", "instagram", "linkedin", "youtube", "soundcloud", "tiktok", "bluesky", "spotify", "facebook", "github", "discord"].includes(platform)) {
    return platform as SocialPlatform;
  }
  return "other";
}

export const siteFoundationSettings = mergeSiteSettings({
  identity: {
    ...defaultSiteSettings.identity,
    name: siteConfig.identity.name,
    shortName: siteConfig.identity.shortName,
    tagline: siteConfig.identity.title,
    description: siteConfig.identity.description,
  },
  navigation: {
    primary: siteConfig.navigation.map((item) => ({ ...item })),
    action: null,
  },
  contact: {
    ...defaultSiteSettings.contact,
    heading: siteConfig.contact.heading,
    description: siteConfig.contact.body,
    email: siteConfig.contact.email,
    address: siteConfig.identity.location,
  },
  social: siteConfig.social.map((item) => ({
    ...item,
    platform: platformForLabel(item.label),
    external: true,
  })),
  style: {
    ...defaultSiteSettings.style,
    mode: "dark",
    headingFont: "var(--font-sans), Arial, sans-serif",
    bodyFont: "var(--font-sans), Arial, sans-serif",
    contentWidth: "60vw",
    dark: {
      background: siteConfig.theme.background,
      surface: siteConfig.theme.surface,
      text: siteConfig.theme.foreground,
      muted: siteConfig.theme.muted,
      primary: siteConfig.theme.accent,
      secondary: siteConfig.theme.accent,
      accent: siteConfig.theme.accent,
      border: "color-mix(in srgb, var(--site-text) 15%, transparent)",
    },
  },
  seo: {
    ...defaultSiteSettings.seo,
    titleTemplate: `%s | ${siteConfig.identity.name}`,
    defaultTitle: siteConfig.seo.homeTitle,
    description: siteConfig.identity.description,
    shareImage: siteConfig.seo.globalSocialImage,
    siteUrl: siteConfig.identity.siteUrl,
  },
  footer: {
    ...defaultSiteSettings.footer,
    legalLinks: [{ label: "Privacy", href: "/privacy" }],
  },
  advanced: {
    ...defaultSiteSettings.advanced,
    locale: siteConfig.identity.language,
  },
});
