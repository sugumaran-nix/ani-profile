'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BurstButton } from '@/components/ui/BurstButton'
import { Send } from 'lucide-react'

/* Social buttons — exact port of provided component */
function SocialButtons() {
  const btns = [
    { pos: 'tl', href: 'https://linkedin.com/in/sugumaran-nix', label: 'LinkedIn', hoverBg: '#0077B5',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    },
    { pos: 'tr', href: 'https://x.com', label: 'X', hoverBg: '#111',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
    { pos: 'bl', href: 'https://github.com/sugumaran-nix', label: 'GitHub', hoverBg: '#1a1a1a',
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="26px" height="26px" fill="currentColor"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>,
    },
    { pos: 'br', href: 'mailto:sugumarankugan@gmail.com', label: 'Email', hoverBg: '#E14011',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
    },
  ]

  const radii: Record<string, string> = {
    tl: '50px 5px 5px 5px',
    tr: '5px 50px 5px 5px',
    bl: '5px 5px 5px 50px',
    br: '5px 5px 50px 5px',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* Row 1: tl, tr */}
      <div style={{ display: 'flex', gap: 8 }}>
        {btns.slice(0, 2).map(b => (
          <a key={b.pos} href={b.href} target="_blank" rel="noopener noreferrer" aria-label={b.label}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: radii[b.pos], background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--txt-2)', textDecoration: 'none', boxShadow: 'var(--shadow)', transition: 'transform 0.2s, background 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = b.hoverBg; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--txt-2)'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            {b.svg}
          </a>
        ))}
      </div>
      {/* Row 2: bl, br */}
      <div style={{ display: 'flex', gap: 8 }}>
        {btns.slice(2).map(b => (
          <a key={b.pos} href={b.href} target={b.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={b.label}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: radii[b.pos], background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--txt-2)', textDecoration: 'none', boxShadow: 'var(--shadow)', transition: 'transform 0.2s, background 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = b.hoverBg; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--txt-2)'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            {b.svg}
          </a>
        ))}
      </div>
    </div>
  )
}

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay }, viewport: { once: true, margin: '-60px' } })

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 10,
  border: '1px solid var(--border)', background: 'var(--bg-alt)',
  color: 'var(--txt)', fontSize: 14, fontFamily: 'var(--font-body)',
  outline: 'none', transition: 'border-color 0.2s',
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub  = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sugumarankugan@gmail.com?subject=${sub}&body=${body}`
  }

  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fade()} style={{ marginBottom: 56 }}>
          <span className="s-label">Contact</span>
          <h2 className="f-display" style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.15 }}>
            Let's Work Together
          </h2>
          <div className="divider" style={{ width: 80, marginTop: 14, marginLeft: 0 }} />
        </motion.div>

        {/* Two-column: form LEFT, social RIGHT */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 56, alignItems: 'center' }}>

          {/* LEFT — Form */}
          <motion.div {...fade(0.08)}>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--txt-3)', marginBottom: 6 }}>Your Name</label>
                <input type="text" required placeholder="Your full name" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--txt-3)', marginBottom: 6 }}>Email</label>
                <input type="email" required placeholder="your@email.com" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--txt-3)', marginBottom: 6 }}>Message</label>
                <textarea required rows={5} placeholder="What would you like to discuss?"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <BurstButton as="button" type="submit">
                <Send size={14} /> Send Message
              </BurstButton>
            </form>
          </motion.div>

          {/* RIGHT — social buttons inside a card */}
          <motion.div {...fade(0.16)}>
            <div className="card" style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--txt-2)', marginBottom: 6 }}>
                  Open to AI/ML, backend, full-stack, and NLP roles.
                </p>
                <p style={{ fontSize: 13, color: 'var(--txt-3)' }}>
                  Available immediately · India or Remote
                </p>
              </div>
              <SocialButtons />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
