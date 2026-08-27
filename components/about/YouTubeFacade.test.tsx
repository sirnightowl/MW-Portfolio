import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import YouTubeFacade from './YouTubeFacade'

describe('YouTubeFacade', () => {
  it('renders a play button and loads the iframe on click', async () => {
    const user = userEvent.setup()
    render(<YouTubeFacade />)

    const playButton = screen.getByRole('button', { name: /play drone footage over norfolk/i })
    expect(playButton).toBeInTheDocument()
    expect(screen.queryByTitle(/drone footage over norfolk/i)).not.toBeInTheDocument()

    await user.click(playButton)

    expect(screen.getByTitle(/drone footage over norfolk/i)).toBeInTheDocument()
  })
})
