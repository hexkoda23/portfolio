import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const loc = useLocation()

  // SabiLens LandingHeader scroll logic — exact copy
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // SabiLens theme toggle logic
  const toggleTheme = () => {
    const root = document.documentElement
    const dark = root.getAttribute('data-theme') === 'dark'
    root.setAttribute('data-theme', dark ? 'light' : 'dark')
    root.classList.toggle('dark', !dark)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
  }

  // SabiLens headerBg pattern — transparent over hero, solid on scroll
  const headerBg = isScrolled
    ? 'bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border-b border-border shadow-soft'
    : 'bg-transparent'

  // SabiLens nav link color logic
  const linkColor = isScrolled
    ? 'text-muted hover:text-accent dark:text-slate-400 dark:hover:text-white'
    : 'text-white/80 hover:text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — SabiLens brand square + name pattern */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-syne font-bold text-white text-sm shadow-glow group-hover:scale-105 transition-transform">
              AK
            </div>
            <div>
              <p className={`font-syne font-bold text-base leading-none transition-colors ${isScrolled ? 'text-accent dark:text-white' : 'text-white'}`}>
                Adeleke Kehinde
              </p>
              <p className={`font-mono text-[0.58rem] leading-none mt-0.5 uppercase tracking-widest transition-colors ${isScrolled ? 'text-muted' : 'text-white/50'}`}>
                AI & Full-Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop nav — SabiLens after:w-0 hover:after:w-full underline animation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const active = loc.pathname === item.to
              return (
                <Link key={item.to} to={item.to}
                  className={`relative px-4 py-2 font-syne font-semibold text-sm transition-all rounded-lg
                    after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-primary
                    after:rounded-full after:transition-all after:duration-300
                    ${active ? 'text-primary after:w-auto' : `${linkColor} after:w-0 hover:after:w-auto`}
                    ${isScrolled && active ? 'bg-primary/8' : ''}
                  `}>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Toggle theme"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all hover:scale-105
                ${isScrolled
                  ? 'border-border bg-white dark:bg-accent-2 dark:border-white/10 text-muted dark:text-slate-400'
                  : 'border-white/20 bg-white/10 text-white'
                }`}>
              <span className="block dark:hidden text-sm">☀️</span>
              <span className="hidden dark:block text-sm">🌙</span>
            </button>

            {/* CTA — SabiLens primary button with glow */}
            <Link to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2 font-syne font-semibold text-sm rounded-xl bg-primary text-white shadow-glow hover:bg-primary-dark hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Let's Talk
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-9 h-9 rounded-xl border flex items-center justify-center transition-colors
                ${isScrolled ? 'border-border text-accent dark:border-white/10 dark:text-white' : 'border-white/20 text-white'}`}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — SabiLens slide-from-right pattern */}
      <div
        className={`fixed inset-0 z-40 bg-accent/40 backdrop-blur-sm transition-opacity lg:hidden ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`fixed top-0 right-0 z-50 w-full max-w-xs h-screen bg-white dark:bg-[#0f172a] shadow-dark transition-transform duration-300 lg:hidden flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-border dark:border-white/8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center font-syne font-bold text-white text-xs">AK</div>
            <span className="font-syne font-bold text-accent dark:text-white">Adeleke Kehinde</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-muted hover:text-accent dark:text-slate-400 dark:hover:text-white p-1 rounded-lg hover:bg-surface transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-6 flex flex-col gap-1">
          {navItems.map(item => (
            <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 font-syne font-semibold text-base rounded-xl transition-colors
                ${loc.pathname === item.to
                  ? 'bg-primary/10 text-primary'
                  : 'text-accent dark:text-white/80 hover:bg-surface dark:hover:bg-white/5'
                }`}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}
            className="mt-4 w-full py-3 text-center font-syne font-semibold text-sm rounded-xl bg-primary text-white shadow-glow">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  )
}
