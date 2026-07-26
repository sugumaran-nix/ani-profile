'use client'
import { Brain, Server, Monitor, Wrench } from 'lucide-react'

const PANELS = [
  {
    label: 'AI & ML',
    color: 'var(--acc)',
    Icon: Brain,
    kanji: '脳',
    skills: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'BERT', 'Hugging Face', 'Explainable AI', 'Prompt Eng.', 'RLHF'],
  },
  {
    label: 'Backend & APIs',
    color: 'var(--acc3)',
    Icon: Server,
    kanji: '鯖',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    label: 'Frontend',
    color: 'var(--acc2)',
    Icon: Monitor,
    kanji: '画',
    skills: ['React.js', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 Canvas', 'JavaScript'],
  },
  {
    label: 'Tools',
    color: '#22c55e',
    Icon: Wrench,
    kanji: '具',
    skills: ['Git', 'GitHub', 'Linux', 'Jupyter', 'Vercel', 'Railway', 'VS Code', 'Labelbox', 'CVAT'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="sec screentone" style={{ position: 'relative', overflow: 'hidden' }}>
      <span className="kanji-bg" aria-hidden="true" style={{ left: '-2%', top: '0%' }}>力</span>
      <span className="kanji-bg" aria-hidden="true" style={{ right: '5%', bottom: '5%', fontSize: 'clamp(80px,10vw,140px)', opacity: 0.5 }}>技</span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 02</span>
          <h2 className="sec-title f-display">Technical Stack</h2>
          <div className="sec-rule" />
          <p style={{ marginTop: 12, fontSize: 13, color: 'var(--t3)', fontFamily: 'var(--font-mono)' }}>
            // things I've actually used to build and ship real projects, not just listed for keywords
          </p>
        </div>

        <div className="skills-grid reveal delay-1">
          {PANELS.map((p, pi) => (
            <div key={p.label} className="skill-panel" style={{ '--panel-color': p.color } as React.CSSProperties}>
              <span aria-hidden="true" style={{
                position: 'absolute', bottom: 8, right: 10,
                fontFamily: 'serif', fontSize: 48,
                color: p.color, opacity: 0.1,
                lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              }}>
                {p.kanji}
              </span>
              <div className="skill-panel-label f-mono">
                <p.Icon size={12} />
                {p.label}
              </div>
              <div className="skill-tags">
                {p.skills.map((sk, si) => (
                  <span key={sk} className="stag reveal delay-1"
                    style={{ transitionDelay: `${pi * 0.06 + si * 0.04 + 0.15}s` }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
