'use client'
import { useTheme } from 'next-themes'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer
      className="py-10 border-t"
      style={{
        background: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg mb-1" style={{ color: 'var(--accent-primary)' }}>
            {isDark ? '藍染 · Sugumaran S' : '渦巻き · Sugumaran S'}
          </p>
          <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            {isDark
              ? '"I have been here all along."'
              : '"Believe it!"'}
          </p>
        </div>

        <div className="flex items-center gap-6">
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
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  )
}
