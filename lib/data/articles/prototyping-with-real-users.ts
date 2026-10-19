import type { Article } from './types'

export const article: Article = {
  id: "prototyping-with-real-users",
  title: "A prototype is not a usability finding",
  excerpt: "What this portfolio’s form and navigation tests establish—and the questions that still require research with people.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "UX",
  published: true,
  body: `A working prototype and a completed usability study are different kinds of evidence. The portfolio has runnable interfaces and automated interaction tests. Those provide useful examples of what can be checked before making claims about people's experience.

## Start with an observable question

For the contact form, a concrete implementation question is: after an invalid submission, does focus reach the first required field, and is its error associated with that input?

The browser test performs the submission and checks those outcomes. It can establish the behaviour under test. It cannot establish that the message is clear to every visitor or that the form is easy to complete in a real enquiry.

## Exercise the interaction rather than just its appearance

The mobile-navigation tests open the panel, move through its controls, dismiss it, and check focus restoration. The smoke suite also checks navigation across a tablet-to-desktop resize, including release of the body scroll lock.

Those are useful prototype-level checks because a screenshot cannot show focus order or cleanup after a state change. They are still scripted paths with expected outcomes, not observations of an unprompted visitor.

## Keep research questions separate

Can someone find the right case study without help? Do they understand that the contact form opens an email client? Does a project labelled unreleased create the right expectation?

Those are questions to investigate with people and recorded tasks. This article does not claim that such sessions have taken place or supply invented participant reactions.

## Describe the evidence accurately

The distinction is useful in a case study: “the test checks focus restoration” is a supported statement about this repository. “Users found the menu intuitive” needs a research record. A functioning flow does not make the second sentence follow from the first.

For this portfolio, the honest starting point is the implemented behaviour and the automated checks. They make a prototype more concrete and help define what a later usability study should examine.`,
}
