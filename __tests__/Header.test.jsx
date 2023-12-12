import { render, screen } from '@testing-library/react'
import Header from '@/app/components/Header'

it('Should have title', () => {
  render(<Header />)

  const title = screen.getByText('HARBOUR.SPACE')
  const small = screen.getByText('/INTERACTION DESIGN')

  expect(title).toBeInTheDocument()
  expect(small).toBeInTheDocument()
})

it('Should have apply now button', () => {
  render(<Header />)

  const button = screen.getByText('APPLY NOW')

  expect(button).toBeInTheDocument()
})
