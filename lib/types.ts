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
  role: string
  challenge: string
  approach: string
  outcome: string
  highlights: string[]
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
