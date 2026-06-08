import type { Metadata } from 'next'
import { Tajawal, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import { siteConfig } from '@/config/site.config'
import { LanguageProvider } from '@/context/LanguageContext'
import DirectionProvider from '@/components/DirectionProvider'
import LanguageToggle from '@/components/LanguageToggle'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${siteConfig.coachName} | كوتش معتمد دولياً`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.coachName} | كوتش معتمد دولياً`,
    description: siteConfig.tagline,
    locale: 'ar_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.coachName} | كوتش معتمد دولياً`,
    description: siteConfig.tagline,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /*
     * suppressHydrationWarning is required because LanguageContext updates
     * the dir and lang attributes on <html> client-side based on localStorage,
     * which may differ from the server-rendered "ar"/"rtl" defaults.
     */
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${tajawal.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-tajawal bg-cream-base text-ink-body antialiased">
        <LanguageProvider>
          <DirectionProvider>
            {/* Language toggle floats above all pages */}
            <LanguageToggle />
            {children}
          </DirectionProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
