'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Briefcase, Globe } from 'lucide-react'

const INFO = [
  { icon: Briefcase, label: 'Focus',     value: 'AI/ML · Backend · Full Stack' },
  { icon: MapPin,    label: 'Location',  value: 'Tamil Nadu, India · Remote-ready' },
  { icon: Globe,     label: 'Languages', value: 'Tamil (Native) · English (Professional)' },
]

const EDU = [
  { period: 'Jun 2024 – Jul 2026', degree: 'MCA', uni: 'Anna University — Sri Venkateshwara College', score: '80%', current: true },
  { period: 'Jul 2021 – May 2024', degree: 'BCA', uni: 'Bharathiar University — Govt. Arts & Science College', score: '83.71%', current: false },
]

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay }, viewport: { once: true, margin: '-80px' } })

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <motion.div {...fade()} style={{ marginBottom: 56 }}>
          <span className="s-label">About</span>
          <h2 className="f-display" style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.15 }}>
            Who I Am
          </h2>
          <div className="divider" style={{ width: 80, marginTop: 14, marginLeft: 0 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>

          {/* Left — bio */}
          <motion.div {...fade(0.08)}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--txt-2)', marginBottom: 20 }}>
              I build end-to-end systems — raw data through model training, REST API
              deployment, and into polished frontends. My work spans fraud-detection ML,
              NLP text classification, real-time WebSocket applications, and React UIs.
              Every project I've shipped is production-deployed and battle-tested.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--txt-3)', marginBottom: 36 }}>
              Available immediately. Open to AI/ML, backend, full-stack, NLP, and data
              annotation roles — anywhere in India or remote.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {INFO.map((item, i) => (
                <motion.div key={item.label} {...fade(0.12 + i * 0.06)} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <item.icon size={16} style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--txt-3)', width: 72, flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: 'var(--txt-2)' }}>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — education */}
          <motion.div {...fade(0.16)}>
            <span className="s-label">Education</span>

            <div style={{ position: 'relative', paddingLeft: 28 }}>
              {/* Timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  position: 'absolute', left: 7, top: 8, bottom: 8, width: 2,
                  background: 'linear-gradient(180deg, var(--accent), var(--accent-2))',
                  transformOrigin: 'top',
                }}
              />

              {EDU.map((e, i) => (
                <motion.div key={e.degree} {...fade(0.2 + i * 0.14)} style={{ position: 'relative', marginBottom: i === 0 ? 28 : 0 }}>
                  {/* Node */}
                  <div style={{
                    position: 'absolute', left: -28, top: 8,
                    width: 16, height: 16, borderRadius: '50%',
                    background: e.current ? 'var(--accent)' : 'var(--surface)',
                    border: '2.5px solid var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 1,
                  }}>
                    {e.current && (
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }}
                      />
                    )}
                  </div>

                  <div className="card" style={{ padding: '16px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                      <span className="f-mono" style={{ fontSize: 11, color: 'var(--txt-3)' }}>{e.period}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{e.score}</span>
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--txt)', marginBottom: 4 }}>{e.degree}</p>
                    <p style={{ fontSize: 12, color: 'var(--txt-3)', lineHeight: 1.5 }}>{e.uni}</p>
                    {e.current && (
                      <span style={{
                        display: 'inline-block', marginTop: 10, fontSize: 9, fontFamily: 'var(--font-mono)',
                        padding: '3px 10px', borderRadius: 20,
                        background: 'var(--accent)', color: '#fff', letterSpacing: '0.12em',
                      }}>CURRENT</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
