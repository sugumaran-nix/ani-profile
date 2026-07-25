'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${
        scrolled ? 'border-b' : ''
      }`}
      style={{
        borderColor: 'var(--border-subtle)',
        background: scrolled ? 'color-mix(in srgb, var(--bg-primary) 80%, transparent)' : 'transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-base tracking-wider"
          style={{ color: 'var(--accent)' }}
        >
          S.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(link => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width: isActive ? '100%' : '0%',
                    background: 'var(--accent)',
                  }}
                />
              </a>
            )
          })}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block h-px w-5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--text-primary)' }} />
            <span className={`block h-px w-5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
            <span className={`block h-px w-5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--text-primary)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t py-3 px-6 flex flex-col gap-4" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
          {LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium"
              style={{ color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
