import Image from 'next/image'
import Section from './Section'
import PairedInformation from './PairedInformation'
import { MONTHS } from '../consts'
import Countdown from './CountDown'

export default async function FirstSection ({
  name,
  description,
  location,
  duration,
  scholarshipStartDate,
  applicationEndDate,
  whoShouldApplyText
}) {
  const startDate = new Date(scholarshipStartDate)
  const formattedStartDate = `${startDate.getDate()} ${MONTHS[startDate.getMonth()]} ${startDate.getFullYear()}`
  const endDate = new Date(applicationEndDate)
  const formattedEndDate = `${endDate.getDate()} ${MONTHS[endDate.getMonth()]} ${endDate.getFullYear()}`

  return (
    <Section paddingX='px-6'>
      {/* left info start */}
      <div className="relative w-full flex flex-col gap-10 md:w-2/5">
        <h1 className="text-5xl text-[#685dc5] font-medium">{name}</h1>

        {/* mobile right info start */}
        <div className="flex flex-col gap-y-7 md:hidden">
          <div className='flex flex-col gap-x-10'>
            <div className='flex'>
              <strong className='text-[14px] font-light text-black opacity-50'>
                Powered by:
                <span className='text-[14px] font-medium text-black'>
                  &nbsp;
                  Zeptolab
                </span>
              </strong>
            </div>
            <Image
              className='h-20 w-20'
              src="/svgs/zeptolab.svg"
              alt="Zeptolab logo"
              width={100}
              height={24}
            />
          </div>
          <Countdown
            containerClass={'border border-[#DADADA] bg-white rounded px-3 py-5 flex flex-col gap-y-1'}
            titleClass={'text-[#685DC5] font-medium text-lg'}
            countdownClass={'text-[#535353] font-light text-[27px]'}
          />
          <div className='border border-[#DADADA] rounded px-5 py-5 flex flex-col gap-y-4'>
            <div className='flex justify-between'>
              <PairedInformation title='Location' text={location.name} width='w-48' />
              <PairedInformation title='Duration' text={`${duration} year Full-Time`} width='w-48' />
            </div>
            <div className='flex justify-between'>
              <PairedInformation title='Application deadline' text={formattedEndDate} width='w-48' />
              <PairedInformation title='Start date' text={formattedStartDate} width='w-48' />
            </div>
          </div>
        </div>
        {/* mobile right info end */}

        <div className='flex flex-col gap-8'>
          <p className="text-[#535353] text-[22px] font-medium">A fully funded work-study program to launch your tech career</p>
          <p className="text-[#535353] text-[22px] font-light">{description.map(text => (text.data)).join('')}</p>
          <p className="block text-[#535353] text-[22px] font-light md:hidden">{whoShouldApplyText.map(text => (text.data)).join('')}</p>
          <strong className='text-[22px] font-medium text-[#535353]'>
            Position:
            <span className='font-light text-[#535353]'>
              &nbsp;
              {name}
            </span>
          </strong>
        </div>
        <div>
          <button className='bg-[#685dc5] text-white rounded-full py-3 px-8 md:capitalize'>
            Apply now
          </button>
        </div>
        <Image
          className='absolute h-56 w-56 -top-32 right-0 rotate-12 md:-top-20 sm:right-52 md:right-0'
          src="/svgs/interactionDesign.svg"
          alt="Interaction Design image"
          width={100}
          height={24}
        />
      </div>
      {/* left info end */}

      {/* right info start */}
      <div className="hidden relative w-2/5 flex-col gap-y-7 md:flex">
        <div className='flex gap-x-10'>
          <Image
            className='h-20 w-20'
            src="/svgs/zeptolab.svg"
            alt="Zeptolab logo"
            width={100}
            height={24}
          />
          <div className='flex flex-col justify-center'>
            <strong className='text-lg font-light text-black opacity-50'>
              Powered by:
            </strong>
            <strong className='text-[27px] font-light text-[#535353]'>
              Zeptolab
            </strong>
          </div>
        </div>
        <Countdown
          containerClass={'border border-[#DADADA] bg-white rounded px-3 py-5 flex flex-col gap-y-1'}
          titleClass={'text-[#685DC5] font-medium text-lg'}
          countdownClass={'text-[#535353] font-light text-[27px]'}
        />
        <div className='border border-[#DADADA] bg-white rounded px-5 py-10 flex flex-col z-10'>
          <div className='flex justify-between'>
            <PairedInformation title='Location' text={location.name} width='w-48' />
            <PairedInformation title='Duration' text={`${duration} year`} width='w-48' extra={true} extraText='Full-Time' />
          </div>
          <div className='flex justify-between'>
            <PairedInformation title='Start date' text={formattedStartDate} width='w-48' />
            <PairedInformation title='End date' text={formattedEndDate} width='w-48' />
          </div>
        </div>
        <div className="absolute h-[220px] xl:w-[540px] -bottom-10 -right-40 -z-1 bg-[url('/svgs/backgroundPattern.svg')] bg-no-repeat hidden lg:block"></div>
      </div>
      {/* right info end */}
    </Section>
  )
}
