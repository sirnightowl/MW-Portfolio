import type { Article } from './types'

export const article: Article = {
  id: 'reduced-motion-not-an-afterthought',
  title: 'prefers-reduced-motion is not an accessibility tax',
  excerpt: 'Motion design that respects reduced motion from the start \u2014 and ends up calmer, faster, and better for every user.',
  date: '2025-08-16',
  displayDate: '16 August 2025',
  readTime: '4 min read',
  category: 'Accessibility',
  published: true,
  body: `Every front-end developer has met prefers-reduced-motion as a checkbox at the end of a project: bolt a media query on, collapse the animations, ship. I did it that way for years. The posture is wrong, and it\u2019s wrong in a way that costs you twice \u2014 once in accessibility quality, and once in design quality.

Here\u2019s the reframe that changed how I build: **reduced motion isn\u2019t a degraded mode. It\u2019s a design constraint that produces better motion design \u2014 the same way designing for a cracked Android phone produces better layouts.**

## What reduced motion actually signals

The media query isn\u2019t "this user hates fun". It\u2019s a user telling you, unprompted, that movement on screen causes them real problems \u2014 vestibular disorders, motion sickness, migraines, and conditions nobody enumerates because the query doesn\u2019t ask. That\u2019s a startlingly high-trust piece of information, and honouring it fully \u2014 not partially, not "just the big ones" \u2014 is the entire job.

Parallax, autoplaying carousels, bounce-eased reveals, spinners with more than two rotations: these aren\u2019t decoration for these users. They\u2019re the thing that makes a site unusable.

## The implementation pattern that scales

I\u2019ve landed on three rules, applied everywhere:

1. **The reduced-motion rule is global, not per-component.** One media query in the base layer collapses animation durations to effectively zero across the whole site. Per-component opt-outs mean every new component is a fresh chance to forget.
2. **The JS-driven animations check it too.** A global CSS rule can\u2019t stop a JavaScript animation loop \u2014 the scroll-reveal component on this very site checks the query before it animates. If your reveal library doesn\u2019t, it\u2019s the wrong library.
3. **Opacity and color are the safe vocabulary.** "No motion" doesn\u2019t mean "no feedback" \u2014 fades and colour changes carry transition information without moving anything. The reduced-motion version of a component should still feel responsive; instantness is the goal, deadness is a bug.

## What the constraint buys back

Here\u2019s the part I didn\u2019t expect: **designing the reduced-motion version first makes the full version better.**

When you start with "how does this feel with no movement", you\u2019re forced to put the information and the hierarchy in the right place \u2014 because nothing is going to swoop in to compensate for a weak layout. Then the motion you add has to earn its place: does this movement explain something (where a panel came from, that an item was added), or is it just demonstrating that you can?

The honest answer, most of the time, is demonstrating. The motion that survives that question \u2014 a card lifting to show it\u2019s interactive, a panel sliding from where it opened \u2014 is semantic motion, and it\u2019s the motion worth keeping.

## The posture, in one paragraph

Motion is a layer, not a foundation: the layout, hierarchy, and state changes must work with animation disabled, because that\u2019s not a degraded state \u2014 it\u2019s the state a meaningful fraction of your users experience all the time. Design the still frame first, earn every movement second, and honour the query everywhere, not just in the hero. It\u2019s less work than retrofitting, calmer for everyone, and \u2014 consistently, in my experience \u2014 a better site.`,
}