import Section from './Section'
import { QUESTIONS } from '../consts'
import FaqQuestion from './FaqQuestion'

export default function FAQSection () {
  return (
    <Section flexDirection='flex-col' paddingX='px-10' extra='gap-y-10' >
      <div className='w-full flex flex-col justify-between gap-y-5  md:flex-row md:gap-y-0'>
        <h2 className='text-5xl max-w-lg font-medium text-[#685DC5]'>Frequently asked questions</h2>
        <div className='flex flex-col items-start gap-x-4 md:flex-row md:items-center'>
          <label className='flex text-[#6A6A6A] font-light text-base'>Filter by:</label>
          <button className='w-full flex justify-between items-center border border-[#DADADA] py-4 px-4 text-[#685DC5] rounded-[20px] gap-x-5 sm:py-2 sm:w-auto'>
            Program conditions
            <img className='' src='/svgs/arrow.svg' />
          </button>
        </div>
      </div>
      <hr className='w-full h-[1px] mx-auto bg-[#DADADA]' />
      <div className='flex flex-col gap-y-5'>
        {QUESTIONS.map((question, index) => (
          <FaqQuestion key={index} question={question} />
        ))}
      </div>
    </Section>
  )
}
