'use client'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Briefcase, Globe } from 'lucide-react'

const QUICK_STATS = [
  { icon: GraduationCap, label: 'Degree', value: 'MCA — Anna University (2026)', score: '80%' },
  { icon: Briefcase, label: 'Focus', value: 'AI/ML + Full Stack', score: 'End-to-end' },
  { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', score: 'Remote-ready' },
  { icon: Globe, label: 'Languages', value: 'Tamil (Native) · English (Professional)', score: 'Bilingual' },
]

const STRENGTHS = [
  { name: 'Machine Learning', level: 92 },
  { name: 'Python / FastAPI', level: 90 },
  { name: 'NLP / Text Classification', level: 85 },
  { name: 'React / Next.js', level: 82 },
  { name: 'WebSockets / Real-time', level: 80 },
  { name: 'Explainable AI', level: 78 },
]

function SkillBar({ name, level, isDark, delay }: { name: string; level: number; isDark: boolean; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {name}
        </span>
        <span className="text-sm font-mono" style={{ color: 'var(--accent-primary)' }}>
          {level}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{
            background: isDark
              ? `linear-gradient(90deg, #8B5CF6, #2DD4BF)`
              : `linear-gradient(90deg, #E14011, #FDD501)`,
            boxShadow: isDark
              ? '0 0 10px rgba(139,92,246,0.5)'
              : '0 0 10px rgba(225,64,17,0.4)',
          }}
        />
      </div>
    </div>
  )
}

export function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Section watermark */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-[120px] font-black select-none pointer-events-none opacity-[0.03]"
        style={{ color: 'var(--accent-primary)', writingMode: 'vertical-rl' }}
      >
        {isDark ? 'DOSSIER' : 'ABOUT'}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] mb-3" style={{ color: 'var(--accent-primary)' }}>
            {isDark ? '// SOUL REAPER DOSSIER' : '// NINJA PROFILE'}
          </p>
          <h2 className="section-title text-4xl sm:text-5xl font-bold">
            {isDark ? 'About the Engineer' : 'About Me'}
          </h2>
          <div className="ink-divider max-w-xs mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Quick Stats */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Profile card */}
            <div
              className="card-base rounded-2xl p-6 mb-6 relative overflow-hidden"
            >
              {/* Theme-specific corner ornament */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full"
                style={{ background: 'var(--accent-primary)' }}
              />
              <div className="flex items-center gap-4 mb-5">
                {/* Avatar placeholder with initials */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white flex-shrink-0"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, #8B5CF6, #2DD4BF)'
                      : 'linear-gradient(135deg, #E14011, #FDD501)',
                  }}
                >
                  S
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    Sugumaran S
                  </h3>
                  <p className="text-sm font-mono" style={{ color: 'var(--accent-primary)' }}>
                    {isDark ? '5th Division — AI/ML' : 'A-Rank · AI/ML Engineer'}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Recent MCA graduate building production-ready AI systems from scratch. 
                Comfortable across the full machine learning lifecycle — data preprocessing, 
                feature engineering, model training, evaluation, explainability, API deployment, 
                and frontend integration.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                My approach: ship real, working systems that handle edge cases, run fast, 
                and explain their own predictions. Available immediately for AI/ML, backend, 
                or full-stack roles anywhere in India or remote.
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {QUICK_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="card-base rounded-xl p-4"
                >
                  <stat.icon size={18} className="mb-2" style={{ color: 'var(--accent-primary)' }} />
                  <p className="text-xs font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--accent-primary)' }}>
                    {stat.score}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-base rounded-2xl p-6">
              <p className="text-xs font-mono tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
                {isDark ? '// REIATSU LEVELS' : '// CHAKRA LEVELS'}
              </p>
              {STRENGTHS.map((s, i) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  isDark={isDark}
                  delay={0.4 + i * 0.1}
                />
              ))}
            </div>

            {/* Certifications mini-list */}
            <div className="card-base rounded-2xl p-6 mt-4">
              <p className="text-xs font-mono tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
                {isDark ? '// SHINIGAMI CERTIFICATIONS' : '// SCROLL ACHIEVEMENTS'}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Foundation of LLMs — Hugging Face',
                  'Generative AI — Google Cloud',
                  'Prompt Engineering — IBM',
                  'SQL — HackerRank',
                ].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-3 py-1.5 rounded-lg border font-medium"
                    style={{
                      background: isDark ? 'rgba(139,92,246,0.12)' : 'rgba(225,64,17,0.06)',
                      borderColor: isDark ? 'rgba(139,92,246,0.4)' : 'rgba(225,64,17,0.3)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
