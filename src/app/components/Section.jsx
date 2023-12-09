export default function Section ({ children }) {
  return (
    <section className="w-full px-6 flex justify-evenly md:px-0 sm:max-w-6xl pt-32 pb-24">
      {children}
    </section>
  )
}
