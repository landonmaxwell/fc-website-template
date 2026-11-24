export const siteConfig = {
  identity: {
    name: "Studio Name",
    shortName: "SN",
    title: "A clear statement about what you do",
    description: "A short description for search results and social sharing.",
    siteUrl: "https://example.com",
    locale: "en_AU",
    language: "en-AU",
    location: "City, Country",
  },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    eyebrow: "Independent studio",
    heading: "Useful ideas, made beautifully.",
    body: "Use this space to explain the value you offer in one or two direct sentences.",
    primaryAction: { label: "View selected work", href: "/work" },
    secondaryAction: { label: "Start a conversation", href: "/#contact" },
    image: "",
    video: "",
  },
  about: {
    heading: "A flexible introduction for a person, studio or business.",
    body: "Replace this with a concise explanation of your experience, approach and the kinds of people you help. The strongest version sounds human, specific and confident.",
  },
  services: [
    { title: "Strategy", description: "Research, planning and a clear path from idea to outcome." },
    { title: "Creative", description: "Concepts, design and content shaped for the right audience." },
    { title: "Production", description: "Practical delivery from first draft through to finished work." },
  ],
  testimonials: {
    enabled: true,
    items: [
      { quote: "A short, specific testimonial can live here when one is available.", name: "Client name", role: "Role, Company" },
    ],
  },
  partners: ["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five"],
  contact: {
    heading: "Have something in mind?",
    body: "Tell us a little about the project, problem or possibility.",
    email: "hello@example.com",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
  seo: {
    homeTitle: "Studio Name | Clear description of the work",
    workTitle: "Selected Work | Studio Name",
    workDescription: "Explore selected projects and case studies from Studio Name.",
    globalSocialImage: "/images/social/global.jpg",
    workSocialImage: "/images/social/work.jpg",
    googleSiteVerification: "",
    ownerType: "Organization" as "Person" | "Organization",
  },
  theme: {
    background: "#0b0b0d",
    foreground: "#f6f0e6",
    muted: "#aba4b2",
    accent: "#8b5cf6",
    surface: "#151319",
  },
} as const;

export type SiteConfig = typeof siteConfig;
