'use client'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const LINKS = [
  { icon: Mail, label: 'Email', value: 'sugumarankugan@gmail.com', href: 'mailto:sugumarankugan@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/sugumaran-nix', href: 'https://github.com/sugumaran-nix' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sugumaran-nix', href: 'https://linkedin.com/in/sugumaran-nix' },
]

export function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // mailto fallback — works without a backend
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:sugumarankugan@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 border focus:border-[var(--accent-primary)]`
  const inputStyle = {
    background: 'var(--bg-secondary)',
    borderColor: 'var(--border-subtle)',
    color: 'var(--text-primary)',
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] mb-3" style={{ color: 'var(--accent-primary)' }}>
            {isDark ? '// TRANSMIT MESSAGE' : '// SEND MISSION REQUEST'}
          </p>
          <h2 className="section-title text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {isDark ? 'Reach the Throne Room' : "Let's Work Together"}
          </h2>
          <div className="ink-divider max-w-xs mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
            {isDark
              ? 'I have been expecting your message. Available immediately for AI/ML, backend, and full-stack opportunities.'
              : 'Available immediately. Open to AI/ML, Python, backend, full-stack, and data annotation roles anywhere in India or remote.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact links */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="card-base flex items-center gap-4 p-5 rounded-2xl group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: isDark ? 'rgba(139,92,246,0.15)' : 'rgba(225,64,17,0.08)',
                  }}
                >
                  <link.icon size={22} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {link.label}
                  </p>
                  <p className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    {link.value}
                  </p>
                </div>
                <div
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  →
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                background: isDark ? 'rgba(45,212,191,0.08)' : 'rgba(225,64,17,0.05)',
                borderColor: isDark ? 'rgba(45,212,191,0.3)' : 'rgba(225,64,17,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: isDark ? '#2DD4BF' : '#22C55E' }}
                />
                <span className="text-xs font-mono" style={{ color: isDark ? '#2DD4BF' : '#22C55E' }}>
                  AVAILABLE IMMEDIATELY
                </span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Open to relocation anywhere in India · Remote-first · Multiple role types
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-base rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                  {isDark ? 'Your Name / Organisation' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder={isDark ? 'Sender identification' : 'Your full name'}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                  {isDark ? 'Message / Transmission' : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder={isDark ? 'State your purpose...' : "Let's talk about..."}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white transition-all duration-300"
                style={{
                  background: sent
                    ? '#22C55E'
                    : isDark
                    ? 'linear-gradient(135deg, #8B5CF6, #2DD4BF)'
                    : 'linear-gradient(135deg, #E14011, #FDD501)',
                  boxShadow: isDark
                    ? '0 4px 20px rgba(139,92,246,0.4)'
                    : '0 4px 20px rgba(225,64,17,0.35)',
                }}
              >
                {sent ? (
                  <><CheckCircle size={18} /> Message Sent</>
                ) : (
                  <><Send size={18} /> {isDark ? 'Transmit' : 'Send Message'}</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
