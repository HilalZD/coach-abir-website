'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { siteConfig } from '@/config/site.config'

export type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')
  const [mounted, setMounted] = useState(false)

  // Read persisted preference on mount
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('site-language') as Language | null
      if (saved === 'ar' || saved === 'en') setLanguage(saved)
    } catch {
      // localStorage unavailable (private mode etc.) — stay with default
    }
  }, [])

  // Apply direction / lang attributes and persist whenever language changes
  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    html.dir = language === 'ar' ? 'rtl' : 'ltr'
    html.lang = language
    try {
      localStorage.setItem('site-language', language)
    } catch {
      // ignore
    }
    document.title =
      language === 'ar'
        ? `${siteConfig.coachName} | كوتش معتمد دولياً`
        : `${siteConfig.coachName} | Certified International Coach`
  }, [language, mounted])

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'))

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
