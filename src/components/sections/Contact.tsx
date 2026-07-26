'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Loader2, CheckCircle, AlertCircle, Linkedin, Github, Mail } from 'lucide-react'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sugumaran-nix',  color: '#0077B5',    CustomIcon: null        },
  { icon: null,     label: 'WhatsApp', href: 'https://wa.me/916381074457',             color: '#25D366',    CustomIcon: WhatsAppIcon },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/sugumaran-nix',       color: 'var(--txt)', CustomIcon: null        },
  { icon: Mail,     label: 'Email',    href: 'mailto:sugumarankugan@gmail.com',         color: 'var(--acc)', CustomIcon: null        },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('sent')
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  const btnContent = {
    idle:    { icon: <Send size={14} />,           text: 'Send Message'  },
    sending: { icon: <Loader2 size={14} className="spin" />, text: 'Sending…'     },
    sent:    { icon: <CheckCircle size={14} />,    text: 'Message Sent!' },
    error:   { icon: <AlertCircle size={14} />,    text: 'Try Again'     },
  }[status]

  return (
    <section id="contact" className="sec screentone" style={{ position: 'relative', overflow: 'hidden' }}>
      <span className="kanji-bg" aria-hidden="true" style={{ left: '-3%', bottom: '5%' }}>繋</span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 04</span>
          <h2 className="sec-title f-display">Let's Work Together</h2>
          <div className="sec-rule" />
          <p style={{ marginTop: 12, fontSize: 13, color: 'var(--t3)', fontFamily: 'var(--font-mono)' }}>
            // I read every message. Response time: a few hours, not "I'll get back to you" and then nothing.
          </p>
        </div>

        <div className="contact-wrap reveal delay-1">
          {/* LEFT — form */}
          <div className="contact-left">
            <form ref={formRef} onSubmit={submit}>
              <div className="c-field">
                <label className="c-label f-mono">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your full name"
                  className="c-input"
                />
              </div>
              <div className="c-field">
                <label className="c-label f-mono">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your@email.com"
                  className="c-input"
                />
              </div>
              <div className="c-field">
                <label className="c-label f-mono">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project — I'm listening."
                  className="c-input"
                />
              </div>

              {status === 'sent' && (
                <p className="f-mono" style={{ fontSize: 12, color: 'var(--acc3, #22c55e)', marginBottom: 12 }}>
                  ✓ Got it — I'll reply within a few hours.
                </p>
              )}
              {status === 'error' && (
                <p className="f-mono" style={{ fontSize: 12, color: '#ef4444', marginBottom: 12 }}>
                  Something went wrong. Try emailing directly: sugumarankugan@gmail.com
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                disabled={status === 'sending'}
              >
                {btnContent.icon} {btnContent.text}
              </button>
            </form>
          </div>

          {/* RIGHT — availability + socials */}
          <div className="contact-right">
            <div>
              <p className="c-avail f-title">Open to the right opportunity.</p>
              <p className="c-avail-sub">
                AI/ML, full-stack, backend, NLP — India-based or remote. Fresher, yes.
                But I come with four shipped projects, a working GitHub, and zero excuses.
              </p>

              <div className="social-grid">
                {SOCIALS.map(({ icon: Icon, CustomIcon, label, href, color }) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="soc-btn"
                    onMouseEnter={e => {
                      const isVar = color.startsWith('var(')
                      e.currentTarget.style.borderColor = color
                      e.currentTarget.style.color = color
                      e.currentTarget.style.background = isVar
                        ? `color-mix(in srgb, ${color} 12%, transparent)`
                        : `${color}18`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = ''
                      e.currentTarget.style.color = ''
                      e.currentTarget.style.background = ''
                    }}
                  >
                    {CustomIcon ? <CustomIcon size={16} /> : Icon ? <Icon size={16} /> : null}
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '2px solid var(--txt)' }}>
              <span className="f-mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--t3)', textTransform: 'uppercase' }}>
                Prefer async? Drop a message above — I'll actually reply, within hours not weeks.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
