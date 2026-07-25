'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

const LINKS = [
  { Icon: Github,   href: 'https://github.com/sugumaran-nix',     label: 'GitHub'   },
  { Icon: Linkedin, href: 'https://linkedin.com/in/sugumaran-nix', label: 'LinkedIn' },
  { Icon: Mail,     href: 'mailto:sugumarankugan@gmail.com',        label: 'Email'    },
]

export function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span className="footer-name f-display">Sugumaran S.</span>

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
