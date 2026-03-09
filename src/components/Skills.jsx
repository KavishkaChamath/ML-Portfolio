import React from 'react'
import { useReveal } from '../hooks/useReveal'

const skillCategories = [
  {
    icon: '🤖',
    title: 'Machine Learning',
    skills: ['Supervised Learning', 'Unsupervised Learning',
      'Transfer Learning', 'Model Distillation', 'Feature Engineering'],
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    skills: ['Object Detection', 'Image Segmentation', 'YOLO', 
      'OpenCV', 'Image Denoising', 'Image Classification'],
  },
  // {
  //   icon: '⚙️',
  //   title: 'MLOps',
  //   skills: ['MLflow', 'Kubeflow', 'DVC', 'Weights & Biases',
  //     'Model Registry', 'CI/CD Pipelines', 'Data Versioning', 'Model Monitoring'],
  // },
  {
    icon: '💻',
    title: 'Programming Languages',
    skills: ['Python', 'C++',  'Bash', 'JavaScript', 'PHP'],
  },
  {
    icon: '🔬',
    title: 'Frameworks & Libraries',
    skills: ['PyTorch', 'TensorFlow', 'React', 'Hugging Face',
      'Scikit-learn', 'FastAPI' ],
  },
  {
    icon: '☁️',
    title: 'Tools & Infrastructure',
    skills: ['Git', 'Docker', 'GitHub', 'FastAPI', 'Google Colab', 
    'Kaggle', ],
  },
]

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <p className="section-label">02 — Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A curated stack across the full ML lifecycle — from data pipelines to deployed models.
        </p>

        <div className="skills-categories" ref={ref}>
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`glass-card skill-category-card reveal reveal-delay-${(idx % 4) + 1} ${visible ? 'visible' : ''}`}
            >
              <span className="skill-category-icon">{cat.icon}</span>
              <p className="skill-category-title">{cat.title}</p>
              <p className="skill-category-count">{cat.skills.length} skills</p>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
