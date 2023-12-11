import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Interaction Design Apprenticeship',
  description: 'A fully funded work-study program to launch your tech career'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
