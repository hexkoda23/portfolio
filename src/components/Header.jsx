import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
  )
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    root.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
    setDark(next === 'dark')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-bar py-0' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm transition-transform duration-500 group-hover:rotate-[360deg]"
              style={{ background: 'linear-gradient(135deg, var(--ember), var(--ember-2))', boxShadow: '0 4px 16px var(--glow)' }}>
              AK
            </div>
            <div>
              <p className="font-display font-semibold text-[1.05rem] leading-none text-ink">Adeleke Kehinde</p>
              <p className="font-mono text-[0.56rem] leading-none mt-1 uppercase tracking-[0.24em] text-muted">Software Engineer</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-line bg-card/60 backdrop-blur px-2 py-1.5">
            {navItems.map(item => {
              const active = loc.pathname === item.to
              return (
                <Link key={item.to} to={item.to}
                  className={`relative px-5 py-2 font-sans font-medium text-sm rounded-full transition-all duration-300
                    ${active ? 'text-white' : 'text-muted hover:text-ink'}`}
                  style={active ? { background: 'linear-gradient(120deg, var(--ember), var(--ember-2))', boxShadow: '0 4px 14px var(--glow)' } : undefined}>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme"
              className="w-10 h-10 rounded-full border border-line bg-card flex items-center justify-center text-muted hover:text-ember hover:border-ember transition-all duration-300 hover:rotate-[24deg]">
              {dark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>

            <Link to="/contact"
              className="hidden sm:inline-flex btn-ember px-6 py-2.5 text-sm">
              Let's Talk
            </Link>

            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu"
              className="lg:hidden w-10 h-10 rounded-full border border-line bg-card flex items-center justify-center text-ink">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`fixed top-0 right-0 z-50 w-full max-w-xs h-screen bg-surface border-l border-line transition-transform duration-500 lg:hidden flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <span className="font-display font-semibold text-ink">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="text-muted hover:text-ink p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-6 flex flex-col gap-2">
          {navItems.map((item, i) => (
            <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 font-display text-2xl rounded-2xl transition-all duration-300 ${loc.pathname === item.to ? 'text-ember' : 'text-ink hover:text-ember hover:translate-x-2'}`}
              style={{ transitionDelay: `${i * 40}ms` }}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-ember mt-6 py-3.5 text-sm">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  )
}
