'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

/**
 * DirectionProvider
 * ─────────────────
 * Sets the `dir` and `lang` attributes on the root <html> element whenever
 * the active language changes. Wraps the entire app so every CSS logical
 * property (border-inline-start, inset-inline-start, text-align: start, etc.)
 * and every Tailwind logical variant (ps-*, pe-*, ms-*, me-*, border-s-*, …)
 * automatically flips between RTL and LTR without any per-component conditionals.
 *
 * This complements the same logic in LanguageContext — having it here as an
 * explicit React component makes the architectural intent clear and ensures
 * the direction is applied as early as possible in the render tree.
 */
export default function DirectionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { language } = useLanguage()

  useEffect(() => {
    const html = document.documentElement
    if (language === 'en') {
      html.setAttribute('dir', 'ltr')
      html.setAttribute('lang', 'en')
    } else {
      html.setAttribute('dir', 'rtl')
      html.setAttribute('lang', 'ar')
    }
  }, [language])

  return <>{children}</>
}
