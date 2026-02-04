import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
]

const NavLink = ({ to, children, onClick }) => {
  const loc = useLocation()
  const active = loc.pathname === to
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
        active
          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Header ({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className='bg-white/90 backdrop-blur border-b border-slate-100 sticky top-0 z-50 dark:bg-slate-900/90 dark:border-slate-800 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-semibold dark:bg-white dark:text-slate-900'>
            AK
          </div>
          <div>
            <p className='text-lg font-semibold text-slate-900 leading-none dark:text-white'>
              Adeleke Kehinde
            </p>
            <p className='text-xs text-slate-500 leading-none mt-1 dark:text-slate-400'>
              AI & Full-Stack Developer
            </p>
          </div>
        </Link>

        <nav className='hidden lg:flex items-center gap-2'>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <Link
            to='/contact'
            className='hidden sm:inline-flex px-4 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
          >
            Let’s talk
          </Link>
          <button
            type='button'
            className='lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-900 dark:border-slate-700 dark:text-white'
            aria-label='Toggle navigation menu'
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='sr-only'>Menu</span>
            <div className='space-y-1.5'>
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                  isOpen ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                  isOpen ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-all duration-300 origin-top ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='px-4 sm:px-6 py-4 flex flex-col gap-2 bg-white dark:bg-slate-900'>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to='/contact'
            className='mt-2 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900'
          >
            Book a project
          </Link>
          <Link
            to='/contact'
            className='mt-2 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900'
          >
            Book a project
          </Link>
        </nav>
      </div>
    </header>
  )
}
