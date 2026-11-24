# SiteFoundation compatibility

## Connected components

- `ResponsiveHeader`: identity, home path, primary navigation, action, and social links.
- `DirectoryFooter`: identity, brand asset, footer groups, social links, legal links, and credits.
- `Contact`: contact copy, email, social links, and primary button colour.
- `QuickContactCard`: company and personal identities, default profile, profile descriptions, profile-aware social/contact links, location, card background and installable icon scale.
- `Themes`: light and dark palettes when custom theme records are not supplied.

Explicit component props always take priority over SiteFoundation values.

## Automatic styling

Components inside `SiteSettingsProvider` inherit the body font, heading font, text colour, link colour, focus ring, colour scheme, and reduced-motion behaviour unless their own styles deliberately override them. The provider also supplies the older `--theme-*` variable names for components already using the Themes project.

## Intentional exceptions

Full applications such as CreativityCards, ReferenceLibrary, TodoWorkspace, and WebTools keep their own application-level settings and data stores. They can be wrapped in SiteFoundation for shared site chrome, but their internal themes should only be migrated after a project-specific visual review.

Highly art-directed components may keep local colours or layout variables. Prefer mapping those variables to SiteFoundation semantic tokens when the local identity is not essential.

## Admin access

The settings editor defaults to disabled. Static projects should use local mode and omit the admin route from production. TinaCMS, Supabase, and custom modes require a server-verified `authorized` decision, plus independent protection on every settings storage endpoint.

