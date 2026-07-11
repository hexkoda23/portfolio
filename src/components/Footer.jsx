import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Reveal from './anim/Reveal'

const work = [
  ['Oyela Platform', '/portfolio'],
  ['IHS Vendor Portal', '/portfolio'],
  ['TASCK OS', '/portfolio'],
  ['Talent Nation', '/portfolio'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none anim-orb"
        style={{ background: 'var(--ember-soft)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-8 relative z-10">
        {/* Big CTA line */}
        <Reveal variant="blur" className="mb-16">
          <a href="mailto:kehindeadeleke92@gmail.com" className="group block">
            <p className="eyebrow mb-4">Have a project in mind?</p>
            <p className="font-display font-semibold text-ink leading-[1.05] tracking-tight group-hover:text-ember transition-colors duration-500"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
              Let's build something
              <span className="text-ember-grad"> extraordinary</span>
              <ArrowUpRight className="inline-block ml-2 w-[0.8em] h-[0.8em] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </p>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">
          <Reveal variant="up" className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, var(--ember), var(--ember-2))' }}>AK</div>
              <div>
                <span className="font-display font-semibold text-lg text-ink block leading-none">Adeleke Kehinde</span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-muted">Software Engineer</span>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-7 max-w-xs">
              Full-stack &amp; AI engineer shipping real client platforms — from assessment engines to enterprise procurement. Lagos based, working globally.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/hexkoda23', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kehinde-adeleke-668889331', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kehindeadeleke92@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full border border-line bg-card flex items-center justify-center text-muted hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                  style={{ '--hov': 'linear-gradient(135deg, var(--ember), var(--ember-2))' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, var(--ember), var(--ember-2))' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="lg:col-span-3">
            <h4 className="font-mono text-ember uppercase text-xs tracking-[0.2em] mb-6">Navigate</h4>
            <ul className="space-y-3.5">
              {[['/', 'Home'], ['/about', 'About'], ['/portfolio', 'Work'], ['/contact', 'Contact'], ['/cv', 'CV']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-muted hover:text-ember transition-all text-sm inline-block hover:translate-x-1 duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" delay={0.2} className="lg:col-span-4">
            <h4 className="font-mono text-ember uppercase text-xs tracking-[0.2em] mb-6">Selected Work</h4>
            <ul className="space-y-3.5">
              {work.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-muted hover:text-ember transition-all text-sm inline-block hover:translate-x-1 duration-300">{label}</Link>
                </li>
              ))}
              <li>
                <a href="/cv/Adeleke_Kehinde_CV.pdf" download className="text-muted hover:text-ember transition-all text-sm inline-block hover:translate-x-1 duration-300">Download CV ↓</a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="pt-7 border-t border-line flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted font-mono">© {new Date().getFullYear()} Adeleke Kehinde — All rights reserved.</p>
          <p className="text-xs text-muted font-mono">Lagos, Nigeria · Working globally</p>
        </div>
      </div>
    </footer>
  )
}
