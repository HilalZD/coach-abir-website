'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site.config'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function MyStory() {
  const [playing, setPlaying] = useState(false)
  const { language } = useLanguage()
  const t = content[language].story

  return (
    <section
      id="story"
      className="pt-[50px] px-6 pb-[50px] md:pt-[80px] md:px-[60px] md:pb-[80px]"
      style={{
        background: 'linear-gradient(180deg, #FFF9FB, #FFFFFF)',
        textAlign: 'center',
      }}
    >
      <motion.div
        className="max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section label — overrides .section-label defaults */}
        <p
          className="section-label font-tajawal"
          style={{ fontSize: '13px', letterSpacing: '4px', marginBottom: '16px' }}
        >
          {t.label}
        </p>

        {/* Story title — 24px mobile → 28px tablet → 36px desktop */}
        <h2
          className="font-tajawal font-extrabold text-ink-dark text-[24px] md:text-[28px] lg:text-[36px]"
          style={{ letterSpacing: '-0.3px', marginBottom: '20px' }}
        >
          {t.title}
        </h2>

        {/* Custom divider — larger than .gold-divider default */}
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #F4C2D0, #A88C56, #F4C2D0)',
            borderRadius: '2px',
            margin: '0 auto 40px',
          }}
        />

        {/* Story paragraphs — substantially larger for readability */}
        <p
          className="font-tajawal"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: '#5A3050',
            lineHeight: 2.0,
            fontWeight: 400,
            marginBottom: '24px',
          }}
        >
          {t.para1}
        </p>
        <p
          className="font-tajawal"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: '#5A3050',
            lineHeight: 2.0,
            fontWeight: 400,
            marginBottom: '0',
          }}
        >
          {t.para2}
        </p>

        {/* Stats row */}
        <div
          className="flex justify-center"
          style={{
            gap: 'clamp(30px, 5vw, 60px)',
            marginTop: '50px',
            paddingTop: '40px',
            borderTop: '1px solid #FDE8F0',
            marginBottom: '48px',
          }}
        >
          <StatBadge value={t.stat1Num} label={t.stat1Label} />
          <StatBadge value={t.stat2Num} label={t.stat2Label} />
          <StatBadge value={t.stat3Num} label={t.stat3Label} />
        </div>

        {/* YouTube video embed */}
        <div
          className="mx-auto overflow-hidden relative"
          style={{
            maxWidth: '560px',
            borderRadius: '14px',
            border: '2px solid #DCC086',
            marginTop: '0',
          }}
        >
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            {!playing ? (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #FDE8F0 0%, #FFF0F7 50%, #FDF7EE 100%)',
                }}
                onClick={() => setPlaying(true)}
                role="button"
                tabIndex={0}
                aria-label={language === 'ar' ? 'تشغيل الفيديو' : 'Play video'}
                onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 40%, rgba(168,140,86,0.12) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(244,194,208,0.2) 0%, transparent 50%)',
                  }}
                />
                {/* Play button */}
                <div
                  className="relative z-10 flex items-center justify-center mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(168,140,86,0.9)',
                    boxShadow: '0 4px 20px rgba(168,140,86,0.4)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span
                  className="relative z-10 font-tajawal"
                  style={{ fontSize: '13px', color: '#7A4E6E', fontWeight: 500 }}
                >
                  {t.videoLabel}
                </span>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${siteConfig.youtubeUrl}?autoplay=1`}
                title={language === 'ar' ? 'قصة الكوتش' : 'Coach story'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <p className="mt-3 font-tajawal" style={{ fontSize: '10px', color: '#D4A0B4' }}>
          {t.devNote}
        </p>
      </motion.div>
    </section>
  )
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Number — 32px mobile → 42px desktop, champagne gradient text */}
      <span
        className="font-tajawal font-extrabold text-[32px] md:text-[42px]"
        style={{
          background: 'linear-gradient(135deg, #A88C56, #DCC086)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      {/* Label */}
      <span
        className="font-tajawal"
        style={{ fontSize: '14px', color: '#B07090', fontWeight: 600, marginTop: '8px' }}
      >
        {label}
      </span>
    </div>
  )
}
