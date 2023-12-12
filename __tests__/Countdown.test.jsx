import { render, screen } from '@testing-library/react'
import Countdown from '@/app/components/Countdown'

it('Should have title', () => {
  render(<Countdown />)

  const title = screen.getByTestId('title')

  expect(title).toBeInTheDocument()
})

it('Should have countdown text', () => {
  render(<Countdown />)

  const countdownText = screen.getByTestId('countdown')

  expect(countdownText).toBeInTheDocument()
})
