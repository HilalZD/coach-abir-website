'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

const BORDER_TOPS = ['#A88C56', '#F4C2D0', '#DCC086', '#F4A8C8']

export default function Testimonials() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = content[language].testimonials
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = t.items.length
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  /* Auto-scroll: advance every 8 s, pause when isPaused */
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 8000)
    return () => clearInterval(id)
  }, [isPaused, total])

  /* After manual interaction, resume auto-scroll after 6 s */
  const afterInteraction = useCallback(() => {
    setIsPaused(true)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), 6000)
  }, [])

  const handlePrev = useCallback(() => { prev(); afterInteraction() }, [prev, afterInteraction])
  const handleNext = useCallback(() => { next(); afterInteraction() }, [next, afterInteraction])
  const handleDot  = (i: number) => { setCurrent(i); afterInteraction() }

  /* Keyboard navigation — ArrowRight = logical "forward" in LTR, "backward" in RTL */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { (isRTL ? handlePrev : handleNext)() }
      if (e.key === 'ArrowLeft')  { (isRTL ? handleNext : handlePrev)() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isRTL, handlePrev, handleNext])

  /* Reset on language switch */
  useEffect(() => { setCurrent(0) }, [language])

  /* Touch/swipe — swipe left = advance in carousel (works naturally in both directions) */
  const touchStartX = useRef(0)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      delta > 0
        ? (isRTL ? handlePrev() : handleNext())
        : (isRTL ? handleNext() : handlePrev())
    }
  }

  /*
   * ARROW BUTTON LAYOUT
   * ─────────────────────────────────────────────────────────────────────
   * The controls flex container inherits `dir` from the section, so:
   *   RTL: first DOM child → physical RIGHT, second → physical LEFT
   *   LTR: first DOM child → physical LEFT, second → physical RIGHT
   *
   * We keep "first button = prev, second button = next" in DOM order.
   * The ICON on each button flips so it always points toward the edge
   * that the card comes FROM (i.e., the direction of travel):
   *   RTL prev → points right (→)   LTR prev → points left  (←)
   *   RTL next → points left  (←)   LTR next → points right (→)
   */
  const PrevIcon = isRTL ? ChevronRight : ChevronLeft
  const NextIcon = isRTL ? ChevronLeft  : ChevronRight

  const arrowStyle: React.CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: 'none',
    background: 'linear-gradient(135deg, #F2E1B0, #DCC086, #A88C56)',
    color: '#3A2515',
    padding: 0,
    boxShadow: '0 4px 14px rgba(168,140,86,0.45)',
    flexShrink: 0,
  }

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        background: 'white',
        paddingTop: '36px',
        paddingBottom: '40px',
        /* Inline style overrides globals.css `html { direction: rtl }` via
           highest-specificity cascade. Without this, the RTL rule inherited
           from <html> bleeds into this section even when language === 'en'. */
        direction: isRTL ? 'rtl' : 'ltr',
      }}
      aria-label={isRTL ? 'شهادات العملاء' : 'Client testimonials'}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
        setIsPaused(false)
      }}
    >
      {/* Section heading */}
      <motion.div
        className="text-center px-7 pb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label font-tajawal">{t.label}</p>
        <h2 className="font-tajawal font-extrabold text-ink-dark" style={{ fontSize: '20px' }}>
          {t.title}
        </h2>
      </motion.div>

      {/* Carousel viewport */}
      <div
        className="max-w-[720px] mx-auto px-5 select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden" style={{ borderRadius: '16px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current}-${language}`}
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 40 : -40 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard
                name={t.items[current].name}
                role={t.items[current].role}
                text={t.items[current].text}
                emoji={t.items[current].emoji}
                borderColor={BORDER_TOPS[current % BORDER_TOPS.length]}
                isRTL={isRTL}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-5">

          {/* PREV button — physically RIGHT in RTL, LEFT in LTR (handled by dir) */}
          <button
            onClick={handlePrev}
            aria-label={isRTL ? 'الشهادة السابقة' : 'Previous testimonial'}
            className="flex items-center justify-center"
            style={arrowStyle}
          >
            <PrevIcon size={16} strokeWidth={2} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist">
            {t.items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`${isRTL ? 'الشهادة' : 'Testimonial'} ${i + 1}`}
                onClick={() => handleDot(i)}
                style={{
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? '#A88C56' : '#EDD9A3',
                  width: i === current ? '24px' : '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                  boxShadow: 'none',
                }}
              />
            ))}
          </div>

          {/* NEXT button — physically LEFT in RTL, RIGHT in LTR */}
          <button
            onClick={handleNext}
            aria-label={isRTL ? 'الشهادة التالية' : 'Next testimonial'}
            className="flex items-center justify-center"
            style={arrowStyle}
          >
            <NextIcon size={16} strokeWidth={2} />
          </button>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────
 * TestimonialCard — fully bidirectional
 *
 * Every directional property is set explicitly rather than relying on
 * CSS `direction` cascading from an ancestor, because globals.css
 * hard-codes `html { direction: rtl }` which can bleed in.
 *
 * Strategy:
 *   • Card root: `direction: isRTL ? 'rtl' : 'ltr'` inline — ensures
 *     text bidi algorithm is correct for the active language.
 *   • Stars / author row: reset to `direction: ltr` so physical
 *     flex properties (`flex-start`, `row-reverse`) behave predictably.
 *   • Everything else: explicit textAlign and positioning.
 * ───────────────────────────────────────────────────────────────────── */
function TestimonialCard({
  name, role, text, emoji, borderColor, isRTL,
}: {
  name: string
  role: string
  text: string
  emoji: string
  borderColor: string
  isRTL: boolean
}) {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #FFFFFF, #FAF3E6, #FFF9FB)',
        border: '1.5px solid #F7D6E0',
        borderTop: `4px solid ${borderColor}`,
        borderRadius: '16px',
        padding: '32px 36px',
        minHeight: '200px',
        position: 'relative',
        /* Sets the bidi base direction for all descendant text */
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Quote mark — physically positioned in the reading-start corner */}
      <span
        className="absolute top-3 font-playfair pointer-events-none select-none"
        style={{
          fontSize: '60px',
          color: '#FAF3E6',
          lineHeight: 1,
          ...(isRTL ? { right: '20px' } : { left: '20px' }),
        }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Stars — physically aligned to reading start
          `direction: ltr` resets the context so flex-start/end map to
          physical left/right, then justifyContent places stars correctly. */}
      <div
        className="flex gap-1 mb-4"
        aria-label="5 stars"
        style={{
          direction: 'ltr',
          justifyContent: isRTL ? 'flex-end' : 'flex-start',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: '#A88C56', fontSize: '14px' }}>★</span>
        ))}
      </div>

      {/* Body text — explicit alignment, inherits direction from card root */}
      <p
        className="font-tajawal mb-5 relative z-10"
        style={{
          fontSize: '14px',
          color: '#2C1A30',
          lineHeight: 1.9,
          maxWidth: '90%',
          textAlign: isRTL ? 'right' : 'left',
        }}
      >
        {text}
      </p>

      {/* Author row — physical flex ordering.
          `direction: ltr` + `row-reverse` → avatar on right (RTL).
          `direction: ltr` + `row`         → avatar on left  (LTR). */}
      <div
        className="flex items-center gap-3"
        style={{
          direction: 'ltr',
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}
      >
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FDE8F0, #F4C2D0)',
            fontSize: '18px',
          }}
          aria-hidden="true"
        >
          {emoji}
        </div>
        <div style={{ textAlign: isRTL ? 'right' : 'left', flex: 1 }}>
          <p
            className="font-tajawal font-bold"
            style={{ fontSize: '12px', color: '#A03060' }}
          >
            {name}
          </p>
          <p
            className="font-tajawal"
            style={{ fontSize: '10px', color: '#B07090' }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}
