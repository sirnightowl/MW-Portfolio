import type { Article } from './types'

export const article: Article = {
  id: 'portfolio-design-decisions',
  title: 'Every decision in this site, and why',
  excerpt: 'A self-review: the design and build choices behind this portfolio \u2014 the ones that worked, the ones I\u2019d change, and the reasoning.',
  date: '2026-01-10',
  displayDate: '10 January 2026',
  readTime: '6 min read',
  category: 'Design',
  published: true,
  body: `Your own portfolio is the hardest client you\u2019ll ever have: you know all the arguments, you have all the context, and nobody can tell you no. To keep myself honest, here\u2019s the self-review \u2014 every meaningful decision on this site, what it costs, and whether I\u2019d make it again.

## Why it\u2019s built like this

**Data-driven content, no CMS.** Projects and articles live as typed TypeScript modules. The win: content is refactored with the same tooling and tests as code, and the build fails if a case study is missing its outcome. The cost: writing in a template string is less pleasant than a CMS editor. Verdict for a portfolio\u2019s scale: correct. At product scale, wrong \u2014 use a real CMS.

**Next.js App Router, static output.** Every page here is static or SSG. For a portfolio, static is a performance and resilience gift: it\u2019s fast everywhere and can\u2019t have a runtime outage. A contact form via mailto means there\u2019s literally no backend to operate.

**Tailwind with strict tokens.** Every colour goes through named tokens \u2014 ink, paper, coral, butter, and the dark-night family \u2014 audited for contrast. When a design tweak came in from the browser, going through the token rather than a hex keeps the contrast guarantee intact. This is a direct habit from the design-system work at the council: if the system makes the right thing the easy thing, you stop auditing and start designing.

**Serif display, characterful accents.** The display type carries the personality, with small hand-drawn accents \u2014 stars, squiggles \u2014 that are \`aria-hidden\` and never interfere with the reading experience. The tension here: "characterful" and "professional" pull in opposite directions. The rule I landed on: decoration only in whitespace, never in the reading path, and the colour palette stays consistent across every page.

## The accessibility decisions, explicitly

- Skip link is the first focusable element \u2014 in the layout, not added later.
- Every interactive element is a real link or button.
- One H1 per page \u2014 even when the visual design wanted two headlines.
- The dark-mode toggle stores a theme and applies it before first paint \u2014 no flash, no \`prefers-color-scheme\` guessing on a site that has an explicit brand mode.
- The reduced-motion media query collapses all transitions to instant \u2014 the Reveal component checks it too.
- Decorative SVGs are aria-hidden. Screen reader users get content, not confetti.

These are all small. Their cost in implementation was hours. Their value is that I never have to think about them again \u2014 the system defaults to accessible.

## What I\u2019d change

- **The contact form\u2019s mailto flow.** It\u2019s zero-backend, but a mailto handoff is a conversation-killer for anyone without a configured mail client. Mitigated with a copy-to-clipboard fallback, but a real endpoint (a Cloudflare Worker \u2014 I already run them elsewhere) is the honest fix.
- **The markdown renderer is hand-rolled.** The blog renders article bodies with a custom parser. It was a fun exercise, but a battle-tested library would be less code to maintain and would handle more edge cases. The hand-rolled version supports exactly what my four posts use \u2014 anything richer and I\u2019m back in parser land.
- **Some headings drift toward generic portfolio-speak.** Every time I catch a phrase that could appear on any portfolio \u2014 anything like "drive measurable results" \u2014 I rewrite it toward the specific: what I actually made, who used it, what happened. Specificity is the only moat.

## The review that matters

The self-review was a useful exercise precisely because it exposed where I\u2019d cut corners (the mailto, the parser) and where the discipline paid for itself (the token system, the a11y defaults). If you build for a living and haven\u2019t written down why your own site is the way it is, try it. The decisions you can\u2019t defend are the ones that need attention.`,
}