# Installed reusable components

Last reviewed: 25 November 2026. Template version: 1.1.0.

This template contains copied source, not automatically updated packages. Read the source library changelog and preserve the adaptations below when upgrading.

| Component | Installed version | Copy/review date | Integration and local changes |
| --- | --- | --- | --- |
| ResponsiveHeader | 1.2.0 | 2026-11-25 | Glass portfolio layout, router active path, 60vw desktop width; mobile max-width reset. Shared SiteFoundation defaults. |
| DirectoryFooter | 1.2.0 | 2026-11-25 | Shared defaults; Explore links and Froghat Creative credit configured in site settings. |
| BackToTop | 1.1.0 | 2026-11-25 | Shared tab preset, exported through the existing wrapper. |
| Gallery | 1.0.0 | 2026-11-25 | Shared dynamic editorial layout, exported through the existing wrapper. |
| SearchFilters | 1.0.0 | 2026-11-25 | Project title, summary, services and category search; multiple categories; template result grid. |
| SelectedWorkPanel | 1.0.0 | 2026-11-25 | Project slugs supply stable IDs; existing ProjectCard rendering retained. |
| ProjectCaseStudy | 1.0.0 | 2026-11-25 | Existing metadata and structured data retained; project fields mapped into shared layout; desktop width constrained to 60vw. |
| SiteFoundation | 1.2.0 | 2026-11-25 | Source reconciled: meaningful differences are legacy CSS variable aliases and typed JSON editor callback. Data mapping lives in data/site-foundation.ts. Other differences are trailing blank lines. |

## Template-specific patterns

ProjectCard, hero, text-only partner marquee, contact email call-to-action and SEO helpers remain template-specific. They are not installed versions of similarly named shared components. The shared ScrollingMarquee expects logo images, whereas this template supplies text partner names.

## Updating

1. Compare every installed version above with its source README.
2. Read newer changelog entries and compare source content, even when version numbers match.
3. Merge source changes while retaining recorded adaptations.
4. Run npm run check and npm run build, and review desktop/mobile interactions.
5. Update this table, the template version and README changelog, then publish.

No local source-library path or private project content is required by this public template.
