# ResponsiveHeader

## Version

- Current version: `1.2.0`
- Last updated: 13 November 2026 (`2026-11-13`)

### Recording this version

When copying this project into a website or app, record the project name, copied version, copy date, and any local changes in the consuming project's `REUSABLE-COMPONENTS.md`. This version is not tracked automatically because the project is copied rather than installed as a versioned package.

Portable React/TypeScript site header based on the Landon Maxwell portfolio header. It includes portfolio-width, inline and centered desktop layouts, optional social links, an accessible mobile menu, and glass-on-scroll behaviour.

## Installation

Copy `ResponsiveHeader.tsx` and `ResponsiveHeader.module.css` into a React project. It requires React 18 or newer and CSS Modules. In Next.js, replace plain anchors with your routing component if client-side routing is required.

## Usage

```tsx
import ResponsiveHeader from "./ResponsiveHeader";

export function SiteHeader() {
  return <ResponsiveHeader
    logo="/images/logo.svg"
    logoAlt="Example home"
    layout="portfolio"
    contentWidth="portfolio"
    appearance="glass"
    activeHref="/about"
    navigation={[
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ]}
    socialLinks={[
      { label: "Instagram", href: "https://www.instagram.com/example", icon: "/icons/instagram.svg", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/example", icon: "/icons/linkedin.svg", external: true },
      { label: "Email", href: "mailto:hello@example.com", icon: "/icons/mail.svg" },
    ]}
  />;
}
```

## Configuration

- `logo`, `logoAlt`: logo asset and accessible alternative text.
- `homeHref`: logo destination; defaults to `/`.
- `navigation`: ordered navigation links.
- `socialLinks`: optional social or contact links. Each accepts `label`, `href`, optional image `icon`, and optional `external`.
- Desktop and mobile text links use the same smooth 1.05 hover/focus zoom as the logo, while social icons retain their slightly stronger icon-scale treatment.
- `action`: optional call-to-action link.
- `layout`: `portfolio` places the logo left, navigation centrally and social links right; `inline` uses a standard flexible row; `centered` stacks the logo and navigation.
- `contentWidth`: `portfolio` constrains the inner header to the portfolio width; `full` allows it to span the viewport.
- `maxWidth`: optional CSS length such as `60vw` or `72rem` for a project-specific desktop constraint.
- `menuLabel`, `navigationLabel`: accessible labels.
- `activeHref`: adds `aria-current="page"` to the matching link.
- `socialLabel`: accessible label for the social links section.
- `socialProfile`: optional `personal` or `company` SiteFoundation profile override. Without it, the SiteFoundation default Quick Contact profile is used.
- `appearance`: `solid` retains the opaque header; `glass` starts transparent and reveals a translucent blurred panel after scrolling or while the mobile menu is open.
- `fixed`: fixes the header to the top of the viewport. It defaults to `true` for the glass appearance and `false` for the solid appearance.
- `scrollThreshold`: number of vertical pixels before the glass panel appears; defaults to `20`.

Customize colors, spacing, blur, the `760px` breakpoint, and the CSS variables `--responsive-header-centered-logo-height`, `--responsive-header-mobile-logo-height`, and `--responsive-header-menu-radius` in the CSS module.

## Accessibility and behavior

The menu button exposes expanded state and its controlled navigation ID. The menu closes after link selection, outside pointer interaction, or Escape. Links remain keyboard accessible and the active page is announced. In glass mode the header becomes visible whenever the mobile menu is open, even at the top of the page. Transitions are disabled when reduced motion is requested.

## Responsive behavior

Desktop navigation follows the selected layout. On screens up to `760px`, navigation and social links move into a blurred dropdown while the logo remains centred and the menu button stays on the right.

## Limitations

The component does not trap focus because the mobile navigation is a disclosure, not a modal. It does not manage routing or automatically infer the current URL. Supply `activeHref` from your router when required.

## Changelog

### 1.2.0 (2026-11-13)

- Filtered SiteFoundation social defaults to the configured personal or company profile.
- Added a per-header `socialProfile` override.

### 1.1.0 (2026-11-06)

- Added automatic SiteFoundation identity, navigation, action, and social defaults.
- Kept explicit props as per-instance overrides.

### 1.0.0 (2026-11-05)

- Established the current project as the initial semantic-versioned baseline.

