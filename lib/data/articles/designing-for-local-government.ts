import type { Article } from './types'

export const article: Article = {
  id: 'designing-for-local-government',
  title: 'What local government taught me about design',
  excerpt: 'Public services can\u2019t assume a willing user. Eight years of designing for people who have to be there changed how I build everything.',
  date: '2026-02-07',
  displayDate: '07 February 2026',
  readTime: '6 min read',
  category: 'UX',
  published: true,
  body: `Eight-plus years designing and building for Norfolk County Council. Everything about how I approach design changed in that time \u2014 and the change came from one structural fact:

**Public services don\u2019t get to assume a willing user.**

A commercial product has an implicit contract: you chose to be here, so you\u2019ll extend some patience. A council service is the opposite. People arrive because they have to \u2014 parking permits, benefits, waste collections, school admissions \u2014 often stressed, sometimes in crisis, usually on a phone, and always with somewhere better to be. Nobody browses a council website for fun.

## The consequences, concretely

### The task is never the interface

The user\u2019s real task \u2014 "get my child a school place", "find out what\u2019s wrong with my bin" \u2014 exists outside the website. Every screen, every click, every form field is a tax on that task. This reframing is brutal and useful: if a page isn\u2019t helping complete the task, it\u2019s in the way, and "in the way" has a real cost because some users give up, and giving up on a public service has consequences.

### Assume the worst context

Test on a mid-range phone with poor signal, one-handed, interrupted. Assume English may not be a first language. Assume the user may have arrived angry, dyslexic, visually impaired, or all four. The public sector can\u2019t design for the median \u2014 the regulations exist precisely because the edges matter. Designing for the edges made everything I build more robust.

### Plain language is an engineering constraint

"Content design" isn\u2019t a nice-to-have. Reading age targets, sentence length limits, active voice, and jargon either translated or deleted. It\u2019s measurable, testable, and it changes component design: a form label written at reading-age 9 is shorter, which changes the layout, which changes the component. The words are the design.

### Accessibility is a legal floor, not a stretch goal

The Public Sector Bodies Accessibility Regulations aren\u2019t guidance \u2014 they\u2019re an obligation, with monitoring and reporting. That forced a discipline I\u2019ve carried into everything since: tokens that pass contrast by construction, skip links in the layout from day one, real buttons for everything interactive, motion that respects reduced-motion. Every private-sector product I\u2019ve built since is better because public-sector standards made it non-negotiable.

### You will never control the content

Councils publish thousands of pages through distributed teams, content designers, and service owners who all outrank the website team in their domain. You cannot gatekeep. What you *can* do: build a design system and templates that make the right thing the easy thing, and structure guidance so a rushed content editor still produces a usable page.

## What I take into every product since

1. **Design the failure states first.** The happy path is easy. In public services, the error, timeout, and "you are not eligible" paths are where the real design work lives \u2014 and where trust is won or lost.
2. **Measure in task completion, not engagement.** Nobody should "spend more time" on a council service. Success is fewer visits, completed forms, and abandonment going down.
3. **Make the boring parts excellent.** Loading states, confirmation pages, and status pages get more views than any landing page you\u2019ll ever design.
4. **Trust is the deliverable.** People extend trust to a public service once. After a failure, everything is harder. Design like the second chance is the one that matters \u2014 because it is.

The characterful products I build at night \u2014 Horrorometer, Kanaboards, SENDadvisor \u2014 get accused of being over-engineered in ways that are all local-government habits: resilience layers, accessible-by-default components, calm failure states. I take that as the compliment it is. The council taught me that the user who has to be there deserves the same craft as the one who chooses to be.`,
}