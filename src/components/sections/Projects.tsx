'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github } from 'lucide-react'
import { GooeyButton } from '@/components/ui/GooeyButton'
import { useTheme } from 'next-themes'

const PROJECTS = [
  {
    title: 'Fake Job Detector',
    tags: ['Python', 'Flask', 'Scikit-learn', 'TF-IDF', 'SQLite'],
    summary: 'End-to-end ML fraud detection on 17,880 job postings with SHAP-style explainability.',
    highlights: [
      '87.57% Fraud F1-score on imbalanced dataset',
      '10,000-feature TF-IDF bigram pipeline',
      'Custom 10-signal URL fraud heuristic',
      'Runtime model switching via REST API',
      'Sub-800ms end-to-end inference',
    ],
    github: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
  },
  {
    title: 'AI Content Detector',
    tags: ['Python', 'FastAPI', 'NLP', 'Scikit-learn'],
    summary: 'Statistical NLP classifier distinguishing AI-generated text from human writing.',
    highlights: [
      'Perplexity, burstiness & variance features',
      'Sentence-level explainability of AI spans',
      'Evaluated on 500+ text samples',
      'Structured JSON with confidence scores',
      'Low-latency FastAPI backend',
    ],
    github: 'https://github.com/sugumaran-nix/ai-content-detector',
  },
  {
    title: 'Sketchline — Collaborative Whiteboard',
    tags: ['FastAPI', 'WebSockets', 'Next.js', 'TypeScript', 'Canvas'],
    summary: 'Real-time multiplayer whiteboard with custom WebSocket protocol and board replay.',
    highlights: [
      'Sub-100ms stroke synchronization',
      'Custom 7-message JSON protocol (no third-party lib)',
      '20 cursor updates per second',
      'Exponential backoff reconnection',
      'Board state replay on reconnect',
    ],
    github: 'https://github.com/sugumaran-nix/Sketchline-whiteboard',
  },
  {
    title: 'ProjectScope — Task Manager',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    summary: 'Eisenhower Matrix drag-and-drop task manager with cross-tab persistence.',
    highlights: [
      'dnd-kit drag-and-drop with keyboard accessibility',
      'localStorage persistence + cross-tab sync',
      'Eisenhower Matrix prioritization model',
      'Fully responsive production deployment',
      'WCAG-compliant interactions',
    ],
    github: 'https://github.com/sugumaran-nix/ProjectScope',
  },
]

function ProjectCard({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="proj-card"
      style={{ height: 280 }}
    >
      <div className="content">
        {/* BACK — shown on hover */}
        <div className="proj-back" style={{ background: 'var(--bg-secondary)' }}>
          <div
            className="proj-back-inner"
            style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}
          >
            <ul className="w-full space-y-2">
              {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white mt-2"
              style={{ background: 'var(--accent)' }}
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>

        {/* FRONT */}
        <div className="proj-front p-5 flex flex-col justify-between" style={{ background: 'var(--bg-card)' }}>
          {/* Floating circles */}
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            <div className="circle" style={{ width: 90, height: 90, background: 'color-mix(in srgb, var(--accent) 60%, transparent)', position: 'absolute', borderRadius: '50%', filter: 'blur(15px)', animation: 'floating 2600ms infinite linear', top: -20, left: -20 }} />
            <div id="bottom" style={{ width: 140, height: 140, background: 'color-mix(in srgb, var(--accent-2) 40%, transparent)', position: 'absolute', borderRadius: '50%', filter: 'blur(15px)', animation: 'floating 2600ms -800ms infinite linear', top: 60, left: 50 }} />
            <div style={{ width: 30, height: 30, background: 'color-mix(in srgb, var(--accent-3) 60%, transparent)', position: 'absolute', borderRadius: '50%', filter: 'blur(15px)', animation: 'floating 2600ms -1800ms infinite linear', top: -40, left: 160 }} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(0,0,0,0.35)',
                    color: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative z-10 rounded-lg p-4"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
          >
            <p className="font-display font-bold text-sm text-white mb-1">{project.title}</p>
            <p className="text-[11px] text-white/70 leading-relaxed">{project.summary}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.25em] mb-2" style={{ color: 'var(--accent)' }}>
            PROJECTS
          </p>
          <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Shipped Work
          </h2>
          <div className="divider mt-4" style={{ marginLeft: 0 }} />
          <p className="text-xs mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
            Hover each card to reveal highlights
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.08} />
          ))}
        </div>

        <div className="flex justify-center">
          <GooeyButton
            href="https://github.com/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            color={isDark ? '#A78BFA' : '#E14011'}
          >
            <Github size={15} /> View all on GitHub
          </GooeyButton>
        </div>
      </div>
    </section>
  )
}
