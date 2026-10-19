# Martin Whitaker's portfolio

Next.js portfolio, published at **https://snowl.uk** using Cloudflare Workers Static Assets. `www.snowl.uk` redirects to the root domain.

The root `index.html` only redirects visitors from the former GitHub Pages site. Next.js uses `app/page.tsx` for the homepage.

## Local development

Use Node.js 22 or later.

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

After merging into `main`, publish from a clean checkout:

```sh
npm ci
npx wrangler login
npm run deploy
```

Wrangler uploads the static export, applies the domains in `wrangler.jsonc`, and manages their DNS and HTTPS certificates. It uses the signed-in Cloudflare account; credentials are never committed. Deployment is manual unless Cloudflare Git integration is configured.

For automatic deployments, connect this GitHub repository to the `snowl-portfolio` Worker in Cloudflare Workers Builds. Choose `main` as the production branch, `npm run build:static` as the build command, and `npx wrangler deploy` as the deploy command.

`NEXT_PUBLIC_SITE_URL` optionally overrides the production origin used in metadata, structured data, robots, and sitemap; it defaults to `https://snowl.uk`. Security headers and the former Diver URL redirect are served from `public/_headers` and `public/_redirects` in the static deployment. Keep security policies aligned with `next.config.ts` for local Next.js serving.

All pages and social preview images are generated at build time. The small Worker in `worker/index.ts` redirects the `www` hostname and delegates all other requests to static assets. Contact uses the visitor's email client, so it does not need a server or email API.

## Roll back

Use `npx wrangler rollback` to restore the previous Cloudflare deployment. Revert the corresponding commit on `main` before publishing again so the next deployment keeps the rollback.
