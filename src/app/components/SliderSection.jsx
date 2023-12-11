'use client'

import React, { useEffect, useState, useRef } from 'react'
import Section from './Section'
import SliderItem from './SliderItem'
import { motion } from 'framer-motion'
import { ITEM_MARGIN_RIGTH, MOVING_RATE, SLIDER_START } from '../consts'

export default function SliderSection () {
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [moved, setMoved] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(null)
  const [mouseMoved, setStateMouseMoved] = useState(0)
  const [maxWidth, setMaxWidth] = useState(0)
  const itemsContainer = useRef()
  const itemWidth = useRef(0)

  const handleMouseDown = (e) => {
    setIsDown(true)

    if (e.pageX === undefined) {
      setStartX(e.touches[0].pageX)
    } else {
      setStartX(e.pageX)
    }

    setScrollLeftState(itemsContainer.current.scrollLeft)
    setStateMouseMoved(0)
  }

  const handleMouseMove = (e) => {
    if (!isDown) {
      return
    }

    const currentMousePositionInsideContainer =
      e.pageX === undefined ? e.touches[0].pageX : e.pageX

    setStateMouseMoved(currentMousePositionInsideContainer - startX)
  }

  const updateWindow = () => {
    const items = document.getElementsByClassName('sliderItem')
    const motionDiv = document.getElementById('motionDiv')
    const totalItems = items.length

    const totalWidth = ((items[0].clientWidth * totalItems) + (ITEM_MARGIN_RIGTH * totalItems)) - motionDiv.clientWidth

    itemWidth.current = items[0].clientWidth
    setMaxWidth(totalWidth)
    setMoved(SLIDER_START)
  }

  const moveSlider = (amount) => {
    const nextMove = moved + (amount / MOVING_RATE)

    if (nextMove > SLIDER_START) {
      setMoved(SLIDER_START)
      return
    }

    if (Math.abs(nextMove) > maxWidth) {
      setMoved(-maxWidth)
      return
    }

    setMoved(nextMove)
  }

  useEffect(() => {
    moveSlider(mouseMoved)
  }, [scrollLeftState, mouseMoved])

  useEffect(() => {
    updateWindow()
    window.addEventListener('resize', updateWindow)

    return () => window.removeEventListener('resize', updateWindow)
  }, [])

  return (
    <Section limitWidth={false}>
      <div className="relative w-full h-auto flex flex-col justify-center items-center py-10 px-4 md:px-0">
        <div className={`w-full h-auto select-none py-10 whitespace-nowrap justify-center overflow-hidden ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          ref={itemsContainer}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={() => setIsDown(false)}
          onMouseLeave={() => setIsDown(false)}
          onMouseMove={(e) => handleMouseMove(e)}
          onTouchStart={(e) => handleMouseDown(e)}
          onTouchEnd={() => setIsDown(false)}
          onTouchCancel={() => setIsDown(false)}
          onTouchMove={(e) => handleMouseMove(e)}
        >
          <motion.div id='motionDiv' transition={{ type: 'spring' }} animate={{ x: moved }} >
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
          </motion.div>
        </div>

        {/* arrow buttons small */}
        <div className='w-full flex justify-end gap-x-3 md:hidden'>
          <button className='h-12 w-12 border flex justify-center items-center rounded-full' onClick={() => moveSlider((itemWidth.current + ITEM_MARGIN_RIGTH) * MOVING_RATE)}>
            <img src='/svgs/arrowLeft.svg' alt='left arrow' />
          </button>
          <button className='h-12 w-12 border flex justify-center items-center rounded-full' onClick={() => moveSlider(-(itemWidth.current + ITEM_MARGIN_RIGTH) * MOVING_RATE)}>
            <img src='/svgs/arrowRight.svg' alt='right arrow' />
          </button>
        </div>

        {/* arrow buttons desktop */}
        <button className='absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 bg-white left-10 border hidden justify-center items-center rounded-full md:flex' onClick={() => moveSlider((itemWidth.current + ITEM_MARGIN_RIGTH) * MOVING_RATE)}>
          <img src='/svgs/arrowLeft.svg' alt='left arrow' />
        </button>
        <button className='absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 bg-white right-0 border hidden justify-center items-center rounded-full md:flex' onClick={() => moveSlider(-(itemWidth.current + ITEM_MARGIN_RIGTH) * MOVING_RATE)}>
          <img src='/svgs/arrowRight.svg' alt='right arrow' />
        </button>

        {/* images */}
        <div className="absolute h-[300px] -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[url('/svgs/backgroundPattern2.svg')] bg-no-repeat -z-10 hidden lg:flex lg:w-[1000px] xl:lg:w-[1150px]" />
        <div className="absolute h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[url('/svgs/backgroundPattern2.svg')] bg-no-repeat -z-10 flex md:hidden" />
      </div>
    </Section>
  )
}
