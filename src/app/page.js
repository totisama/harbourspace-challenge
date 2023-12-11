import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import FirstSection from './components/FirstSection'
import SliderSection from './components/SliderSection'

export default function Home () {
  return (
    <main className="flex flex-col justify-center items-center pb-28">
      <FirstSection />
      <AboutSection />
      <SliderSection />
      <FAQSection />
    </main>
  )
}
