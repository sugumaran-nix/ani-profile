'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { GooeyButton } from '@/components/ui/GooeyButton'

const PROJECTS = [
  {
    title: 'Fake Job Detector',
    category: 'Machine Learning',
    summary: 'End-to-end fraud detection on 17,880 job postings with SHAP-style explainability.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'TF-IDF', 'SQLite'],
    highlights: [
      '87.57% Fraud F1-score on imbalanced dataset',
      '10,000-feature TF-IDF bigram pipeline',
      'Custom 10-signal URL fraud heuristic',
      'Runtime model switching via REST API',
      'Sub-800ms end-to-end inference',
    ],
    github: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
    c1: '#ffbb66', c2: '#ff8866', c3: '#ff2233',
  },
  {
    title: 'AI Content Detector',
    category: 'NLP',
    summary: 'Statistical classifier distinguishing AI-generated text from human writing.',
    tags: ['Python', 'FastAPI', 'NLP', 'Scikit-learn'],
    highlights: [
      'Perplexity, burstiness & variance features',
      'Sentence-level explainability of AI spans',
      'Evaluated on 500+ text samples',
      'Structured JSON with confidence scores',
      'Low-latency FastAPI backend',
    ],
    github: 'https://github.com/sugumaran-nix/ai-content-detector',
    c1: '#66bbff', c2: '#4488ff', c3: '#aa22ff',
  },
  {
    title: 'Sketchline',
    category: 'Real-time',
    summary: 'Multiplayer collaborative whiteboard with custom WebSocket protocol.',
    tags: ['FastAPI', 'WebSockets', 'Next.js', 'TypeScript', 'Canvas'],
    highlights: [
      'Sub-100ms stroke synchronization',
      'Custom 7-message JSON protocol (no libs)',
      '20 cursor updates per second',
      'Exponential backoff reconnection',
      'Board state replay on reconnect',
    ],
    github: 'https://github.com/sugumaran-nix/Sketchline-whiteboard',
    c1: '#66ffbb', c2: '#22ccaa', c3: '#0099ff',
  },
  {
    title: 'ProjectScope',
    category: 'Productivity',
    summary: 'Eisenhower Matrix drag-and-drop task manager with cross-tab persistence.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'dnd-kit drag-and-drop, keyboard accessible',
      'localStorage + cross-tab sync',
      'Eisenhower Matrix prioritization',
      'WCAG-compliant interactions',
      'Fully responsive production deployment',
    ],
    github: 'https://github.com/sugumaran-nix/ProjectScope',
    c1: '#ffdd66', c2: '#ff9944', c3: '#ff4422',
  },
]

function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  return (
    <div className="proj-card">
      {/* Colourful header */}
      <div className="proj-card-header" style={{ background: '#111' }}>
        <div className="proj-card-circle" style={{ background: p.c1, width: 100, height: 100, top: -10, left: -10 }} />
        <div className="proj-card-circle" style={{ background: p.c2, width: 140, height: 140, top: -30, left: 40, animationDelay: '-800ms' }} />
        <div className="proj-card-circle" style={{ background: p.c3, width: 60, height: 60, top: -20, right: 20, animationDelay: '-1500ms' }} />
        <div className="proj-card-overlay">
          <span className="proj-card-badge">{p.category}</span>
        </div>
      </div>

      {/* Body */}
      <div className="proj-card-body">
        <p className="proj-card-title">{p.title}</p>
        <p className="proj-card-summary">{p.summary}</p>
        <ul className="proj-card-highlights">
          {p.highlights.map(h => (
            <li key={h}>
              <span>▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer with GitHub link */}
      <div className="proj-card-footer">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card-link"
        >
          <Github size={13} />
          GitHub
        </a>
      </div>
    </div>
  )
}

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay }, viewport: { once: true, margin: '-60px' } })

export function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fade()} style={{ marginBottom: 48 }}>
          <span className="s-label">Projects</span>
          <h2 className="f-display" style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.15 }}>
            Shipped Work
          </h2>
          <div className="divider" style={{ width: 80, marginTop: 14, marginLeft: 0 }} />
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} {...fade(i * 0.09)}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div {...fade(0.35)} style={{ display: 'flex', justifyContent: 'center' }}>
          <GooeyButton href="https://github.com/sugumaran-nix" target="_blank" rel="noopener noreferrer">
            <Github size={14} /> View all on GitHub
          </GooeyButton>
        </motion.div>

      </div>
    </section>
  )
}
