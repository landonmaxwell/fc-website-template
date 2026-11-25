# Back to top

## Version

- Current version: `1.1.0`
- Last updated: 6 November 2026 (`2026-11-06`)

### Recording this version

When copying this project into a website or app, record the project name, copied version, copy date, and any local changes in the consuming project's `REUSABLE-COMPONENTS.md`. This version is not tracked automatically because the project is copied rather than installed as a versioned package.

A subtle bottom-centre React/TypeScript tab that appears after a configurable scroll threshold and returns the page to the top. Its icon gently indicates upward motion on hover.

## Installation and usage

Copy this folder into a React project. It requires React and CSS Modules.

```tsx
<BackToTop preset="tab" threshold={500} icon={<ArrowUp aria-hidden />} />
```

See `Example.tsx` for a dependency-free example. Add the component to a shared layout when it should cover a whole site section.

## Configuration

Choose `preset="tab"` for the subtle bottom-centre Augury-style tab or `preset="floating"` for a conventional bottom-corner circle. The default remains `tab` for backward compatibility. Configure `threshold`, accessible `label`, `icon`, `className`, or the CSS variables for width, height, bottom offset, colours, opacity, radius and focus colour.

## Responsive behavior and accessibility

The fixed control remains reachable on narrow screens, uses a native button, provides an accessible label and has a visible keyboard focus state. It is removed from pointer interaction while hidden.

## Reduced motion

Smooth scrolling, transitions and the hover arrow animation are disabled automatically when the visitor requests reduced motion.

## Limitations

The component observes document scrolling. Applications with an independently scrolling container should adapt the scroll target and listener.

## Changelog

### 1.1.0 (2026-11-06)

- Added documented `tab` and `floating` presets without breaking the existing default.

### 1.0.0 (2026-11-05)

- Established the current project as the initial semantic-versioned baseline.

