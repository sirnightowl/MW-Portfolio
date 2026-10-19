import type { Article } from './types'

export const article: Article = {
  id: "one-person-ops",
  title: "A small release pipeline with explicit checks",
  excerpt: "The portfolio’s automatic Cloudflare deployment provides a concrete operations example: one main-branch trigger, a checked build, and live verification.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Product",
  published: true,
  body: `The portfolio now has an automatic release path from main to snowl.uk. Its setup and first verified run show how configuration, execution, and public response checks fit together.

## Make the release command inspectable

The CI build command runs lint, unit tests, and the static export in sequence. Its command chaining stops on a failed step. Cloudflare then runs the deploy command after a successful build.

The build environment reads the repository's pinned Node.js version. Preview builds are disabled in the configured connection, so other branches do not follow this production release path.

These settings define when a release should happen. Their presence in documentation is not sufficient evidence that the integration works, which is why the setup included an actual push.

## Verify a real trigger

A documentation change on main, [commit 9196b42](https://github.com/sirnightowl/MW-Portfolio/commit/9196b42353a583fd8c3178834f2e336a2b18b96f), triggered the Cloudflare build. The build check completed successfully, and Cloudflare reported the new version serving all production traffic. That run took fifty-five seconds.

That duration belongs to one recorded release. It is not a build-time promise or a measurement of ongoing operating effort.

## Check the public result

The release verification checked the homepage, case-study content, images, headers, and redirects. In particular, www redirected to the root domain and the former Diver URL redirected to the renamed game case study.

The README also documents a rollback command. A documented rollback procedure is not evidence that a restore drill has been performed, and this note does not claim one.

The useful operations principle is to distinguish configuration, execution, and verification. A pipeline file describes intent; a completed check records a run; a live response check examines what was delivered. All three matter, and none supplies an uptime history by itself.`,
}
