import { render, screen } from '@testing-library/react'
import InformationBox from '@/app/components/InformationBox'

const title = 'Study commitment'
const info = '1 hours / day'
const information = 'The programme consists of fifteen 3-week courses for graduation. Daily classes are 3 hours, plus coursework to complete on your own time.'
const width = 'w-full md:w-1/2'

it('Should render all data', () => {
  render(<InformationBox
    title={title}
    info={info}
    text={information}
    width={width}
  />)

  const textElem = screen.getByText('Study commitment')
  const infoElem = screen.getByText('1 hours / day')
  const informationElem = screen.getByText('The programme consists of fifteen 3-week courses for graduation. Daily classes are 3 hours, plus coursework to complete on your own time.')

  expect(textElem).toBeInTheDocument()
  expect(infoElem).toBeInTheDocument()
  expect(informationElem).toBeInTheDocument()
})
