import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blob, DotCluster, Squiggle, Star } from './DecorativeShapes'

describe('DecorativeShapes', () => {
  it('renders all shapes without labels', () => {
    render(
      <>
        <Star />
        <Squiggle />
        <Blob />
        <DotCluster />
      </>
    )
    expect(screen.getAllByRole('img', { hidden: true })).toHaveLength(4)
  })
})
