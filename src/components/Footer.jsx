import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-20 pb-8 rounded-t-[40px] mt-[-20px] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand — matching Header style */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary shadow-glow flex items-center justify-center font-syne font-bold text-white text-sm">AK</div>
              <div>
                <span className="font-syne font-bold text-xl text-white block">Adeleke Kehinde</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-white/40">AI & Full-Stack Developer</span>
              </div>
            </div>
            <p className="font-sans text-muted text-base leading-relaxed mb-8 max-w-xs">
              AI Developer building intelligent solutions for real-world problems. Based in Lagos, working globally.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://github.com/hexkoda23" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kehindeadeleke92@gmail.com"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-primary uppercase text-sm font-semibold tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[['/', 'Home'], ['/about', 'About'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to} className="font-sans text-white/60 hover:text-primary transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Featured Work — Functional Links */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-primary uppercase text-sm font-semibold tracking-wider mb-6">Featured Work</h4>
            <ul className="space-y-4">
              {[
                ['NYSC AI Chatbot', 'https://nysc-ai-chatbot.vercel.app/'],
                ['23 Fashion Platform', 'https://23-web.vercel.app/'],
                ['Smart Shop Manager', 'https://ai-powered-smart-shop-manager-2l9n.vercel.app/'],
                ['Download CV', '/cv/Adeleke_Kehinde_CV.pdf'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer"
                    className="font-sans text-white/60 hover:text-primary transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
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
