'use client'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    narutoTitle: 'S-Rank Mission: Expose the Infiltrator',
    aizenTitle: 'Experiment File 001 — Deception Protocol',
    narutoKanji: 'S級',
    aizenKanji: '実験',
    techLine: 'Python · Scikit-learn · Flask · TF-IDF · SQLite · Explainable AI',
    github: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
    highlights: [
      '87.57% Fraud F1-score on 17,880 job postings',
      '10,000-feature TF-IDF bigram pipeline',
      'SHAP-style explainability on predictions',
      'Custom 10-signal URL fraud heuristic',
      'Sub-800ms end-to-end inference',
    ],
    tags: ['ML', 'NLP', 'Flask', 'Explainable AI'],
    accentLight: '#E14011',
    accentDark: '#A78BFA',
    rankLight: 'S-Rank',
    rankDark: 'Priority: CRITICAL',
  },
  {
    narutoTitle: 'Genjutsu Detector: Real vs Illusion',
    aizenTitle: 'Kyōka Suigetsu Counter-System',
    narutoKanji: '幻',
    aizenKanji: '識別',
    techLine: 'Python · FastAPI · NLP · Scikit-learn',
    github: 'https://github.com/sugumaran-nix/ai-content-detector',
    highlights: [
      'Distinguishes AI-generated from human text',
      'Perplexity, burstiness & variance features',
      '500+ text samples evaluated',
      'Sentence-level explainability spans',
      'FastAPI backend for low-latency inference',
    ],
    tags: ['NLP', 'FastAPI', 'Classifier'],
    accentLight: '#7C3AED',
    accentDark: '#2DD4BF',
    rankLight: 'A-Rank',
    rankDark: 'Priority: HIGH',
  },
  {
    narutoTitle: 'Shinobi Collaboration Jutsu',
    aizenTitle: 'Las Noches Communication Array',
    narutoKanji: '協力',
    aizenKanji: '通信',
    techLine: 'FastAPI · WebSockets · Next.js · React · TypeScript · HTML5 Canvas',
    github: 'https://github.com/sugumaran-nix/Sketchline-whiteboard',
    highlights: [
      'Real-time multiplayer collaborative whiteboard',
      'Custom FastAPI WebSocket server, no 3rd-party realtime',
      'Sub-100ms stroke synchronization',
      '20 cursor updates per second',
      'Exponential backoff reconnection & board replay',
    ],
    tags: ['WebSocket', 'Next.js', 'React', 'Canvas'],
    accentLight: '#024DA1',
    accentDark: '#F87171',
    rankLight: 'A-Rank',
    rankDark: 'Priority: HIGH',
  },
  {
    narutoTitle: "Hokage's Mission Planner",
    aizenTitle: 'Espada Task Assignment Matrix',
    narutoKanji: '計画',
    aizenKanji: '組織',
    techLine: 'React · TypeScript · Tailwind CSS',
    github: 'https://github.com/sugumaran-nix/ProjectScope',
    highlights: [
      'Eisenhower Matrix drag-and-drop task manager',
      'dnd-kit for accessible drag interactions',
      'Keyboard-accessible, WCAG-compliant',
      'Persistent localStorage + cross-tab sync',
      'Fully responsive production app',
    ],
    tags: ['React', 'TypeScript', 'Tailwind'],
    accentLight: '#D97706',
    accentDark: '#34D399',
    rankLight: 'B-Rank',
    rankDark: 'Priority: STANDARD',
  },
]

function ProjectCard({ project, isDark, idx }: { project: typeof PROJECTS[0]; isDark: boolean; idx: number }) {
  const accent = isDark ? project.accentDark : project.accentLight
  const title = isDark ? project.aizenTitle : project.narutoTitle
  const kanji = isDark ? project.aizenKanji : project.narutoKanji
  const rank = isDark ? project.rankDark : project.rankLight

  return (
    <div className="flip-card h-[360px]">
      <div className="flip-card-inner">
        {/* FRONT */}
        <div
          className="flip-card-front card-base p-6 flex flex-col justify-between overflow-hidden"
          style={{ border: `1px solid ${accent}25` }}
        >
          {/* Kanji watermark */}
          <div
            className="absolute top-4 right-4 font-display font-black text-6xl opacity-10 select-none pointer-events-none"
            style={{ color: accent }}
          >
            {kanji}
          </div>

          <div>
            {/* Rank badge */}
            <span
              className="inline-block text-xs font-mono px-2.5 py-1 rounded-md mb-4 border"
              style={{ background: `${accent}15`, borderColor: `${accent}40`, color: accent }}
            >
              {rank}
            </span>
            <h3
              className="font-display font-bold text-lg leading-snug mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {title}
            </h3>
            <p className="text-xs font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.techLine}
            </p>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded border"
                  style={{ borderColor: `${accent}30`, color: accent, background: `${accent}10` }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Hover to see details →
            </p>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
        </div>

        {/* BACK */}
        <div
          className="flip-card-back p-6 flex flex-col justify-between overflow-hidden"
          style={{
            background: isDark
              ? `linear-gradient(135deg, #1E1840, ${accent}20)`
              : `linear-gradient(135deg, #fff8f0, ${accent}12)`,
            border: `1px solid ${accent}40`,
          }}
        >
          <div>
            <p className="text-xs font-mono mb-3" style={{ color: accent }}>
              {isDark ? '// KEY RESULTS' : '// MISSION REPORT'}
            </p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: accent }} className="mt-0.5 flex-shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ background: accent }}
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] mb-3" style={{ color: 'var(--accent-primary)' }}>
            {isDark ? '// RESEARCH EXPERIMENTS' : '// MISSION BRIEFINGS'}
          </p>
          <h2 className="section-title text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {isDark ? 'Deployed Systems' : 'Projects'}
          </h2>
          <div className="ink-divider max-w-xs mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            Hover each card to reveal mission details
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} isDark={isDark} idx={idx} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
              background: 'transparent',
            }}
          >
            <Github size={18} />
            {isDark ? 'View all experiments on GitHub' : 'View all missions on GitHub'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
