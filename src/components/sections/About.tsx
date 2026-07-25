'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Briefcase, Globe, GraduationCap } from 'lucide-react'

const EDUCATION = [
  {
    period: 'Jun 2024 – Jul 2026',
    degree: 'Master of Computer Applications',
    institution: 'Anna University — Sri Venkateshwara College, Coimbatore',
    score: '80%',
    current: true,
  },
  {
    period: 'Jul 2021 – May 2024',
    degree: 'Bachelor of Computer Applications',
    institution: 'Bharathiar University — Government Arts & Science College',
    score: '83.71%',
    current: false,
  },
]

const INFO = [
  { icon: Briefcase, label: 'Role', value: 'AI/ML · Full Stack · Python' },
  { icon: MapPin,    label: 'Location', value: 'Tamil Nadu · Remote-ready' },
  { icon: Globe,     label: 'Languages', value: 'Tamil (Native) · English (Professional)' },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.25em] mb-2" style={{ color: 'var(--accent)' }}>
            ABOUT
          </p>
          <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Who I Am
          </h2>
          <div className="divider mt-4" style={{ marginLeft: 0 }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Bio + info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-loose mb-8" style={{ color: 'var(--text-secondary)' }}>
              I build end-to-end systems — from raw data through model training, REST API deployment, 
              and into polished frontends. My work spans fraud detection ML, NLP text classification, 
              real-time WebSocket applications, and React interfaces. Every project I've shipped 
              is production-deployed and production-tested.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
              Available immediately. Open to AI/ML, backend, full-stack, NLP, and data annotation 
              roles — anywhere in India or remote.
            </p>

            <div className="space-y-3">
              {INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <item.icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span className="text-xs font-mono w-20" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education timeline */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-xs tracking-[0.2em] mb-6" style={{ color: 'var(--text-muted)' }}>
              EDUCATION
            </p>
            <div className="relative pl-8">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute left-2.5 top-2 bottom-2 w-px origin-top"
                style={{ background: 'linear-gradient(180deg, var(--accent), var(--accent-2))' }}
              />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.15 }}
                  className={`relative mb-8 last:mb-0`}
                >
                  {/* Node */}
                  <div
                    className="absolute -left-5 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: edu.current ? 'var(--accent)' : 'var(--bg-card)',
                      borderColor: 'var(--accent)',
                    }}
                  >
                    {edu.current && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#fff' }}
                      />
                    )}
                  </div>

                  <div
                    className="rounded-xl p-5 border"
                    style={{
                      background: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        {edu.period}
                      </p>
                      <span className="font-display font-bold text-sm" style={{ color: 'var(--accent)' }}>
                        {edu.score}
                      </span>
                    </div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {edu.institution}
                    </p>
                    {edu.current && (
                      <span
                        className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--accent)', color: '#fff' }}
                      >
                        CURRENT
                      </span>
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
