import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import WorkshopsClient from './WorkshopsClient'

export const metadata: Metadata = {
  title: `ورش العمل | ${siteConfig.coachName}`,
  description: `ورش العمل والتدريبات مع ${siteConfig.coachName} — قريباً`,
  openGraph: {
    title: `ورش العمل | ${siteConfig.coachName}`,
    description: `ورش العمل والتدريبات مع ${siteConfig.coachName} — قريباً`,
    locale: 'ar_AR',
    type: 'website',
  },
}

export default function WorkshopsPage() {
  return <WorkshopsClient />
}
