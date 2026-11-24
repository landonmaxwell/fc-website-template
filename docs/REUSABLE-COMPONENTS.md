# Reusable component library

The source component library was reviewed on 24 November 2026. This public template is self-contained and does not rely on a local filesystem path.

## Installed versions

| Project | Copied version | Copied date | Local changes |
| --- | --- | --- | --- |
| SiteFoundation | `1.2.0` | `2026-11-24` | Maps the starter's `data/site.ts` content into global settings and provides the theme variables used by the existing layout. Header and footer read shared settings directly. |

It is current and contains 24 documented component groups. Each group includes independent styles and implementation notes; most include a minimal example. The most useful additions for extending this starter are:

- `ResponsiveHeader`
- `SiteFoundation`
- `BackgroundVideo`
- `SelectedWorkPanel`
- `ScrollingMarquee`
- `Contact`
- `Gallery`
- `ProjectCaseStudy`
- `ExternalLinkCards`
- `VideoEmbed`
- `SearchFilters`
- `Themes`
- `SortableList`
- `DialogNotifications`
- `BackToTop`

The starter contains lighter integrated versions of the essential patterns. Copy a full shared component only when the new website needs its more advanced behaviour. This avoids making every small website carry features it does not use.
