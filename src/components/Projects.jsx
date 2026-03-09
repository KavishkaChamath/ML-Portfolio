import React from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
  title: 'Image Denoising using Deep Learning',
  desc: 'Developed a deep learning model to remove noise from images while preserving important visual details. Implemented CNN-based architectures and trained models on noisy image datasets.',
  tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Google Colab', 'React','FastAPI'],
  github: 'https://github.com/KavishkaChamath/Image-Clean',
  demo: 'https://image-clean.vercel.app/',
  },
  {
  title: 'Face Recognition Attendance System',
  desc: 'AI-based attendance system that automatically identifies and records student attendance using real-time face recognition. Designed to reduce manual processes and improve accuracy.',
  tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
  github: 'https://github.com/KavishkaChamath/-Face-Recognition-System',
  },
  {
  title: 'Intelligent Bookstore Simulation (Ontology & Agents)',
  desc: 'Developed a bookstore simulation using a multi-agent system integrated with semantic ontology. Autonomous agents manage purchasing, inventory restocking, and income tracking.',
  tech: ['Python', 'Flask', 'Mesa', 'Ontology', 'Matplotlib'],
  github: 'https://github.com/KavishkaChamath/Bookstore-Management-System',
  },
  {
  title: 'ERP Web Application for Delta Apparel',
  desc: 'Contributed to the development of a web-based ERP system to support internal business operations. Focused on building responsive frontend components and improving user interaction.',
  tech: ['React', 'JavaScript', 'HTML', 'CSS'],
  github: 'https://github.com/KavishkaChamath/Integrated-Business-Software-for-Delta-Apparels',
  demo: 'https://kavishkachamath.github.io/Integrated-Business-Software-for-Delta-Apparels/',
  },
  {
  title: 'Gesture-Controlled Video Player',
  desc: 'Developed a desktop application that allows users to control video playback using hand gestures detected in real-time via a webcam. Implemented using MediaPipe for hand landmark detection, OpenCV for camera capture and VLC for video playback. The app features gesture-based play, pause, volume adjustment, and stop functionality.',
  tech: ['Python', 'MediaPipe', 'OpenCV', 'VLC', 'PyCaw', 'CustomTkinter'],
  github: '#',
  },

  {
  title: 'Laptop Price Predictor',
  desc: 'Developed a web-based machine learning application that predicts laptop prices based on user-provided specifications such as brand, RAM, processor, and storage. A regression model was trained on laptop specification data and deployed using a Flask server to provide real-time price predictions through an interactive interface.',
  tech: ['Python', 'Scikit-learn', 'Regression', 'Flask', 'Pandas'],
  github: 'https://github.com/KavishkaChamath/LaptopPricePredictor-website',
  },
]

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <p className="section-label">03 — Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
        
        </p>

        <div className="projects-grid" ref={ref}>
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`glass-card project-card reveal reveal-delay-${(idx % 3) + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="project-card-header" />
              <div className="project-card-body">
                <p className="project-number">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech-tags">
                  {project.tech.map(t => (
                    <span className="project-tech-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a className="btn btn-secondary btn-sm" href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer">
                    ⬡ GitHub
                  </a>
                  {project.demo && (
                    <a className="btn btn-secondary btn-sm" href={project.demo}
                    target="_blank" 
                    rel="noopener noreferrer">
                      ↗ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
