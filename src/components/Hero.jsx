import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import Tilt from './anim/Tilt'
import Reveal from './anim/Reveal'

const marqueeItems = [
  'React', 'TypeScript', 'Next.js', 'FastAPI', 'NestJS', '.NET', 'PostgreSQL', 'MongoDB',
  'Claude AI', 'RAG Systems', 'Tailwind', 'Docker', 'Azure DevOps', 'Prisma', 'Redis', 'Python',
]

/** Headline words rise one-by-one through overflow masks. */
function Cascade({ text, startDelay = 0, className = '' }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="word-mask mr-[0.28em]">
          <span style={{ '--wd': `${startDelay + i * 0.08}s` }}>{w}</span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden grain" style={{ background: 'var(--bg)' }}>
      {/* ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[140px] anim-orb pointer-events-none" style={{ background: 'var(--glow)', opacity: 0.5 }} />
      <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full blur-[130px] anim-orb pointer-events-none" style={{ background: 'var(--pine-soft)', animationDelay: '-7s' }} />
      {/* rotating deco ring */}
      <div className="absolute top-24 right-[12%] w-64 h-64 rounded-full border border-dashed pointer-events-none anim-spin-slow hidden lg:block" style={{ borderColor: 'var(--line-strong)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-32 pb-10 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-8 items-center w-full">

          {/* Copy */}
          <div className="text-center lg:text-left">
            <Reveal variant="down" duration={0.7}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-line bg-card/70 backdrop-blur font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-soft mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 dot-live" />
                Software Engineer · Available for hire
              </span>
            </Reveal>

            <h1 className="font-display font-semibold text-ink leading-[1.02] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)' }}>
              <Cascade text="I design and ship" startDelay={0.1} />
              <br />
              <Cascade text="production software —" startDelay={0.4} />
              <br />
              <span className="word-mask">
                <span style={{ '--wd': '0.75s' }} className="text-ember-grad italic">from AI to enterprise.</span>
              </span>
            </h1>

            <Reveal variant="blur" delay={0.5}>
              <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-light">
                Full-stack &amp; AI engineer with shipped client platforms across assessment tech,
                enterprise procurement, creative-economy CRM, and edtech — React, Python, .NET, and
                LLM systems, taken all the way to production.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.65} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Link to="/portfolio" className="btn-ember w-full sm:w-auto px-9 py-4 text-base group">
                Explore the Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <a href="/cv/Adeleke_Kehinde_CV.pdf" download className="btn-ghost w-full sm:w-auto px-8 py-4 text-base">
                Download CV
              </a>
            </Reveal>

            <Reveal variant="up" delay={0.8} className="flex flex-wrap items-center gap-x-10 gap-y-4 justify-center lg:justify-start">
              {[
                ['5+', 'Client platforms shipped'],
                ['14', 'Projects in portfolio'],
                ['3+', 'Years building'],
              ].map(([v, l]) => (
                <div key={l} className="text-center lg:text-left">
                  <p className="font-display font-semibold text-2xl text-ink">{v}</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted mt-1">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal variant="zoom" delay={0.35} className="hidden lg:block">
            <Tilt className="relative mx-auto w-[340px]">
              <div className="portrait-halo" />
              <div className="absolute -inset-6 rounded-[3rem] rotate-3 border border-line-strong" />
              <div className="absolute -inset-6 rounded-[3rem] -rotate-2 border border-line" />
              <div className="portrait-lit relative rounded-[2.6rem] overflow-hidden border border-line" style={{ boxShadow: 'var(--shadow-lift), 0 0 60px var(--glow)' }}>
                <img src="/Image/Tife%20(1).jpeg" alt="Adeleke Kehinde — Software Engineer"
                  className="w-full h-[440px] object-cover object-[50%_30%]"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                <div className="hidden w-full h-[440px] bg-surface items-center justify-center flex-col gap-4">
                  <span className="text-6xl">👨🏾‍💻</span>
                  <p className="font-display font-semibold text-ink text-xl">Software Engineer</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-display font-semibold">Adeleke Kehinde</p>
                  <p className="text-white/60 font-mono text-[0.6rem] uppercase tracking-[0.2em] mt-0.5">Lagos → Worldwide</p>
                </div>
              </div>

              {/* floating chips */}
              <div className="absolute -right-16 top-14 anim-float card-lux rounded-2xl px-4 py-3 w-44" style={{ '--fl-rot': '2deg' }}>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ember mb-1">Currently</p>
                <p className="font-sans font-medium text-ink text-sm leading-tight">Shipping client platforms end-to-end</p>
              </div>
              <div className="absolute -left-20 bottom-20 anim-float card-lux rounded-2xl px-4 py-3 w-48" style={{ animationDelay: '1.6s', '--fl-rot': '-2deg' }}>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ember mb-1">Stack of choice</p>
                <p className="font-sans font-medium text-ink text-sm leading-tight">React · Python · .NET · LLMs</p>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>

      {/* marquee */}
      <div className="relative z-10 border-t border-line py-5 overflow-hidden" style={{ background: 'color-mix(in srgb, var(--surface) 70%, transparent)' }}>
        <div className="flex whitespace-nowrap anim-marquee w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {item} <span className="text-ember text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-muted">
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
