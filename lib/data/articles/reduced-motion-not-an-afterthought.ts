import type { Article } from './types'

export const article: Article = {
  id: "reduced-motion-not-an-afterthought",
  title: "Reduced motion: check the JavaScript as well as the CSS",
  excerpt: "The portfolio’s reveal component and animated counters show why reduced-motion handling needs to reach the code that changes state.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Accessibility",
  published: true,
  body: `The portfolio has reduced-motion rules in its stylesheet, but its motion handling does not stop there. Reveal and AnimatedCounter also consult the preference in JavaScript, where they decide whether to start their work.

These components provide a concrete example of keeping content available when animation is skipped.

## Do not make the final value depend on the animation

AnimatedCounter starts with its final total as the rendered state. Its effect checks the reduced-motion query before setting up the observer and animation loop. Without IntersectionObserver, it also leaves that final value in place.

When animation is enabled, the visible counter can start from zero after it enters view. A preference-change listener can cancel the animation and restore the final value when reduced motion becomes active.

The component also supplies a screen-reader-only version of the total and label while hiding the changing decorative presentation from the accessibility tree. That is a specific implementation decision, not a claim that every assistive technology has been manually tested.

## Keep revealed content available

Reveal checks the reduced-motion preference before setting up its intersection observer. It also has a fallback when the observer API is unavailable. Separately, the smoke suite checks that the homepage's reveal content is visible without JavaScript.

The key relationship is between content and enhancement: reaching the content should not depend on completing a visual effect.

## Check the result in a browser

The accessibility suite emulates reduced motion and checks that counters show their final values. Other tests exercise page content and navigation without assuming that animation has run.

Those checks cover selected behaviour in the portfolio. They do not demonstrate every possible preference change, browser combination, or motion sensitivity. The implementation lesson is narrower and more useful: when JavaScript owns an animation, inspect that JavaScript's state and cancellation paths as well as the CSS duration.`,
}
