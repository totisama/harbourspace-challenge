'use client'

import { Disclosure } from '@headlessui/react'

export default function FaqQuestion ({ question }) {
  const getFormattedText = (text) => {
    return text.map((answer, index) => <p key={index} className='text-[#535353] font-light text=[22px] leading-8'>{answer.data}</p>)
  }

  return (
    <div className='flex flex-col gap-y-5'>
      <Disclosure as='div'>
        {({ open }) => (
          <div className='flex justify-between'>
            <strong className='hidden text-[22px] text-[#685DC5] w-[300px] font-medium md:block'>{question.type}</strong>
            <div className='flex flex-col gap-y-5 w-4/5 md:w-1/2'>
              <h2 className='text-xl text-[#535353] font-medium'>{question.question}</h2>
              <Disclosure.Panel as='div'>
                <div className='flex flex-col gap-y-5'>
                  {getFormattedText(question.answer)}
                </div>
              </Disclosure.Panel>
            </div>
            <Disclosure.Button className='h-12 w-12 flex items-center justify-center rounded-[50%] border border-[#DADADA]'>
              {open
                ? (
                    <span>-</span>
                  )
                : (
                    <span>+</span>
                  )
              }
            </Disclosure.Button>
          </div>
        )}
      </Disclosure>
      <hr className='w-full h-[1px] mx-auto bg-[#DADADA]' />
    </div>
  )
}
