export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  displayDate: string
  readTime: string
  category: string
  published: boolean
  body?: string
}