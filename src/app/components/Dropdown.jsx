'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FILTERS_NAME } from '../consts'
import Image from 'next/image'

export default function Dropdown () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className='relative w-full md:w-auto h-20 flex flex-col gap-x-3 items-start justify-start'
    >
      <label className='flex text-[#6A6A6A] font-light text-base'>Filter by:</label>
      <motion.button
        data-testid='button'
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex flex-col gap-x-3 border border-[#DADADA] bg-white py-4 px-4 gap-y-4 rounded-[20px] sm:py-2 sm:w-auto'
      >
        <div className='w-full flex justify-between items-center gap-x-3'>
          <strong className='text-[#685DC5] font-medium text-lg'>Program conditions</strong>
          <Image
            className={`w-4 h-4 sm:w-3 ${!isOpen || 'rotate-180'} sm:h-3`}
            src='/svgs/arrowBottom.svg'
            alt='arrow icon'
            width={1000}
            height={1000}
          />
        </div>
        {isOpen
          ? (
            <motion.ul
              data-testid="dropdown-menu"
              className='w-full flex flex-col items-start gap-y-4'
            >
              {FILTERS_NAME.map(filter => (
                <motion.li key={filter} className='w-full text-left hover:text-[#685DC5]'>{filter}</motion.li>
              ))}
            </motion.ul>
            )
          : null}
      </motion.button>
    </motion.div>
  )
}
