'use client'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRef } from 'react'

const SKILL_GROUPS = [
  {
    narutoLabel: 'Ninjutsu Arts',
    aizenLabel: 'Kidō Techniques',
    narutoKanji: '忍術',
    aizenKanji: '鬼道',
    skills: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'BERT', 'Hugging Face', 'Explainable AI', 'SHAP', 'TF-IDF', 'Prompt Engineering'],
    colorLight: '#E14011',
    colorDark: '#A78BFA',
  },
  {
    narutoLabel: 'Taijutsu Combat',
    aizenLabel: 'Zanjutsu Mastery',
    narutoKanji: '体術',
    aizenKanji: '斬術',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets', 'MySQL', 'MongoDB', 'SQLite', 'MVC Architecture'],
    colorLight: '#024DA1',
    colorDark: '#2DD4BF',
  },
  {
    narutoLabel: 'Genjutsu Craft',
    aizenLabel: 'Kyōka Suigetsu',
    narutoKanji: '幻術',
    aizenKanji: '鏡花水月',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'Bootstrap', 'Framer Motion'],
    colorLight: '#7C3AED',
    colorDark: '#F87171',
  },
  {
    narutoLabel: 'Sage Mode Tools',
    aizenLabel: 'Hōgyoku Forge',
    narutoKanji: '仙人',
    aizenKanji: '崩玉',
    skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Jupyter', 'Vercel', 'Railway', 'Labelbox', 'CVAT'],
    colorLight: '#D97706',
    colorDark: '#34D399',
  },
]

export function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] mb-3" style={{ color: 'var(--accent-primary)' }}>
            {isDark ? '// COMBAT TECHNIQUES' : '// JUTSU ARSENAL'}
          </p>
          <h2 className="section-title text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {isDark ? 'Techniques & Abilities' : 'Skills & Arsenal'}
          </h2>
          <div className="ink-divider max-w-xs mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skill group cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gIdx) => {
            const color = isDark ? group.colorDark : group.colorLight
            const label = isDark ? group.aizenLabel : group.narutoLabel
            const kanji = isDark ? group.aizenKanji : group.narutoKanji

            return (
              <motion.div
                key={label}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: gIdx * 0.12 }}
                className="card-base rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Hover glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Header row */}
                <div className="flex items-center justify-between mb-5 relative">
                  <div>
                    <p className="text-xs font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                      {isDark ? `// TECHNIQUE ${gIdx + 1}` : `// RANK ${gIdx + 1}`}
                    </p>
                    <h3 className="font-display font-bold text-lg" style={{ color }}>
                      {label}
                    </h3>
                  </div>
                  <div
                    className="font-display font-black text-4xl opacity-20 select-none"
                    style={{ color }}
                  >
                    {kanji}
                  </div>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2 relative">
                  {group.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: gIdx * 0.1 + sIdx * 0.04 + 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default border transition-all duration-200"
                      style={{
                        background: `${color}12`,
                        borderColor: `${color}35`,
                        color: isDark
                          ? color === '#A78BFA' ? '#C4B5FD'
                            : color === '#2DD4BF' ? '#5EEAD4'
                            : color === '#F87171' ? '#FCA5A5'
                            : '#6EE7B7'
                          : color,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Data annotation callout */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 card-base rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-black text-xl text-white"
              style={{ background: isDark ? 'linear-gradient(135deg, #8B5CF6, #F87171)' : 'linear-gradient(135deg, #E14011, #024DA1)' }}
            >
              AI
            </div>
            <div>
              <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {isDark ? 'Hōgyoku Protocol — Data Annotation' : 'Sage Arts — AI Training & Annotation'}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Text classification · Binary & multi-class annotation · Annotation QA · Label consistency · RLHF (foundational) · Labelbox · CVAT · Dataset cleaning & integrity verification
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
