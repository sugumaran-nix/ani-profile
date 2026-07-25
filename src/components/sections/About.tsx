'use client'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Briefcase, Globe, Code } from 'lucide-react'

const INFO = [
  { icon: Briefcase, key: 'Focus',     val: 'AI/ML · Backend · Full Stack'    },
  { icon: MapPin,    key: 'Location',  val: 'Tamil Nadu, India · Remote-ready' },
  { icon: Globe,     key: 'Languages', val: 'Tamil (Native) · English (Prof.)' },
  { icon: Code,      key: 'Degree',    val: 'MCA — Anna University, 2026'      },
]

const EDU = [
  { period: 'Jun 2024 – Jul 2026', degree: 'MCA', uni: 'Anna University — Sri Venkateshwara College',          score: '80%',    pct: 80,    current: true  },
  { period: 'Jul 2021 – May 2024', degree: 'BCA', uni: 'Bharathiar University — Govt. Arts & Science College', score: '83.71%', pct: 83.71, current: false },
]

export function About() {
  const rightRef   = useRef<HTMLDivElement>(null)
  const [barsActive, setBarsActive] = useState(false)

  useEffect(() => {
    const el = rightRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setBarsActive(true); io.disconnect() }
    }, { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" className="sec slash-bg-alt screentone" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
      {/* Kanji — 者 (person / expert) */}
      <span
        className="kanji-bg"
        aria-hidden="true"
        style={{ right: '-2%', top: '5%', fontSize: 'clamp(200px,26vw,340px)' }}
      >
        者
      </span>

      <div className="sec-inner">
        <div className="sec-head reveal">
          <span className="sec-tag f-mono">§ 01</span>
          <h2 className="sec-title f-display">Who I Am</h2>
          <div className="sec-rule" />
        </div>

        <div className="about-grid reveal delay-1">
          {/* LEFT */}
          <div className="about-left">
            <p className="about-bio">
              I build end-to-end systems — raw data through model training, REST API
              deployment, and into polished frontends. My work spans fraud-detection ML,
              NLP text classification, real-time WebSocket applications, and React UIs.
              Every project shipped is production-deployed and battle-tested.
            </p>
            <p className="about-bio" style={{ marginBottom: 28 }}>
              Available immediately. Open to AI/ML, backend, full-stack, NLP, and data
              annotation roles — anywhere in India or remote.
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

          {/* RIGHT — education */}
          <div className="about-right" ref={rightRef}>
            <span className="sec-tag f-mono" style={{ marginBottom: 20, display: 'block' }}>
              Education
            </span>
            <div className="edu-stack">
              {EDU.map((e) => (
                <div key={e.degree} className="edu-card">
                  <div className="edu-period f-mono">{e.period}</div>
                  <div className="edu-degree f-display">{e.degree}</div>
                  <div className="edu-uni">{e.uni}</div>
                  <div className="edu-score-row">
                    <span className="edu-score f-mono">{e.score}</span>
                    <div className="edu-bar">
                      <div
                        className="edu-bar-fill"
                        style={{
                          width: barsActive ? `${e.pct}%` : '0%',
                          transition: barsActive ? 'width 1.4s ease 0.3s' : 'none',
                        }}
                      />
                    </div>
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
