import Image from 'next/image'
import Section from './Section'
import InformationBox from './InformationBox'
import PairedInformation from './PairedInformation'

export default function AboutSection () {
  return (
    <Section flexDirection='flex-col' paddingX='px-0'>
      <div className="w-11/12 px-6 hidden sm:flex flex-col items-center gap-10 lg:gap-32 lg:flex-row">
        <div className='flex'>
          <div className="flex justify-center items-center h-[438px] w-[438px] bg-[url('/svgs/circularPattern.svg')] bg-no-repeat">
            <Image
              className='h-96 w-96'
              src="/images/student.png"
              alt="Student image"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-10'>
          <h2 className='font-medium text-5xl text-[#685DC5]'>About the apprenticeship</h2>
          <p className='font-light text-[22px] text-[#535353]'>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.</p>
        </div>
      </div>

      <div className='w-full mt-36 flex sm:hidden'>
        <div className='w-[4%] h-[450px] bg-[#685DC5] mt-2'></div>
        <div className='relative w-[92%] border border-[#E6E6E6] bg-white px-5 pt-72 pb-14'>
          <div className='flex flex-col gap-y-8'>
            <h2 className='font-medium text-4xl tracking-wide text-[#685DC5]'>About the apprenticeship</h2>
            <p className='font-light text-[18px] leading-6 text-[#535353]'>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.</p>
          </div>
          <div className="absolute flex justify-center items-center h-[450px] w-[450px] top-10 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[url('/svgs/circularPattern.svg')] bg-no-repeat -z-10" />
          <Image
            className='absolute top-10 -translate-x-1/2 -translate-y-1/2 left-1/2 h-96 w-96 z-10'
            src="/images/building.png"
            alt="Building image"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className='w-[4%] h-[450px] bg-[#685DC5] mt-2'></div>
      </div>

      <div className='w-full px-6 flex flex-col md:flex-row mt-10 md:mt-20 gap-10'>

        {/* left */}
        <div className='w-1/3 border hidden flex-col border-[#DADADA] justify-end rounded pt-5 pb-10 px-10 gap-y-7 md:flex'>
          <div className='flex flex-col gap-y-5'>
            <strong className='text-base font-medium text-[#685DC5]'>Scholarship value</strong>
            <strong className='text-5xl font-light text-[#535353]'>€31,300</strong>
          </div>
          <div className='flex-1'/>
          <hr className="w-full h-[1px] mx-auto bg-[#DADADA]" />
          <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
              <PairedInformation title='Tuition covered' text='€20,900' />
              <PairedInformation title='Remaining' text='€2,000' />
            </div>
            <PairedInformation title='Living stipend' text='€8,400 (€700/month)' />
          </div>
        </div>

        {/* <md only */}
        <div className='flex flex-col gap-y-5 items-baseline pl-10 md:hidden'>
          <div className='flex flex-col'>
            <strong className='text-base font-medium text-[#685DC5]'>Fellowship value</strong>
            <strong className='text-2xl font-light text-[#535353]'>€31,300</strong>
          </div>
          <div className='flex gap-10'>
            <PairedInformation title='Tuition' text='€22,900' textSize='text-2xl' />
            <PairedInformation title='Remaining' text='€8,400' textSize='text-2xl' />
          </div>
          <PairedInformation title='Living stipend' text='€8,400 (€700/month)' textSize='text-2xl' />
        </div>

        {/* right */}
        <div className='flex flex-col w-full md:w-2/3 gap-y-5'>
          {/* top */}
          <div className='w-full flex flex-col md:flex-row gap-10'>
            <InformationBox
              title='Study commitment'
              info='3 hours / day'
              text='You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.'
              width='w-full md:w-1/2'
            />
            <InformationBox
              title='Work commitment'
              info='4 hours / day'
              text='Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.'
              width='w-full md:w-1/2'
            />
          </div>
          {/* center line */}
          <div className='flex items-center w-full md:w-full'>
            <hr className="w-full h-[1px] mx-auto bg-[#DADADA]" />
            <strong className='font-medium text-base text-[#535353] px-6'>GRADUATION</strong>
            <hr className="w-full h-[1px] mx-auto bg-[#DADADA]" />
          </div>
          {/* bottom */}
          <InformationBox
            title='A full-time contract'
            info='1 Year / Full-Time'
            text='You’ll be guaranteed a 1 year contract with SCG upon graduation.'
            width='w-full md:w-full'
          />
        </div>
        {/* right */}
      </div>
    </Section>
  )
}
