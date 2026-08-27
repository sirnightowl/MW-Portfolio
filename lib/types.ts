export interface CardStyle {
  bg: string
  text: string
  textMuted: string
  textDescription: string
  border: string
  shadow: string
  accent?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  thumbnail?: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  year: number
  status: string
  isLive?: boolean
  leadMetric?: string
  role: string
  challenge: string
  challengeTitle: string
  approach: string
  approachTitle: string
  outcome: string
  outcomeTitle: string
  highlights: string[]
  cardStyle: CardStyle
}

export type TimelineEntryType = 'job' | 'project' | 'life' | 'education'

export interface TimelineEntry {
  id: string
  date: string
  displayDate: string
  title: string
  subtitle?: string
  description: string
  type: TimelineEntryType
  link?: string
  tags?: string[]
}