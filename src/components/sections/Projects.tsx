'use client'
import { Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Fake Job Detector',
    category: 'Machine Learning',
    summary: 'End-to-end fraud detection on 17,880 real job postings with custom NLP heuristics and REST API inference.',
    hits: [
      '87.57% Fraud F1-score on imbalanced dataset',
      '10,000-feature TF-IDF bigram pipeline',
      'Custom 10-signal URL fraud heuristic',
      'Runtime model switching via REST API',
      'Sub-800ms end-to-end inference',
    ],
    github: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
    c1: '#D93A00', c2: '#F0B800', c3: '#FF7030',
  },
  {
    title: 'AI Content Detector',
    category: 'NLP',
    summary: 'Statistical classifier distinguishing AI-generated text from human writing using perplexity and burstiness features.',
    hits: [
      'Perplexity, burstiness & variance features',
      'Sentence-level explainability of AI spans',
      'Evaluated on 500+ text samples',
      'Structured JSON with confidence scores',
      'Low-latency FastAPI backend',
    ],
    github: 'https://github.com/sugumaran-nix/ai-content-detector',
    c1: '#8B5FFF', c2: '#00E8CC', c3: '#4488FF',
  },
  {
    title: 'Sketchline',
    category: 'Real-time WebSocket',
    summary: 'Multiplayer collaborative whiteboard built on a custom 7-message JSON WebSocket protocol — no third-party libs.',
    hits: [
      'Sub-100ms stroke synchronisation',
      'Custom 7-message JSON protocol',
      '20 cursor updates per second',
      'Exponential backoff reconnection',
      'Board state replay on reconnect',
    ],
    github: 'https://github.com/sugumaran-nix/Sketchline-whiteboard',
    c1: '#22C55E', c2: '#06B6D4', c3: '#0EA5E9',
  },
  {
    title: 'ProjectScope',
    category: 'Productivity App',
    summary: 'Eisenhower Matrix drag-and-drop task manager with keyboard accessibility and cross-tab localStorage sync.',
    hits: [
      'dnd-kit drag-and-drop, keyboard accessible',
      'localStorage + cross-tab sync',
      'Eisenhower Matrix prioritisation',
      'WCAG-compliant interactions',
      'Fully responsive production deployment',
    ],
    github: 'https://github.com/sugumaran-nix/ProjectScope',
    c1: '#F59E0B', c2: '#EF4444', c3: '#EC4899',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="sec slash-bg-alt screentone"
      style={{ paddingTop: '6vw', paddingBottom: '6vw', position: 'relative', overflow: 'hidden' }}
    >
      {/* Kanji — 仕事 (work / mission) */}
      <span
        className="kanji-bg"
        aria-hidden="true"
        style={{ right: '-1%', top: '2%', lineHeight: 1.05 }}
      >
        仕<br />事
      </span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 03</span>
          <h2 className="sec-title f-display">Shipped Work</h2>
          <div className="sec-rule" />
        </div>

        {/* Manga panel grid */}
        <div className="manga-grid reveal delay-1">
          {PROJECTS.map((p) => (
            <div key={p.title} className="mp-card">
              {/* Colour splash header with screen-tone */}
              <div className="mp-header">
                <div className="mp-splash" style={{ background: p.c1, width: 200, height: 200, top: -70, left: -50, opacity: 0.85 }} />
                <div className="mp-splash" style={{ background: p.c2, width: 160, height: 160, top: -60, left: 90,  opacity: 0.70 }} />
                <div className="mp-splash" style={{ background: p.c3, width: 100, height: 100, top: -20, right: 20, opacity: 0.55 }} />
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

              {/* Footer */}
              <div className="mp-foot">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="mp-gh-link f-mono">
                  <Github size={12} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA strip */}
        <div className="proj-cta-row reveal delay-2">
          <span className="proj-cta-label f-mono">4 projects shipped · More on GitHub</span>
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
