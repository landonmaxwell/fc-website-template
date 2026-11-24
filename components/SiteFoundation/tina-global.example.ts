// Add this collection object to the `schema.collections` array in tina/config.ts,
// then expand its fields to match the SiteSettings sections your project exposes.
// Check the installed TinaCMS version before copying schema options because Tina's
// generated configuration types are the authority for that project.
export const siteSettingsCollection = {
  name: "siteSettings",
  label: "Site settings",
  path: "content/settings",
  format: "json",
  ui: { global: true },
  match: { include: "site" },
  fields: [
    { type: "object", name: "identity", label: "Site", fields: [
      { type: "string", name: "name", label: "Site name", required: true },
      { type: "string", name: "tagline", label: "Tagline" },
      { type: "image", name: "logo", label: "Logo" },
    ] },
    { type: "object", name: "contact", label: "Contact", fields: [
      { type: "string", name: "heading", label: "Heading" },
      { type: "string", name: "email", label: "Email" },
      { type: "string", name: "phone", label: "Phone" },
    ] },
  ],
};

