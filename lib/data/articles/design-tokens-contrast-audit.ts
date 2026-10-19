import type { Article } from './types'

export const article: Article = {
  id: "design-tokens-contrast-audit",
  title: "Design tokens make contrast easier to check—not safe to ignore",
  excerpt: "The portfolio’s colour tokens, opacity modifiers, and rendered-page tests show why a palette is a starting point rather than a guarantee.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Design",
  published: true,
  body: `The portfolio defines named colours such as ink, paper, butter, and sage. Components use those names alongside opacity modifiers and dark-theme variants. That makes colour decisions easier to find, but it does not encode a passing contrast ratio into every possible use.

## A token is only one side of a pairing

The same foreground can appear on a plain surface, a tinted card, or a gradient. Opacity changes the resulting foreground again because it blends with the background underneath it.

Project cards make this concrete: the description and metadata use muted text treatments, while their surfaces can change with the theme. Reviewing a token definition alone cannot establish the final rendered relationship.

The current stylesheet also contains component-specific colour values. Describing every colour in the site as enforced through one strict token mechanism would be inaccurate.

## Test the contexts that matter

The accessibility suite checks rendered public routes in both light and dark themes. It also has a targeted check for hero text against a bright gradient stop.

The smoke suite contains a separate dark-card check. It reads computed colours, resolves the effective background, calculates relative luminance, and requires the sampled excerpt's contrast ratio to exceed 4.5.

That is a concrete assertion about a selected component. It should not be stretched into a claim that every state, overlay, image background, or future use has been checked.

## Keep tokens and usage under review

Named colours reduce the number of independent decisions. Shared components reduce the number of places a fix needs to land. Rendered tests then check some of the combinations the system actually produces.

Those layers complement one another. A new surface, a different opacity, or a theme change can create a new pairing even when the token names stay the same.

The practical lesson from this code is therefore more modest than “audit once.” Centralise what can be shared, then keep checking the contexts in which it is rendered.`,
}
