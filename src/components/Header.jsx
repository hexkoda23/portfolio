import React, { useState } from 'react'
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

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='app-navbar'>
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
          <button
            type='button'
            aria-label='Toggle theme'
            title='Toggle theme'
            className='inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-900 bg-white hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:bg-slate-900/60'
            onClick={() => {
              const root = document.documentElement
              const willBeDark = root.getAttribute('data-theme') !== 'dark'
              root.setAttribute('data-theme', willBeDark ? 'dark' : 'light')
              root.classList.toggle('dark', willBeDark) // keep Tailwind dark: variants working
              localStorage.setItem('theme', willBeDark ? 'dark' : 'light')
            }}
          >
            <span className='block dark:hidden' aria-hidden='true'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                <path d='M12 3.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5A.75.75 0 0 1 12 3.75ZM6.72 5.28a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L6.72 6.34a.75.75 0 0 1 0-1.06ZM3.75 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H4.5A.75.75 0 0 1 3.75 12Zm3.97 6.72a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0ZM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18Zm6.28-1.28a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM18 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 18 12ZM8.47 12a3.53 3.53 0 1 1 7.06 0 3.53 3.53 0 0 1-7.06 0Z' />
              </svg>
            </span>
            <span className='hidden dark:block' aria-hidden='true'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                <path d='M21.752 15.002A9 9 0 0 1 9 2.248a.75.75 0 0 0-1.212-.59 10.5 10.5 0 1 0 15.05 15.05.75.75 0 0 0-.586-1.206h0Z' />
              </svg>
            </span>
          </button>
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
        <nav className='px-4 sm:px-6 py-4 flex flex-col gap-2 bg-white dark:bg-[#1e2435]'>
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
        </nav>
      </div>
    </header>
  )
}
