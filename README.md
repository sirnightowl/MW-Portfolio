# Martin Whitaker's portfolio

Next.js portfolio, published at **https://snowl.uk** using Cloudflare Workers Static Assets. `www.snowl.uk` redirects to the root domain.

The root `index.html` only redirects visitors from the former GitHub Pages site. Next.js uses `app/page.tsx` for the homepage.

## Local development

Use the Node.js version pinned in `.node-version` (22.23.1).

```sh
npm ci
npm run dev
```

The development site runs at http://localhost:3000. `npm run build` and `npm start` also support a regular Next.js server.

## Check and publish

```sh
npm run lint
npm test
npm run preview
```

Preview builds a static export into `out/` and serves it locally with Wrangler (normally http://localhost:8787). To run the browser suite against it, set `PLAYWRIGHT_BASE_URL=http://localhost:8787` and run `npm run test:e2e` in another terminal.

Changes pushed or merged into `main` automatically build and deploy to `https://snowl.uk` through Cloudflare Workers Builds. The GitHub App is restricted to this repository. Other branches do not deploy.

To publish manually from a clean checkout if needed:

```sh
npm ci
npx wrangler login
npm run deploy
```

Wrangler uploads the static export, applies the domains in `wrangler.jsonc`, and manages their DNS and HTTPS certificates. Manual deployment uses the signed-in Cloudflare account; automatic builds use a deployment token managed in Cloudflare. Credentials are never committed.

Cloudflare Workers Builds uses this production configuration:

- Repository: `sirnightowl/MW-Portfolio`
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build:ci`
- Deploy command: `npx wrangler deploy`
- Preview builds: disabled

`build:ci` runs lint, unit tests, and the static export in sequence. A failed check stops deployment and leaves the current site live. The build image reads `.node-version` to use the same Node.js version as local validation. No build credentials belong in this repository.

`NEXT_PUBLIC_SITE_URL` optionally overrides the production origin used in metadata, structured data, robots, and sitemap; it defaults to `https://snowl.uk`. Security headers and the former Diver URL redirect are served from `public/_headers` and `public/_redirects` in the static deployment. Keep security policies aligned with `next.config.ts` for local Next.js serving.

All pages and social preview images are generated at build time. The small Worker in `worker/index.ts` redirects the `www` hostname and delegates all other requests to static assets. Contact uses the visitor's email client, so it does not need a server or email API.

## Public contact details

The public CV PDF omits the phone number and email address and links to `/contact` instead. Keep those details out when replacing the public download; the owner's original PDF is separate.

`EmailContact` reveals the email only after activation, and the contact form decodes it when opening a draft. This deters basic harvesting; the encoded address in client code is not a secret and cannot prevent determined crawlers or all spam. Download responses carry `noindex` and `no-store` headers.

## Blog evidence

The five project case studies have a separate source review in `docs/project-evidence-review.json`, including file hashes, corrected claims, and provenance for all five visual case studies. Project years identify the reviewed case-study edition, not unverified start or launch dates. Keep implementation, operational records, and observed user outcomes distinct when editing project copy. Visual case studies share their screenshot renderer and styles; public captures and inspected local source are distinct evidence, and neither proves a completed authenticated flow. Kanaboards captures use the existing localhost development fallback and bundled sample data, explicitly labelled as unreleased; sample discussion and progress are not real feedback or delivery metrics. Stay With Me: Deep Sea captures show the existing local web export, retain its Ocean Floor build subtitle, and document only the opening sequence and first recovered camera frame; authored fiction and artwork are not research or real footage, and browser screenshots do not verify native notifications.

Blog posts describe verifiable project work. Keep implementation details traceable to source files; code and automated tests do not establish personal anecdotes, user-research findings, adoption, measured impact, or recurring operational practice. Those claims need their own records before publication.

The review of all 21 posts is recorded in `docs/blog-evidence-review.json`, including source paths, corrected claims, and earlier displayed dates. The corrected editions use 19 October 2026. Keep existing article IDs to preserve URLs, and update the evidence record when substantive claims change. Kanaboards and Stay With Me: Deep Sea remain unreleased.

## SEO and performance

`lib/metadata.ts` supplies each page’s canonical URL, complete Open Graph metadata and matching Twitter card copy. Case studies use dedicated 1200 × 630 PNG previews at `/social/<project-id>.png`, generated during the static build; unreleased projects keep their status in both the preview and its alternative text. Their PNG build inputs in `assets/social/` are derivatives of the existing project artwork/screenshots, not new UI mockups.

`npm run check:seo` validates the exported sitemap’s 33 pages, titles, canonicals, social metadata, preview dimensions, structured-data JSON and 404 indexing state. It runs automatically in `build:ci`. Update its expected page count when publishing more content. Runtime crawler, image-budget and cache checks live in `e2e/seo.spec.ts`.

Large hero assets and supporting photos use WebP derivatives; originals and the evidence screenshots remain available. Hero images are preloaded with high fetch priority; the existing variable font is self-hosted and preloaded through `next/font/local`. Below-fold screenshots remain lazy-loaded. Mutable images and social cards use a one-hour browser cache with stale-while-revalidate, while hashed Next assets retain immutable caching.

The review and mobile Lighthouse measurements are recorded in `docs/seo-performance-review.json`. Lighthouse is a local lab sample, not production Core Web Vitals or a search-ranking guarantee. To repeat an audit with the preview running: `npx --yes lighthouse@13.5.0 http://localhost:8787/ --only-categories=performance,seo --chrome-flags=--headless` (set `CHROME_PATH` to an installed Chromium executable).

## Case study accessibility

All five case studies share screenshot framing and captions. Keep release-status labels visible at mobile widths, give live-source links distinct names, and preserve focusable section targets for keyboard contents navigation. The focused screenshot outline sits outside the image frame to avoid clipping. Custom-styled annotation and implementation lists retain explicit list semantics.

`e2e/case-studies.spec.ts` checks 320px and 768px layouts in both themes, text-spacing overrides, automated accessibility and section-link keyboard focus. The review is recorded in `docs/project-evidence-review.json`; automated checks do not replace screen-reader or real-device testing.

## Roll back

Use `npx wrangler rollback` to restore the previous Cloudflare deployment. Revert the corresponding commit on `main` before publishing again so the next deployment keeps the rollback.

Lush SVG is a live SVG studio. Its case study uses three unretouched public-interface captures and source evidence for catalogue filtering, editor links and exports. The source project was inspected read-only; no user research, adoption or exhaustive export verification is claimed.
