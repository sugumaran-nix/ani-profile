'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

const LINKS = [
  { Icon: Github,   href: 'https://github.com/sugumaran-nix',     label: 'GitHub'   },
  { Icon: Linkedin, href: 'https://linkedin.com/in/sugumaran-nix', label: 'LinkedIn' },
  { Icon: Mail,     href: 'mailto:sugumarankugan@gmail.com',        label: 'Email'    },
]

const NAV = ['About', 'Skills', 'Projects', 'Contact']

export function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span className="footer-name f-display">Sugumaran S.</span>

        <div style={{ display: 'flex', gap: 24 }}>
          {NAV.map(n => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="f-mono"
              style={{
                fontSize: 10, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'var(--t3)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--acc)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--t3)')}
            >
              {n}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {LINKS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="btn-icon"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <span className="footer-copy f-mono">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
