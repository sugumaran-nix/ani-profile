'use client'
import { MapPin, Briefcase, Globe, Code } from 'lucide-react'

const INFO = [
  { icon: Briefcase, key: 'Focus',    val: 'AI/ML · Backend · Full Stack'    },
  { icon: MapPin,    key: 'Location', val: 'Tamil Nadu, India · Remote-ready' },
  { icon: Globe,     key: 'Lang',     val: 'Tamil (Native) · English (Prof.)' },
  { icon: Code,      key: 'Degree',   val: 'MCA — Anna University, 2026'      },
]

const EDU = [
  { period: 'Jun 2024 – Jul 2026', degree: 'MCA', uni: 'Anna University — Sri Venkateshwara College',          score: '80%',    current: true  },
  { period: 'Jul 2021 – May 2024', degree: 'BCA', uni: 'Bharathiar University — Govt. Arts & Science College', score: '83.71%', current: false },
]

export function About() {
  return (
    <section id="about" className="sec slash-bg-alt screentone" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
      <span className="kanji-bg" aria-hidden="true" style={{ right: '-2%', top: '5%', fontSize: 'clamp(200px,26vw,340px)' }}>者</span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 01</span>
          <h2 className="sec-title f-display">Who I Am</h2>
          <div className="sec-rule" />
        </div>

        <div className="about-grid reveal delay-1">
          <div className="about-left">
            <p className="about-bio">
              MCA grad from Anna University (2026). I build full-stack AI apps —
              fraud detectors, NLP classifiers, real-time WebSocket systems.
              Deployed, not just demoed.
            </p>
            <p className="about-bio" style={{ marginBottom: 28 }}>
              Looking for my first role in AI/ML or full-stack. Open to remote or anywhere in India.
              Still learning, always shipping.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {INFO.map(({ icon: Icon, key, val }) => (
                <div key={key} className="info-row">
                  <Icon size={13} style={{ color: 'var(--acc)', flexShrink: 0, marginTop: 2 }} />
                  <span className="info-key">{key}</span>
                  <span className="info-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <span className="sec-tag f-mono" style={{ marginBottom: 20, display: 'block' }}>Education</span>
            <div className="edu-stack">
              {EDU.map((e) => (
                <div key={e.degree} className="edu-card">
                  <div className="edu-period f-mono">{e.period}</div>
                  <div className="edu-degree f-display">{e.degree}</div>
                  <div className="edu-uni">{e.uni}</div>
                  <div className="edu-score-row" style={{ gap: 10 }}>
                    <span className="edu-score f-mono">{e.score}</span>
                    {e.current && <span className="edu-badge f-mono">NOW</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
