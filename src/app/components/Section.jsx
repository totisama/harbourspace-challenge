export default function Section ({ children, flexDirection = 'flex-row', paddingX = '', extra = '', limitWidth = true }) {
  return (
    <section className={`w-full flex ${flexDirection} ${extra} justify-evenly ${paddingX} pt-32 ${limitWidth ? 'sm:max-w-6xl' : ''}`}>
      {children}
    </section>
  )
}
