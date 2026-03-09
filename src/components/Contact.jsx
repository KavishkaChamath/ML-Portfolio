import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { FaGithub, FaLinkedin,FaEnvelope  } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"

const contactDetails = [
  { icon: <FaEnvelope />, label: 'Email', value: 'chamathkumarathunge@gmail.com', href: 'mailto:chamathkumarathunge@gmail.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Chamath Kumarathunge', href: 'https://www.linkedin.com/in/chamath-kumarathunge/' },
  { icon: <FaGithub />, label: 'GitHub', value: 'Kavishka Chamath', href: 'https://github.com/KavishkaChamath' },
  { icon: <SiUpwork />, label: 'Upwork', value:'Profile', href: 'https://www.upwork.com/freelancers/~0105ce7116614ee87a?mp_source=share' }
//   { icon: '🎓', label: 'Google Scholar', value: 'scholar.google.com/...', href: '#' },
]

export default function Contact() {
  const { ref, visible } = useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

   const handleSubmit = async e =>  {
    e.preventDefault()
    const formData = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    }

    try {
      const response = await fetch('https://formspree.io/f/xdawazdg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Failed to send message. Try again later.')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    }
    
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="section-label">06 — Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Open to research collaborations, full-time roles.
        </p>

        <div className="contact-grid" ref={ref}>
          {/* Left: Info */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '8px', fontSize: '1rem' }}>
              Whether you're building an AI product, conducting research, or looking for an ML
              engineer to join your team — I'd love to hear from you.
            </p>

            <div className="contact-detail-list">
              {contactDetails.map(d => (
                <a className="contact-detail-item" href={d.href} key={d.label}>
                  <span className="contact-detail-icon">{d.icon}</span>
                  <div>
                    <p className="contact-detail-label">{d.label}</p>
                    <p className="contact-detail-value">{d.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
            {sent ? (
              <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
                <p style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✓</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--cyan)', marginBottom: '12px' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me about your project, role, or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
