import type { Article } from './types'

export const article: Article = {
  id: 'vine-not-a-tree-branching',
  title: 'A vine, not a tree: how The Diver stays shippable',
  excerpt: 'Branching stories die of unsustainability. The design rules \u2014 from Lifeline\u2019s creators \u2014 that keep a 30,000-word real-time narrative buildable.',
  date: '2026-02-21',
  displayDate: '21 February 2026',
  readTime: '7 min read',
  category: 'Game Design',
  published: true,
  body: `The Diver is a real-time text-narrative game: you\u2019re the only contact for Mara, a marine biologist trapped 412 metres down, and messages arrive over real minutes and hours across a three-day playthrough. Building it meant solving the two problems that kill every real-time fiction project: the story branches into a tree nobody can sustain, and the notification engine \u2014 the core mechanic \u2014 dies the moment the app is killed.

Before writing a line of story, I went to the source: Mars Jokela (3 Minute Games, Lifeline), Dave Justus, and Emily Short\u2019s critical analysis. Nine design rules came out of that research, and every engine decision traces back to one.

## The vine, not a tree

The single most important rule, and it\u2019s Justus\u2019s: **branch sparingly, and always fold back.**

A tree grows exponentially \u2014 every choice doubles the branches, and by act three you\u2019re writing scenes nobody will see on a budget that doesn\u2019t exist. A vine branches when it matters and rejoins the main stem quickly: the player\u2019s choices change *how* they experience the next beat \u2014 tone, information, flags \u2014 but the spine of the story holds.

In The Diver that means: choices set flags (oxygen, power, trust), flags gate how later beats play out, and alternate lines exist where they carry moral weight \u2014 not as decoration. The three endings (Mother / Cure / Compromise) are reachable from the spine, but only via different earned routes.

## Real time must be visible

Waiting is the mechanic, so the wait has to be a designed space:

- The persistent radar sits on screen even inside the thread \u2014 the ocean never stops being there.
- A surface layer HUD: live clock, depth gauge, oxygen bar. The waiting itself is visible and tense.
- Catch-up bursts: if the player closes the app for an hour, backlogged messages arrive as a tense cluster \u2014 not a dump.
- QTS sequences synced to haptics, and a comms system that audibly degrades as the station does.

The phone is the horror. Every screen element reinforces "you are her only contact".

## Never punish, never fake

- **No unsignalled deaths.** Mara\u2019s death \u2014 when it happens \u2014 is always earned, foreshadowed, and understood. A cheap jump-scare death is a broken promise to the player.
- **Callbacks over novelty.** Act I choices about oxygen, power, and who to trust resurface in Acts II\u2013III. The Compromise ending is only reachable if the player did the research \u2014 the narrative remembers.
- **Pacing variance as data.** Beats carry timing rules in the content schema \u2014 advance-on-open, scheduled delays, burst windows \u2014 because "when it arrives" is as authored as "what it says".

## The engine that makes it testable

All of those rules would be worthless if they couldn\u2019t be verified. The architecture is three layers:

1. **A pure reducer** \u2014 \`advance(state, action) \u2192 {next, effects}\` \u2014 that never does I/O.
2. **Content as typed data** \u2014 the vine, flag gates, and pacing encoded as data, not code. The engine is a generic interpreter.
3. **A persistence/scheduling layer** bridging the pure engine to Expo\u2019s notification and haptics APIs. Effects are directives the UI interprets \u2014 SCHEDULE_NOTIFICATION, VIBRATE, SHOW_QTS.

Because the engine is pure, TDD actually works: days of play simulate in milliseconds with controlled timestamps, and content validation tests prove every beat\u2019s references exist and no flag is required without being set somewhere reachable. 45 tests, zero runtime deps, dead ends caught before they ship.

The craft lesson generalises past games: **when the mechanic is waiting, the waiting is part of the content \u2014 design it, test it, and never fake it.**`,
}