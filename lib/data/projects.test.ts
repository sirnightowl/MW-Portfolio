import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('project case-study data', () => {
  it('has a unique visual for every project', () => {
    const images = projects.map((project) => project.image)
    expect(new Set(images).size).toBe(projects.length)
  })

  it('contains the evidence required by every case-study page', () => {
    for (const project of projects) {
      expect(project.longDescription).toBeTruthy()
      expect(project.role).toBeTruthy()
      expect(project.challenge).toBeTruthy()
      expect(project.approach).toBeTruthy()
      expect(project.outcome).toBeTruthy()
      expect(project.highlights.length).toBeGreaterThanOrEqual(3)
      expect(project.technologies.length).toBeGreaterThanOrEqual(3)
    }
  })
})
