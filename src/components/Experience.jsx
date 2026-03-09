import React from 'react'
import { useReveal } from '../hooks/useReveal'

const experiences = [
  {
    period: 'Jan 20XX – Present',
    role: 'Senior ML Engineer',
    org: 'Company Name',
    type: 'Full-time',
    desc: 'Leading the computer vision team in building real-time perception systems for autonomous applications. Architecting scalable model training infrastructure processing 10M+ images daily. Mentoring junior engineers and driving technical roadmap.',
    tags: ['PyTorch', 'YOLO', 'Kubernetes', 'AWS', 'Team Lead'],
  },
  {
    period: 'Jun 20XX – Dec 20XX',
    role: 'ML Research Engineer',
    org: 'Research Lab / Institute Name',
    type: 'Research',
    desc: 'Conducted research on efficient neural architectures for edge deployment. Published 2 papers at top-tier venues. Collaborated with cross-functional teams to translate research findings into production-ready systems.',
    tags: ['Research', 'Model Compression', 'Edge AI', 'TensorRT'],
  },
  {
    period: 'Sep 20XX – May 20XX',
    role: 'MLOps Engineer',
    org: 'Startup / Company Name',
    type: 'Full-time',
    desc: 'Designed and maintained end-to-end ML pipelines from data ingestion to model serving. Reduced model deployment time from weeks to hours through automated CI/CD workflows. Built internal tooling for experiment tracking and model monitoring.',
    tags: ['MLflow', 'Docker', 'Airflow', 'GCP', 'Python'],
  },
  {
    period: 'May 20XX – Aug 20XX',
    role: 'AI Research Intern',
    org: 'Company / Lab Name',
    type: 'Internship',
    desc: 'Explored novel applications of self-supervised learning for medical image analysis. Contributed to open-source tooling and presented findings to senior research staff.',
    tags: ['Self-Supervised', 'Medical AI', 'Python', 'PyTorch'],
  },
]

export default function Experience() {
  const { ref, visible } = useReveal()

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <p className="section-label">05 — Career</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          A track record of building ML systems in research labs, startups, and large-scale production environments.
        </p>

        <div className="timeline" ref={ref}>
          {experiences.map((exp, idx) => (
            <div
              key={exp.role + exp.org}
              className={`timeline-item reveal reveal-delay-${(idx % 3) + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="timeline-dot" />

              <div className="glass-card timeline-card">
                <p className="timeline-period">{exp.period}</p>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-org">
                  {exp.org}
                  <span className="timeline-org-badge">{exp.type}</span>
                </p>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="timeline-tags">
                  {exp.tags.map(t => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
