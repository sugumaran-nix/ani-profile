'use client'
import { useEffect, useState, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted]     = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = LINKS.map(l => document.querySelector(l.href))
      const current = sections.findIndex(el => {
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 80 && bottom > 80
      })
      if (current !== -1) setActive(LINKS[current].href)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = useCallback(
    () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    [resolvedTheme, setTheme]
  )

  return (
    <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="Home">S.</a>

        {/* Desktop links */}
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${active === l.href ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {mounted && (
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`tog-wrap${resolvedTheme === 'light' ? ' on' : ''}`}
            >
              <div className="tog-track" />
              <div className="tog-thumb">
                {resolvedTheme === 'dark'
                  ? <Moon size={10} color="currentColor" />
                  : <Sun  size={10} color="currentColor" />}
              </div>
            </button>
          )}

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            {menuOpen
              ? <X    size={20} color="var(--txt)" />
              : <Menu size={20} color="var(--txt)" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
