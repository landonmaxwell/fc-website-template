# SEO, social sharing and launch setup

The code foundation is already included: canonical URLs, Open Graph and X metadata, JSON-LD structured data, `robots.txt` and `sitemap.xml`. The steps below require real project information and must be completed for every new website.

## Before the first public deployment

1. Update `data/site.ts`:
   - final public domain, including the preferred `www` or non-`www` host
   - site name, description, location and social profiles
   - search-focused homepage and Work titles and descriptions
   - whether the owner is a `Person` or `Organization`
2. Update each record in `data/projects.ts`:
   - concise `metadataTitle` and `metadataDescription`
   - a `socialImage` path
   - accurate services, category, year and project copy
   - optional verified video details when the page embeds a primary video
3. Create these social images at exactly `1200 × 630`:
   - `public/images/social/global.jpg`
   - `public/images/social/work.jpg`
   - one project-specific image per public project
4. Never enlarge source artwork beyond 100%. Crop a sufficiently large image, or centre a smaller image on an intentional background.
5. Confirm every public page has one canonical URL using the final production domain.
6. Keep private, password-protected and unfinished pages out of the sitemap and add `noindex, nofollow` metadata to them.

## Video structured data

Only add `video` to a project when the video is actually embedded and watchable on that page. Verify the details from the published video rather than estimating them.

```ts
video: {
  platform: "youtube",
  id: "VIDEO_ID",
  uploadDate: "2026-01-15T09:30:00+11:00",
  duration: "PT2M14S",
}
```

`uploadDate` uses ISO 8601. `duration` also uses ISO 8601: for example, 2 minutes and 14 seconds is `PT2M14S`.

## Google Search Console

1. In Search Console, select **Add property**.
2. Choose **Domain** and enter the bare domain, such as `example.com` without `https://` or `www`.
3. Copy the supplied `google-site-verification=...` TXT record into the domain provider’s DNS settings.
4. After verification, add the verification token to `siteConfig.seo.googleSiteVerification` as a backup HTML verification method.
5. Submit `https://your-domain.example/sitemap.xml` under **Sitemaps**.
6. Inspect the homepage, Work page and important project URLs, then request indexing after the production deployment is stable.

A Domain property covers HTTP, HTTPS, `www`, the bare domain and future subdomains. A URL-prefix property only covers the exact prefix entered.

## Final validation

- Run `npm run check` and `npm run build`.
- Open `/sitemap.xml` and `/robots.txt` on the production domain.
- Test representative URLs with Google Rich Results Test and Schema.org Validator.
- Use a social preview debugger to confirm the title, description and 1200 × 630 image.
- Confirm redirecting domains resolve to the same canonical host.
- Add analytics only with the owner’s approval, then document it in the privacy page.
- Submit the sitemap and request indexing only after placeholder content and example URLs are gone.

## Copyable launch prompt

> Prepare this site for public launch. Replace all placeholder SEO values with verified project information; write search-focused page titles and descriptions; create or nominate 1200 × 630 social images without enlarging any source above 100%; confirm canonical URLs use the final domain; add accurate Person or Organization, WebSite, CreativeWork, BreadcrumbList and eligible VideoObject structured data; keep private pages out of the sitemap and mark them noindex; run the full checks and list any Search Console, DNS, analytics or privacy actions that still require the site owner.
