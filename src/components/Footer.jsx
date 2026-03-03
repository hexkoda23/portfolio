import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-20 pb-8 rounded-t-[40px] mt-[-20px] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand — SabiLens col-span-4 brand column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary shadow-glow flex items-center justify-center font-syne font-bold text-white">AK</div>
              <span className="font-syne font-bold text-xl text-white">Adeleke Kehinde</span>
            </div>
            <p className="font-sans text-muted text-base leading-relaxed mb-6 max-w-xs">
              AI Developer building intelligent solutions for real-world problems. Based in Lagos, working globally.
            </p>
            <a href="mailto:kehindeadeleke92@gmail.com"
              className="font-sans text-primary text-sm font-medium hover:text-primary-dark transition-colors self-start">
              kehindeadeleke92@gmail.com
            </a>
            <p className="mt-4 text-sm text-white/30 font-mono">Made with ❤️ in Lagos</p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-primary uppercase text-sm font-semibold tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[['/', 'Home'], ['/about', 'About'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to} className="font-sans text-white/60 hover:text-primary transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-primary uppercase text-sm font-semibold tracking-wider mb-6">Work</h4>
            <ul className="space-y-4">
              {[
                ['AI Resume System', '#'],
                ['AI Study Planner', '#'],
                ['Download CV', '/cv/tife-cv.pdf'],
              ].map(([label, href]) => (
                <li key={label}><a href={href} className="font-sans text-white/60 hover:text-primary transition-colors text-sm">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar — exact SabiLens bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-white/40">
            © {new Date().getFullYear()} Adeleke Kehinde. All rights reserved.
          </p>
          <p className="font-sans text-sm text-white/40">Lagos, Nigeria — working globally</p>
        </div>
      </div>
    </footer>
  )
}
