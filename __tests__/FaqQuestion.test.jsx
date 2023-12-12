import { render, screen, fireEvent } from '@testing-library/react'
import FaqQuestion from '@/app/components/FaqQuestion'

const question = {
  type: 'Application process',
  question: 'What happens once I conduct the interview with Harbour.Space?',
  answer: [
    {
      type: 'paragraph',
      data: 'We will compile your results to present to the University\u2019s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.'
    }
  ]
}

it('Should answer appear after click', () => {
  render(<FaqQuestion question={question} />)

  const button = screen.getByTestId('button')

  fireEvent.click(button)

  const questionText = screen.getByTestId('question-text')

  expect(button).toBeInTheDocument()
  expect(questionText).toBeInTheDocument()
})
