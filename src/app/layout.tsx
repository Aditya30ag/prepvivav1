import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import TrackingProvider from '@/components/analytics/TrackingProvider'
import CookieBanner from '@/components/layout/CookieBanner'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'PrepViva - AI Interview Preparation for UK Students & NHS',
  description: 'Master UK university and NHS interviews with AI-powered practice. Oxbridge, medical school, and NHS Band 5-Consultant preparation.',
  keywords: 'UK interview preparation, NHS interview questions, medical school interview prep UK, Oxbridge interview coaching',
  openGraph: {
    title: 'PrepViva - UK\'s Leading AI Interview Platform',
    description: 'Transform interview anxiety into confidence. AI-powered practice for UK universities and NHS.',
    url: 'https://prepviva.co.uk',
    siteName: 'PrepViva',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrepViva - AI Interview Coaching',
    description: 'Affordable AI-powered interview prep for UK students',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <TrackingProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieBanner />
        </TrackingProvider>
      </body>
    </html>
  )
}


