import Section from './Section'
import { QUESTIONS } from '../consts'
import FaqQuestion from './FaqQuestion'

export default function FAQSection () {
  return (
    <Section flexDirection='flex-col' paddingX='px-10' extra='gap-y-10' >
      <div className='w-full flex justify-between'>
        <h2 className='text-5xl max-w-lg font-medium text-[#685DC5]'>Frequently asked questions</h2>
        <div className='flex items-center gap-x-4'>
          <label className='flex text-[#6A6A6A] font-light text-base'>Filter by:</label>
          <button className='flex items-center border border-[#DADADA] py-2 px-4 text-[#685DC5] rounded-[20px] gap-x-5'>
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
