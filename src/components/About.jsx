import React from 'react'
import { useReveal } from '../hooks/useReveal'
import myPhoto from "../images/img.jpg"; //

const interests = [
  'Deep Learning', 'Computer Vision', 'Object Detection',
  'Generative AI', 'Model Optimization', 'Self-Supervised Learning',
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'General Sir John Kotelawala Defence University',
    year: '2023 – 2026',
  },
]

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section className="about-section" id="about">
      <div className="container">
        <p className="section-label">01 — Profile</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid" ref={ref}>
          {/* Left: Avatar */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <div className="about-avatar-wrap">
              <div className="about-glow-ring" />
              <div className="about-avatar-placeholder">
                <img 
                src={myPhoto} 
                alt="My Avatar" 
                className="about-avatar-image" 
                onError={(e) => e.target.style.display = 'none'} 
              />
                {/* <span className="about-avatar-icon">🧠</span>
                <span>[ your photo here ]</span> */}
              </div>
            </div>

            <div className="about-info-cards" style={{ marginTop: '20px' }}>
              {[
                { label: 'Location', value: 'Colombo, Sri Lanka' },
                { label: 'Status', value: '🟢 Open to Work' },
                { label: 'Focus', value: 'Computer Vision' },
                { label: 'Languages', value: 'English, Sinhala' },
              ].map(item => (
                <div className="about-info-card" key={item.label}>
                  <p className="about-info-label">{item.label}</p>
                  <p className="about-info-value">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio + Education */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
            <p className="about-bio">
              I am a Computer Science undergraduate with a strong foundation in machine learning, 
              software development, and problem solving. I enjoy building intelligent systems and 
              practical applications using technologies such as Python, TensorFlow, and React, 
              with a focus on developing efficient and scalable solutions.
            </p>
            <p className="about-bio">
              My interests include machine learning, deep learning, and computer vision, particularly 
              in developing and experimenting with models that solve real-world problems. I am a quick 
              learner who enjoys exploring new technologies and continuously improving through hands-on 
              projects and experimentation.
            </p>

            <p className="section-label" style={{ marginBottom: '14px', marginTop: '8px' }}>
              Research Interests
            </p>
            <div className="about-interests" style={{ marginBottom: '36px' }}>
              {interests.map(i => (
                <span className="tag-chip" key={i}>{i}</span>
              ))}
            </div>

            <p className="section-label" style={{ marginBottom: '14px' }}>
              Education
            </p>
            {education.map(edu => (
              <div className="edu-card" key={edu.degree}>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-year">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
