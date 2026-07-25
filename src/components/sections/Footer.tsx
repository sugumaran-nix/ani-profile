'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 border-t" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-base" style={{ color: 'var(--accent)' }}>
          Sugumaran S
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/sugumaran-nix', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sugumaran-nix', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sugumarankugan@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="transition-all duration-200 hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
