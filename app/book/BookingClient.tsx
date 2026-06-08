'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingOptions from '@/components/BookingOptions'
import BookingForm from '@/components/BookingForm'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function BookingClient() {
  const [showForm, setShowForm] = useState(false)
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = content[language].booking

  return (
    <>
      <Navbar />
      <main
        className="page-content"
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* ── Hero Banner ──────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FEF0F5 0%, #FDF7EE 50%, #FEF0F5 100%)',
            padding: '44px 28px 36px',
            textAlign: 'center',
          }}
        >
          {/* Decorative corner rings */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              border: '1px solid rgba(168,140,86,0.15)',
              transform: 'translate(30%, -30%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              border: '1px solid rgba(244,194,208,0.2)',
              transform: 'translate(-25%, 25%)',
            }}
            aria-hidden="true"
          />

          {/* Breadcrumb */}
          <p
            className="font-tajawal mb-3 relative z-10"
            style={{ fontSize: '10px', color: '#B07090', textAlign: 'center' }}
          >
            <a href="/" className="hover:text-[#A88C56] transition-colors">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </a>
            {' › '}
            <span>{language === 'ar' ? 'احجز جلستك' : 'Book Your Session'}</span>
          </p>

          {/* Pill tag */}
          <div className="pill-badge mx-auto mb-4 w-fit relative z-10">{t.tag}</div>

          {/* H1 */}
          <h1
            className="font-tajawal font-extrabold text-ink-dark mb-3 relative z-10"
            style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}
          >
            {t.title}{' '}
            <span style={{ color: '#A88C56' }}>{t.titleAccent}</span>
          </h1>

          {/* Subline */}
          <p
            className="font-tajawal max-w-md mx-auto relative z-10"
            style={{ fontSize: '13px', color: '#7A4E6E', lineHeight: 1.8 }}
          >
            {t.subline}
          </p>

          <div className="gold-divider mt-5 relative z-10" />
        </section>

        {/* ── Single Session Card ─────────────────── */}
        <BookingOptions onBook={() => setShowForm(true)} />

        {/* ── Google Form Reveal ──────────────────── */}
        <BookingForm visible={showForm} />
      </main>
      <Footer />
    </>
  )
}
