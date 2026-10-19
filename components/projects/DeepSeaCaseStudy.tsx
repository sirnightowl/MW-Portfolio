import type { Project } from '@/lib/types'
import CaseStudyScreen, { type CaseStudyScreenContent } from './CaseStudyScreen'
import styles from './VisualCaseStudy.module.css'

const capture = {
  width: 1280, height: 720,
  statusLabel: 'Unreleased / Local web build',
  captureNote: 'Real local web capture of the unreleased game. Select the image to view it larger.',
}

const screens: CaseStudyScreenContent[] = [
  {
    ...capture, id: 'title-screen', number: '01', title: 'Enter through the incident record.',
    intro: 'The title screen places the Halcyon habitat behind a local incident menu. The captured build still uses the subtitle Ocean Floor; this portfolio uses the owner-confirmed title Stay With Me: Deep Sea.',
    image: '/images/projects/deep-sea-case-study/title.webp',
    alt: 'Unreleased game title screen showing Halcyon underwater, Stay With Me: Ocean Floor, a disabled Continue button, New Game and a web-build version label.',
    label: 'Title / Local incident record',
    notes: [
      ['Use the actual start state', 'This fresh browser session shows Continue disabled with No active incident, alongside New Game. It documents the implemented entry state, not a tested onboarding improvement.'],
      ['Carry the setting into the controls', 'The equipment frame, terminal lettering and incident labels belong to the game interface. The habitat artwork is an existing project asset, not a new portfolio mockup.'],
      ['Keep build labels in context', 'The screenshot retains Ocean Floor and VERSION 1.0.0 / BUILD WEB. Those are labels in this development export, not evidence of a public release or native-device certification.'],
    ],
  },
  {
    ...capture, id: 'conversation', number: '02', title: 'Make the conversation the main interface.',
    intro: 'The opening thread introduces Mara through arriving messages and three authored replies. Her identity, air-status label and current task sit above the conversation; the reply controls occupy a separate area below it.',
    image: '/images/projects/deep-sea-case-study/thread.webp',
    alt: 'Opening conversation with Mara Voss, the task Establish a stable channel with Mara, four incoming messages and three reply buttons at the bottom.',
    label: 'Thread / First contact',
    notes: [
      ['Separate reading from replying', 'The thread component reveals message history before offering the current choice node. The capture shows the first reply set after the opening messages have arrived.'],
      ['Keep the immediate task accessible', 'The current-task component can open the full objective in a modal. Its presence describes a way to revisit context; it does not establish that players understand every objective.'],
      ['Trace choices to authored data', 'The opening replies are defined in act1.ts. They set flags and rejoin the pressure-model message. Different wording here should not be presented as three entirely separate story paths.'],
    ],
  },
  {
    ...capture, id: 'camera-archive', number: '03', title: 'Give recovered material a place to return to.',
    intro: 'After the first reply and the subsequent messages, the opening galley frame becomes available in the camera archive. The interface describes recovered local buffers, rather than a live camera connection.',
    image: '/images/projects/deep-sea-case-study/camera.webp',
    alt: 'Camera archive in the unreleased game showing Recovered frames / No live uplink, a recovered CAM 01 Hab Galley still and its source label.',
    label: 'Camera archive / Recovered galley frame',
    notes: [
      ['Distinguish a record from a live feed', 'The archive heading says No live uplink and the note identifies local buffers with unsynchronised source clocks. The image is an authored story asset, not real underwater footage.'],
      ['Gate material by revealed history', 'The camera screen checks recovered camera IDs against the revealed portion of game history. The archive preserves recovery order instead of listing every source asset from the start.'],
      ['Keep the source attached', 'The camera-card component pairs the still with its source, recovery status, timestamp and caption. Archive state is stored locally; this capture does not verify cross-device sync or every save-recovery case.'],
    ],
  },
]

const boundaries = [
  ['Authored content', 'Typed acts describe messages, choices, conditions, delays and references. Validation tests include dangling references, duplicate IDs and unknown flags.'],
  ['Story engine', 'advance accepts state, timestamped actions, content and a random-number source, returning next state and effect descriptions.'],
  ['Interface & archive', 'The thread reveals history and records recovered items. The archive provider uses local storage and checks camera and coda IDs to avoid duplicates.'],
  ['Platform effects', 'Native notification code handles device scheduling. The web notification module deliberately returns unavailable and does not schedule browser notifications.'],
]

export default function DeepSeaCaseStudy({ project }: { project: Project }) {
  return (
    <div className={`container-custom ${styles.caseStudy}`}>
      <nav aria-label="Case study sections" className={styles.contents}>
        {[
          ['context', 'Context'], ['title-screen', 'Title screen'], ['conversation', 'Conversation'],
          ['camera-archive', 'Camera archive'], ['implementation', 'Implementation'], ['reflection', 'Reflection'],
        ].map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>

      <section tabIndex={-1} id="context" aria-labelledby="context-title" className={styles.context}>
        <div>
          <p className="eyebrow">Unreleased / The design problem</p>
          <h2 id="context-title" className={styles.title}>{project.challengeTitle}</h2>
          <p className={styles.body}>{project.challenge}</p>
        </div>
        <aside className={styles.scope} aria-label="Case study scope">
          <p className="eyebrow">Unreleased game / Browser capture</p>
          <p>Three real screenshots captured on 19 October 2026 from the existing 18 October local web export. The title, opening replies and first recovered camera frame were reached through the game controls.</p>
          <p>The dialogue is authored fiction, not participant feedback. These captures show the browser interface, not native notification delivery, a complete playthrough or evidence of player reactions. The game remains unreleased.</p>
        </aside>
      </section>

      {screens.map((screen) => <CaseStudyScreen key={screen.id} screen={screen} />)}

      <section tabIndex={-1} id="implementation" aria-labelledby="implementation-title" className={styles.review}>
        <p className="eyebrow">In the unreleased build</p>
        <h2 id="implementation-title" className={styles.title}>Keep story rules separate from device effects.</h2>
        <p className={styles.body}>The engine, authored content, interface and platform adapters have distinct responsibilities. The source makes those boundaries inspectable without treating a working screen as proof of every story path or device behaviour.</p>
        <ol role="list" className={styles.pipeline} aria-label="Deep Sea implementation boundaries">
          {boundaries.map(([title, text], index) => (
            <li key={title}><span aria-hidden="true" className={styles.stageNumber}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
        <div className={styles.reviewNotes}>
          <p>Content-validation cases check specific structural errors. They do not establish that every branch has been played, that all endings work on every device or that the pacing creates suspense.</p>
          <p>The browser build asks the player to keep its window open for new messages. Native scheduling is a separate implementation and needs its own device evidence before making delivery guarantees.</p>
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
            <li>Can someone distinguish arriving messages, story waits and moments that need a reply?</li>
            <li>Does the recovered-camera archive make its timing and availability clear?</li>
            <li>How do pacing, text size and interruptions affect the experience on real devices?</li>
          </ul>
          <p>These are proposed evaluation questions. No playtesting findings, measured engagement or public release are claimed.</p>
        </div>
      </section>
    </div>
  )
}
