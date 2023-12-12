import { MONTHS } from '../consts'

export default function Footer ({
  location,
  duration,
  scholarshipStartDate,
  applicationEndDate,
  name
}) {
  const startDate = new Date(scholarshipStartDate)
  const formattedStartDate = `${startDate.getDate()} ${MONTHS[startDate.getMonth()]} ${startDate.getFullYear()}`
  const endDate = new Date(applicationEndDate)
  const formattedEndDate = `${endDate.getDate()} ${MONTHS[endDate.getMonth()]} ${endDate.getFullYear()}`

  return (
    <footer className='fixed bottom-0 w-full px-4 lg:px-12 py-4 flex flex-col md:flex-row justify-start gap-y-2 gap-x-8 lg:gap-x-10 xl:gap-x-16 border border-[#DADADA] bg-white z-20'>
      <div className="flex justify-start gap-x-8 lg:gap-x-10 xl:gap-x-16">
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Zeptolab</h2>
          <strong className='text-[#535353] w-min lg:w-auto text-sm lg:text-base font-light'>{name}</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Location</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>{location.name}</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Duration</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>{duration} Year Full-Time</strong>
        </div>
      </div>
      <div className="flex justify-start gap-x-8 lg:gap-x-10 xl:gap-x-16">
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Start Date</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>{formattedStartDate}</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Application deadline</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>{formattedEndDate}</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Application closes in</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>6 Day : 22 Hrs : 56 Min</strong>
        </div>
      </div>
    </footer>
  )
}
