import { defaultSiteSettings, type SiteSettings } from "./index";

export const siteSettings: SiteSettings = {
  ...defaultSiteSettings,
  identity: { ...defaultSiteSettings.identity, name: "Example Studio", shortName: "Example", homeHref: "/" },
  navigation: { primary: [{ label: "Work", href: "/work" }, { label: "About", href: "/about" }], action: { label: "Contact", href: "/contact" } },
  contact: { ...defaultSiteSettings.contact, email: "hello@example.com" },
  social: [
    { label: "Email", platform: "email", href: "mailto:hello@example.com", displayValue: "hello@example.com", profiles: ["company", "personal"] },
    { label: "Instagram", platform: "instagram", href: "https://instagram.com/example", displayValue: "@example", icon: "/icons/instagram.svg", profiles: ["company"] },
    { label: "LinkedIn", platform: "linkedin", href: "https://linkedin.com/in/example", displayValue: "Example Person", icon: "/icons/linkedin.svg", profiles: ["personal"] },
    { label: "Website", platform: "website", href: "https://example.com", displayValue: "example.com", profiles: ["company", "personal"] },
  ],
  quickContact: {
    ...defaultSiteSettings.quickContact,
    defaultProfile: "personal",
    cardBackground: "#142417",
    profiles: {
      company: { enabled: true, name: "Example Studio", secondaryName: "", role: "Creative studio", description: "Company description.", logo: "/brand/company-logo.svg" },
      personal: { enabled: true, name: "Example Person", secondaryName: "Example Studio", role: "Creative director", description: "Personal description.", logo: "/brand/personal-logo.svg" },
    },
  },
};

