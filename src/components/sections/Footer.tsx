'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const links = [
    { icon: Github,   href: 'https://github.com/sugumaran-nix',      label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sugumaran-nix',  label: 'LinkedIn' },
    { icon: Mail,     href: 'mailto:sugumarankugan@gmail.com',         label: 'Email' },
  ]

  return (
    <footer style={{
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--border)',
      padding: '28px 24px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span className="f-display" style={{ fontSize: 16, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em' }}>
          Sugumaran S.
        </span>

        <div style={{ display: 'flex', gap: 20 }}>
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: 'var(--txt-3)',
                transition: 'color 0.2s',
                display: 'flex', alignItems: 'center',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--txt-3)')}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <span className="f-mono" style={{ fontSize: 11, color: 'var(--txt-3)' }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
