'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'

const GROUPS = [
  {
    label: 'AI & Machine Learning',
    skills: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'BERT', 'Hugging Face', 'Explainable AI', 'Prompt Engineering', 'RLHF'],
    blobColor: 'var(--accent)',
  },
  {
    label: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets', 'MySQL', 'MongoDB', 'SQLite'],
    blobColor: 'var(--accent-2)',
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'JavaScript'],
    blobColor: 'var(--accent-3)',
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux', 'Jupyter', 'Vercel', 'Railway', 'VS Code', 'Labelbox', 'CVAT'],
    blobColor: 'var(--accent)',
  },
]

const BlobCard = styled.div<{ $blob: string }>`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }

  .bg {
    position: absolute;
    top: 5px; left: 5px;
    right: 5px; bottom: 5px;
    z-index: 2;
    border-radius: 10px;
    overflow: hidden;
    outline: 1.5px solid color-mix(in srgb, var(--border-color) 40%, transparent);
  }
  .blob {
    position: absolute;
    z-index: 1;
    top: 50%; left: 50%;
    width: 120px; height: 120px;
    border-radius: 50%;
    background-color: ${p => p.$blob};
    opacity: 0.85;
    filter: blur(14px);
    animation: blob-bounce 5s infinite ease;
  }
  .content {
    position: relative;
    z-index: 3;
    padding: 20px;
  }
`

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.25em] mb-2" style={{ color: 'var(--accent)' }}>
            SKILLS
          </p>
          <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Technical Stack
          </h2>
          <div className="divider mt-4" style={{ marginLeft: 0 }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {GROUPS.map((group, gIdx) => (
            <motion.div
              key={group.label}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: gIdx * 0.1 }}
            >
              <BlobCard $blob={group.blobColor}>
                <div className="glass bg" />
                <div className="blob" />
                <div className="content glass" style={{ minHeight: 200 }}>
                  <p className="font-display font-bold text-base mb-4" style={{ color: 'var(--text-primary)' }}>
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: gIdx * 0.08 + sIdx * 0.04 + 0.3 }}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium border"
                        style={{
                          background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
                          borderColor: 'color-mix(in srgb, var(--accent) 25%, transparent)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BlobCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
