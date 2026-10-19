import type { Article } from './types'

export const article: Article = {
  id: "vine-not-a-tree-branching",
  title: "A vine, not a tree: story rules in Stay With Me: Deep Sea",
  excerpt: "Typed story content, conditional messages, and engine effects shape an unreleased narrative game.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Game Design",
  published: true,
  body: `Stay With Me: Deep Sea is an unreleased narrative game in development. The source separates story content, engine state, and mobile behaviour. That separation makes the branching rules inspectable independently of the native interface.

## Put variation in the story data

The engine works through beats and messages. Conditions determine which messages are available, and choices can alter flags and the next part of the sequence. This supports variation within a shared progression rather than requiring a wholly separate copy of the story for every decision.

The useful design idea is a vine: a route can diverge and reconnect. The code provides mechanisms for that structure. Whether each choice feels consequential is a different question, requiring playthrough evaluation rather than a type definition.

## Separate a decision from its effects

The advance function accepts state, an action, content, and an optional random-number source. Actions carry timestamps. Its result contains the next state and effect descriptions, including notification and quick-time-sequence effects.

The engine describes what should happen; platform code performs the native work. That means a story-rule test does not have to request operating-system notification permissions.

## Validate references, then check the experience

The validation tests include dangling references, duplicate message IDs, unknown flags, and invalid targets. These checks catch specific content-structure mistakes. They do not prove that every narrative path is satisfying or that every ending has been reached on a physical device.

The notification layer also has a deliberate platform distinction: the browser implementation is a no-op, while native code manages local notifications. A browser demonstration therefore cannot establish the behaviour of a native release build.

The project is still being prepared for release. The evidence here is an inspectable story architecture and its validation cases, not a claim of completed public playtesting.`,
}
