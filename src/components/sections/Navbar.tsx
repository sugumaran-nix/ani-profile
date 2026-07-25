'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    LINKS.forEach(l => { const el = document.getElementById(l.href.slice(1)); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return active
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="nav-blur"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 52,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" className="f-display" style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          S.
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {LINKS.map(l => {
            const isActive = active === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--txt-3)',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: 2,
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute', bottom: -2, left: 0, right: 0,
                      height: 1.5, background: 'var(--accent)', borderRadius: 1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="show-mobile">
          <ThemeToggle />
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: 'block', width: 20, height: 1.5, background: 'var(--txt)', borderRadius: 1, transition: '0.3s',
                transform: open ? (i === 0 ? 'rotate(45deg) translateY(6.5px)' : i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'scaleX(0)') : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
          >
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '12px 24px', fontSize: 14, fontWeight: 500, color: active === l.href.slice(1) ? 'var(--accent)' : 'var(--txt-2)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  )
}
