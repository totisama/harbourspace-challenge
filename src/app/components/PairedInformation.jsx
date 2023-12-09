export default function PairedInformation ({ title, text, width = '', extra = false, extraText }) {
  return (
    <div className={`${width} flex flex-col`}>
      <strong className='text-base font-medium text-[#685DC5]'>{title}</strong>
      <strong className='text-base font-light text-[#535353]'>{text}</strong>
      {extra
        ? <strong className='text-base font-light text-[#535353]'>{extraText}</strong>
        : null
      }
    </div>
  )
}
