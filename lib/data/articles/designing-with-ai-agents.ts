import type { Article } from './types'

export const article: Article = {
  id: 'designing-with-ai-agents',
  title: 'My AI coding stack, honestly',
  excerpt: 'OpenCode, Codex, and Claude as teammates \u2014 not toys. What I hand to agents, what I never do, and what changed about how I plan work.',
  date: '2026-01-24',
  displayDate: '24 January 2026',
  readTime: '6 min read',
  category: 'AI',
  published: true,
  body: `I run AI coding agents on real work every day \u2014 this portfolio was built with an agent session open beside it, and Kanaboards exists as a product because of what that workflow taught me.

This isn\u2019t a review piece. It\u2019s the working stack, and what I\u2019ve learned about where agents genuinely earn their place.

## The stack

- **OpenCode** (stable) \u2014 my daily interactive driver, pointed at whichever repo I\u2019m in.
- **Claude** (beta) \u2014 long-context reasoning over gnarly architecture questions and review of decisions I\u2019ve already half-made.
- **Codex** (beta) \u2014 parallel task execution, where I want a second pair of hands on an isolated worktree.
- **Kanaboards** \u2014 the board that all of them report into, because an agent that can\u2019t update the plan is an agent you babysit.

The heterogeneity matters more than any individual tool. Different runners have different CLI shapes, sandboxing, and approval models \u2014 treating them as interchangeable wastes what each is good at.

## What I hand to agents

- **Well-bounded tasks with clear acceptance criteria.** "Add read-time metadata to articles, derived from word count" \u2014 yes. "Improve the blog" \u2014 no. Agents are powerful, not psychic; a good card is a good prompt.
- **Test-driven work, where tests exist.** Agents are excellent at writing the code that makes a failing test pass, because the test removes ambiguity from "done".
- **Mechanical migrations.** Renaming a token, updating 40 call sites, normalising a config format \u2014 exactly the work that burns a human out and a machine doesn\u2019t notice.
- **First drafts of things I\u2019ll edit.** A rough structure, a checklist, a migration plan. The agent produces the strawman; I keep the judgement.

## What I never hand to agents

- **Architecture decisions with long half-lives.** An agent will optimise the local problem while quietly eroding a boundary that matters for years. The expensive decisions stay with me \u2014 that\u2019s the whole lesson of shipping solo.
- **Anything touching secrets, auth, or data deletion without my eyes on the diff.** Agents are confident at exactly the wrong moments. The blast radius of a confident mistake in those areas is not worth the minutes saved.
- **Content that carries my name and judgement.** Including this post \u2014 an agent got a first draft of the structure, and every sentence here survived a human rewrite. The day I stop editing is the day it stops being mine.

## What changed about how I plan

The big shift: **writing the plan became the work.** If a card has clear intent, constraints, and a definition of done, almost any capable runner will land close to it. If it doesn\u2019t, no runner saves you. I now spend more time on card bodies than on reviewing code \u2014 and that\u2019s a good trade.

The second shift: **the board became the interface.** Kanaboards exposes 54 MCP tools precisely so agents can claim a card, stream logs, and report outcomes. When the plan and the work live in the same system, the glue work \u2014 the copying, pasting, status-dragging that used to be my evening \u2014 disappears.

The third: **verification beats trust.** Agents fail differently from humans \u2014 confidently, plausibly, and at 3am. The counter isn\u2019t suspicion, it\u2019s the same discipline as any junior hire you want to succeed: clear specs, tests that mean "done", smoke tests after deploys, and diffs small enough to actually read.

## The honest summary

Agents took roughly 30\u201340% off my cycle time on mechanical work, and \u2014 more importantly \u2014 changed the shape of a solo founder\u2019s day: less paste-between-windows, more architecture and review. The work that remains is the work that matters. That\u2019s the whole point.`,
}