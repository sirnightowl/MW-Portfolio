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

## Blog evidence

Blog posts describe verifiable project work. Keep implementation details traceable to source files; code and automated tests do not establish personal anecdotes, user-research findings, adoption, measured impact, or recurring operational practice. Those claims need their own records before publication.

The review of all 21 posts is recorded in `docs/blog-evidence-review.json`, including source paths, corrected claims, and earlier displayed dates. The corrected editions use 19 October 2026. Keep existing article IDs to preserve URLs, and update the evidence record when substantive claims change. Kanaboards and Stay With Me: Deep Sea remain unreleased.

## Roll back

Use `npx wrangler rollback` to restore the previous Cloudflare deployment. Revert the corresponding commit on `main` before publishing again so the next deployment keeps the rollback.
