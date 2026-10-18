import type { Article } from './types'

export const article: Article = {
  id: 'design-systems-cross-team',
  title: 'Design systems that survive other teams',
  excerpt: 'A component library is code. A design system is an agreement. What makes one hold up when five teams pull it in different directions.',
  date: '2025-09-27',
  displayDate: '27 September 2025',
  readTime: '6 min read',
  category: 'Design',
  published: true,
  body: `I\u2019ve built and maintained design systems at the council, where the "customers" are dozens of content editors, service teams, and developers who all have deadlines and none of whom report to you. That environment is the real test: a design system that only works when its authors are in the room isn\u2019t a system \u2014 it\u2019s a shared folder.

Here\u2019s what I\u2019ve learned about making one survive contact with other teams.

## The failure modes, in order of frequency

1. **The system is a component library and nothing else.** Beautiful Button variants in Storybook \u2014 and every page that uses them re-invents page layout, form structure, and error handling, because those decisions were never in the system. The components get reused; the *design* doesn\u2019t.
2. **Documentation nobody reads when deadline pressure hits.** The system\u2019s guidance lives in a PDF that was accurate two reorganisations ago, so teams default to copying whatever they shipped last.
3. **No path for change.** When a team needs something the system lacks, two bad options present themselves: fork it, or wait. Forks win, and the system fragments.
4. **Consistency enforced by gatekeeping.** A central team reviewing every usage doesn\u2019t scale, breeds resentment, and loses anyway \u2014 the pull requests pile up, and teams route around the process.

## What holds up, structurally

### Templates are the system, components are the parts

Teams don\u2019t ship buttons; they ship pages. The highest-leverage artefacts in the system are page-level templates \u2014 a content page, a form, a search results page, a service start page \u2014 with the structure already decided: heading hierarchy, form anatomy, error summary placement, back-link behaviour. A rushed team copying a template inherits a hundred good decisions they didn\u2019t have time to make.

### The tokens are the contract

Colour, spacing, type scale, focus states, breakpoints \u2014 as tokens, not as conventions. Tokens are enforceable in code and in review tooling, and they\u2019re where accessibility guarantees live (the contrast audit is done once, at the token). Everything visual can drift; the token layer is where drift is prevented mechanically rather than politically.

### Contribution is easier than forking

This is the one that changes team behaviour: a fast, documented path to propose a component, variant, or fix \u2014 issue template, decision criteria, a published RFC-to-merged timeline. Teams that can improve the system promote it. Teams that can\u2019t, route around it. The contribution path *is* the adoption strategy.

### Write for the second-best day

The documentation moment that matters isn\u2019t the launch \u2014 it\u2019s a Tuesday afternoon in month nine, when a contractor with no context needs to ship by Friday. So the docs are task-shaped \u2014 "build a form", "add a new page to a service", "make a pattern accessible" \u2014 with copy-paste examples that work, rather than API references that assume you were at the kickoff. If the copy-paste example isn\u2019t complete, the system fails on the second-best day, and every day is the second-best day.

### Deprecate loudly and slowly

Breaking a team\u2019s build teaches them to pin an old version and never update again \u2014 the worst outcome possible. Deprecations get notice, a migration path, and codemods where feasible. Trust in the system is built in exactly two ways: it makes you faster, and it doesn\u2019t break your things.

## The metric that matters

Not component count, not Storybook coverage, not adoption slides. The metric is: **how often does a team ship a good page without asking the system team anything?** Every structural decision above \u2014 templates, tokens, contribution paths, task docs \u2014 optimises for exactly that.

A design system that survives other teams is an agreement, backed by code, about who decides what. The components are just where the agreement lives.`,
}