'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = content[language].nav

  const navLinks = [
    { label: t.home, href: '/' },
    { label: t.story, href: '/#story' },
    { label: t.book, href: '/book' },
    { label: t.workshops, href: '/workshops' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    const base = href.split('#')[0]
    return base !== '/' && pathname.startsWith(base)
  }

  return (
    <>
      {/* ─── Main Navbar ─────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300"
        style={{
          borderBottom: '1px solid #F7D6E0',
          boxShadow: scrolled ? '0 2px 12px rgba(164,80,120,0.07)' : 'none',
        }}
        role="navigation"
        aria-label={language === 'ar' ? 'القائمة الرئيسية' : 'Main navigation'}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Coach name + logo */}
          <Link
            href="/"
            className="shrink-0"
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Image
              src="/logo.png"
              alt="Coach Abir Khodor Logo"
              width={40}
              height={40}
              style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
            />
            <span
              className="font-tajawal font-extrabold"
              style={{
                fontSize: '17px',
                fontWeight: 800,
                color: '#A88C56',
                letterSpacing: '0.3px',
              }}
            >
              {siteConfig.coachName}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '12px',
                  fontWeight: isActive(link.href) ? 700 : 500,
                  color: isActive(link.href) ? '#A88C56' : '#7A4E6E',
                  transition: 'color 0.2s',
                }}
                className="font-tajawal hover:text-[#A88C56] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(true)}
            aria-label={language === 'ar' ? 'فتح القائمة' : 'Open menu'}
          >
            <Menu size={22} strokeWidth={1.8} />
          </button>
        </div>
      </nav>

      {/* ─── Mobile Drawer ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(44,26,48,0.25)', backdropFilter: 'blur(2px)' }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer slides in from the logical start (right in RTL, left in LTR) */}
            <motion.aside
              key="drawer"
              /* x is a physical CSS transform — it must stay language-conditional
                 because Framer Motion does not support logical/dir-aware transforms.
                 RTL drawer lives on the right  → slides in from x: +100%
                 LTR drawer lives on the left  → slides in from x: -100% */
              initial={{ x: language === 'ar' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: language === 'ar' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 h-full w-72 z-50 bg-white"
              style={{
                /* inset-inline-start: in RTL = right:0, in LTR = left:0 */
                insetInlineStart: 0,
                /* border on the INSIDE edge of the drawer (away from the start side) */
                borderInlineEnd: '1px solid #F7D6E0',
                /* shadow direction still needs language-conditional physical values */
                boxShadow:
                  language === 'ar'
                    ? '-4px 0 24px rgba(164,80,120,0.12)'
                    : '4px 0 24px rgba(164,80,120,0.12)',
              }}
              aria-label={language === 'ar' ? 'القائمة المتنقلة' : 'Mobile menu'}
            >
              <div className="p-5 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Image
                      src="/logo.png"
                      alt="Coach Abir Khodor Logo"
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                    />
                    <span
                      className="font-tajawal font-extrabold"
                      style={{
                        color: '#A88C56',
                        fontSize: '18px',
                        fontWeight: 800,
                        letterSpacing: '0.3px',
                      }}
                    >
                      {siteConfig.coachName}
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label={language === 'ar' ? 'إغلاق القائمة' : 'Close menu'}
                    className="p-1.5 rounded-lg"
                  >
                    <X size={20} strokeWidth={1.8} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: language === 'ar' ? 16 : -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 px-4 rounded-xl font-tajawal text-sm transition-all"
                        style={{
                          fontWeight: isActive(link.href) ? 700 : 500,
                          color: isActive(link.href) ? '#A88C56' : '#7A4E6E',
                          background: isActive(link.href) ? '#FDE8F0' : 'transparent',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="pt-4 border-t" style={{ borderColor: '#FDE8F0' }}>
                  <p className="text-center font-tajawal" style={{ fontSize: '10px', color: '#B07090' }}>
                    © 2025 {siteConfig.coachName}
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
