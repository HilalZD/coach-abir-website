'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

const LEFT_BORDERS   = ['#A88C56', '#F4C2D0', '#DCC086', '#F4A8C8', '#A88C56', '#F4C2D0']
const CHANGE_BORDERS = ['#A88C56', '#F4C2D0', '#DCC086', '#F4A8C8']
const CHANGE_EMOJIS  = ['✨', '🦋', '💛', '🌸']

export default function WhoIsThis() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = content[language].who

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        background: 'linear-gradient(135deg, #FFF9FB, #FEF0F5)',
        padding: '40px 28px',
        textAlign: 'center',
        /* Inline style overrides globals.css `html { direction: rtl }` (author
           stylesheet). Without this, borderInlineStart, textAlign:'start', and
           flex ordering all stay RTL even when language === 'en'. */
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div className="max-w-[520px] mx-auto">
        <motion.p
          className="section-label font-tajawal"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.label}
        </motion.p>

        <motion.h2
          className="font-tajawal font-extrabold text-ink-dark mb-3"
          style={{ fontSize: '20px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {t.title}
        </motion.h2>

        <motion.div
          className="gold-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* ── Vertical audience tag cards ─────────────────────────────────────────
         *  DOM order: [emoji circle, text span]
         *  With dir="rtl"  → emoji is on the RIGHT (inline-start), text on left
         *  With dir="ltr"  → emoji is on the LEFT  (inline-start), text on right
         *  No `order` overrides needed — the dir attribute handles the flip.
         *  border-inline-start auto-places the accent on the start edge in both directions.
         * ──────────────────────────────────────────────────────────────────────── */}
        <div
          className="flex flex-col mb-6"
          style={{ maxWidth: '480px', margin: '0 auto 24px', padding: '0 16px' }}
        >
          {(t.tags as readonly string[]).map((tag, i) => {
            const parts = tag.split(' ')
            const emoji = parts[0]
            const text  = parts.slice(1).join(' ')
            return (
              <motion.div
                key={i}
                className="flex items-center gap-4 cursor-default"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF, #FEF8EE)',
                  /* logical border — right in RTL, left in LTR */
                  borderInlineStart: `4px solid ${LEFT_BORDERS[i]}`,
                  borderRadius: '14px',
                  padding: '16px 20px',
                  marginBottom: '12px',
                  boxShadow: '0 4px 14px rgba(168, 140, 86, 0.12)',
                  transition: 'all 0.3s ease',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
                /* x is physical — slide toward inline-start edge */
                whileHover={{
                  x: language === 'ar' ? 4 : -4,
                  boxShadow: '0 6px 20px rgba(168, 140, 86, 0.22)',
                }}
              >
                {/* Emoji circle — first in DOM = inline-start side in both directions */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FDE8F0, #FAF3E6)',
                    border: '1.5px solid #F4C2D0',
                    fontSize: '22px',
                  }}
                  aria-hidden="true"
                >
                  {emoji}
                </div>
                {/* Text — second in DOM = flows after emoji */}
                <span
                  className="font-tajawal flex-1"
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#2C1A30',
                    lineHeight: 1.5,
                    textAlign: 'start',
                  }}
                >
                  {text}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* ── Change heading ── */}
        <motion.div
          style={{ marginTop: '32px', marginBottom: '20px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3
            className="font-tajawal"
            style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#A88C56',
              letterSpacing: '2px',
              marginBottom: '10px',
            }}
          >
            {t.changeTitle}
          </h3>
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #F4C2D0, #A88C56, #F4C2D0)',
              borderRadius: '2px',
              margin: '0 auto',
            }}
          />
        </motion.div>

        {/* ── Transformation cards — same logical-property pattern ── */}
        <div
          className="flex flex-col"
          style={{ maxWidth: '480px', margin: '0 auto', padding: '0 16px' }}
        >
          {(t.changes as readonly string[]).map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 cursor-default"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF, #FAF3E6)',
                borderInlineStart: `4px solid ${CHANGE_BORDERS[i]}`,
                borderRadius: '14px',
                padding: '18px 22px',
                marginBottom: '12px',
                boxShadow: '0 4px 16px rgba(168, 140, 86, 0.14)',
                transition: 'box-shadow 0.3s ease',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
              whileHover={{
                x: language === 'ar' ? 4 : -4,
                boxShadow: '0 8px 24px rgba(168, 140, 86, 0.25)',
              }}
            >
              {/* Icon — first in DOM = inline-start */}
              <motion.div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FDE8F0, #FAF3E6, #DCC086)',
                  border: '2px solid #F4C2D0',
                  boxShadow: '0 3px 10px rgba(168, 140, 86, 0.2)',
                  fontSize: '24px',
                }}
                aria-hidden="true"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                {CHANGE_EMOJIS[i]}
              </motion.div>

              {/* Text — second in DOM */}
              <span
                className="font-tajawal flex-1"
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#2C1A30',
                  lineHeight: 1.6,
                  textAlign: 'start',
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
