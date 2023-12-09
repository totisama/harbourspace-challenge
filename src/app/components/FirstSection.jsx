import Image from 'next/image'

export default function FirstSection () {
  return (
    <section className="w-full px-6 flex justify-evenly md:px-0 sm:max-w-6xl pt-32 pb-24">
      {/* left info start */}
      <div className="relative w-full flex flex-col gap-10 md:w-2/5">
        <h1 className="text-5xl text-[#685dc5] font-medium">Interaction Design Apprenticeship</h1>
        {/* mobile right info start */}
        <div className="flex flex-col gap-y-7 md:hidden">
          <div className='flex flex-col gap-x-10'>
            <div className='flex'>
              <p className='text-[14px] font-medium text-black opacity-50'>
                Powered by:
                <span className='text-[14px] font-medium text-black'>
                  &nbsp;
                  Zeptolab
                </span>
              </p>
            </div>
            <Image
              className='h-20 w-20'
              src="/zeptolab.svg"
              alt="Zeptolab logo"
              width={100}
              height={24}
            />
          </div>
          <div className='border border-[#DADADA] rounded px-10 py-5 flex flex-col gap-y-2'>
            <h3 className='text-[#685DC5] font-medium text-[16px]'>Application closes in</h3>
            <h3 className='text-[#535353] font-light text-[20px]'>6 Day  :  22 Hrs  :  56 Min  :  13 Seg</h3>
          </div>
          <div className='border border-[#DADADA] rounded px-5 py-5 flex flex-col gap-y-4'>
            <div className='flex justify-between'>
              <div className='w-48'>
                <h3 className='text-[#685DC5] font-medium text-[16px]'>Location</h3>
                <h3 className='text-[#535353] font-light text-[16px]'>Bangkok</h3>
              </div>
              <div className='w-48'>
                <h3 className='text-[#685DC5] font-medium text-[16px]'>Duration</h3>
                <h3 className='text-[#535353] font-light text-[16px]'>1 year Full-Time</h3>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-48'>
                <h3 className='text-[#685DC5] font-medium text-[16px]'>Application deadline</h3>
                <h3 className='text-[#535353] font-light text-[16px]'>30 June 2020</h3>
              </div>
              <div className='w-48'>
                <h3 className='text-[#685DC5] font-medium text-[16px]'>Start date</h3>
                <h3 className='text-[#535353] font-light text-[16px]'>3 Aug 2020</h3>
              </div>
            </div>
          </div>
        </div>
        {/* mobile right info end */}
        <div className='flex flex-col gap-8'>
          <p className="text-[#535353] text-[22px] font-medium">A fully funded work-study program to launch your tech career</p>
          <p className="text-[#535353] text-[22px] font-light">Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.</p>
          <p className="block text-[#535353] text-[22px] font-light md:hidden">Scholarship candidates will receive full financial support to complete their Masters program at Harbour.Space while gaining invaluable work experience through an internship with SCG, a leading company in the industry.</p>
          <p className='text-[22px] font-medium text-[#535353]'>
            Position:
            <span className='font-light text-[#535353]'>
              &nbsp;
              Marketing Performance
            </span>
          </p>
        </div>
        <div>
          <button className='bg-[#685dc5] text-white rounded-full py-3 px-8 md:capitalize'>
            Apply now
          </button>
        </div>
        <Image
          className='absolute h-56 w-56 -top-32 right-0 rotate-12 md:-top-20 sm:right-52 md:right-0'
          src="/interactionDesign.svg"
          alt="Interaction Design image"
          width={100}
          height={24}
        />
      </div>
      {/* left info start */}
      {/* right info start */}
      <div className="hidden relative w-2/5 flex-col gap-y-7 md:flex">
        <div className='flex gap-x-10'>
          <Image
            className='h-20 w-20'
            src="/zeptolab.svg"
            alt="Zeptolab logo"
            width={100}
            height={24}
          />
          <div className='flex flex-col justify-center'>
            <p className='text-lg font-light text-black opacity-50'>
              Powered by:
            </p>
            <span className='text-[27px] font-light text-[#535353]'>
              Zeptolab
            </span>
          </div>
        </div>
        <div className='border border-[#DADADA] bg-white rounded px-10 py-5 flex flex-col gap-y-4'>
          <h3 className='text-[#685DC5] font-medium text-lg'>Application closes in</h3>
          <h3 className='text-[#535353] font-light text-[27px]'>6 Day  :  22 Hrs  :  56 Min  :  13 Seg</h3>
        </div>
        <div className='border border-[#DADADA] bg-white rounded px-10 py-10 flex flex-col z-10'>
          <div className='flex justify-between'>
            <div className='w-48'>
              <h3 className='text-[#685DC5] font-medium text-[16px]'>Location</h3>
              <h3 className='text-[#535353] font-light text-[16px]'>Bangkok</h3>
            </div>
            <div className='w-48'>
              <h3 className='text-[#685DC5] font-medium text-[16px]'>Duration</h3>
              <h3 className='text-[#535353] font-light text-[16px]'>1 year</h3>
              <h3 className='text-[#535353] font-light text-[16px]'>Full-Time</h3>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-48'>
              <h3 className='text-[#685DC5] font-medium text-[16px]'>Start date</h3>
              <h3 className='text-[#535353] font-light text-[16px]'>20 June 2020</h3>
            </div>
            <div className='w-48'>
              <h3 className='text-[#685DC5] font-medium text-[16px]'>End date</h3>
              <h3 className='text-[#535353] font-light text-[16px]'>3 Aug 2020</h3>
            </div>
          </div>
        </div>
        <div className="absolute h-[220px] w-[560px] -bottom-10 -right-56 -z-1 bg-[url('/backgroundPattern.svg')] bg-no-repeat hidden md:block"></div>
      </div>
      {/* right info end */}
    </section>
  )
}
