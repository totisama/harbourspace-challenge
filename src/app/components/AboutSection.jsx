import Image from 'next/image'
import Section from './Section'
import InformationBox from './InformationBox'
import PairedInformation from './PairedInformation'

export default function AboutSection () {
  return (
    <Section flexRow={false}>
      <div className="w-11/12 flex flex-col items-center gap-10 lg:gap-32 lg:flex-row">
        <div className='flex'>
          <div className="flex justify-center items-center h-[438px] w-[438px] bg-[url('/svgs/circularPattern.svg')] bg-no-repeat">
            <Image
              className='h-96 w-96'
              src="/images/aboutImage.png"
              alt="Zeptolab logo"
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
      <div className='w-full flex mt-20 gap-10'>

        {/* left */}
        <div className='w-1/3 border flex flex-col border-[#DADADA] justify-end rounded pt-5 pb-10 px-10 gap-y-7'>
          <div className='flex flex-col mb-40 gap-y-5'>
            <strong className='text-base font-medium text-[#685DC5]'>Scholarship value</strong>
            <strong className='text-5xl font-light text-[#535353]'>€31,300</strong>
          </div>
          <hr className="w-full h-[1px] mx-auto border-0 bg-[#DADADA]" />
          <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
              <PairedInformation title='Tuition covered' text='€20,900' />
              <PairedInformation title='Remaining' text='€2,000' />
            </div>
            <PairedInformation title='Living stipend' text='€8,400 (€700/month)' />
          </div>
        </div>

        {/* right */}
        <div className='flex flex-col w-2/3 gap-y-5'>
          {/* top */}
          <div className='w-full flex gap-10'>
            <InformationBox
              title='Study commitment'
              info='3 hours / day'
              text='You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.'
              width='w-1/2'
            />
            <InformationBox
              title='Work commitment'
              info='4 hours / day'
              text='Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.'
              width='w-1/2'
            />
          </div>
          {/* center line */}
          <div className='flex items-center'>
            <hr className="w-full h-[1px] mx-auto border-0 bg-[#DADADA]" />
            <strong className='font-medium text-base text-[#535353] px-6'>GRADUATION</strong>
            <hr className="w-full h-[1px] mx-auto border-0 bg-[#DADADA]" />
          </div>
          {/* bottom */}
          <InformationBox
            title='A full-time contract'
            info='1 Year / Full-Time'
            text='You’ll be guaranteed a 1 year contract with SCG upon graduation.'
            width='w-full'
          />
        </div>
        {/* right */}
      </div>
    </Section>
  )
}
