'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { BurstButton } from '@/components/ui/BurstButton'
import styled from 'styled-components'

/* ── Social buttons (provided component) ── */
const SocialWrapper = styled.div`
  .main { display: flex; flex-direction: column; gap: 0.5em; }
  .up, .down { display: flex; flex-direction: row; gap: 0.5em; }

  .card1, .card2, .card3, .card4 {
    width: 80px; height: 80px;
    outline: none; border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    display: flex; align-items: center; justify-content: center;
  }
  .card1 {
    background: var(--bg-card);
    border-radius: 60px 5px 5px 5px;
    box-shadow: var(--shadow-card);
  }
  .card2 {
    background: var(--bg-card);
    border-radius: 5px 60px 5px 5px;
    box-shadow: var(--shadow-card);
  }
  .card3 {
    background: var(--bg-card);
    border-radius: 5px 5px 5px 60px;
    box-shadow: var(--shadow-card);
  }
  .card4 {
    background: var(--bg-card);
    border-radius: 5px 5px 60px 5px;
    box-shadow: var(--shadow-card);
  }
  .linkedin-icon { fill: #0077B5; }
  .github-icon   { fill: var(--text-primary); }
  .email-icon    { fill: var(--accent); }
  .x-icon        { fill: var(--text-primary); }

  .card1:hover { scale: 1.1; background-color: #0077B5; }
  .card1:hover .linkedin-icon { fill: white; }
  .card2:hover { scale: 1.1; background-color: #111; }
  .card2:hover .x-icon { fill: white; }
  .card3:hover { scale: 1.1; background-color: #1a1a1a; }
  .card3:hover .github-icon { fill: white; }
  .card4:hover { scale: 1.1; background-color: var(--accent); }
  .card4:hover .email-icon { fill: white; }
`

function SocialButtons() {
  return (
    <SocialWrapper>
      <div className="main">
        <div className="up">
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/sugumaran-nix" target="_blank" rel="noopener noreferrer">
            <button className="card1" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="linkedin-icon">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
          </a>
          {/* X / Twitter */}
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <button className="card2" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="x-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </a>
        </div>
        <div className="down">
          {/* GitHub */}
          <a href="https://github.com/sugumaran-nix" target="_blank" rel="noopener noreferrer">
            <button className="card3" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="28px" height="28px" className="github-icon">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
              </svg>
            </button>
          </a>
          {/* Email */}
          <a href="mailto:sugumarankugan@gmail.com">
            <button className="card4" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="email-icon">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </SocialWrapper>
  )
}

export function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sugumarankugan@gmail.com?subject=${sub}&body=${body}`
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid var(--border-subtle)',
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" ref={ref} className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.25em] mb-2" style={{ color: 'var(--accent)' }}>
            CONTACT
          </p>
          <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Let's Work Together
          </h2>
          <div className="divider mt-4" style={{ marginLeft: 0 }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>
              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>
              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="What would you like to discuss?"
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>
              <BurstButton type="submit">
                Send Message
              </BurstButton>
            </form>
          </motion.div>

          {/* RIGHT — Social buttons + brief text */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="text-center">
              <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                Open to AI/ML, backend, full-stack, and NLP roles.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Available immediately · India or Remote
              </p>
            </div>
            <SocialButtons />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
