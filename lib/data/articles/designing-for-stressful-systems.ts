import type { Article } from './types'

export const article: Article = {
  id: "designing-for-stressful-systems",
  title: "Designing for stressful systems: concrete choices in SENDadvisor",
  excerpt: "Search, council information, and reviewable data: concrete choices intended to make relevant information easier to reach.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "UX",
  published: true,
  body: `SENDadvisor brings together days out, services, schools, council information, and SEND guidance. Its implementation offers a concrete way to discuss a design intention: reduce the work needed to find relevant information.

That intention is not the same as evidence that a particular family found the experience calmer. The examples here are features in the project, not findings from interviews or usability sessions.

## Put the next task in reach

The homepage includes a search component and routes into the directory's main areas. It also links to Local Offer and EHCP information. Those destinations give the content structure more meaning than a generic collection of listings.

The council detail page combines official links, available contact details, and related directory results. It retrieves days out, services, and schools for the selected authority. That is a specific implementation of bringing related information together.

## Keep missing information visible in the model

The council template checks whether a Local Offer URL, website, phone number, or email address exists before rendering the corresponding control. The admin interface also has filters for missing Local Offer and EHCP contact information.

A field in a database is not proof that its value is current. A source link is not a guarantee that the destination is easy to use. These distinctions matter when describing trust: the interface can provide a route back to an official source without claiming independent confirmation of every detail.

## Publication is another design decision

The enrichment audit tooling keeps review status for gathered candidates. The go-live preparation script selects approved candidates and applies further validation before producing a publication diff. That separates discovery from the decision to publish.

The design rationale is to make information easier to reach and the publication process easier to inspect. To claim reduced stress, faster task completion, or better outcomes would require a different kind of evidence. The implementation provides a starting point for that evaluation, not its result.`,
}
