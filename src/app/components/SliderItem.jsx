import Image from 'next/image'

export default function SliderItem () {
  return (
    <article className='sliderItem inline-flex w-4/5 sm:w-3/5 h-auto border border-[#DADADA] bg-white rounded-[4px] mr-10'>
      <div className="flex flex-col h-auto whitespace-normal">
        <section className="w-full h-2/6 px-10 py-5 flex justify-between items-center overscroll-none">
          <div className="flex items-center gap-x-5">
            <Image
              className="h-[80px] w-[80px]"
              src='/images/irene.png'
              alt="Avatar"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col">
              <h3 className="text-[#685DC5] md:text-[#535353] font-medium text-base">Irene Pereyra</h3>
              <strong className="text-[#535353] font-light text-base">Interaction Design Fellow 19</strong>
            </div>
          </div>
          <Image
            className="h-[30px] w-[30px] cursor-pointer"
            src='/svgs/linkedIn.svg'
            alt="Avatar"
            width={1000}
            height={1000}
          />
        </section>
        <section className="w-full h-4/6 bg-[#FBFBFB] px-5 md:px-0 py-5 md:py-10 flex justify-start md:justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col gap-y-5">
            <p className="text-[#6A6A6A] font-light text-xl md:text-2xl">This Fellowship was a turning point in my career. I wouldnt be where I am today without the financial support and experienced offered through the program. </p>
            <strong className="text-[#535353] font-light text-base">Education · B.A. Visual Design</strong>
          </div>
        </section>
      </div>
    </article>
  )
}
