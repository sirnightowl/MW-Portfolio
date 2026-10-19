import type { Article } from './types'

export const article: Article = {
  id: "nextjs-on-cloudflare-workers",
  title: "Next.js on Cloudflare: two deployment paths in these projects",
  excerpt: "The portfolio uses a static export; Horrorometer has an OpenNext build pipeline. Their checked-in configurations explain the difference.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Engineering",
  published: true,
  body: `The portfolio and Horrorometer both use Next.js, but their deployment scripts do different jobs. This is a note about those project configurations, not a general statement that every Next.js application needs the same Cloudflare setup.

## Export the pages when no request-time rendering is needed

The portfolio's static build sets an export flag before running Next.js. Its configuration uses that flag to enable static output and disable the default image-optimisation service for that build.

Project and blog routes provide their known slugs at build time. The resulting output is uploaded as static assets. A small Worker redirects www requests to snowl.uk and delegates the remaining requests to the assets binding.

This still has hosting and deployment dependencies. Static output does not mean the site cannot have an outage. It means the deployed portfolio does not need a Next.js rendering server for each page request.

## Keep the server build explicit where it is needed

Horrorometer's Cloudflare build script takes a different path. It includes a Next.js build, an OpenNext adapter build, cleanup, and project-specific patch steps. The checked-in scripts include handler, trace, and cron adjustments.

Those steps are evidence of this application's integration work. They are not a promise that another application will need the same patches, or that a future framework version will behave identically.

## Test what the host actually serves

The portfolio carries its static security headers and old project redirect in files consumed by Cloudflare. Those need to be checked through the hosting runtime, not inferred from a successful Next.js compilation.

The release verification covered page responses, the old Diver redirect, www canonicalisation, and the social image's content type. That is a bounded deployment check. It says the checked paths worked at verification time, not that the deployment is immune to future failures.

The distinction worth keeping is simple: inspect what the application needs at request time, then verify the output produced by its actual deployment pipeline.`,
}
