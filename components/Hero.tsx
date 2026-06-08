'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function Hero() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = content[language].hero

  return (
    <section
      className="relative overflow-hidden pt-10 px-6 pb-10 md:pt-[80px] md:px-[60px] md:pb-[70px]"
      style={{
        background: 'linear-gradient(160deg, #FFF9FB 0%, #FEF0F5 50%, #FDF7EE 100%)',
        minHeight: '680px',
      }}
    >
      {/* Blob 1 — top-left, champagne */}
      <div
        className="absolute top-0 left-0 rounded-full pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(220,192,134,0.12) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
        aria-hidden="true"
      />
      {/* Blob 2 — bottom-right, pink */}
      <div
        className="absolute bottom-0 right-0 rounded-full pointer-events-none"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(244,194,208,0.15) 0%, transparent 70%)',
          transform: 'translate(20%, 20%)',
        }}
        aria-hidden="true"
      />

      {/*
       * Layout:
       *   Mobile  (flex-col-reverse): photo on TOP, text below
       *   Desktop (md:flex-row):      text on reading-start side, photo on the other
       *
       * order:1 = text → bottom on mobile, reading side on desktop
       * order:2 = photo → top on mobile, opposite side on desktop
       */}
      <div className="relative max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-[60px]">

        {/* ── TEXT COLUMN ── order:1 */}
        <motion.div
          className="flex-1 min-w-0 w-full"
          style={{ order: 1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Tag pill — overrides .pill-badge defaults to be larger */}
          <div
            className="pill-badge w-fit"
            style={{ fontSize: '12px', padding: '8px 20px', marginBottom: '28px', textAlign: isRTL ? 'right' : 'left' }}
          >
            {t.tag}
          </div>

          {/* H1 — 26px mobile → 32px tablet → 42px desktop */}
          <h1
            className="font-tajawal text-[26px] md:text-[32px] lg:text-[42px]"
            style={{
              fontWeight: 900,
              lineHeight: 1.35,
              letterSpacing: '-0.5px',
              marginBottom: '24px',
            }}
          >
            {isRTL ? (
              <>
                <span style={{ color: '#2C1A30' }}>كل </span>
                <span style={{ color: '#A88C56' }}>تغيير حقيقي </span>
                <span style={{ color: '#2C1A30' }}>يبدأ من الداخل</span>
              </>
            ) : (
              <>
                <span style={{ color: '#2C1A30' }}>All </span>
                <span style={{ color: '#A88C56' }}>real change </span>
                <span style={{ color: '#2C1A30' }}>begins within.</span>
              </>
            )}
          </h1>

          {/* Subline */}
          <p
            className="font-tajawal"
            style={{
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              color: '#7A4E6E',
              lineHeight: 1.9,
              maxWidth: '520px',
              fontWeight: 500,
              textAlign: isRTL ? 'right' : 'left',
            }}
          >
            {t.subline}
          </p>
        </motion.div>

        {/* ── PHOTO COLUMN ── order:2
            Mobile: 260×340  |  Desktop: 340×460
            The motion.div IS the frame — ring + glow + image all live inside. */}
        <motion.div
          className="relative shrink-0 w-[260px] h-[340px] md:w-[340px] md:h-[460px]"
          style={{ order: 2 }}
          initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Champagne glow — spreads behind the ring */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168,140,86,0.22) 0%, transparent 70%)',
              transform: 'scale(1.45)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Dashed ring — 18px outside the frame on all sides
              Frame: 340×460 → Ring: 376×496  (340+36 × 460+36)
              Radius = photo radius + 18px: 200+18=218, 130+18=148 */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: '-18px',
              border: '2.5px dashed rgba(168,140,86,0.45)',
              borderRadius: '218px 218px 148px 148px',
              zIndex: 1,
            }}
            aria-hidden="true"
          />

          {/* Photo frame — fills the motion.div */}
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              borderRadius: '200px 200px 130px 130px',
              border: '4px solid #DCC086',
              background: 'linear-gradient(180deg, #FAF3E6 0%, #FDE8F0 60%, #F4C2D0 100%)',
              boxShadow: '0 16px 50px rgba(168,140,86,0.25), 0 4px 20px rgba(244,194,208,0.4)',
              zIndex: 2,
            }}
          >
            <Image
              src="/coach-photo.png"
              alt={language === 'ar' ? 'الكوتشة أبير خضر' : 'Coach Abir Khodor'}
              fill
              priority
              sizes="(max-width: 768px) 260px, 340px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
