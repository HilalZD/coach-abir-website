'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const label = language === 'ar' ? 'EN' : 'عربي'

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05, background: 'linear-gradient(135deg, #DCC086, #A88C56, #8A6F3E)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="fixed z-[9999] font-tajawal select-none lang-toggle"
      style={{
        top: '64px',
        insetInlineStart: '16px',   /* logical: left in LTR, right in RTL */
        background: 'linear-gradient(135deg, #F2E1B0, #DCC086, #A88C56)',
        lineHeight: 1,
      }}
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      {label}
    </motion.button>
  )
}
