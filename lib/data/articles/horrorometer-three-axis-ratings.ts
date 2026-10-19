import type { Article } from './types'

export const article: Article = {
  id: "horrorometer-three-axis-ratings",
  title: "One number can’t describe a scare",
  excerpt: "Horrorometer’s review model records Creepy, Gory, and Jumpy alongside an overall score. The review schema defines how those different values fit together.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Product",
  published: true,
  body: `Creepy, Gory, and Jumpy give Horrorometer a way to describe different aspects of a horror title. The useful distinction is between an overall judgement and the kind of experience someone is rating.

The current review schema preserves that distinction. It includes an overall rating as well as separate fields for those three dimensions.

## Keep the description close to the data

The review-input schema requires an integer overall rating between one and ten. Creepy, Gory, and Jumpy ratings are also defined as one-to-ten integers, but are optional and nullable on this input path.

That matters for describing the product accurately. The three dimensions do not mean the application has eliminated the overall score, and this review contract should not be casually described as a five-star scale across every surface.

An absent dimension is also different from a low score. Optional values need to remain distinguishable from a recorded rating when the data is interpreted or displayed.

## Explain the rationale without inventing a result

As a design idea, separating atmosphere, explicit gore, and sudden shocks allows two similarly rated titles to have different profiles. It expresses more than a single overall number.

That is a rationale for the data model. It is not evidence that a particular number of dimensions produces better completion rates, that recommendations improve with each review, or that visitors become more loyal. Those claims would require research or product measurements.

## The boundary is useful

The schema makes the implementation inspectable: which values are accepted, which fields are required, and which information can be omitted. Those are concrete decisions that the code can substantiate.

The broader question—whether these dimensions help people find horror they enjoy—remains an evaluation question. A domain-specific model creates the opportunity to ask it more precisely; the model alone cannot supply the answer.`,
}
