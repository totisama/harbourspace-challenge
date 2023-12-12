import Section from './Section'
import FaqQuestion from './FaqQuestion'
import Dropdown from './Dropdown'

export default function FAQSection ({ questions }) {
  return (
    <Section flexDirection='flex-col' paddingX='px-10' extra='gap-y-10' >
      <div className='w-full flex flex-col justify-start md:justify-between gap-y-5 md:flex-row md:gap-y-0'>
        <h2 className='text-5xl max-w-lg font-medium text-[#685DC5]'>Frequently asked questions</h2>
        <Dropdown />
      </div>
      <hr className='w-full h-[1px] mx-auto bg-[#DADADA]' />
      <div className='flex flex-col gap-y-5'>
        {questions.map((question, index) => (
          <FaqQuestion key={index} question={question} />
        ))}
      </div>
    </Section>
  )
}
