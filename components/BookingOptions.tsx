'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

interface Props {
  onBook: () => void
}

export default function BookingOptions({ onBook }: Props) {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const s = content[language].booking.session

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        padding: '40px 20px 20px',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            background: 'white',
            border: '1.5px solid #F7D6E0',
            borderRadius: '20px',
            padding: '32px 28px',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(168, 140, 86, 0.2)',
            position: 'relative',
          }}
        >
          {/* Top color bar */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #A88C56, #DCC086, #A88C56)',
              borderRadius: '20px 20px 0 0',
            }}
            aria-hidden="true"
          />

          {/* Launch discount badge — sticker style */}
          <div style={{ marginBottom: '20px', marginTop: '10px' }}>
            <motion.span
              className="font-tajawal"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #C2547A, #A03060)',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '5px 14px',
                fontSize: '11px',
                fontWeight: 800,
                transform: 'rotate(-3deg)',
                boxShadow: '0 4px 12px rgba(160,48,96,0.35)',
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {s.badge}
            </motion.span>
          </div>

          {/* Icon circle */}
          <div
            className="flex items-center justify-center mx-auto mb-4"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FAF3E6, #DCC086, #FDE8F0)',
              fontSize: '28px',
            }}
            aria-hidden="true"
          >
            {s.icon}
          </div>

          {/* Session title */}
          <h2
            className="font-tajawal"
            style={{ fontSize: '20px', fontWeight: 900, color: '#2C1A30', marginBottom: 0 }}
          >
            {s.title}
          </h2>

          {/* 1 to 1 subtitle */}
          <p
            className="font-tajawal"
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#A88C56',
              letterSpacing: '2px',
              marginTop: '4px',
              marginBottom: '16px',
            }}
          >
            {s.subtitle}
          </p>

          {/* Description */}
          <p
            className="font-tajawal"
            style={{ fontSize: '13px', color: '#7A4E6E', lineHeight: 1.8, margin: '0 0 20px', textAlign: isRTL ? 'right' : 'left' }}
          >
            {s.desc}
          </p>

          {/* Price row: new price (prominent) + original (strikethrough) — dir handles flex order */}
          <div className="flex items-baseline justify-center gap-3 mb-2" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* New launch price */}
            <span
              className="font-tajawal"
              style={{
                fontSize: '36px',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #A88C56, #8A6F3E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {s.price}
            </span>
            {/* Original price — crossed out */}
            <span
              className="font-tajawal"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#B07090',
                textDecoration: 'line-through',
              }}
            >
              {s.originalPrice}
            </span>
          </div>

          {/* Price subtitle */}
          <p className="font-tajawal mb-6" style={{ fontSize: '11px', color: '#B07090' }}>
            {s.priceSub}
          </p>

          {/* Feature list — DOM order [dot, text], dir handles visual flip */}
          <div className="flex flex-col gap-2 mb-7" dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {(s.features as readonly string[]).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                {/* Dot — first in DOM = inline-start side in both directions */}
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #A88C56, #F4C2D0)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                {/* Text — second in DOM */}
                <span className="font-tajawal" style={{ fontSize: '12px', color: '#3A2030' }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA — global gold button, scrolls to form */}
          <button className="btn-gold w-full" onClick={onBook}>
            {s.btn}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
