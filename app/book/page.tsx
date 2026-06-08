import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import BookingClient from './BookingClient'

export const metadata: Metadata = {
  title: `احجز جلستك | ${siteConfig.coachName}`,
  description: siteConfig.bookingIntro,
  openGraph: {
    title: `احجز جلستك | ${siteConfig.coachName}`,
    description: siteConfig.bookingIntro,
    locale: 'ar_AR',
    type: 'website',
  },
}

export default function BookPage() {
  return <BookingClient />
}
