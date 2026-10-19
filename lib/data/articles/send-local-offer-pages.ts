import type { Article } from './types'

export const article: Article = {
  id: "send-local-offer-pages",
  title: "Local Offer pages: one structure for council information",
  excerpt: "How SENDadvisor’s council template brings official links, available contact details, and related directory results together.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Product",
  published: true,
  body: `SENDadvisor's council-information pages use one template to present available information for an authority. The current route is under councils; the older local-authority route redirects to it.

The shared structure brings official destinations and relevant directory results into one place.

## Bring related destinations together

The template provides an official Local Offer link when one is stored, a council-website link, and available SEND contact information. It also queries related days out, services, and schools for the selected authority.

The page therefore joins information that lives in different parts of the product while retaining routes to external official sources. The directory organises the next step rather than replacing those sources.

## Let the content vary without inventing completeness

The template checks for individual values before rendering them. A phone control needs a phone number; a Local Offer action needs a URL. The admin interface can filter authorities whose Local Offer or EHCP contact information is missing.

That is different from saying every council page contains every field. It also avoids implying that the presence of an email address proves a response time or identifies who will answer it.

## Consistency is an intention worth evaluating

Using the same page structure can reduce layout variation inside SENDadvisor. That is a consequence of the shared template. Whether it reduces the time needed to find information, or supports a family moving between authorities, needs task-based evaluation.

The external-link component can record link interactions, but the presence of tracking code is not an analytics result. It cannot support a claim about the most common search phrase or the most-used feature on its own.

The project work here is the reusable structure, the conditional presentation of available fields, and the maintenance interface behind them. Keeping those claims concrete leaves room to report actual usage findings when there is evidence to report.`,
}
