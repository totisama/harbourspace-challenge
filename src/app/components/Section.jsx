export default function Section ({ children, flexDirection = 'flex-row' }) {
  return (
    <section className={`w-full px-6 flex ${flexDirection} justify-evenly sm:max-w-6xl pt-32`}>
      {children}
    </section>
  )
}
