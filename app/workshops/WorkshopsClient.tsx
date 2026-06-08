'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'
import { workshops, type Workshop } from '@/config/workshops.config'
import { siteConfig } from '@/config/site.config'

type Lang = 'ar' | 'en'
type WorkshopsT = typeof content.ar.workshopsPage

const ROW_ICONS = ['🌸', '💫', '🌙', '✨', '🌟', '🎯', '🌺', '💎']

export default function WorkshopsClient() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [notified, setNotified] = useState(false)
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = content[language].workshopsPage
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const waUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(content[language].cta.waMessage)}`

  const handleToggle = useCallback(
    (id: string) => {
      const isOpening = openId !== id
      setOpenId(isOpening ? id : null)
      if (isOpening) {
        setTimeout(() => {
          const el = rowRefs.current[id]
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }, 150)
      }
    },
    [openId],
  )

  return (
    <>
      <Navbar />
      {/* dir + direction inline style: the dir attribute signals HTML semantics;
          the inline style overrides globals.css `html { direction: rtl }` (author
          stylesheet) because inline styles sit above it in the cascade. Together
          they make direction cascade into every child flex/text/abs element. */}
      <main
        className="page-content"
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* ── Hero Banner ─────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FEF0F5 0%, #FDF7EE 50%, #FEF0F5 100%)',
            padding: '44px 28px 36px',
            textAlign: 'center',
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ border: '1px solid rgba(168,140,86,0.15)', transform: 'translate(30%, -30%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ border: '1px solid rgba(244,194,208,0.2)', transform: 'translate(-25%, 25%)' }}
            aria-hidden="true"
          />

          <p className="font-tajawal mb-3 relative z-10" style={{ fontSize: '10px', color: '#B07090' }}>
            <a href="/" className="hover:text-[#A88C56] transition-colors">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </a>
            {' › '}
            <span>{language === 'ar' ? 'ورش العمل' : 'Workshops'}</span>
          </p>

          <div className="pill-badge mx-auto mb-4 w-fit relative z-10">{t.tag}</div>

          <motion.h1
            className="font-tajawal font-extrabold text-ink-dark mb-3 relative z-10"
            style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {t.title}{' '}
            <span style={{ color: '#A88C56' }}>{t.titleAccent}</span>
          </motion.h1>

          <motion.p
            className="font-tajawal max-w-md mx-auto relative z-10"
            style={{ fontSize: '13px', color: '#7A4E6E', lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {t.subline}
          </motion.p>

          <motion.div
            className="gold-divider mt-5 relative z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          />
        </section>

        {/* ── Workshop List ─────────────────────────── */}
        <section style={{ padding: '40px 20px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <motion.p
              className="section-label font-tajawal mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.listLabel}
            </motion.p>

            {workshops.length === 0 ? (
              <EmptyState
                t={t}
                email={email}
                setEmail={setEmail}
                notified={notified}
                setNotified={setNotified}
              />
            ) : (
              <div>
                {workshops.map((ws, i) => (
                  <motion.div
                    key={ws.id}
                    ref={(el: HTMLDivElement | null) => { rowRefs.current[ws.id] = el }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    style={{ marginBottom: '14px' }}
                  >
                    <WorkshopRow
                      workshop={ws}
                      isOpen={openId === ws.id}
                      onToggle={() => handleToggle(ws.id)}
                      language={language}
                      isRTL={isRTL}
                      t={t}
                      icon={ROW_ICONS[i % ROW_ICONS.length]}
                      waUrl={waUrl}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
 * WORKSHOP ROW
 * ─────────────────────────────────────────────────────────────────────────── */

interface RowProps {
  workshop: Workshop
  isOpen: boolean
  onToggle: () => void
  language: Lang
  isRTL: boolean
  t: WorkshopsT
  icon: string
  waUrl: string
}

function WorkshopRow({ workshop, isOpen, onToggle, language, isRTL, t, icon, waUrl }: RowProps) {
  const title    = workshop.title[language]
  const shortDesc = workshop.shortDesc[language]
  const date     = workshop.date[language]
  const fullDesc = workshop.fullDesc[language]
  const location = workshop.location[language]
  const duration = workshop.duration[language]
  const price    = workshop.price[language]

  return (
    <div>
      {/* ── Collapsed row bar ── */}
      <motion.div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={title}
        onClick={onToggle}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.15 }}
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #DCC086, #A88C56, #8A6F3E)'
            : 'linear-gradient(135deg, #F2E1B0, #DCC086, #A88C56)',
          border: 'none',
          borderRadius: isOpen ? '16px 16px 0 0' : '16px',
          padding: '18px 22px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          userSelect: 'none',
          outline: 'none',
          transition: 'background 0.2s, border-radius 0.2s',
        }}
      >
        {/* Icon circle */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', fontSize: '20px' }}
          aria-hidden="true"
        >
          {icon}
        </div>

        {/* Title + short desc */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="font-tajawal font-extrabold" style={{ fontSize: '14px', color: '#3A2515', marginBottom: '3px', textAlign: isRTL ? 'right' : 'left' }}>
            {title}
          </p>
          <p className="font-tajawal" style={{ fontSize: '11px', color: '#6B5530', lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: isRTL ? 'right' : 'left' }}>
            {shortDesc}
          </p>
        </div>

        {workshop.status !== 'upcoming' && <StatusBadge status={workshop.status} t={t} />}

        <p className="font-tajawal shrink-0 hidden sm:block" style={{ fontSize: '10px', color: '#3A2515', whiteSpace: 'nowrap' }}>
          📅 {date}
        </p>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0"
          aria-hidden="true"
        >
          <ChevronDown size={18} color="#3A2515" strokeWidth={2.2} />
        </motion.div>
      </motion.div>

      {/* ── Expanded panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${workshop.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                background: 'white',
                border: '1.5px solid #F4C2D0',
                borderTop: 'none',
                borderRadius: '0 0 16px 16px',
                padding: '28px 24px',
                boxShadow: '0 8px 28px rgba(164,80,120,0.09)',
                /* Explicit direction on the panel ensures the two-column flex
                   and all text inside it respond correctly to language changes. */
                direction: isRTL ? 'rtl' : 'ltr',
              }}
            >
              {/* Two-column layout — image first in DOM, auto-swaps with dir:
                  RTL: image on RIGHT (reading start)  |  LTR: image on LEFT */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Image section — 40% on desktop */}
                <motion.div
                  className="w-full md:w-2/5 shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <WorkshopImages
                    images={workshop.images}
                    status={workshop.status}
                    alt={title}
                  />
                </motion.div>

                {/* Details — 60% on desktop */}
                <div className="w-full md:w-3/5">
                  <p className="font-tajawal mb-5" style={{ fontSize: '13px', color: '#3A2030', lineHeight: 1.9, textAlign: isRTL ? 'right' : 'left' }}>
                    {fullDesc}
                  </p>
                  {/* Meta pills auto-align to reading start via inherited direction */}
                  <div className="flex flex-wrap gap-2">
                    <MetaBadge emoji="📅" text={date} />
                    <MetaBadge emoji="📍" text={location} />
                    <MetaBadge emoji="⏱" text={duration} />
                    <MetaBadge emoji="💰" text={price} />
                  </div>
                </div>
              </div>

              {/* Form or status message */}
              {workshop.status === 'upcoming' ? (
                <UpcomingForm workshop={workshop} t={t} language={language} isRTL={isRTL} />
              ) : (
                <StatusMessage status={workshop.status} t={t} waUrl={waUrl} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Workshop images — single / carousel / gallery ── */
function WorkshopImages({
  images,
  status,
  alt,
}: {
  images: string[]
  status: Workshop['status']
  alt: string
}) {
  const [idx, setIdx] = useState(0)

  const aspectBox = {
    position: 'relative' as const,
    width: '100%',
    paddingTop: '75%',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '2px solid #F4C2D0',
  }

  if (images.length === 1) {
    return (
      <div style={aspectBox}>
        <Image src={images[0]} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
    )
  }

  /* Completed workshop → photo gallery grid */
  if (status === 'completed') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <div key={i} style={{ position: 'relative', paddingTop: '75%', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #F4C2D0' }}>
            <Image src={src} alt={`${alt} ${i + 1}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    )
  }

  /* Upcoming / soldout → manual carousel */
  return (
    <div style={{ position: 'relative' }}>
      <div style={aspectBox}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={images[idx]} alt={`${alt} ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </AnimatePresence>

        {/* Counter pill */}
        <div
          className="absolute font-tajawal font-bold"
          style={{
            top: '8px',
            right: '8px',
            background: 'rgba(0,0,0,0.45)',
            color: 'white',
            borderRadius: '12px',
            padding: '2px 8px',
            fontSize: '10px',
            zIndex: 2,
          }}
        >
          {idx + 1} / {images.length}
        </div>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
              aria-label="previous image"
              style={{
                position: 'absolute', left: '6px', top: '50%', transform: 'translateY(-50%)',
                zIndex: 2, width: '28px', height: '28px', borderRadius: '50%', padding: 0,
                background: 'rgba(255,255,255,0.85)', boxShadow: 'none',
              }}
            >
              <ChevronLeft size={14} color="#3A2515" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % images.length)}
              aria-label="next image"
              style={{
                position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
                zIndex: 2, width: '28px', height: '28px', borderRadius: '50%', padding: 0,
                background: 'rgba(255,255,255,0.85)', boxShadow: 'none',
              }}
            >
              <ChevronRight size={14} color="#3A2515" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? '16px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === idx ? '#A88C56' : '#EDD9A3',
                border: 'none',
                padding: 0,
                transition: 'all 0.25s ease',
                boxShadow: 'none',
              }}
              aria-label={`image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Upcoming: registration form ── */
function UpcomingForm({ workshop, t, language, isRTL }: { workshop: Workshop; t: WorkshopsT; language: Lang; isRTL: boolean }) {
  const isPlaceholder = workshop.formUrl.startsWith('[')
  return (
    <div>
      <p className="font-tajawal font-bold mb-3" style={{ fontSize: '12px', color: '#A88C56', textAlign: isRTL ? 'right' : 'left' }}>
        {t.registerHeading}
      </p>
      <div style={{ border: '1.5px solid #F7D6E0', borderRadius: '12px', overflow: 'hidden' }}>
        {isPlaceholder ? (
          <div style={{ padding: '28px 20px', background: '#FEF0F5', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }} aria-hidden="true">📋</div>
            <p className="font-tajawal" style={{ fontSize: '11px', color: '#B07090' }}>
              ← {t.devFormNote} →
            </p>
          </div>
        ) : (
          <iframe
            src={workshop.formUrl}
            width="100%"
            height="700"
            style={{ border: 'none', display: 'block' }}
            title={language === 'ar' ? 'نموذج التسجيل في الورشة' : 'Workshop registration form'}
            loading="lazy"
          />
        )}
      </div>
    </div>
  )
}

/* ─── Sold-out / completed message ── */
function StatusMessage({ status, t, waUrl }: { status: 'soldout' | 'completed'; t: WorkshopsT; waUrl: string }) {
  const isSoldOut = status === 'soldout'
  return (
    <div style={{ background: 'linear-gradient(135deg, #FDE8F0, #FDF3E3)', border: '1.5px dashed #F4B8D0', borderRadius: '12px', padding: '32px 20px', textAlign: 'center' }}>
      <div style={{ fontSize: '40px', marginBottom: '14px' }} aria-hidden="true">
        {isSoldOut ? '🌸' : '✨'}
      </div>
      <p className="font-tajawal mb-5 max-w-sm mx-auto" style={{ fontSize: '13px', color: '#7A4E6E', lineHeight: 1.8 }}>
        {isSoldOut ? t.soldOutMessage : t.completedMessage}
      </p>
      {/* Opens the WhatsApp group invite link — not a private chat */}
      <a href={siteConfig.workshopGroupLink} target="_blank" rel="noopener noreferrer" className="btn-gold" aria-label={t.notifyBtn}>
        {t.notifyBtn}
      </a>
    </div>
  )
}

/* ─── Status badge (sticker) ── */
function StatusBadge({ status, t }: { status: 'soldout' | 'completed'; t: WorkshopsT }) {
  const isSoldOut = status === 'soldout'
  return (
    <motion.span
      className="font-tajawal font-bold shrink-0"
      style={{
        background: isSoldOut ? '#C2547A' : '#7A4E6E',
        color: 'white',
        borderRadius: '20px',
        padding: '5px 14px',
        fontSize: '10px',
        display: 'inline-block',
        transform: 'rotate(-3deg)',
        boxShadow: '0 3px 10px rgba(0,0,0,0.22)',
        whiteSpace: 'nowrap',
      }}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {isSoldOut ? t.soldOutBadge : t.completedBadge}
    </motion.span>
  )
}

/* ─── Meta info pill ── */
function MetaBadge({ emoji, text }: { emoji: string; text: string }) {
  return (
    <span
      className="font-tajawal inline-flex items-center gap-1"
      style={{ background: '#FDE8F0', border: '1px solid #F4B8D0', color: '#A03060', borderRadius: '20px', padding: '5px 12px', fontSize: '11px', whiteSpace: 'nowrap' }}
    >
      <span aria-hidden="true">{emoji}</span> {text}
    </span>
  )
}

/* ─── Empty state ── */
function EmptyState({ t, email, setEmail, notified, setNotified }: {
  t: WorkshopsT; email: string; setEmail: (v: string) => void; notified: boolean; setNotified: (v: boolean) => void
}) {
  return (
    <motion.div
      className="text-center py-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ fontSize: '52px', marginBottom: '16px' }} aria-hidden="true">🌸</div>
      <h2 className="font-tajawal font-extrabold text-ink-dark mb-3" style={{ fontSize: '20px' }}>
        {t.emptyTitle}
      </h2>
      <p className="font-tajawal max-w-sm mx-auto mb-6" style={{ fontSize: '13px', color: '#7A4E6E', lineHeight: 1.8 }}>
        {t.emptySubtitle}
      </p>
      {notified ? (
        <div>
          <span style={{ fontSize: '32px' }} aria-hidden="true">🎉</span>
          <p className="font-tajawal font-bold mt-2" style={{ fontSize: '14px', color: '#A88C56' }}>
            {t.emptySuccessText}
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setNotified(true) }}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto"
          noValidate
        >
          <label htmlFor="empty-ws-email" className="sr-only">{t.emptyEmailPlaceholder}</label>
          <input
            id="empty-ws-email"
            className="form-input flex-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emptyEmailPlaceholder}
            required
            aria-label={t.emptyEmailPlaceholder}
          />
          <button type="submit" className="btn-gold shrink-0">
            {t.emptyEmailBtn}
          </button>
        </form>
      )}
    </motion.div>
  )
}
