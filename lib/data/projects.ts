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
    "description": "A horror discovery and review platform with Creepy, Gory, and Jumpy dimensions alongside an overall rating.",
    "longDescription": "A horror-focused catalogue and review platform for movies, TV, and books. Its review model records an overall rating alongside optional Creepy, Gory, and Jumpy values, separating an overall judgement from different aspects of a horror title.",
    "image": "/images/projects/horrorometer-card.png",
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
    "leadMetric": "Overall reviews and optional Creepy, Gory, and Jumpy dimensions",
    "role": "Product design and implementation across review inputs, API integrations, and device authorisation.",
    "challenge": "An overall score does not describe whether a title relies on atmosphere, gore, or sudden shocks. Horrorometer models those dimensions separately. The application also has to handle catalogue dependencies and the state transitions involved in approving a device and issuing an API token.",
    "challengeTitle": "Describe the kind of scare as well as the score.",
    "approach": "The review-input schema requires an integer overall rating from 1 to 10; Creepy, Gory, and Jumpy accept optional, nullable integers on the same scale. The TMDB proxy uses a circuit-breaker utility with optional fallbacks. Device authorisation checks the result of conditional updates and a single-use approved-code claim before continuing. The Cloudflare build uses OpenNext and project-specific patch scripts.",
    "approachTitle": "Make inputs and state transitions explicit.",
    "outcome": "The project is live, with a review schema, catalogue integrations, and device-authorisation implementation. Service tests use a controllable database mock to exercise defined outcomes. Those tests are not concurrent production-database verification, and the circuit breaker does not guarantee an error-free interface during an upstream outage.",
    "outcomeTitle": "A live product with inspectable implementation boundaries.",
    "highlights": [
      "Required overall review score and optional genre-specific dimensions",
      "Circuit-breaker utility used by the TMDB proxy",
      "Conditional state changes in device authorisation",
      "Mock-based tests for winning and losing device-code claims",
      "Project-specific Next.js and OpenNext build pipeline"
    ],
    "cardStyle": {
      "bg": "bg-ink",
      "text": "text-paper",
      "textMuted": "text-paper/60",
      "textDescription": "text-paper/75",
      "border": "border-paper",
      "shadow": "shadow-[8px_10px_0_#fffaf2]"
    },
    "reviewedAt": "2026-10-19"
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
