# Editorial Gallery

## Version

- Current version: `1.0.0`
- Last updated: 5 November 2026 (`2026-11-05`)

### Recording this version

When copying this project into a website or app, record the project name, copied version, copy date, and any local changes in the consuming project's `REUSABLE-COMPONENTS.md`. This version is not tracked automatically because the project is copied rather than installed as a versioned package.

Responsive image gallery with natural image ratios, no image upscaling, subtle hover zoom, keyboard-accessible buttons, and a full-size lightbox.

## Install

1. Copy `EditorialGallery.tsx` and `EditorialGallery.module.css` into your project.
2. Import the component and pass images with `src`, `alt`, `width`, and `height`.
3. Use `dynamic` for varied editorial rows, `three-column` for a strict 3-column layout, or `three-plus-one` for three images followed by one featured image.

```tsx
import EditorialGallery from "./Gallery/EditorialGallery";

<EditorialGallery
  layout="dynamic"
  images={[
    { src: "/images/one.jpg", alt: "Describe the image", width: 1800, height: 1200 },
  ]}
/>
```

The dynamic rhythm is deterministic, so it will not change during hydration or jump between refreshes. Curate the image order so the first image, and later single-image rows, are your strongest frames.

## Changelog

### 1.0.0 (2026-11-05)

- Established the current project as the initial semantic-versioned baseline.

