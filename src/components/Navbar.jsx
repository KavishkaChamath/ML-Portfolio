import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  // { label: 'Experience', href: '#experience' },
  // { label: 'Publications', href: '#publications' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a className="navbar-logo" href="#" onClick={e => handleNav(e, '#hero')}>
          {'Chamath Kumarathunge'}
        </a>

        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => handleNav(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="navbar-cta"
          href="#contact"
          onClick={e => handleNav(e, '#contact')}
        >
          Hire Me
        </a>

        <button
          className="navbar-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
        </button>
      </div>

      <div className={`navbar-mobile ${open ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={e => handleNav(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{ color: 'var(--cyan)', marginTop: '8px' }}
          onClick={e => handleNav(e, '#contact')}
        >
          Hire Me →
        </a>
      </div>
    </nav>
  )
}
