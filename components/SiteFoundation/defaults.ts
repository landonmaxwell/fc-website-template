import type { ContactProfileId, SiteSettings } from "./types";

export const defaultSiteSettings: SiteSettings = {
  identity: { name: "Your site", shortName: "Site", tagline: "", description: "", homeHref: "/", logo: "", logoDark: "", favicon: "" },
  navigation: { primary: [], action: null },
  contact: { heading: "Get in touch", description: "", email: "", phone: "", address: "" },
  social: [],
  quickContact: {
    defaultProfile: "personal",
    shareUrl: "/quick-contact",
    cardBackground: "#111210",
    appIconScale: 0.625,
    location: { enabled: false, label: "", directionsUrl: "" },
    profiles: {
      company: { enabled: true, name: "Your company", secondaryName: "", role: "", description: "", logo: "" },
      personal: { enabled: true, name: "Your name", secondaryName: "Your company", role: "", description: "", logo: "" },
    },
  },
  style: {
    mode: "system",
    light: { background: "#ffffff", surface: "#f6f6f4", text: "#171717", muted: "#666666", primary: "#5b45ff", secondary: "#167d70", accent: "#e15b9a", border: "#deded9" },
    dark: { background: "#111210", surface: "#1c1d1a", text: "#f5f5f1", muted: "#aaa9a2", primary: "#a89cff", secondary: "#63cdbd", accent: "#ff8fc4", border: "#383934" },
    headingFont: "system-ui, sans-serif",
    bodyFont: "system-ui, sans-serif",
    baseFontSize: "16px",
    typeScale: 1.2,
    contentWidth: "60vw",
    spacing: "comfortable",
    radius: "12px",
    shadow: "subtle",
    focusRing: "#5b45ff",
    motion: "standard",
  },
  seo: { titleTemplate: "%s | Your site", defaultTitle: "Your site", description: "", shareImage: "", siteUrl: "" },
  footer: { groups: [], legalLinks: [], copyright: "", creditLabel: "", creditHref: "" },
  advanced: { locale: "en-AU", analyticsId: "", customHead: "" },
};

export function mergeSiteSettings(value?: Partial<SiteSettings>): SiteSettings {
  if (!value) return structuredClone(defaultSiteSettings);
  return {
    ...defaultSiteSettings,
    ...value,
    identity: { ...defaultSiteSettings.identity, ...value.identity },
    navigation: { ...defaultSiteSettings.navigation, ...value.navigation },
    contact: { ...defaultSiteSettings.contact, ...value.contact },
    quickContact: {
      ...defaultSiteSettings.quickContact,
      ...value.quickContact,
      location: { ...defaultSiteSettings.quickContact.location, ...value.quickContact?.location },
      profiles: {
        company: { ...defaultSiteSettings.quickContact.profiles.company, ...value.quickContact?.profiles?.company },
        personal: { ...defaultSiteSettings.quickContact.profiles.personal, ...value.quickContact?.profiles?.personal },
      },
    },
    style: {
      ...defaultSiteSettings.style,
      ...value.style,
      light: { ...defaultSiteSettings.style.light, ...value.style?.light },
      dark: { ...defaultSiteSettings.style.dark, ...value.style?.dark },
    },
    seo: { ...defaultSiteSettings.seo, ...value.seo },
    footer: { ...defaultSiteSettings.footer, ...value.footer },
    advanced: { ...defaultSiteSettings.advanced, ...value.advanced },
  };
}

export function socialLinksForProfile(settings: Pick<SiteSettings, "social" | "quickContact">, profile: ContactProfileId = settings.quickContact.defaultProfile) {
  return settings.social.filter((link) => !link.profiles?.length || link.profiles.includes(profile));
}

