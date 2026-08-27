import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('renders the form fields and submit button', () => {
    const { container } = render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(container.querySelector('button[type="submit"]')).toBeInTheDocument()
  })

  it('shows validation errors for empty or invalid inputs', async () => {
    const { container } = render(<ContactForm />)
    await userEvent.click(container.querySelector('button[type="submit"]')!)

    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument()
    expect(await screen.findByText(/please enter a valid email/i)).toBeInTheDocument()
    expect(await screen.findByText(/tell me a bit more/i)).toBeInTheDocument()
  })
})
