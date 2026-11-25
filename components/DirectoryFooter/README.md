# DirectoryFooter

## Version

- Current version: `1.2.0`
- Last updated: 13 November 2026 (`2026-11-13`)

### Recording this version

When copying this project into a website or app, record the project name, copied version, copy date, and any local changes in the consuming project's `REUSABLE-COMPONENTS.md`. This version is not tracked automatically because the project is copied rather than installed as a versioned package.

A compact, Apple-style directory footer extracted from the Froghat Creative website. It combines a small home trail with icon and site-name home links, configurable service columns, and a balanced bottom row with copyright, centred social icons, and right-aligned legal links.

## Installation

Copy `DirectoryFooter.tsx` and `DirectoryFooter.module.css` into a React project. It requires React 18 or newer and CSS Modules. In Next.js, replace plain anchors and images with project routing or image components when those optimisations are useful.

## Usage

```tsx
import DirectoryFooter from "./DirectoryFooter";

export function SiteFooter() {
  return <DirectoryFooter
    brandName="Example Studio"
    homeIcon="/brand/favicon.svg"
    columns={[
      { label: "Websites", href: "/websites", links: [{ label: "Basic websites", href: "/websites/basic" }] },
      { label: "Video", href: "/video", links: [{ label: "Promotional videos", href: "/video/promotional" }] },
      { label: "Photography", href: "/photography", links: [{ label: "Portraits", href: "/photography/portraits" }] },
      { label: "Games", href: "/games", links: [{ label: "Launch trailers", href: "/games/launch" }] },
    ]}
    socialLinks={[{ label: "Instagram", href: "https://www.instagram.com/example", icon: "/icons/instagram.svg", external: true }]}
    legalLinks={[{ label: "Privacy Policy", href: "/privacy" }]}
    creditLabel="Site design by Froghat Creative"
    creditHref="https://froghatcreative.com/"
  />;
}
```

## Configuration

- `brandName`: used in the home-link label and copyright line.
- `homeIcon`: small brand icon shown at the start of the trail.
- `homeHref`: home destination, defaulting to `/`.
- `columns`: directory category links and their child links. Four columns match the original layout, but other counts are supported.
- `socialLinks`: icon-only social or contact links. Icons are used as CSS masks so they inherit the footer colour.
- `legalLinks`: links aligned to the right of the bottom row.
- `year`: copyright year, defaulting to the current year.
- `directoryLabel`, `socialLabel`, `legalLabel`: accessible region labels.
- `socialProfile`: optional `personal` or `company` SiteFoundation profile override. Without it, the SiteFoundation default Quick Contact profile is used.
- `className`: optional class for project-level extension.
- `creditLabel`: linked design-credit text, defaulting to `Site design by Froghat Creative`.
- `creditHref`: design-credit destination, defaulting to `https://froghatcreative.com/`.

The copyright line links the website name to `homeHref` and displays the linked Froghat Creative design credit after it.

## Design tokens

Override these custom properties on the component or a parent:

- `--directory-footer-background`
- `--directory-footer-foreground`
- `--directory-footer-muted`
- `--directory-footer-border`
- `--directory-footer-width`, defaulting to `min(60vw, 1160px)`

Below `1100px`, the footer becomes fluid. Columns collapse from four to two and then one. The bottom row also stacks while preserving clear copyright, social, and legal regions.

## Accessibility

The icon home link and social links have accessible labels. Directory and legal groups use labelled navigation regions. External links use safe new-tab attributes. Hover motion is disabled when reduced motion is requested.

## Credits and references

This component was implemented locally using React, TypeScript, CSS Modules, and standard browser APIs. The directory structure and restrained visual rhythm were meaningfully referenced from the [Apple Store Australia footer](https://www.apple.com/au/store). No Apple source code or assets are bundled, and Apple was used only as a visual layout reference.

## Changelog

### 1.2.0 (2026-11-13)

- Filtered SiteFoundation social defaults to the configured personal or company profile.
- Added a per-footer `socialProfile` override.

### 1.1.0 (2026-11-06)

- Added automatic SiteFoundation identity, footer groups, social, legal, credit, and semantic style defaults.
- Kept explicit props as per-instance overrides.

### 1.0.0 (2026-11-05)

- Established the current project as the initial semantic-versioned baseline.

