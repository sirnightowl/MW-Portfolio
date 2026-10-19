import { Project } from '../types'

// Year identifies the reviewed case-study edition, not a launch date.
export const projects: Project[] = [
  {
    "id": "sendadvisor",
    "title": "SENDadvisor",
    "description": "A SEND directory bringing days out, specialist services, education, council information, and guidance into one searchable interface for families in England.",
    "longDescription": "A directory for families looking for SEND-related places, services, education, and guidance in England. Search, category filters, and council pages connect the directory to official information. This case study examines the implemented interface and candidate-review tooling.",
    "image": "/images/projects/sendadvisor-card.png",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Cloudflare Workers",
      "OpenNext",
      "Cloudflare D1",
      "Tailwind CSS"
    ],
    "category": "Full Stack",
    "liveUrl": "https://www.sendadvisor.co.uk",
    "featured": true,
    "year": 2026,
    "status": "Live product",
    "isLive": true,
    "leadMetric": "Search, council information, and a separate candidate-review workflow",
    "role": "Product and interface design, front-end development, and candidate-review tooling.",
    "challenge": "The product needs to organise several kinds of information: places to visit, specialist services, schools, guidance, and official council destinations. Search and browsing need distinct routes, while missing fields and uneven directory coverage need to remain visible rather than imply completeness.",
    "challengeTitle": "Give different needs a clear starting point.",
    "approach": "The homepage separates search scope, keyword, and location. The days-out route reads category, feature, location, sorting, and view parameters. Council pages bring official links, available contacts, and related directory results into a shared template. Behind the public site, a local audit server stores candidate-review state; approved candidates feed a separate go-live diff script with postcode and authority checks.",
    "approachTitle": "Connect the interface to inspectable data boundaries.",
    "outcome": "The live site provides search, filtered directory views, guidance routes, and council-information pages. The repository contains candidate-review, publication-preparation, backup, and restore tooling. These are implemented capabilities; no task-completion improvement, complete data coverage, recurring restore-drill record, or research finding is claimed here.",
    "outcomeTitle": "A live directory with explicit limits.",
    "highlights": [
      "Search scope, keyword, and location inputs",
      "Category and feature filters on the days-out route",
      "Council templates with conditional official links and contacts",
      "Separate candidate-review state and approved-batch export",
      "Postcode and authority checks in publication preparation"
    ],
    "cardStyle": {
      "bg": "bg-sky",
      "text": "text-ink",
      "textMuted": "text-ink/60",
      "textDescription": "text-ink/75",
      "border": "border-ink",
      "shadow": "shadow-[8px_10px_0_#1f1f1d]"
    },
    "imageAlt": "SENDadvisor directory interface",
    "reviewedAt": "2026-10-19"
  },
  {
    "id": "horrorometer",
    "title": "Horrorometer",
    "description": "A horror catalogue and review platform with browsing controls, public title pages, and an overall review score.",
    "longDescription": "A horror-focused catalogue and review platform for movies, TV, and books. This case study follows the public movie catalogue, a title page, and the signed-out review handoff, alongside the inspected review form and API contract.",
    "image": "/images/projects/horrorometer-case-study/catalogue.webp",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Zod",
      "Cloudflare Workers",
      "OpenNext",
      "Drizzle ORM"
    ],
    "category": "Full Stack",
    "liveUrl": "https://www.horrorometer.com",
    "featured": true,
    "year": 2026,
    "status": "Live product",
    "isLive": true,
    "leadMetric": "Public discovery · Title context · Review inputs",
    "role": "Product design and implementation across catalogue interfaces, review inputs, API integrations, and device authorisation.",
    "challenge": "Browsing a catalogue, understanding a title, and contributing a review are different tasks. The interface needs clear discovery controls and title context before an account-specific action. Its rating controls also need to be described accurately: the public summary, review form, and API schema are separate parts of the implementation.",
    "challengeTitle": "Make discovery and review intent clear.",
    "approach": "The movie route reads filter and sorting parameters; the client updates query state and requests catalogue data. The shared title interface brings artwork, metadata, credits, a rating summary, and library actions together. For a signed-out visitor, Write Review opens sign-in with the title path in a redirect parameter. The inspected review form collects an overall score, title, text, and spoiler flag. The review API validates requests with a schema that also retains optional genre-specific fields.",
    "approachTitle": "Trace the public flow into its implementation.",
    "outcome": "The live site provides a public catalogue, title pages, and a sign-in handoff for review writing. The inspected source defines overall reviews, optional API rating dimensions, catalogue failure states, and device-authorisation logic. These are implementation observations, not measured improvements in discovery, completed sign-in tests, or production reliability guarantees.",
    "outcomeTitle": "A live catalogue with inspectable review boundaries.",
    "highlights": [
      "Movie browsing controls and URL-based filter state",
      "Public title pages with metadata and rating summaries",
      "Signed-out review action leading to authentication",
      "Overall review score, text, and spoiler flag in the inspected form",
      "Optional genre dimensions retained in the review API schema"
    ],
    "cardStyle": {
      "bg": "bg-ink",
      "text": "text-paper",
      "textMuted": "text-paper/60",
      "textDescription": "text-paper/75",
      "border": "border-paper",
      "shadow": "shadow-[8px_10px_0_#fffaf2]"
    },
    "reviewedAt": "2026-10-19",
    "imageAlt": "Horrorometer movie catalogue with browsing controls above a poster grid"
  },
  {
    "id": "kanaboards",
    "title": "Kanaboards",
    "description": "An unreleased planning workspace connecting shared board assignments to coding agents running in a local checkout.",
    "longDescription": "An unreleased planning workspace in development. MCP tool definitions, assignment handlers, and a local daemon connect shared board state to coding-agent execution. The runner registry includes OpenCode, Codex, and Claude adapters.",
    "image": "/images/projects/kanaboards-card.png",
    "technologies": [
      "SolidJS",
      "TypeScript",
      "MCP",
      "Cloudflare D1",
      "Cloudflare Workers",
      "Node.js"
    ],
    "category": "Full Stack",
    "featured": true,
    "year": 2026,
    "status": "Unreleased",
    "isLive": false,
    "leadMetric": "Unreleased workspace · Shared assignments and local runners",
    "role": "Product design, full-stack development, and agent workflow implementation.",
    "challenge": "A board assignment and a running coding process are different states. The integration needs to describe available work, claim an assignment, identify its repository and branch, and report progress while execution happens locally.",
    "challengeTitle": "Connect planning state to a specific local run.",
    "approach": "MCP definitions describe operations and input schemas; server handlers check assignment state before accepting changes. The local daemon polls and claims work, checks repository and branch context, selects a runner, and sends heartbeats. The registry resolves an explicit CLI choice, an environment setting, or an assignment hint before falling back to its default runner.",
    "approachTitle": "Define the contract between the board and the runner.",
    "outcome": "Kanaboards remains unreleased. Its repository contains typed tool definitions, assignment handlers, a local execution daemon, and adapters for OpenCode, Codex, and Claude. This demonstrates an implementation in development, without claiming public adoption, measured productivity gains, or reliability across every environment.",
    "outcomeTitle": "An integration in development, ahead of public release.",
    "highlights": [
      "MCP tool definitions with input schemas and tier metadata",
      "Assignment state checks in server handlers",
      "Local repository and branch checks before execution",
      "OpenCode, Codex, and Claude runner adapters",
      "Heartbeat and progress reporting in the local daemon"
    ],
    "cardStyle": {
      "bg": "bg-sage",
      "text": "text-ink",
      "textMuted": "text-ink/60",
      "textDescription": "text-ink/75",
      "border": "border-ink",
      "shadow": "shadow-[8px_10px_0_#1f1f1d]"
    },
    "reviewedAt": "2026-10-19"
  },
  {
    "id": "stay-with-me-deep-sea",
    "title": "Stay With Me: Deep Sea",
    "description": "An unreleased narrative horror game combining a message thread, timed story rules, recovered camera views, and a persistent archive.",
    "longDescription": "An unreleased narrative horror game built with React Native and Expo. A message thread connects the player to Mara at the Halcyon research station. Story conditions, choices, timed progression, and recovered material are represented in the game engine and mobile interface.",
    "image": "/images/projects/stay-with-me-deep-sea.png",
    "imageAlt": "Halcyon research station on the dark ocean floor, lit by a small submersible",
    "imagePosition": "center 78%",
    "gallery": [
      {
        "src": "/images/projects/stay-with-me-moon-pool.webp",
        "alt": "Halcyon’s moon pool with a submersible, safety rails, and the dark ocean beyond its observation window",
        "caption": "The moon pool: one of Halcyon’s recovered camera views."
      },
      {
        "src": "/images/projects/stay-with-me-service-gallery.webp",
        "alt": "A flooded service corridor with amber emergency lights and a trailing cable disappearing into the water",
        "caption": "The service gallery: environmental storytelling through recovered footage."
      }
    ],
    "technologies": [
      "TypeScript",
      "React Native",
      "Expo",
      "AsyncStorage",
      "Local notifications"
    ],
    "category": "Game Design",
    "featured": true,
    "year": 2026,
    "status": "Unreleased",
    "isLive": false,
    "leadMetric": "Unreleased game · Story engine, recovered material, and mobile integrations",
    "role": "Narrative interface design and implementation across story rules, the archive, and mobile integrations.",
    "challenge": "The story needs to manage conditional messages and choices while keeping engine rules separate from device effects. Recovered material also needs a persistent place outside the active conversation. Whether the pacing creates suspense or the choices feel consequential requires playtesting beyond source inspection.",
    "challengeTitle": "Separate story progression from device behaviour.",
    "approach": "The engine accepts state, timestamped actions, story content, and a random-number source, then returns the next state and effect descriptions. Native code handles notification scheduling; the browser notification module is deliberately a no-op. The mobile archive stores recovered logs, camera items, and codas locally, with checks to avoid duplicate IDs. Content-validation tests include missing references, duplicate IDs, unknown flags, and invalid targets.",
    "approachTitle": "Typed story rules, platform effects, and a separate archive.",
    "outcome": "The unreleased repository contains a story engine, authored content, camera and archive interfaces, local persistence, and native-notification integration. Validation cases check specific content-structure errors. This is not a claim of complete path coverage, verified background delivery on every device, or demonstrated player reactions. Public release is still ahead.",
    "outcomeTitle": "An unreleased narrative game with inspectable building blocks.",
    "highlights": [
      "Conditional messages and choices in typed story content",
      "Engine returns state changes and effect descriptions",
      "Separate native and browser notification implementations",
      "Locally persisted logs, camera items, and codas",
      "Validation cases for story references, IDs, flags, and targets"
    ],
    "cardStyle": {
      "bg": "bg-ink",
      "text": "text-paper",
      "textMuted": "text-paper/60",
      "textDescription": "text-paper/75",
      "border": "border-paper",
      "shadow": "shadow-[8px_10px_0_#1f1f1d]"
    },
    "reviewedAt": "2026-10-19"
  }
]
