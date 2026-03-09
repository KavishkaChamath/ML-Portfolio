import React from 'react'
import { useReveal } from '../hooks/useReveal'

const certifications = [
  {
    year: '2024',
    title: 'Supervised Machine Learning: Regression and Classification ',
    issuer: 'Coursera / DeepLearning.AI',
    credentialId: 'ID: ALP4SL9QL72Y',
    type: 'Specialization',
    link: 'https://www.coursera.org/account/accomplishments/verify/ALP4SL9QL72Y',
  },
  {
    year: '2024',
    title: 'Advanced Learning Algorithms',
    issuer: 'Coursera / DeepLearning.AI',
    credentialId: 'ID: 98JZGNLCGX2R',
    type: 'Deep Learning',
    link: 'https://www.coursera.org/account/accomplishments/records/98JZGNLCGX2R',
  },
  {
    year: '2024',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'Coursera / DeepLearning.AI',
    credentialId: 'ID: WCYU1MFXMT93',
    type: 'Specialization',
    link: 'https://www.coursera.org/account/accomplishments/records/WCYU1MFXMT93',
  },
  {
    year: '2025',
    title: 'KodeKloud Engineer - 100 Days of DevOps ',
    issuer: 'KodeKloud',
    credentialId: 'ID: 856c137e-4187-49f0-ad23-42e5faae50ac',
    type: 'Cloud',
    link: 'https://engineer.kodekloud.com/certificate-verification/856c137e-4187-49f0-ad23-42e5faae50ac',
  },

  {
    title: 'View all other certifications',
    link: 'https://www.linkedin.com/in/chamath-kumarathunge/details/certifications/',
  },
]

const typeColors = {
  'Cloud':        'var(--cyan)',
  'Deep Learning':'var(--violet-bright)',
  'Specialization':'var(--amber)',
  'MLOps':        'var(--mint)',
}

const typeIcons = {
  'Cloud':         '☁️',
  'Deep Learning': '🧠',
  'Specialization':'🎯',
  'MLOps':         '⚙️',
}

export default function Certifications() {
  const { ref, visible } = useReveal()

  return (
    <section className="publications-section" id="certifications">
      <div className="container">
        <p className="section-label">05 — Credentials</p>
        <h2 className="section-title">Certifications</h2>
        {/* <p className="section-subtitle">
          Industry-recognized certifications across ML, cloud infrastructure, and MLOps.
        </p> */}

        <div className="publications-list" ref={ref}>
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className={`glass-card pub-card reveal reveal-delay-${(idx % 3) + 1} ${visible ? 'visible' : ''}`}
            >
              {/* Year column */}
              <p className="pub-year">{cert.year}</p>

              <div className="pub-divider" />

              {/* Main content */}
              <div className="pub-content">
                <h3 className="pub-title">{cert.title}</h3>
                <p className="pub-venue">{cert.issuer}</p>

                {/* Credential ID */}
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  marginBottom: '12px',
                }}>
                   {cert.credentialId}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <div className="pub-link">
                    <a className="btn btn-secondary btn-sm" href={cert.link}
                      target="_blank" 
                      rel="noopener noreferrer">
                    View Certificate →
                  </a>
                  </div>

                  {/* Type badge */}
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    color: typeColors[cert.type] ?? 'var(--text-muted)',
                    padding: '2px 10px',
                    borderRadius: '50px',
                    background: `${typeColors[cert.type] ?? 'var(--text-muted)'}18`,
                    border: `1px solid ${typeColors[cert.type] ?? 'var(--text-muted)'}40`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}>
                    {typeIcons[cert.type]} {cert.type}
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
