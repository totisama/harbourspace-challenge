import { render, screen, fireEvent } from '@testing-library/react'
import Dropdown from '@/app/components/Dropdown'

it('Should dropdown menu appear after click', () => {
  render(<Dropdown />)

  const button = screen.getByTestId('button')

  fireEvent.click(button)

  const dropdownMenu = screen.getByTestId('dropdown-menu')

  expect(button).toBeInTheDocument()
  expect(dropdownMenu).toBeInTheDocument()
})
