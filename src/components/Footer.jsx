import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"

const socialLinks = [
  { label: 'GitHub', icon: <FaGithub />, href: 'https://github.com/KavishkaChamath' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/chamath-kumarathunge/' },
  { label: 'UpWork', icon: <SiUpwork />, href: 'https://www.upwork.com/freelancers/~0105ce7116614ee87a?mp_source=share' },
  // { label: 'Scholar', icon: '🎓', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">{'Chamath Kumarathunge'}</span>

        <p className="footer-copy">
          © {year} By Chamath Kumarathunge
        </p>

        <div className="footer-social">
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
