'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'
import { siteConfig } from '@/config/site.config'

export default function CTAButtons() {
  const { language } = useLanguage()
  const t = content[language].cta

  const waUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(t.waMessage)}`

  const buttons = [
    { label: t.book, href: '/book', external: false },
    { label: t.workshops, href: '/workshops', external: false },
    { label: t.consult, href: waUrl, external: true },
  ]

  return (
    <section
      className="w-full"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #FDE8F0',
        borderBottom: '1px solid #FDE8F0',
        padding: '20px 28px',
        textAlign: 'center',
      }}
    >
      {/* Hint label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-tajawal mb-3"
        style={{ fontSize: '11px', color: '#B07090' }}
      >
        {t.hint}
      </motion.p>

      {/* Button row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
        {buttons.map((btn, i) => (
          <motion.div
            key={btn.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
            className="w-full sm:w-auto"
          >
            {btn.external ? (
              <a
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold block w-full sm:w-auto"
                aria-label={btn.label}
              >
                {btn.label}
              </a>
            ) : (
              <Link
                href={btn.href}
                className="btn-gold block w-full sm:w-auto"
                aria-label={btn.label}
              >
                {btn.label}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
