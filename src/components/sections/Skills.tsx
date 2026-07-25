'use client'
import { motion } from 'framer-motion'

const GROUPS = [
  {
    label: 'AI & Machine Learning',
    blob: '#E14011',
    skills: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'BERT', 'Hugging Face', 'Explainable AI', 'Prompt Engineering', 'RLHF'],
  },
  {
    label: 'Backend & APIs',
    blob: '#024DA1',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    label: 'Frontend',
    blob: '#7C3AED',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'JavaScript'],
  },
  {
    label: 'Tools & Platforms',
    blob: '#D97706',
    skills: ['Git', 'GitHub', 'Linux', 'Jupyter', 'Vercel', 'Railway', 'VS Code', 'Labelbox', 'CVAT'],
  },
]

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay }, viewport: { once: true, margin: '-60px' } })

export function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fade()} style={{ marginBottom: 56 }}>
          <span className="s-label">Skills</span>
          <h2 className="f-display" style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.15 }}>
            Technical Stack
          </h2>
          <div className="divider" style={{ width: 80, marginTop: 14, marginLeft: 0 }} />
        </motion.div>

        {/* 2×2 grid of blob cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {GROUPS.map((g, gi) => (
            <motion.div key={g.label} {...fade(gi * 0.1)} className="blob-card">
              {/* Glass inner layer */}
              <div className="bc-bg" />
              {/* Animated blob */}
              <div className="bc-blob" style={{ background: g.blob }} />
              {/* Content sits above blob via z-index:3 */}
              <div className="bc-content">
                <p className="f-display" style={{ fontSize: 15, fontWeight: 700, color: 'var(--txt)', marginBottom: 16 }}>
                  {g.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {g.skills.map((sk, si) => (
                    <motion.span
                      key={sk}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: gi * 0.07 + si * 0.04 + 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        fontSize: 11, fontFamily: 'var(--font-mono)',
                        padding: '5px 11px', borderRadius: 8,
                        border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)',
                        background: 'color-mix(in srgb, var(--accent) 7%, transparent)',
                        color: 'var(--txt-2)',
                        transition: 'transform 0.2s',
                        cursor: 'default',
                      }}
                      whileHover={{ scale: 1.06 }}
                    >
                      {sk}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
