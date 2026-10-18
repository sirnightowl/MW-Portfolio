import type { Article } from './types'

export const article: Article = {
  id: 'design-tokens-contrast-audit',
  title: 'Design tokens that enforce contrast so you never audit again',
  excerpt: 'A colour system where 4.5:1 is a property of the token, not a review step. How to build one, and how it fails.',
  date: '2025-12-20',
  displayDate: '20 December 2025',
  readTime: '5 min read',
  category: 'Design',
  published: true,
  body: `The most common accessibility failure I see in otherwise careful work isn\u2019t missing alt text or a stray div with an onClick \u2014 it\u2019s contrast. Muted text at 60% opacity on a tinted background, a placeholder that\u2019s technically visible and practically invisible, a focus ring that vanishes on half the page.

The failure mode is structural: contrast is checked manually, at the end, by someone with a colour picker and a bad attitude. The fix is to make contrast a property of the system, not a review step.

## The token model

Every colour in the system is a token, and every token carries its contrast obligations as part of its definition:

- \`ink\` on \`paper\` \u2014 4.5:1 minimum for body text. The core pair, measured once, trusted everywhere.
- \`ink/60\` for muted labels \u2014 still 4.5:1 against \`paper\` and \`cream\`, because "it\u2019s only metadata" is not an exemption, it\u2019s a rationalisation.
- \`butter\`, \`sage\`, \`sky\` for tinted surfaces \u2014 large-text and decorative usage only, by definition, because they don\u2019t carry 4.5:1 for body text.
- Focus indicators \u2014 3:1 against every adjacent colour, enforced with a single global focus-visible rule rather than per-component styling.

The rule that makes it work: **if a pairing fails, the token doesn\u2019t ship.** You don\u2019t darken the failing instance in the component \u2014 you darken the token, everywhere, once. The audit happens at the definition site instead of the usage site, and usage sites number in the hundreds.

## Opacity modifiers are the trap

Tailwind\u2019s \`text-ink/60\` syntax makes muted text trivially easy \u2014 which is exactly why it needs discipline. The failure pattern:

1. Designer picks a muted grey at 55% for elegance.
2. It renders on the page background \u2014 fine.
3. Six months later the same class lands on a tinted card background \u2014 and now it\u2019s 3.8:1 on a good screen and worse on a cheap one.

The fix is to enumerate the legal combinations and audit each opacity level against each background it can appear on. On this site, that\u2019s a short list \u2014 paper, cream, butter, sage, sky, and the dark night family \u2014 so the full matrix is a one-afternoon job that never needs redoing unless a surface is added.

## Dark mode, same discipline

Dark mode doubles the matrix, because every foreground token now has to be audited against the dark surfaces too. Two rules I\u2019ve found load-bearing:

- **Never just invert.** The dark palette is its own set of values, chosen so contrast holds \u2014 text that\u2019s pure white on pure black causes its own readability problems at weight. Aim slightly off the extremes.
- **Watch the coloured accents.** Coral and butter that pass beautifully on cream can fail against dark ink. The accents need dark-mode variants or dark-mode-checked usage rules, not optimism.

## What it buys you

The payoff isn\u2019t just compliance. It\u2019s that **the accessible choice becomes the path of least resistance**. A developer reaching for the muted label token gets a passing pairing because that\u2019s all the system offers. Nobody has to remember the ratio; nobody has to run the checker; nobody has to care. The system absorbs the rule so the team doesn\u2019t have to carry it.

That\u2019s the general principle, and it\u2019s why this is a design post and not just an a11y one: **constraints you encode in the system are constraints you never think about again.** Contrast, spacing rhythm, focus states, reduced motion \u2014 encode them once, and your attention is free for the problems that actually need it.`,
}