'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'
import { siteConfig } from '@/config/site.config'

export default function Footer() {
  const { language } = useLanguage()
  const t = content[language].footer

  const waUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(t.waMessage)}`

  const socialLinks = [
    {
      key: 'instagram',
      label: t.links.instagram,
      href: siteConfig.instagram,
      external: true,
      iconBg: 'linear-gradient(135deg, #FDE8F0, #F9C8DC)',
      border: '#F4C2D0',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2547A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="#C2547A" stroke="none"/>
        </svg>
      ),
    },
    {
      key: 'facebook',
      label: t.links.facebook,
      href: siteConfig.facebook,
      external: true,
      iconBg: 'linear-gradient(135deg, #E8F0FE, #C8D8FC)',
      border: '#B8CCFC',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A6FA5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      key: 'whatsapp',
      label: t.links.whatsapp,
      href: waUrl,
      external: true,
      iconBg: 'linear-gradient(135deg, #FDE8F0, #F9C8DC)',
      border: '#F4B8D0',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="#E8607A" strokeWidth="1.5"/>
          <path d="M8.5 9.5c.5 1 1.5 3 3 4.5s3.5 2.5 4.5 3c.3.1.6 0 .8-.2l.7-.7c.2-.2.2-.5 0-.7l-1.5-1.5c-.2-.2-.5-.2-.7 0l-.5.5c-.1.1-.3.1-.4 0C13.5 13.5 12 12 11.1 10.7c-.1-.1-.1-.3 0-.4l.5-.5c.2-.2.2-.5 0-.7L10 7.6c-.2-.2-.5-.2-.7 0l-.7.7c-.2.2-.3.5-.1.7z" fill="#E8607A"/>
        </svg>
      ),
    },
    {
      key: 'telegram',
      label: t.links.telegram,
      href: siteConfig.telegram,
      external: true,
      iconBg: 'linear-gradient(135deg, #E0F0FA, #C0E0F0)',
      border: '#A8D0E8',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A8DC8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 2L11 13"/>
          <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
        </svg>
      ),
    },
    {
      key: 'email',
      label: t.links.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
      iconBg: 'linear-gradient(135deg, #FAF3E6, #DCC086)',
      border: '#DCC086',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A88C56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 7l10 7 10-7"/>
        </svg>
      ),
    },
    {
      key: 'location',
      label: t.links.location,
      href: siteConfig.location,
      external: true,
      iconBg: 'linear-gradient(135deg, #FDE8F0, #F9C8DC)',
      border: '#F4C2D0',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2547A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      ),
    },
  ]

  return (
    <footer
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #F7D6E0',
        padding: '24px 28px 16px',
      }}
      aria-label={language === 'ar' ? 'تذييل الصفحة' : 'Footer'}
    >
      {/* Coach name */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gold-gradient font-tajawal font-extrabold" style={{ fontSize: '18px' }}>
          {siteConfig.coachName}
        </span>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="flex justify-center flex-wrap gap-4 mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
      >
        {socialLinks.map((s) => {
          const iconEl = (
            <motion.div
              className="flex flex-col items-center gap-1 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -2 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: s.iconBg,
                  border: `1.5px solid ${s.border}`,
                }}
                aria-hidden="true"
              >
                {s.icon}
              </div>
              <span className="font-tajawal" style={{ fontSize: '9px', color: '#B07090' }}>
                {s.label}
              </span>
            </motion.div>
          )

          return s.external ? (
            <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {iconEl}
            </a>
          ) : (
            <a key={s.key} href={s.href} aria-label={s.label}>
              {iconEl}
            </a>
          )
        })}
      </motion.div>

      {/* Legal row */}
      <div className="text-center pt-3" style={{ borderTop: '1px solid #FDE8F0' }}>
        <p className="font-tajawal" style={{ fontSize: '9px', color: '#D4A0B4' }}>
          <a href={siteConfig.termsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#A88C56] transition-colors">
            {t.terms}
          </a>
          {' · '}
          <a href={siteConfig.disclaimerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#A88C56] transition-colors">
            {t.disclaimer}
          </a>
          {' | '}© 2025 {siteConfig.coachName} — {t.copyright}
        </p>
      </div>
    </footer>
  )
}
