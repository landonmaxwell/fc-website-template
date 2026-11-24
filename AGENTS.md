# Project guidance

This is a reusable Next.js website starter. Keep personal content in `data/` and reusable presentation in `components/`.

This Next.js version may differ from older conventions. Read the relevant guide in `node_modules/next/dist/docs/` before changing framework APIs or route conventions.

Keep the template lightweight. Do not add authentication, databases, CMS tools or external services unless the new website requires them.

On desktop/PC, constrain all site content to 60% of the page width unless a project explicitly requires a different width for a particular page, section, or element. Use responsive near-full-width layouts on smaller screens.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
