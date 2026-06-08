import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CTAButtons from '@/components/CTAButtons'
import WaveDivider from '@/components/WaveDivider'
import MyStory from '@/components/MyStory'
import WhoIsThis from '@/components/WhoIsThis'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: `${siteConfig.coachName} | كوتش معتمد دولياً`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.coachName} | كوتش معتمد دولياً`,
    description: siteConfig.tagline,
    locale: 'ar_AR',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        {/* ── Hero ───────────────────────────── */}
        <Hero />

        {/* ── CTA Buttons ────────────────────── */}
        <CTAButtons />

        {/* ── Wave → My Story ────────────────── */}
        <WaveDivider fill="#FFF9FB" />
        <MyStory />

        {/* ── Wave → Who Benefits ────────────── */}
        <WaveDivider fill="#FEF0F5" />
        <WhoIsThis />

        {/* ── Wave → Testimonials ────────────── */}
        <WaveDivider fill="#FFFFFF" />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
