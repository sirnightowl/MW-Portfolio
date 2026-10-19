import type { Article } from './types'

export const article: Article = {
  id: "accessible-by-default",
  title: "Accessible by default: the checks behind this portfolio",
  excerpt: "Skip links, keyboard focus, form errors, and reduced motion: concrete accessibility work in this portfolio, with tests that show what is covered.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Accessibility",
  published: true,
  body: `Accessibility in this portfolio is visible in the components and their tests. The useful story is specific: where focus goes, how an error is associated with a field, and what remains available when animation or JavaScript is absent.

## Start with a route through the page

The shared layout includes a skip link targeting the main content. The browser test activates that link and checks that focus moves to main, then continues to the next interactive element. That tests a journey rather than just the presence of an anchor.

The mobile navigation has a different job. Opening it moves focus to the close button, traps Tab navigation inside the panel, and makes the background inert. Closing it restores the previous focus and scroll state. The accessibility suite exercises those behaviours, including Escape to close.

## Errors need an address

The contact form uses visible labels and field-specific errors. Invalid fields reference their error text through aria-describedby, and an invalid submission focuses the first required field. The error is therefore connected to the control that needs attention.

This does not establish that every visitor understands the wording. It establishes the implemented relationship between the input, the error, and keyboard focus. That is a useful boundary between an automated assertion and a usability finding.

## Check the rendered result

The test suite runs axe checks across the public routes in light and dark themes. Separate checks cover keyboard behaviour, contrast in selected components, and reduced-motion counters. The smoke suite also checks that homepage content remains visible without JavaScript.

These checks make regressions easier to catch. They do not replace assistive-technology testing or research with disabled participants, and they cannot make the site permanently accessible after any future edit.

The practical principle behind this work is straightforward: put accessibility behaviour in shared components, then test the pages that use them. A sensible default is a starting point, not a certificate.`,
}
