import type { Article } from './types'

export const article: Article = {
  id: 'accessible-by-default',
  title: 'Accessible by default: how I bake it in from the first sketch',
  excerpt: 'Accessibility isn\u2019t a checklist at the end \u2014 it\u2019s a posture. Here\u2019s how I keep it present from wireframe through to production code.',
  date: '2026-03-12',
  displayDate: '12 March 2026',
  readTime: '6 min read',
  category: 'Accessibility',
  published: true,
  body: `I work on public services. Accessibility there isn\u2019t a nice-to-have or a backlog line item \u2014 it\u2019s a legal obligation under the Public Sector Bodies Accessibility Regulations, and more importantly, it\u2019s the difference between a service that works for everyone and one that quietly excludes people.

But "accessibility" as a final-stage audit is the most expensive, least effective way to do it. You find problems late, when they\u2019re embedded in design decisions and component APIs that are hard to unwind. So I bake it in from the first sketch. Here\u2019s what that actually looks like in practice.

## Wireframes: start with the screen reader

Before I open Figma, I think about the page as a linear document. What does a screen reader user hear when they tab through it? That ordering drives the DOM order, which drives the visual layout \u2014 not the other way around.

In practice that means:

- The page has one H1. Always. Everything else is an H2 or below.
- The skip link is the first focusable element \u2014 in the layout component from the start, never retrofitted.
- Sections have headings, even visually hidden ones, so heading navigation has landmarks to land on.
- Interactive elements are real buttons or real links, not styled divs. If it has an onClick, it needs a role, a tabindex, and keyboard handlers \u2014 or it needs to just be a button.

I sketch the visual layout on top of that structure, not the reverse. If a design decision breaks the semantic order, the design changes.

## Design tokens: contrast is a system, not a manual check

I define colour tokens once, and I define them to pass WCAG 2.2 AA:

- Body text on its background meets 4.5:1 minimum.
- Large text (18pt+ or 14pt+ bold) meets 3:1.
- Interactive elements and focus indicators meet 3:1 against adjacent colours.
- Muted labels and metadata meet 4.5:1 \u2014 no opacity tricks that drop text below the threshold.

This site\u2019s own Tailwind config uses opacity modifiers like \`text-ink/60\`, and I\u2019ve audited every one against its background. If a token doesn\u2019t pass, it doesn\u2019t ship \u2014 I\u2019d rather darken a muted label than ship a contrast failure.

The payoff: I never manually check contrast on a finished page. The system handles it.

## Components: build the constrained version first

When I build a component, I start with the most constrained version and layer up:

1. **Keyboard only.** Tab to it, activate with Enter/Space, dismiss with Escape. If it\u2019s a modal, focus is trapped and returned on close.
2. **Screen reader.** Roles, labels, live regions for dynamic content, aria-expanded/aria-controls for toggles.
3. **200% zoom.** Text reflows, no horizontal scroll, no overlapping elements.
4. **Reduced motion.** Animations collapse to instant or near-instant under prefers-reduced-motion.

Only after all four pass do I add the polish \u2014 hover states, motion, decorative layering \u2014 and decoration is always \`aria-hidden\` so it never pollutes the assistive tech experience.

## The audit that wasn\u2019t needed

I ran axe-core against this portfolio after launch. Zero violations. Not because I\u2019m perfect \u2014 because the decisions that prevent violations were made at the token, component, and layout level before any code was written.

That\u2019s what "accessible by default" means. Not that you\u2019ll never find a bug. But that the system makes the accessible path the easy path, and the inaccessible path the one that requires extra work.

## The checklist I do use

I don\u2019t have a final-stage accessibility checklist. I have a starting-stage one:

- [ ] One H1 per page, logical heading order
- [ ] Skip link present and functional
- [ ] All interactive elements are native HTML or have full ARIA parity
- [ ] Focus visible on every interactive element \u2014 not just links
- [ ] Colour tokens audited for contrast at every opacity level used
- [ ] Motion respects prefers-reduced-motion
- [ ] Images have alt text, or aria-hidden if decorative
- [ ] Forms have labels, error association, and no aria-invalid="false" on pristine fields

That list runs before I write the component, not after.`,
}