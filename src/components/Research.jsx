import React from 'react'
import { useReveal } from '../hooks/useReveal'

const researchItems = [
 {
  area: 'Computer Vision',
  title: 'Low-Light Image Enhancement with Face-Aware GANs',
  summary: 'Developing a GAN-based framework to enhance low-light images while preserving facial details. The research includes dataset preparation, integration of pre-trained EnlightenGAN weights, and fine-tuning for face-aware enhancement in security and surveillance applications.',
  status: 'In Progress',
  tags: ['GANs', 'Image Enhancement', 'Face Detection', 'EnlightenGAN', 'Dataset Preprocessing', 'Fine-Tuning'],
},
]

const statusColors = {
  'Published': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', color: '#10b981' },
  'Under Review': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', color: '#f59e0b' },
  'In Progress': { bg: 'rgba(53, 246, 243, 0.08)', border: 'rgba(0,229,255,0.25)', color: '#00e5ff' },
}

export default function Research() {
  const { ref, visible } = useReveal()

  return (
    <section className="research-section" id="research">
      <div className="container">
        <p className="section-label">04 — Inquiry</p>
        <h2 className="section-title">Research</h2>
        <p className="section-subtitle">
          Active research threads at the intersection of deep learning, computer vision, and scalable ML.
        </p>

        <div className="research-grid" ref={ref}>
          {researchItems.map((item, idx) => (
            <div
              key={item.title}
              className={`glass-card research-card reveal reveal-delay-${(idx % 3) + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="research-area-badge">
                <span className="dot" />
                {item.area}
              </div>

              <h3 className="research-title">{item.title}</h3>
              <p className="research-summary">{item.summary}</p>

              <div className="research-footer">
                <span
                  className="research-status"
                  style={{
                    ...statusColors[item.status],
                    padding: '4px 12px',
                    borderRadius: '50px',
                    border: `1px solid ${statusColors[item.status].border}`,
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    background: statusColors[item.status].bg,
                    color:'brown'
                  }}
                >
                  {item.status}
                </span>
              </div>

              <div className="about-interests" style={{ marginTop: '14px' }}>
                {item.tags.map(t => (
                  <span className="tag-chip cyan" key={t}
                    style={{ fontSize: '0.68rem', padding: '3px 10px' }}>
                    {t}
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
