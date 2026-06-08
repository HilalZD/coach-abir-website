'use client'

import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site.config'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

interface Props {
  visible: boolean
}

export default function BookingForm({ visible }: Props) {
  const formRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = content[language].booking
  const s = t.session
  const isPlaceholder = siteConfig.bookingCalendarUrl.startsWith('[')

  const waUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    content[language].cta.waMessage,
  )}`

  useEffect(() => {
    if (visible && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [visible])

  return (
    <div
      ref={formRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 20px 48px',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            key="booking-calendar"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* ── Session summary header ── */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FEF0F5, #FDF7EE)',
                border: '1.5px solid #F7D6E0',
                borderRadius: '16px',
                padding: '20px 22px',
                marginBottom: '16px',
              }}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FAF3E6, #DCC086, #FDE8F0)',
                    fontSize: '22px',
                  }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>

                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-tajawal font-extrabold text-ink-dark"
                    style={{ fontSize: '15px', marginBottom: '2px', textAlign: isRTL ? 'right' : 'left' }}
                  >
                    {s.title}{' '}
                    <span style={{ color: '#A88C56', letterSpacing: '1px', fontWeight: 700 }}>
                      {s.subtitle}
                    </span>
                  </h3>
                  <p
                    className="font-tajawal"
                    style={{ fontSize: '11px', color: '#7A4E6E', lineHeight: 1.6, textAlign: isRTL ? 'right' : 'left' }}
                  >
                    {t.calendarInstruction}
                  </p>
                </div>

                {/* Price cluster — dir handles visual order, no flexDirection hack needed */}
                <div className="flex items-baseline gap-2 shrink-0" dir={isRTL ? 'rtl' : 'ltr'}>
                  <span
                    className="font-tajawal font-extrabold"
                    style={{ fontSize: '20px', color: '#A88C56' }}
                  >
                    {s.price}
                  </span>
                  <span
                    className="font-tajawal"
                    style={{ fontSize: '13px', color: '#B07090', textDecoration: 'line-through' }}
                  >
                    {s.originalPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Google Calendar embed ── */}
            <div
              style={{
                background: 'white',
                border: '1.5px solid #F7D6E0',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '12px',
              }}
            >
              {isPlaceholder ? (
                /*
                 * ─────────────────────────────────────────────────────────────────
                 * TO CONNECT GOOGLE CALENDAR APPOINTMENT SCHEDULING:
                 *   1. Open calendar.google.com → Create → Appointment schedule
                 *   2. Set title "جلسة خاصة 1 to 1", duration 60 min, availability
                 *   3. Save → Share → copy the booking page URL
                 *   4. Paste it into  bookingCalendarUrl  in /config/site.config.ts
                 * ─────────────────────────────────────────────────────────────────
                 */
                <div
                  style={{
                    padding: '40px 20px',
                    background: 'linear-gradient(135deg, #FEF8EE, #FEF0F5)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '12px' }} aria-hidden="true">
                    📅
                  </div>
                  <p className="font-tajawal font-bold mb-1" style={{ fontSize: '13px', color: '#A88C56' }}>
                    {language === 'ar' ? 'ربط Google Calendar' : 'Connect Google Calendar'}
                  </p>
                  <p className="font-tajawal" style={{ fontSize: '11px', color: '#B07090' }}>
                    {language === 'ar'
                      ? '← أضيفي رابط Google Calendar Appointment في bookingCalendarUrl داخل site.config.ts →'
                      : '← Add your Google Calendar Appointment URL to bookingCalendarUrl in site.config.ts →'}
                  </p>
                </div>
              ) : (
                <iframe
                  src={siteConfig.bookingCalendarUrl}
                  width="100%"
                  height="700"
                  style={{ border: 0, borderRadius: '16px', display: 'block' }}
                  title={
                    language === 'ar'
                      ? 'احجزي موعد الجلسة الخاصة'
                      : 'Book your private session'
                  }
                  loading="lazy"
                />
              )}
            </div>

            {/* ── Confirmation note ── */}
           

            {/* ── WhatsApp fallback ── */}
            <div
              className="mt-4 text-center"
              style={{
                border: '1.5px dashed #F4C2D0',
                borderRadius: '12px',
                padding: '16px',
                background: '#FFF9FB',
              }}
            >
              <p
                className="font-tajawal mb-3"
                style={{ fontSize: '12px', color: '#7A4E6E', textAlign: isRTL ? 'right' : 'left' }}
              >
                {t.whatsappAlt}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                aria-label={t.whatsappBtn}
              >
                {t.whatsappBtn}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
