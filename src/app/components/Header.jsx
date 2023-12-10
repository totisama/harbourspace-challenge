import Image from 'next/image'

export default function Header () {
  return (
    <header className="w-full h-14 flex justify-between px-10 items-center bg-[#665dbf] text-white relative">
      <h2 className="flex">
        HARBOUR.SPACE&nbsp;&nbsp;
        <small>
          /INTERACTION DESIGN
        </small>
      </h2>
      <Image
        className='h-12 w-12'
        src="/svgs/menu.svg"
        alt="Menu icon"
        width={100}
        height={24}
      />
      <button className='absolute w-20 h-20 hidden p-1 items-center justify-center rounded-full bg-[#649f71] top-3 right-32 text-sm leading-4 sm:flex'>
        APPLY NOW
      </button>
    </header>
  )
}
