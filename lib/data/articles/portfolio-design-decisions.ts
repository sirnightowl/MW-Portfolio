import type { Article } from './types'

export const article: Article = {
  id: "portfolio-design-decisions",
  title: "The decisions behind this portfolio, checked against the build",
  excerpt: "Typed content, react-markdown, a static Cloudflare deployment, and an honest mailto handoff: what this site actually uses.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Design",
  published: true,
  body: `A portfolio can explain its own implementation without turning each choice into a success story. These decisions are visible in the current repository, along with their trade-offs.

## Content is part of the codebase

Projects and articles are typed TypeScript modules. The article index assembles the posts, and the blog route uses the published entries to generate its known paths. Unit tests check required article fields, unique IDs, and the presence of body sections.

That makes structural mistakes testable. It does not make the prose true. A complete object can still contain an invented anecdote, which is why editorial evidence needs a separate review.

The renderer is react-markdown with remark-gfm. It is not a hand-written Markdown parser. Section headings also provide the data used by the article's contents navigation.

## The deployed pages are static assets

The static build enables Next.js export output. Cloudflare serves those assets through a small Worker that also handles the www redirect. Headers and the former Diver URL redirect have corresponding static-host configuration files.

This removes request-time Next.js rendering from the portfolio's page-serving path. It does not remove the need for working DNS, hosting, or deployment verification.

## The contact form names its limit

The form validates name, email, and message, then opens a mailto URL. The confirmation does not claim delivery: it says the mail client should be opening and offers a copy-email fallback.

A server-backed form would be a different product decision, requiring delivery handling and its own failure states. The current version should be described for what it does.

## Character lives in shared components

Page intros, project cards, buttons, named colour tokens, and decorative SVGs repeat across the site. Decorative shapes are hidden from the accessibility tree, while interaction behaviour remains in the controls.

The result is a consistent implementation to inspect and test. Whether visitors find it distinctive, easy to use, or persuasive is an evaluation question, not something the source code can answer on their behalf.`,
}
