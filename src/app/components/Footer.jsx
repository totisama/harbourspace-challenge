export default function Footer () {
  return (
    <footer className='fixed bottom-0 w-full px-4 lg:px-12 py-4 flex flex-col md:flex-row justify-start gap-y-2 gap-x-8 lg:gap-x-10 xl:gap-x-16 border border-[#DADADA] bg-white z-20'>
      <div className="flex justify-start gap-x-8 lg:gap-x-10 xl:gap-x-16">
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Zeptolab</h2>
          <strong className='text-[#535353] w-min lg:w-auto text-sm lg:text-base font-light'>Marketing Performance</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Location</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>Bangkok</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Duration</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>1 Year Full-Time</strong>
        </div>
      </div>
      <div className="flex justify-start gap-x-8 lg:gap-x-10 xl:gap-x-16">
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Start Date</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>3 Aug 2020</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Application deadline</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>30 June 2020</strong>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#535353] text-sm lg:text-base font-medium'>Application closes in</h2>
          <strong className='text-[#535353] text-sm lg:text-base font-light'>6 Day : 22 Hrs : 56 Min</strong>
        </div>
      </div>
    </footer>
  )
}
