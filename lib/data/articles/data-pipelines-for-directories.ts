import type { Article } from './types'

export const article: Article = {
  id: "data-pipelines-for-directories",
  title: "A directory is a pipeline with a UI on the front",
  excerpt: "The current SENDadvisor candidate-review and go-live scripts show how discovery, approval, validation, and publication are separated.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Product",
  published: true,
  body: `The public directory is only one part of SENDadvisor. The current repository also contains a local candidate-review process and scripts that prepare approved data for publication.

The important detail is the separation between finding a possible listing and making a production change.

## Review candidates before preparing a diff

The enrichment audit server reads a discovery ledger and keeps review state separately. Its permitted review fields include status, address information, category, description, and source-related fields.

Approved candidates can be exported for the next stage. The architecture record describes that local audit process as the current review and approval pipeline; it also records the removal of an earlier intermediate database and queue. Describing the old arrangement as the current architecture would be misleading.

## Validate the publication input

The go-live preparation script selects candidates marked approved. It normalises postcodes and checks authority identifiers against an available map. It also builds a diff rather than treating an arbitrary gathered URL as a ready-to-publish record.

Those checks are concrete gates in this path. They are not proof that incorrect data can never enter production through any other route. Nor does an approved review status make an external source permanently accurate.

## Keep recovery separate from claims about practice

The repository includes D1-to-R2 backup tooling and a restore script. The restore script has a dry-run option and verification steps. This establishes that recovery tooling exists.

It does not establish a daily backup success rate, a monthly restore-drill habit, or the completeness of any particular backup. Those claims would need execution records and results, not just filenames.

The useful implementation lesson is to keep the stages inspectable: candidate discovery, review, publication preparation, and recovery each have their own responsibilities. A listing count or a claim that all data is trustworthy would need additional evidence beyond that architecture.`,
}
