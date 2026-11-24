# Froghat Creative Website Template

A lightweight Next.js starter for quickly making a portfolio, studio or small-business website. It distils reusable patterns developed across production portfolio and creative-business websites without copying private applications or project content.

Created by [Landon Maxwell](https://github.com/landonmaxwell) and [Froghat Creative](https://froghatcreative.com/). The `fc` in the repository name stands for Froghat Creative.

## Included

- Responsive homepage with hero, selected work, partner marquee, about, services, optional testimonials and contact
- Filterable `/work` index
- Reusable project case-study pages at `/work/[slug]`
- Optional responsive image gallery and lightbox
- Mobile navigation and back-to-top control
- Central site identity, navigation, section content, contact details and colour tokens
- SiteFoundation 1.2.0 for global identity, navigation, contact, social, style, SEO and footer settings
- Metadata, social-sharing metadata, robots and sitemap foundations
- Canonical URLs and structured data for the site, owner, work index and project pages
- Responsive layouts, keyboard support and reduced-motion fallbacks
- Privacy-page starting point

## Deliberately not included

- Todo, PC Build, Cards, Augury or other private applications
- Supabase, TinaCMS, databases or authentication
- A contact-form provider, analytics or cookie tracking
- Personal portfolio media, client names or credentials

These can be added only when a new site actually needs them.

## Start here

1. Duplicate this whole folder and give the copy the new project name.
2. Open `data/site.ts` and replace the identity, navigation, homepage copy, services, contact details, social links and theme colours. `data/site-foundation.ts` maps those values into SiteFoundation.
3. Open `data/projects.ts` and replace the example projects.
4. Put optimised images in `public/images/`. Reference them with paths such as `/images/project-name/cover.webp`.
5. Add image dimensions to gallery records so the dynamic gallery preserves their original proportions.
6. Replace the privacy text with wording appropriate to the real website and services it uses.
7. Run `npm install`, then `npm run dev`.
8. Run `npm run check` and `npm run build` before deploying.
9. Complete [the SEO and launch checklist](docs/SEO-AND-LAUNCH.md) with the real domain, social images, Search Console verification and any verified video data.

## Common variations

### Portfolio

Keep Selected Work and case studies. Replace services with disciplines or capabilities. The `featured` property creates the larger homepage project positions.

### Business

Use projects as case studies, services as the main offering, partners as clients or accreditations, and add real testimonials. Change the hero action to a booking or enquiry link.

### Simple brochure site

Remove the selected-work section and `/work` routes if they are not needed. Keep the header, hero, about, services and contact sections.

## Adding media

- Never enlarge an image beyond its natural dimensions.
- Prefer WebP or AVIF for photographs and SVG for genuine vector logos.
- Keep a poster image behind background video so the page never opens on a blank frame.
- Write descriptive alternative text for meaningful images; decorative images should use an empty `alt` value.

## Contact forms

The starter uses a direct email link so it works without credentials. For a real form, add a server-side provider such as Resend and include spam protection. Never expose a private API key in browser code.

## Reusable component source

This repository includes SiteFoundation and lightweight integrated versions of the essential website patterns. A broader private development library may contain more advanced variants, but the public template has no dependency on a local component-library path. Copy or install additional components only when a new site needs them.

## Project structure

```text
app/                 Pages, metadata and global styles
components/          Reusable presentation and interaction
data/site.ts         Site identity and homepage content
data/projects.ts     Work and case-study content
public/              Images, logos, video and icons
```

## Pre-launch checklist

- Replace every example name, email, link and project
- Set the final domain in `data/site.ts`
- Add a real favicon and social preview image
- Create 1200 × 630 global, Work and project social images without upscaling source artwork
- Replace every SEO placeholder in `data/site.ts` and `data/projects.ts`
- Verify canonical URLs, structured data, `robots.txt` and `sitemap.xml`
- Add a Google Search Console Domain property, verify its DNS TXT record and submit the sitemap
- Check mobile navigation, keyboard navigation and reduced motion
- Test every external link and email address
- Verify images are not cropped or enlarged unintentionally
- Add analytics only with the owner’s consent and a suitable privacy notice
- Run the health checks and production build

The detailed project-specific setup steps and a reusable launch prompt are in [`docs/SEO-AND-LAUNCH.md`](docs/SEO-AND-LAUNCH.md).

## Credits

Created and maintained by [Landon Maxwell](https://github.com/landonmaxwell) and [Froghat Creative](https://froghatcreative.com/).
