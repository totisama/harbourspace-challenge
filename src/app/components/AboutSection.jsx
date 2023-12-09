import Image from 'next/image'
import Section from './Section'

export default function AboutSection () {
  return (
    <Section>
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
          <p className='font-light text-[22px] text-[#535353]'>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  </p>
        </div>
      </div>
    </Section>
  )
}
