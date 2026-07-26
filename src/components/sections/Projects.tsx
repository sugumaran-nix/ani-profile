'use client'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Fake Job Detector',
    category: 'Machine Learning',
    summary: 'Detects fake job listings using ML — trained on 17,880 real-world postings.',
    hits: [
      '87.57% Fraud F1-score on imbalanced data',
      '10,000-feature TF-IDF bigram pipeline',
      'Sub-800ms end-to-end inference',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
    demo: 'https://fake-job-posting-ml.onrender.com/',
  },
  {
    title: 'AI Content Detector',
    category: 'NLP',
    summary: 'Classifies human vs AI text using perplexity & burstiness — no API, pure stats.',
    hits: [
      'Perplexity, burstiness & variance features',
      'Sentence-level AI-span explainability',
      'Low-latency FastAPI backend',
    ],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/ai-content-detector',
    demo: 'https://ai-content-detector-3u5f.vercel.app/',
  },
  {
    title: 'Sketchline',
    category: 'Real-time WebSocket',
    summary: 'Real-time multiplayer whiteboard — custom WebSocket protocol, no third-party sync libs.',
    hits: [
      'Sub-100ms stroke synchronisation',
      'Custom 7-message JSON protocol (zero libs)',
      'Board state replay on reconnect',
    ],
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/Sketchline-whiteboard',
    demo: 'https://whiteboard-frontend-nine-smoky.vercel.app/',
  },
  {
    title: 'ProjectScope',
    category: 'Productivity App',
    summary: 'Eisenhower Matrix task manager — drag-and-drop, cross-tab sync, WCAG-compliant.',
    hits: [
      'dnd-kit drag-and-drop, keyboard accessible',
      'localStorage + cross-tab sync',
      'Eisenhower Matrix prioritisation',
    ],
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/ProjectScope',
    demo: 'https://project-scope-seven.vercel.app/',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="sec slash-bg-alt screentone"
      style={{ paddingTop: '6vw', paddingBottom: '6vw', position: 'relative', overflow: 'hidden' }}
    >
      <span className="kanji-bg" aria-hidden="true" style={{ right: '-1%', top: '2%', lineHeight: 1.05 }}>
        仕<br />事
      </span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 03</span>
          <h2 className="sec-title f-display">Shipped Work</h2>
          <div className="sec-rule" />
          <p style={{ marginTop: 12, fontSize: 13, color: 'var(--t3)', fontFamily: 'var(--font-mono)' }}>
            // four projects, all live, all open source — click around
          </p>
        </div>

        {/* proj-block wraps grid + cta so shadow applies to the whole thing */}
        <div className="proj-block reveal delay-1">
          <div className="manga-grid">
            {PROJECTS.map((p) => (
              <div key={p.title} className="mp-card">
                <div className="mp-header">
                  <img src={p.img} alt={p.title} />
                  <div className="mp-header-bar">
                    <span className="mp-cat f-mono">{p.category}</span>
                  </div>
                </div>

                <div className="mp-body">
                  <p className="mp-title f-display">{p.title}</p>
                  <p className="mp-summary">{p.summary}</p>
                  <ul className="mp-hits">
                    {p.hits.map(h => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="mp-foot">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="mp-demo-link f-mono">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="mp-gh-link f-mono">
                      <Github size={12} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="proj-cta-row reveal delay-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="f-mono" style={{ fontSize: 11, color: 'var(--t3)', letterSpacing: '0.1em' }}>
              more experiments on GitHub — some good, some educational
            </span>
            <a href="https://github.com/sugumaran-nix" target="_blank" rel="noopener noreferrer"
              className="btn-sec" style={{ fontSize: 12 }}>
              <Github size={13} /> View all on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
