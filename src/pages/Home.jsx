import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Research from '../components/Research.jsx'
import Experience from '../components/Experience.jsx'
import Publications from '../components/Publications.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Certifications from '../components/Certifications.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        {/* <Experience /> */}
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
