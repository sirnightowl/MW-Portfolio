import type { Article } from './types'

export const article: Article = {
  id: "shipping-solo",
  title: "Shipping solo: boundaries across four projects",
  excerpt: "Different deployment, data, and execution boundaries in SENDadvisor, Horrorometer, Kanaboards, and Stay With Me: Deep Sea.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Product",
  published: true,
  body: `The projects in this portfolio have different boundaries because they do different kinds of work. SENDadvisor and Horrorometer are live products. Kanaboards and Stay With Me: Deep Sea are unreleased projects in development. Treating all four as completed launches would hide the most useful distinctions.

## Separate the public surface from the work behind it

SENDadvisor has a public directory and a separate candidate-review workflow. Its go-live preparation script selects approved records and validates details such as postcodes and authority identifiers. Gathering a candidate and publishing a listing are separate operations.

Horrorometer has another boundary: its interface depends on external catalogue services. Proxy routes, API clients, and a circuit-breaker utility sit between those services and the application. The code makes those dependencies explicit; it does not prove that an upstream failure can never affect a visitor.

## Keep execution in the right place

Kanaboards separates a cloud-held assignment from the local process that executes it. The daemon polls for work, claims an assignment, checks repository context, selects a runner, and sends heartbeats while the runner works.

The game separates story progression from native effects. Its engine returns a new state and effect descriptions, while the mobile layer deals with notifications and persistence. That makes the core rules inspectable without assuming that a passing engine test verifies every device behaviour.

## A smaller boundary for the portfolio

This site exports its pages at build time. A small Worker handles the www redirect and delegates other requests to static assets. The contact form hands off to the visitor's email client rather than submitting to an email service.

The release work also established an automatic main-branch build: lint, unit tests, static export, then deployment. Those are concrete delivery steps, not a measurement of how much faster solo development became.

The common thread is the boundary itself. Knowing which layer owns publication, execution, or an external effect makes a project easier to explain and gives its tests a clearer responsibility.`,
}
