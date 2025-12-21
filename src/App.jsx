import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Lenis from 'lenis'
import Hero from './component/Hero'
import About from "./pages/About"
import Service from './pages/Service'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div className='overflow-x-hidden' >
      <Hero id="home" />
      <About id="about" />
      <Service id="services" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  )
}

export default App