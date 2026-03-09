import React from 'react'
import { useReveal } from '../hooks/useReveal'

const publications = [
  {
    year: '20XX',
    title: 'Sparse Vision Transformers for High-Resolution Image Understanding',
    venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
    type: 'Conference',
    link: '#',
  },
  {
    year: '20XX',
    title: 'Continual Learning Without Forgetting via Selective Synaptic Plasticity',
    venue: 'Neural Information Processing Systems (NeurIPS)',
    type: 'Conference',
    link: '#',
  },
  {
    year: '20XX',
    title: 'Efficient MLOps for Distributed Deep Learning: A Systems Perspective',
    venue: 'International Conference on Machine Learning (ICML) Workshop',
    type: 'Workshop',
    link: '#',
  },
  {
    year: '20XX',
    title: 'Medical Image Segmentation via Self-Supervised Contrastive Pretraining',
    venue: 'IEEE Transactions on Medical Imaging',
    type: 'Journal',
    link: '#',
  },
  {
    year: '20XX',
    title: 'Benchmarking Real-Time Object Detection for Edge Deployment',
    venue: 'arXiv Preprint',
    type: 'Preprint',
    link: '#',
  },
]

const typeColors = {
  'Conference': 'var(--cyan)',
  'Journal': 'var(--violet-bright)',
  'Workshop': 'var(--amber)',
  'Preprint': 'var(--text-muted)',
}

export default function Publications() {
  const { ref, visible } = useReveal()

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <p className="section-label">05 — Output</p>
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">
          Peer-reviewed research published at top ML and CV venues.
        </p>

        <div className="publications-list" ref={ref}>
          {publications.map((pub, idx) => (
            <div
              key={pub.title}
              className={`glass-card pub-card reveal reveal-delay-${(idx % 3) + 1} ${visible ? 'visible' : ''}`}
            >
              <p className="pub-year">{pub.year}</p>

              <div className="pub-divider" />

              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-venue">{pub.venue}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <a className="pub-link" href={pub.link}>
                    Read Paper →
                  </a>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: typeColors[pub.type],
                      padding: '2px 10px',
                      borderRadius: '50px',
                      background: `${typeColors[pub.type]}18`,
                      border: `1px solid ${typeColors[pub.type]}40`,
                    }}
                  >
                    {pub.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
