import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import FirstSection from './components/FirstSection'
import SliderSection from './components/SliderSection'

const req = await fetch('https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab')
const {
  scholarship: {
    name, description, location, about, duration, scholarship_start_date: scholarshipStartDate, application_end_date: applicationEndDate,
    who_should_apply_text: whoShouldApplyText, total_value: totalValue, tuition, remaining, stipend_per_month: stipendPerMonth, stipend_per_year: stipendPerYear,
    study_commitment: studyCommitment, internship_commitment: internshipCommitment, study_commitment_text: studyCommitmentText, internship_commitment_text: internshipCommitmentText,
    faqs: { items: questions }
  }
} = await req.json()

export default async function Home () {
  return (
    <main className="flex flex-col justify-center items-center pb-28">
      <FirstSection name={name} description={description} location={location} duration={duration} scholarshipStartDate={scholarshipStartDate} applicationEndDate={applicationEndDate} whoShouldApplyText={whoShouldApplyText} />
      <AboutSection about={about} total={totalValue} tuition={tuition} remaining={remaining} stipendPerMonth={stipendPerMonth} stipendPerYear={stipendPerYear} studyCommitment={studyCommitment}
        internshipCommitment={internshipCommitment} studyCommitmentText={studyCommitmentText} internshipCommitmentText={internshipCommitmentText}
      />
      <SliderSection />
      <FAQSection questions={questions} />
    </main>
  )
}
