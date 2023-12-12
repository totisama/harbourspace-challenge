'use client'

import { useEffect, useState } from 'react'
import { DAY, HOUR, MINUTE, SECONDS, INITIAL_DATE } from '../consts'

export default function Countdown ({ containerClass, titleClass, countdownClass, showSeconds = true }) {
  const [date, setDate] = useState(INITIAL_DATE)

  const getCountdown = () => {
    const start = new Date()
    const end = new Date('01/08/24')
    const distance = end - start

    if (distance <= 0) {
      return INITIAL_DATE
    }

    const days = Math.floor(distance / DAY)
    const hours = Math.floor((distance % DAY) / HOUR)
    const minutes = Math.floor((distance % HOUR) / MINUTE)
    const seconds = Math.floor((distance % MINUTE) / SECONDS)

    const formattedDay = ` ${days} ${days > 1 ? 'Days' : 'Day'} : `
    const formattedHours = `${hours} ${hours > 1 ? 'Hrs' : 'Hr'} : `
    const formattedMinutes = `${minutes} ${minutes > 1 ? 'Mins' : 'Min'}`
    const formattedSeconds = ` : ${seconds} ${seconds > 1 ? 'Segs' : 'Seg'}`

    let fullCountdown = formattedDay + formattedHours + formattedMinutes

    if (showSeconds) {
      fullCountdown += formattedSeconds
    }

    return fullCountdown
  }

  useEffect(() => {
    const id = setInterval(() => {
      setDate(getCountdown())
    }, 1000)

    return () => clearInterval(id)
  }, [date])

  return (
    <div className={containerClass}>
      <strong className={titleClass}>Application closes in</strong>
      <strong className={countdownClass}>{date}</strong>
    </div>
  )
}
