import type { Article } from './types'

export const article: Article = {
  id: "design-systems-cross-team",
  title: "Design systems in code: share the decisions above the button",
  excerpt: "PageIntro, ProjectCard, Button, and shared styles show how this portfolio repeats structure—not just visual details.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Design",
  published: true,
  body: `This portfolio repeats more than a colour palette. Shared page intros, project cards, and buttons carry structural decisions across different routes. That makes it a small, inspectable example of a design system in code.

It is not evidence of adoption across several teams. The examples here concern how this particular site is assembled.

## Share the page-level structure

PageIntro gives different page types a common place for an eyebrow, title, description, supporting note, and optional back link or visual. The article and project pages use that structure for different kinds of content.

This keeps those elements from being independently reassembled on every route. The trade-off is that a shared API needs to accommodate real differences without growing into a collection of unrelated exceptions.

## Keep repeated content in one component

ProjectCard handles the image, status, year, title, and description of a project. The homepage, Work page, and related-project sections consume the same project data rather than carrying separate versions of the release status.

The correction marking Kanaboards and Stay With Me: Deep Sea as unreleased demonstrates the value of that arrangement: the shared cards take their labels from the corrected records. Broader claims in page introductions and articles still needed separate editorial changes. Shared data does not automatically fix prose elsewhere.

## Tokens need usage checks

The palette and shared styles establish reusable choices for colour, focus, spacing, and presentation. Components also contain contextual variants. A shared definition reduces duplication; it does not guarantee every combination is usable or accessible.

That is why the rendered routes still have browser and accessibility checks.

The concrete lesson from this site is to share the decisions that genuinely repeat, then make their limits clear. It supports a maintainable implementation. Claims about team behaviour, fewer meetings, or faster delivery would require evidence outside the component files.`,
}
