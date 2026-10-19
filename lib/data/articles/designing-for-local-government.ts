import type { Article } from './types'

export const article: Article = {
  id: "designing-for-local-government",
  title: "Public-service design: making the next action explicit",
  excerpt: "Council-information pages and a portfolio contact form provide concrete examples of links, missing data, and honest handoffs.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "UX",
  published: true,
  body: `A service interface needs to explain what its controls do and what happens next. Two implementations make that principle tangible: the council-information pages in SENDadvisor and the contact form in this portfolio.

These are examples from project code, not a report of resident interviews or outcomes inside a council team.

## Distinguish the directory from the official source

SENDadvisor's council page provides separate links for the Local Offer and the council website when those values are available. It also renders available SEND contact details and related days-out, service, and school results.

The distinction between those destinations matters. A directory can organise a route to official information without presenting itself as the council or implying that a directory entry settles an individual case.

## Treat missing data as a real state

The template checks for the relevant URL, phone number, or email before rendering its control. The admin page can filter for missing Local Offer or EHCP information.

That creates a concrete maintenance task: find and review an absent field. It does not prove that every populated field is correct, nor that someone will answer a listed phone number. A precise description of the feature needs to leave those limits intact.

## Name the handoff honestly

The portfolio contact form validates the input and constructs a mailto URL. Its confirmation says the visitor's mail client should be opening, and offers an email-address copy fallback. It does not say that a message has been delivered.

That is a small but important alignment between implementation and wording. Opening another application and submitting a message to a server are different actions.

The common design principle is to make those boundaries visible: this link goes to an official source; this field is unavailable; this form opens your email client. Clear wording cannot guarantee task completion, but it can avoid claiming a result the system has not produced.`,
}
