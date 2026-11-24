# Making a new site from this template

The fastest workflow is:

1. Copy this folder.
2. Tell Codex the new business or person’s name, what they do, their preferred tone, available pages, contact details, brand colours and available images.
3. Ask Codex to update `data/site.ts` and `data/projects.ts` first.
4. Review the first page before adding extra services or integrations.
5. Before launch, work through `docs/SEO-AND-LAUNCH.md`. It covers the final domain, social cards, canonical URLs, structured data, Search Console, DNS verification and sitemap submission.

Useful prompt:

> Use this starter to create a website for [name]. It is a [portfolio/business/studio] site. Their audience is [audience]. Their main services are [services]. The tone should feel [tone]. Use the central configuration and project data files, preserve the reusable architecture and accessibility behavior, and only add new dependencies or external services after checking with me.

Launch prompt:

> Prepare this site for public launch using the checklist in `docs/SEO-AND-LAUNCH.md`. Ask me for any identity, domain, search description, social image, video date or verification detail that cannot be confirmed. Do not invent missing information.
