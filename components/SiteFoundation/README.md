# SiteFoundation

## Version

- Current version: `1.2.0`
- Last updated: 13 November 2026 (`2026-11-13`)

### Recording this version

Record `SiteFoundation`, its copied version, copy date, and local changes in the consuming project's `REUSABLE-COMPONENTS.md`.

SiteFoundation is the shared source for site identity, brand assets, navigation, contact details, social accounts, company and personal Quick Contact profiles, visual style, SEO, footer/legal content, and advanced settings. Components can read these defaults while explicit component props remain available for one-off overrides.

## Social and Quick Contact data

`social` is the canonical list of email, website and social destinations shared by compatible components. Each entry can declare `profiles: ["company"]`, `profiles: ["personal"]`, both values, or omit the field to make it available everywhere. `quickContact.profiles` stores the separate company and personal names, roles, descriptions and logos. `quickContact.defaultProfile` controls which card appears first.

QuickContactCard reads these sections directly and displays the first five matching social entries for the active profile. Other components can continue to read the complete `social` list. Existing social entries without a `profiles` field remain compatible.

## Recommended rollout

1. Start with `defaultSiteSettings` in a local TypeScript file for a static site.
2. Wrap the site in `SiteSettingsProvider`.
3. Choose an admin access mode. The default is disabled, and `local` is recommended for a small static site.
4. Add a private route containing `SiteSettingsPage` only if editors need a form.
5. Use `createTinaSettingsAdapter` or `createSupabaseSettingsAdapter` only when the site needs persisted online editing.
6. Record the installed version in `REUSABLE-COMPONENTS.md` and compare changelogs before upgrading.

## Static use

```tsx
import { SiteSettingsProvider, defaultSiteSettings } from "./SiteFoundation";

const settings = { ...defaultSiteSettings, identity: { ...defaultSiteSettings.identity, name: "Example Studio" } };
export default function App({ children }) { return <SiteSettingsProvider settings={settings}>{children}</SiteSettingsProvider>; }
```

Static settings are the preferred default. They have no service, account, database, or runtime dependency.

For a static deployment, keep the editor local and exclude the admin route from production. The static adapter stores changes only for the current running application. Copy or export approved settings into the project's settings file, then rebuild the site.

## Admin access modes

SiteFoundation supports these explicit access modes:

- `disabled`: the settings page is not rendered. This is the production-safe fallback.
- `local`: the settings page renders only when `isDevelopment` is explicitly true.
- `tina`: TinaCMS authenticates the owner and supplies the settings storage.
- `supabase`: Supabase Auth and Row Level Security authenticate and authorise owners.
- `custom`: the consuming project supplies another server-verified login and storage implementation.

```tsx
<SiteSettingsPage
  adapter={adapter}
  access={{ mode: "local", isDevelopment: process.env.NODE_ENV === "development" }}
/>
```

For `tina`, `supabase`, and `custom`, calculate `authorized` on the server and pass the result:

```tsx
<SiteSettingsPage adapter={adapter} access={{ mode: "tina", authorized: userCanEdit }} />
```

`SiteAdminGate` is a rendering safeguard, not an authentication system. The server, CMS, or database must independently protect every read or write operation. Never place a username, password, password hash, service key, or privileged token in SiteFoundation settings or browser JavaScript.

## TinaCMS

Use one global Tina document whose fields follow `SiteSettings`. Pass Tina's query and mutation functions into `createTinaSettingsAdapter`. This keeps Tina-specific code at the project boundary and prevents SiteFoundation from requiring Tina packages. Tina's visual editing can then host `SiteSettingsForm`, or you can use Tina's generated form for the same document.

`tina-global.example.ts` is a small starting collection. Extend only the sections the site owner should edit, and confirm its options against the TinaCMS version installed in the consuming project.

## Supabase

Run `supabase-site-settings.sql`, add policies that match the project's actual authentication roles, then pass the project's existing Supabase client to `createSupabaseSettingsAdapter`. No permissive write policy is included. Public sites can load settings on the server, or use an explicit public-read policy if the project accepts that exposure.

## Style tab

The stripped-back Style tab keeps the Tina design concepts that have broad value across these sites:

- light, dark, or device colour mode
- semantic background, surface, text, muted, primary, secondary, accent, and border colours
- heading and body font stacks, base size, and type scale
- the default 60% desktop content width
- spacing density, corner radius, shadow strength, focus-ring colour, and motion level

It intentionally leaves out per-element overrides, arbitrary layout builders, and large preset systems. Those make global consistency harder and belong in project-specific components when genuinely needed.

## Security and maintenance

Keep the settings page private when it can save data. Validate settings again on the server, protect CMS or database credentials, and never render `advanced.customHead` without sanitising or tightly controlling the editor role.

A custom username and password is acceptable for a small site only when the comparison and session creation happen on the server. Store credentials in server-only environment variables, use a secure HTTP-only session cookie, rate-limit failed attempts, provide logout and expiry, and protect the settings API as well as `/admin`.

## Changelog

### 1.2.0 (2026-11-13)

- Added separate company and personal Quick Contact identity records with independent descriptions and logos.
- Added a configurable default Quick Contact profile, card/app background, install-icon scale, location and share URL.
- Extended social entries with supported platform names, display/copy values and optional company/personal profile assignment.
- Added a Quick Contact editor tab and complete static settings example.

### 1.1.0 (2026-11-11)

- Added disabled, local, TinaCMS, Supabase, and custom admin access modes.
- Made the settings page disabled unless an explicit access decision allows it.
- Added a local-only example and clarified that the UI gate does not replace server authentication.

### 1.0.0 (2026-11-06)

- Added the shared settings schema, semantic design tokens, provider, editor tabs, and static adapter.
- Added provider-neutral TinaCMS and Supabase adapters.
- Added secure-by-default Supabase table setup and the staged adoption guide.

