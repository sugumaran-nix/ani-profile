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
    title: 'Sketchline — Whiteboard',
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
    <div className="proj-wrap">
      <div className="content">

        {/* BACK — visible after hover (starts face-down) */}
        <div className="proj-back">
          <div className="proj-back-inner">
            <p style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: 4 }}>
              KEY RESULTS
            </p>
            <ul style={{ listStyle: 'none', width: '100%' }}>
              {p.highlights.map(h => (
                <li key={h} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#ccc', marginBottom: 7, lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 6, padding: '7px 16px', borderRadius: 8,
                background: 'var(--accent)', color: '#fff',
                fontSize: 12, fontWeight: 700, textDecoration: 'none',
              }}
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>

        {/* FRONT — default visible state (rotated 180 so it shows before hover) */}
        <div className="proj-front">
          {/* Floating blur circles */}
          <div className="pf-img">
            <div className="circle" style={{ background: p.c1 }} />
            <div className="circle c2" style={{ background: p.c2, left: 50, top: 0, width: 150, height: 150, animationDelay: '-800ms' }} />
            <div className="circle c3" style={{ background: p.c3, left: 160, top: -80, width: 30, height: 30, animationDelay: '-1800ms' }} />
          </div>
          {/* Content overlay */}
          <div className="pf-content">
            <span className="pf-badge">{p.category}</span>
            <div className="pf-desc">
              <p className="pf-title">{p.title}</p>
              <p className="pf-sub">{p.summary}</p>
            </div>
          </div>
        </div>

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
        <motion.div {...fade()} style={{ marginBottom: 16 }}>
          <span className="s-label">Projects</span>
          <h2 className="f-display" style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.15 }}>
            Shipped Work
          </h2>
          <div className="divider" style={{ width: 80, marginTop: 14, marginLeft: 0 }} />
        </motion.div>
        <motion.p {...fade(0.08)} style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--txt-3)', marginBottom: 40 }}>
          Hover each card to reveal highlights
        </motion.p>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, marginBottom: 48 }}>
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
