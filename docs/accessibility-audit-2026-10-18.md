# Accessibility audit — 18 October 2026

The refreshed portfolio was reviewed against WCAG 2.2 A/AA checks, with additional keyboard, motion, and responsive checks. The automated scan has no remaining violations. This is a development audit, not a claim of full WCAG conformance.

## Scope and method

- Chromium with axe-core via `@axe-core/playwright`, using `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, and `best-practice` rules. No page regions or rules were excluded from the general scan.
- All 32 rendered routes in light and dark themes: the six main pages, four project case studies, 21 articles, and a missing-page response.
- Mobile navigation and invalid contact-form states in both themes.
- Keyboard checks for the skip link, menu focus containment, Escape, focus restoration, and invalid-field focus. Reduced-motion counter behaviour has a regression test.
- Reflow at 320 and 768 CSS pixels, plus a separate text-spacing check at 320px on the homepage and each page template. The latter used 1.5 line height, .12em letter spacing, .16em word spacing, and 2em paragraph spacing, with no horizontal page overflow.
- Supplementary contrast checks replaced each shared hero gradient with its lightest colour stop (`#242035`) on representative home, About, project, and article pages in both themes. This checks a conservative background for text that axe cannot evaluate over gradients.

## Findings fixed

| Finding | Change |
| --- | --- |
| The skip link scrolled to the main landmark without transferring keyboard focus. | All main landmarks accept programmatic focus with `tabIndex={-1}`. The next Tab goes to content rather than back through navigation. |
| The yellow focus outline had weak contrast on pale surfaces. | Focus uses a dark outline with a white outer ring, visible against both light and dark surfaces. |
| Mobile-menu numbers and small homepage discipline numbers had insufficient contrast. | Increased their foreground opacity. Also raised the homepage Contact label above its borderline contrast value. |
| Scrolling could animate navigation text and its background through low-contrast intermediate colours. | Navigation colour changes now apply immediately; shadow and opacity feedback remain. |
| The mobile dialog left the underlying page available to background interaction. | Background body siblings become inert while the dialog is open; their previous state is restored on close. |
| Disabled Markdown checklist boxes in two articles had no accessible name. | Each checkbox is wrapped in a label containing its checklist text. |
| Counters animated despite reduced-motion preferences and could leave animation frames running after unmount. | Reduced motion shows the final totals; preference changes finish the animation; pending frames are cancelled on cleanup. Duplicate counter labels are hidden from the accessibility tree. |
| The contact form did not state that all fields are required, and its confirmation replaced the focused form. | Added required-field guidance and native required semantics. Confirmation receives focus, and returning to the form focuses Name. Existing error descriptions and first-error focus remain. |
| The portrait annotation could be painted beneath the transparent portrait image. | Raised the annotation above the image. |

## Verification and remaining manual scope

The repository contains the repeatable audit in `e2e/accessibility.spec.ts` and the existing functional/responsive suite in `e2e/smoke.spec.ts`. Run `npm run test:e2e` for the full browser suite. Detailed axe `violations` and `incomplete` results are attached to each scan in Playwright output; generated reports are ignored by Git.

The final suite comprises 87 browser tests. Unit tests, lint, TypeScript checking, and a production build also pass.

Axe still reports contrast items requiring review where there are gradients, transparent imagery, decorative glyphs, or overlapping elements. The conservative gradient checks pass; the portrait annotation and decorative arrow were inspected separately. These items are not silently suppressed or treated as automated passes.

Native labels, landmark structure, heading hierarchy, image alternatives, iframe naming, keyboard order, and focus visibility were reviewed. Live NVDA/JAWS/VoiceOver testing and third-party YouTube player/media accessibility were not performed, so those remain outside this audit's coverage.

## References

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [Target size minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [axe result types, including items needing review](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md)
