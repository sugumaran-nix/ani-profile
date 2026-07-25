'use client'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Fake Job Detector',
    category: 'Machine Learning',
    summary: 'Fraud detection on 17,880 job postings using NLP heuristics, TF-IDF pipeline, and REST API inference.',
    hits: [
      '87.57% Fraud F1-score on imbalanced dataset',
      '10,000-feature TF-IDF bigram pipeline',
      'Custom 10-signal URL fraud heuristic',
      'Sub-800ms end-to-end inference',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
    demo: 'https://your-fake-job-detector.vercel.app', // ← replace
  },
  {
    title: 'AI Content Detector',
    category: 'NLP',
    summary: 'Statistical classifier distinguishing AI-generated text from human writing via perplexity and burstiness.',
    hits: [
      'Perplexity, burstiness & variance features',
      'Sentence-level explainability of AI spans',
      'Structured JSON with confidence scores',
      'Low-latency FastAPI backend',
    ],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/ai-content-detector',
    demo: 'https://sugum4r4n-ai-content-detector.hf.space',
  },
  {
    title: 'Sketchline',
    category: 'Real-time WebSocket',
    summary: 'Multiplayer collaborative whiteboard on a custom 7-message JSON WebSocket protocol — zero third-party libs.',
    hits: [
      'Sub-100ms stroke synchronisation',
      '20 cursor updates per second',
      'Exponential backoff reconnection',
      'Board state replay on reconnect',
    ],
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/Sketchline-whiteboard',
    demo: 'https://your-sketchline.vercel.app', // ← replace
  },
  {
    title: 'ProjectScope',
    category: 'Productivity App',
    summary: 'Eisenhower Matrix drag-and-drop task manager with keyboard accessibility and cross-tab sync.',
    hits: [
      'dnd-kit drag-and-drop, keyboard accessible',
      'localStorage + cross-tab sync',
      'Eisenhower Matrix prioritisation',
      'WCAG-compliant, fully responsive',
    ],
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=480&h=220&fit=crop&crop=center&auto=format',
    github: 'https://github.com/sugumaran-nix/ProjectScope',
    demo: 'https://your-projectscope.vercel.app', // ← replace
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
        </div>

        <div className="manga-grid reveal delay-1">
          {PROJECTS.map((p) => (
            <div key={p.title} className="mp-card">
              {/* Image header */}
              <div className="mp-header">
                <img src={p.img} alt={p.title} />
                <div className="mp-header-bar">
                  <span className="mp-cat f-mono">{p.category}</span>
                </div>
              </div>

              {/* Body */}
              <div className="mp-body">
                <p className="mp-title f-display">{p.title}</p>
                <p className="mp-summary">{p.summary}</p>
                <ul className="mp-hits">
                  {p.hits.map(h => <li key={h}>{h}</li>)}
                </ul>
              </div>

              {/* Footer — Live Demo + GitHub */}
              <div className="mp-foot">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="mp-demo-link f-mono">
                  <ExternalLink size={12} /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="mp-gh-link f-mono">
                  <Github size={12} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="proj-cta-row reveal delay-2" style={{ justifyContent: 'flex-end' }}>
          <a
            href="https://github.com/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sec"
            style={{ fontSize: 12 }}
          >
            <Github size={13} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
