import type { Project } from '@/lib/types'
import CaseStudyScreen, { type CaseStudyScreenContent } from './CaseStudyScreen'
import styles from './VisualCaseStudy.module.css'

const capture = {
  width: 1280, height: 720,
  statusLabel: 'Unreleased / Local development build',
  captureNote: 'Bundled sample data, not customer activity. Select the image to view it larger.',
}

const screens: CaseStudyScreenContent[] = [
  {
    ...capture, id: 'board', number: '01', title: 'Keep the shape of the work visible.',
    intro: 'The board groups cards into workflow columns, with priority, parent context, labels and checklist summaries on the cards. This is the actual development interface running the repository’s bundled sample workspace.',
    image: '/images/projects/kanaboards-case-study/board.webp',
    alt: 'Kanaboards local sample board with Signal Queue, Workbench and Review Deck columns, priority labels, blocked state, card counts and a view switcher.',
    label: 'Board / Sample workspace',
    notes: [
      ['Show status at two levels', 'Columns represent workflow stages; cards expose their own priority and blocked state. These are visible interface distinctions, without a claim that they improve prioritisation.'],
      ['Keep capacity in the column header', 'The column component renders a card count against its configured work-in-progress limit. An exceeded limit gets a separate style; this does not establish that moves are prevented.'],
      ['Treat the content as a fixture', 'EdgeBoard Launch Train, its people, dates and completion counts come from bundled sample data. The green board indicator in this local view does not verify cloud synchronisation.'],
    ],
  },
  {
    ...capture, id: 'card-context', number: '02', title: 'Bring the task and its context together.',
    intro: 'Opening a card brings its summary, discussion and editable attributes into a detail panel. The captured comments are part of the sample workspace, not research feedback or evidence of team adoption.',
    image: '/images/projects/kanaboards-case-study/card.webp',
    alt: 'Kanaboards sample card detail showing its title, summary, fictional discussion, priority and owner attributes, state controls, and Start in editor button.',
    label: 'Card detail / Sample discussion',
    notes: [
      ['Keep the task identifiable', 'The detail panel repeats the card ID, title and sprint, then groups attributes and state separately from the main discussion. Checklist and attachment controls also belong to this component.'],
      ['Describe the editor action accurately', 'The inspected Start in editor handler builds a card prompt and writes it to the clipboard. This button does not itself start a coding process or prove an editor integration completed.'],
      ['Separate discussion from evidence', 'The visible Nadia and Ari comments are seeded examples from mock-board.ts. They illustrate the discussion layout and are not quotations from participants, colleagues or customers.'],
    ],
  },
  {
    ...capture, id: 'hierarchy', number: '03', title: 'Show relationships beyond a status column.',
    intro: 'The hierarchy view presents the same sample work as an epic, stories and tasks. Expanding the Unassigned group reveals cards outside that parent structure while retaining their workflow column labels.',
    image: '/images/projects/kanaboards-case-study/hierarchy.webp',
    alt: 'Kanaboards hierarchy view with nested epic, story and task rows, progress summaries, column labels and an expanded Unassigned group.',
    label: 'Hierarchy / Parent relationships',
    notes: [
      ['Expose the parent structure', 'The hierarchy component builds a tree from board cards and offers separate expand and collapse controls for epics and stories. Selecting a row opens its card.'],
      ['Keep unparented work discoverable', 'In this view, Unassigned means outside the displayed parent tree. It does not mean that a card has no owner; those are different properties.'],
      ['Bound the meaning of progress', 'Progress is calculated from child-card relationships and completion state in the board model. The fixture’s fractions and points are not delivery metrics or measured productivity gains.'],
    ],
  },
]

const boundaries = [
  ['Tool contract', 'MCP definitions describe operations, input schemas and tool tiers. A definition alone does not prove a successful client connection.'],
  ['Assignment state', 'Server handlers check agent ownership and assignment state when accepting work. These checks describe specific code paths, not a complete security audit.'],
  ['Local checkout', 'The daemon claims assignments and checks repository origin and branch context before invoking a runner. These screens do not demonstrate a completed run.'],
  ['Runner selection', 'The registry resolves a CLI choice, environment setting or assignment hint, then defaults to OpenCode. Codex and Claude adapters are also registered.'],
]

export default function KanaboardsCaseStudy({ project }: { project: Project }) {
  return (
    <div className={`container-custom ${styles.caseStudy}`}>
      <nav aria-label="Case study sections" className={styles.contents}>
        {[
          ['context', 'Context'], ['board', 'Board'], ['card-context', 'Card detail'],
          ['hierarchy', 'Hierarchy'], ['implementation', 'Implementation'], ['reflection', 'Reflection'],
        ].map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>

      <section tabIndex={-1} id="context" aria-labelledby="context-title" className={styles.context}>
        <div>
          <p className="eyebrow">Unreleased / The design problem</p>
          <h2 id="context-title" className={styles.title}>{project.challengeTitle}</h2>
          <p className={styles.body}>{project.challenge}</p>
        </div>
        <aside className={styles.scope} aria-label="Case study scope">
          <p className="eyebrow">Unreleased development build</p>
          <p>Kanaboards is unreleased. These three real screenshots were captured on 19 October 2026 from the local development build using its built-in, local-storage-backed sample workspace.</p>
          <p>Sample names, comments, dates and counts illustrate the interface. They are not customer activity, user research or release evidence. No agent was launched for these captures.</p>
        </aside>
      </section>

      {screens.map((screen) => <CaseStudyScreen key={screen.id} screen={screen} />)}

      <section tabIndex={-1} id="implementation" aria-labelledby="implementation-title" className={styles.review}>
        <p className="eyebrow">In the unreleased build</p>
        <h2 id="implementation-title" className={styles.title}>Connect the board to a local runner.</h2>
        <p className={styles.body}>The planning screens and agent execution are separate parts of the implementation. Source inspection identifies four boundaries behind the integration; the screenshots document the interface, not an end-to-end execution test.</p>
        <ol role="list" className={styles.pipeline} aria-label="Kanaboards implementation boundaries">
          {boundaries.map(([title, text], index) => (
            <li key={title}><span aria-hidden="true" className={styles.stageNumber}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
        <div className={styles.reviewNotes}>
          <p>The daemon contains heartbeat and progress-reporting logic. Its presence does not establish reliable recovery in every environment or a measured reduction in coordination work.</p>
          <p>The captured workspace uses the project’s localhost development fallback. It does not verify remote persistence, multi-user presence, permissions or cloud sync.</p>
        </div>
      </section>

      <section tabIndex={-1} id="reflection" aria-labelledby="reflection-title" className={styles.reflection}>
        <div>
          <p className="eyebrow">05 / Outcome &amp; reflection</p>
          <h2 id="reflection-title" className={styles.title}>{project.outcomeTitle}</h2>
          <p className={styles.body}>{project.outcome}</p>
        </div>
        <div className={styles.nextQuestions}>
          <h3>What needs evaluation before release</h3>
          <ul>
            <li>Can someone distinguish a card’s owner, parent relationship and workflow state?</li>
            <li>Does Start in editor make its clipboard behaviour clear before the action?</li>
            <li>Can someone follow an assignment through claim, local execution, interruption and completion?</li>
          </ul>
          <p>These are proposed evaluation questions, not completed studies or verified outcomes. Public release is still ahead.</p>
        </div>
      </section>
    </div>
  )
}
