import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollProgress from './components/anim/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Chatbot from './components/Chatbot'
import CV from './pages/CV'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  // Theme follows the visitor's system preference (live). A manual toggle
  // stores a session-only override that wins until the tab is closed.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const apply = () => {
      const override = sessionStorage.getItem('theme-override')
      const dark = override ? override === 'dark' : mq.matches
      const root = document.documentElement
      root.setAttribute('data-theme', dark ? 'dark' : 'light')
      root.classList.toggle('dark', dark)
    }

    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <div>
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
