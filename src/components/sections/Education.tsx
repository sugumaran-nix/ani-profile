'use client'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRef } from 'react'

const TIMELINE = [
  {
    period: 'June 2024 – July 2026',
    degree: 'Master of Computer Applications (MCA)',
    university: 'Anna University',
    college: 'Sri Venkateshwara College of Engineering, Coimbatore',
    score: '80%',
    narutoLabel: 'Senior Shinobi Academy',
    aizenLabel: 'Captain-Level Training',
    narutoKanji: '上忍',
    aizenKanji: '隊長',
    current: true,
  },
  {
    period: 'July 2021 – May 2024',
    degree: 'Bachelor of Computer Applications (BCA)',
    university: 'Bharathiar University',
    college: 'Government Arts & Science College',
    score: '83.71%',
    narutoLabel: 'Ninja Academy Graduate',
    aizenLabel: 'Lieutenant Qualification',
    narutoKanji: '忍',
    aizenKanji: '副隊長',
    current: false,
  },
]

export function Education() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] mb-3" style={{ color: 'var(--accent-primary)' }}>
            {isDark ? '// TRAINING RECORDS' : '// ACADEMY RECORDS'}
          </p>
          <h2 className="section-title text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {isDark ? 'Training & Education' : 'Education'}
          </h2>
          <div className="ink-divider max-w-xs mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 origin-top"
            style={{
              background: isDark
                ? 'linear-gradient(180deg, #8B5CF6, #2DD4BF, #8B5CF6)'
                : 'linear-gradient(180deg, #E14011, #FDD501, #E14011)',
            }}
          />

          {TIMELINE.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ x: 40, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.2 + 0.3 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-0">
                <motion.div
                  animate={item.current ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full flex items-center justify-center font-display font-black text-xl border-4 text-white"
                  style={{
                    background: isDark
                      ? `linear-gradient(135deg, #8B5CF6, #2DD4BF)`
                      : `linear-gradient(135deg, #E14011, #FDD501)`,
                    borderColor: 'var(--bg-primary)',
                    boxShadow: isDark
                      ? '0 0 20px rgba(139,92,246,0.5)'
                      : '0 0 20px rgba(225,64,17,0.4)',
                  }}
                >
                  {isDark ? item.aizenKanji : item.narutoKanji}
                </motion.div>
                {item.current && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono px-1.5 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: 'var(--accent-primary)', color: '#fff' }}
                  >
                    CURRENT
                  </span>
                )}
              </div>

              {/* Card */}
              <div className="card-base rounded-2xl p-6 relative overflow-hidden">
                {/* Score badge */}
                <div
                  className="absolute top-5 right-5 font-display font-bold text-2xl"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {item.score}
                </div>

                <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                  {item.period}
                </p>
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
                  {isDark ? item.aizenLabel : item.narutoLabel}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {item.university}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  {item.college}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
