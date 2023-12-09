export default function InformationBox ({ title, info, text, width }) {
  return (
    <div className={`${width} h-auto border border-[#DADADA] rounded p-5 flex flex-col gap-y-5`}>
      <div className='flex flex-col gap-y-3'>
        <strong className='text-base font-medium text-[#685DC5]'>{title}</strong>
        <strong className='text-2xl font-light text-[#535353]'>{info}</strong>
      </div>
      <hr className="w-[50px] h-[1px] border-0 bg-[#DADADA]" />
      <p className='text-base font-light text-[#535353]'>{text}</p>
    </div>
  )
}
