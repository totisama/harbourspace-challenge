export default function Section ({ children, flexDirection = 'flex-row', paddingX = '', extra = '' }) {
  return (
    <section className={`w-full flex ${flexDirection} ${extra} justify-evenly ${paddingX} pt-32 sm:max-w-6xl`}>
      {children}
    </section>
  )
}
