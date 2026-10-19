import type { Article } from './types'

export const article: Article = {
  id: "security-audit-checklist",
  title: "Security review: inspect the boundary, not the success story",
  excerpt: "A look at validation, CSRF handling, state transitions, and deployment checks through the code that implements them.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Engineering",
  published: true,
  body: `The repositories contain security-related controls that can be inspected directly. The useful starting point is the boundary each control protects and the paths that invoke it.

These examples describe particular implementation boundaries. They do not amount to a complete security assessment.

## Inspect what enters the application

Horrorometer's review schema constrains rating values and text fields. Its CSRF module contains token-generation and validation logic. Those are concrete controls to trace from a request handler into the code that uses them.

Finding a validation schema or a CSRF utility is only the beginning of that trace. It does not establish that every route invokes the right check, that every authentication mechanism has the same requirements, or that the complete request path has been tested.

## Inspect contested state changes

The device-authorisation service uses conditional writes and checks the returned rows before continuing along particular approval and token-issuance paths. Its tests include cases where those writes return no result.

That makes a losing transition explicit in application logic. The tests use a database mock, so they should not be described as proof of every concurrency property in production.

## Inspect the delivered response

The portfolio defines response headers for its Next.js serving path and corresponding files for static Cloudflare hosting. Its structured-data helper escapes less-than characters before embedding JSON in a script element.

Those controls have a specific scope. A content-security policy does not prove the absence of every injection path, and a passing dependency check is a result at a point in time rather than a permanent guarantee.

The practical review habit illustrated here is to follow a claim to its boundary: the handler, the validated value, the contested write, or the served response. A named utility and an impressive issue count cannot substitute for that inspection.`,
}
