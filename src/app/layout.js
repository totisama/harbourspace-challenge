import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

const req = await fetch('https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab')
const {
  scholarship: {
    name, location, duration, scholarship_start_date: scholarshipStartDate, application_end_date: applicationEndDate
  },
  meta: {
    title,
    description
  }
} = await req.json()

export const metadata = {
  title,
  description
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer name={name} location={location} duration={duration} scholarshipStartDate={scholarshipStartDate} applicationEndDate={applicationEndDate} />
      </body>
    </html>
  )
}
