import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Brain, Layers, Rocket } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/anim/Reveal'
import CountUp from '../components/anim/CountUp'
import Tilt from '../components/anim/Tilt'
import ProjectDetail from '../components/ProjectDetail'
import { featuredProjects } from '../data/projects'

const expertise = [
  {
    icon: Layers,
    title: 'Full-Stack Platforms',
    detail: 'Client products taken from first call to production — React/Next.js frontends, FastAPI/NestJS/.NET backends, real payments, real users.',
    proof: 'Oyela · IHS Procure · TASCK OS',
  },
  {
    icon: Brain,
    title: 'AI & LLM Engineering',
    detail: 'RAG pipelines, AI report generation matched to clinical templates, agents, and assistants — grounded, production-hardened, and measured.',
    proof: 'Claude · OpenAI · LangChain',
  },
  {
    icon: Rocket,
    title: 'Enterprise Delivery',
    detail: 'Protected-branch git workflows, Docker CI, sprint user stories, and code review inside large-organization engineering processes.',
    proof: 'Azure DevOps · Docker · Vitest',
  },
]

const process = [
  { stage: 'Discover', description: 'Deep dive into the problem space — stakeholder calls, domain modeling, and technical scoping.', num: '01' },
  { stage: 'Architect', description: 'System design, stack selection, and data modeling with production constraints in mind from day one.', num: '02' },
  { stage: 'Build & Iterate', description: 'Weekly demo loops with clients, staged rollouts behind feature flags, tests where they pay off.', num: '03' },
  { stage: 'Ship & Operate', description: 'Deployment, monitoring, handover docs, and the follow-through that keeps platforms alive.', num: '04' },
]

export default function Home() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const spotlight = featuredProjects.slice(0, 4)

  return (
    <div>
      <Hero />

      {/* ── SELECTED WORK — editorial alternating rows ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <Reveal variant="clip-l" as="p" className="eyebrow mb-4">Selected Work</Reveal>
              <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
                Real platforms.<br />Real clients. <span className="text-ember-grad italic">In production.</span>
              </Reveal>
            </div>
            <Reveal variant="left" delay={0.2}>
              <Link to="/portfolio" className="btn-ghost px-7 py-3.5 text-sm group">
                Full archive
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <div className="space-y-24">
            {spotlight.map((p, i) => (
              <Reveal key={p.id} variant={i % 2 === 0 ? 'right' : 'left'} duration={1.1}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* image */}
                <div className="img-zoom rounded-[2rem] border border-line overflow-hidden cursor-pointer group relative"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  onClick={() => setSelected(p)}>
                  <img src={p.images[0]} alt={p.title} loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-sans font-medium">Open case study <ArrowUpRight className="inline w-4 h-4" /></span>
                  </div>
                </div>
                {/* copy */}
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ember mb-4 flex items-center gap-3">
                    <span className="font-display text-3xl text-line-strong font-bold">{String(i + 1).padStart(2, '0')}</span>
                    {p.subtitle}
                  </p>
                  <h3 className="font-display font-semibold text-ink text-2xl lg:text-[2rem] leading-tight mb-4 hover:text-ember transition-colors cursor-pointer"
                    onClick={() => setSelected(p)}>
                    {p.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tags.slice(0, 6).map(t => (
                      <span key={t} className="font-mono text-[0.62rem] px-3 py-1.5 rounded-full bg-surface border border-line text-muted">{t}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelected(p)}
                    className="font-sans font-semibold text-sm text-ember inline-flex items-center gap-2 group">
                    Read the case study
                    <span className="w-8 h-px bg-ember transition-all duration-300 group-hover:w-14" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE — tilt cards ── */}
      <section className="py-28 bg-surface border-y border-line relative grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal variant="zoom" as="p" className="eyebrow justify-center mb-4" style={{ display: 'inline-flex' }}>Expertise</Reveal>
            <Reveal variant="blur" as="h2" className="font-display font-semibold text-ink tracking-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              Three disciplines, one engineer.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((card, i) => (
              <Reveal key={card.title} variant={['up', 'zoom', 'up'][i]} delay={i * 0.12}>
                <Tilt className="h-full">
                  <div className="card-lux rounded-[1.8rem] p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                      style={{ background: 'var(--ember-soft)' }}>
                      <card.icon className="w-6 h-6 text-ember" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-ink mb-3">{card.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{card.detail}</p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold pt-4 border-t border-line">{card.proof}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — count-up band ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'var(--glow)', opacity: 0.35 }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: 5, suffix: '+', label: 'Client platforms', sub: 'Shipped to production' },
              { value: 14, suffix: '', label: 'Portfolio projects', sub: 'AI, web & backend' },
              { value: 20, suffix: '+', label: 'Technologies', sub: 'Across the stack' },
              { value: 100, suffix: '%', label: 'Delivery rate', sub: 'Every engagement shipped' },
            ].map((s, i) => (
              <Reveal key={s.label} variant="flip" delay={i * 0.1}>
                <div className="card-lux rounded-[1.6rem] p-7 text-center lg:text-left">
                  <p className="font-display font-semibold text-[2.6rem] leading-none text-ember-grad mb-3">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="font-sans font-semibold text-ink text-sm">{s.label}</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted mt-1.5">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — timeline ── */}
      <section className="py-28 bg-surface border-y border-line relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal variant="zoom" as="p" className="eyebrow justify-center mb-4" style={{ display: 'inline-flex' }}>Process</Reveal>
            <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              How engagements run.
            </Reveal>
          </div>

          <div className="relative">
            <Reveal variant="clip" className="absolute left-[27px] lg:left-1/2 top-0 bottom-0 w-px bg-line-strong" duration={1.8} />
            <div className="space-y-14">
              {process.map((step, i) => (
                <Reveal key={step.stage} variant={i % 2 === 0 ? 'left' : 'right'} delay={0.1}
                  className={`relative flex gap-8 items-start lg:w-1/2 ${i % 2 === 1 ? 'lg:ml-auto lg:pl-14' : 'lg:pr-14 lg:flex-row-reverse lg:text-right'}`}>
                  <div className="shrink-0 w-14 h-14 rounded-full border border-line bg-card flex items-center justify-center font-display font-bold text-ember relative z-10"
                    style={{ boxShadow: '0 0 0 6px var(--bg), 0 4px 16px var(--glow)' }}>
                    {step.num}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display font-semibold text-xl text-ink mb-2">{step.stage}</h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Reveal variant="zoom" as="p" className="eyebrow justify-center mb-6" style={{ display: 'inline-flex' }}>Available for full-time & contract</Reveal>
          <Reveal variant="blur" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05] mb-7"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>
            Your next engineer,<br />
            <span className="text-ember-grad italic">already shipping.</span>
          </Reveal>
          <Reveal variant="up" delay={0.2} as="p" className="text-lg text-muted max-w-xl mx-auto mb-11 font-light">
            Open to software engineering roles, AI consulting, and ambitious product builds.
            Based in Lagos — effective everywhere.
          </Reveal>
          <Reveal variant="up" delay={0.35} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-ember px-10 py-4.5 text-base py-4">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-ghost px-9 py-4 text-base">More About Me</Link>
          </Reveal>
        </div>
      </section>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
