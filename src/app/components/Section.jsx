export default function Section ({ children, flexRow }) {
  return (
    <section className={`w-full px-6 flex ${flexRow ? 'flex-row' : 'flex-col'} justify-evenly md:px-0 sm:max-w-6xl pt-32`}>
      {children}
    </section>
  )
}
