'use client'
import { useState } from 'react'
import { Send, Linkedin, Github, Mail, Twitter } from 'lucide-react'

const SOCIALS = [
  {
    icon: Linkedin, label: 'LinkedIn',
    href: 'https://linkedin.com/in/sugumaran-nix',
    color: '#0077B5',
  },
  {
    icon: Twitter, label: 'X / Twitter',
    href: 'https://x.com',
    color: '#111111',
  },
  {
    icon: Github, label: 'GitHub',
    href: 'https://github.com/sugumaran-nix',
    color: '#1a1a1a',
  },
  {
    icon: Mail, label: 'Email',
    href: 'mailto:sugumarankugan@gmail.com',
    color: 'var(--acc)',
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub  = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sugumarankugan@gmail.com?subject=${sub}&body=${body}`
  }

  return (
    <section id="contact" className="sec screentone" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Kanji — 繋 (connection / bond) */}
      <span
        className="kanji-bg"
        aria-hidden="true"
        style={{ left: '-3%', bottom: '5%' }}
      >
        繋
      </span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 04</span>
          <h2 className="sec-title f-display">Let's Work Together</h2>
          <div className="sec-rule" />
        </div>

        <div className="contact-wrap reveal delay-1">
          {/* LEFT — form */}
          <div className="contact-left">
            <form onSubmit={submit}>
              <div className="c-field">
                <label className="c-label f-mono">Your Name</label>
                <input
                  type="text" required placeholder="Your full name"
                  value={form.name} onChange={set('name')}
                  className="c-input"
                />
              </div>
              <div className="c-field">
                <label className="c-label f-mono">Email</label>
                <input
                  type="email" required placeholder="your@email.com"
                  value={form.email} onChange={set('email')}
                  className="c-input"
                />
              </div>
              <div className="c-field">
                <label className="c-label f-mono">Message</label>
                <textarea
                  required rows={5} placeholder="What would you like to discuss?"
                  value={form.message} onChange={set('message')}
                  className="c-input"
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Send size={14} /> Send Message
              </button>
            </form>
          </div>

          {/* RIGHT — availability + socials */}
          <div className="contact-right">
            <div>
              <p className="c-avail f-title">Open to AI/ML, backend, full-stack, and NLP roles.</p>
              <p className="c-avail-sub">Available immediately · India or Remote</p>

              <div className="social-grid">
                {SOCIALS.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="soc-btn"
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = color
                      e.currentTarget.style.color = color
                      e.currentTarget.style.background = color === 'var(--acc)'
                        ? 'color-mix(in srgb, var(--acc) 12%, transparent)'
                        : `${color}18`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = ''
                      e.currentTarget.style.color = ''
                      e.currentTarget.style.background = ''
                    }}
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '2px solid var(--txt)' }}>
              <span className="f-mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--t3)', textTransform: 'uppercase' }}>
                Response within 24 hrs · sugumarankugan@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
