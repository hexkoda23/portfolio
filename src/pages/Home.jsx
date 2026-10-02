import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Brain, Layers, Rocket, Building2, Check } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/anim/Reveal'
import CountUp from '../components/anim/CountUp'
import Tilt from '../components/anim/Tilt'
import ProjectDetail from '../components/ProjectDetail'
import ProjectCard from '../components/ProjectCard'
import BrowserFrame from '../components/BrowserFrame'
import projects, { hitechProjects, clientProjects, getProject, frameLabel, thumb } from '../data/projects'
import experience from '../data/experience'

const expertise = [
  {
    icon: Layers,
    title: 'Full-Stack Platforms',
    detail: 'Client products taken from first call to production. React/Next.js frontends, FastAPI, NestJS, Django and .NET backends, real payments, real users.',
    proof: 'Oyela · IHS Procure · TASCK OS',
  },
  {
    icon: Building2,
    title: 'Enterprise Systems',
    detail: 'Role-scoped ERPs, payroll and HRIS, audit trails, scheduled integrations with biometric devices and telematics, on-prem deployment.',
    proof: 'Hitech ERP · PayTrack · Doc Hub',
  },
  {
    icon: Brain,
    title: 'AI & LLM Engineering',
    detail: 'RAG, department agents, report generation matched to clinical templates, extractive fallbacks. AI that is grounded, scoped by role and honest about what it knows.',
    proof: 'Claude · RAG · Agents',
  },
  {
    icon: Rocket,
    title: 'Delivery & Craft',
    detail: 'Reviewed PRs, protected branches, Docker, feature flags and runbooks, plus design systems and motion that make products feel premium.',
    proof: 'Azure DevOps · Docker · Design systems',
  },
]

const toolbox = [
  ['Frontend', ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind', 'Vite', 'Framer Motion']],
  ['Backend', ['Django', 'FastAPI', 'NestJS', 'ASP.NET Core', 'DRF', 'REST design']],
  ['AI / ML', ['Claude API', 'RAG', 'Agents', 'Embeddings', 'LangChain', 'scikit-learn']],
  ['Data', ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Vector stores', 'openpyxl']],
  ['Infra', ['Docker', 'Celery', 'Azure', 'Vercel', 'Nginx', 'On-prem Linux']],
  ['Product', ['Stripe', 'WeasyPrint PDFs', 'OAuth', 'Resend email', 'Power BI', 'Design systems']],
]

const process = [
  { stage: 'Discover', description: 'Deep dive into the problem: stakeholder calls, the real spreadsheets and paper forms, domain modelling and technical scoping.', num: '01' },
  { stage: 'Architect', description: 'System design, stack selection and data modelling, with production constraints considered from day one.', num: '02' },
  { stage: 'Build & Iterate', description: 'Weekly demo loops, reviewed PRs, staged rollouts behind feature flags, and tests where they pay off.', num: '03' },
  { stage: 'Ship & Operate', description: 'Deployment, verification, runbooks and handover docs, plus the follow-through that keeps platforms alive.', num: '04' },
]

const SPOTLIGHT_IDS = ['ihs-vendor-portal', 'tasck', 'talent-nation', 'atom']

export default function Home() {
  const [selected, setSelected] = useState(null)
  const oyela = getProject('oyela')
  const t23 = getProject('23-fashion')
  const spotlight = SPOTLIGHT_IDS.map(getProject)
  const lab = projects.filter(p => p.kind === 'ai' || p.kind === 'engineering').slice(0, 6)
  const [hitechLead, ...hitechRest] = hitechProjects
  const film = t23.images

  return (
    <div>
      <Hero />

      {/* ── NOW: HITECH ───────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-[640px] h-[640px] rounded-full blur-[170px] pointer-events-none" style={{ background: 'var(--glow)', opacity: 0.25 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <Reveal variant="clip-l" as="p" className="eyebrow mb-4">Now · Since June 2026</Reveal>
              <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
                Software Engineer at<br />
                <span className="text-ember-grad italic">Hitech Construction.</span>
              </Reveal>
            </div>
            <Reveal variant="left" delay={0.2} as="p" className="text-muted max-w-md leading-relaxed">
              Building the internal systems that run a road and civil-infrastructure contractor:
              workforce, safety, payroll, survey and the AI that ties them together.
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            {/* lead system */}
            <Reveal variant="zoom" duration={1.1}>
              <div className="card-lux rounded-[2rem] p-3 cursor-pointer group h-full flex flex-col" onClick={() => setSelected(hitechLead)}>
                <BrowserFrame src={hitechLead.images[0]} alt={hitechLead.title} art className="img-zoom rounded-[1.6rem]" />
                <div className="p-5 pt-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {hitechLead.tags.map(t => (
                      <span key={t} className="font-mono text-[0.6rem] px-2.5 py-1 rounded-full bg-surface border border-line text-muted">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-ink mb-2 group-hover:text-ember transition-colors">{hitechLead.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{hitechLead.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto">
                    {hitechLead.metrics.map(([v, l]) => (
                      <div key={l} className="rounded-2xl bg-surface border border-line px-4 py-3">
                        <p className="font-display font-semibold text-xl text-ember leading-none">{v}</p>
                        <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted mt-1.5">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* the other systems */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {hitechRest.map((p, i) => (
                <Reveal key={p.id} variant="left" delay={0.1 + i * 0.1}>
                  <button onClick={() => setSelected(p)}
                    className="card-lux w-full text-left rounded-[1.4rem] p-2.5 flex gap-4 items-center group">
                    <BrowserFrame src={p.images[0]} alt={p.title} art aspect="16/10"
                      className="img-zoom w-[42%] shrink-0 rounded-xl" />
                    <div className="min-w-0 pr-2">
                      <p className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ember mb-1 truncate">{p.subtitle}</p>
                      <h4 className="font-display font-semibold text-ink leading-snug group-hover:text-ember transition-colors">{p.title}</h4>
                      <p className="text-muted text-xs mt-1">{p.year}</p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="up" delay={0.15} className="mt-6">
            <div className="rounded-[1.6rem] border border-line p-6 sm:p-7 flex flex-col md:flex-row md:items-center gap-5 justify-between"
              style={{ background: 'linear-gradient(120deg, var(--ember-soft), var(--pine-soft))' }}>
              <p className="text-ink-soft text-sm leading-relaxed max-w-3xl">
                <span className="font-semibold text-ink">A note on visuals:</span> these are internal company systems, so they are shown with
                designed cover art rather than screenshots. No employee, payroll or site data appears anywhere in this portfolio.
              </p>
              <Link to="/portfolio" className="btn-ghost px-6 py-3 text-sm shrink-0">All Hitech systems <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OYELA SPOTLIGHT ───────────────────────────────── */}
      <section className="py-28 bg-surface border-y border-line relative overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <Reveal variant="clip-l" as="p" className="eyebrow mb-4">Flagship · Live at oyela.ai</Reveal>
            <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)' }}>
              Oyela: illumination<br /><span className="text-ember-grad italic">for every family system.</span>
            </Reveal>
            <Reveal variant="up" delay={0.1} as="p" className="text-muted leading-relaxed mb-8">
              {oyela.description}
            </Reveal>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {oyela.metrics.map(([v, l], i) => (
                <Reveal key={l} variant="flip" delay={0.1 + i * 0.08}>
                  <div className="rounded-2xl bg-card border border-line px-5 py-4" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <p className="font-display font-semibold text-3xl text-ember-grad leading-none">{v}</p>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-muted mt-2">{l}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={0.2}>
              <ul className="space-y-2.5 mb-9">
                {oyela.features.slice(1, 6).map(f => (
                  <li key={f} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--ember-soft)' }}>
                      <Check className="w-3 h-3 text-ember" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={0.3} className="flex flex-wrap gap-4">
              <a href={oyela.demo} target="_blank" rel="noreferrer" className="btn-ember px-8 py-3.5 text-sm">
                Visit oyela.ai <ArrowUpRight className="w-4 h-4" />
              </a>
              <button onClick={() => setSelected(oyela)} className="btn-ghost px-8 py-3.5 text-sm">Read the case study</button>
            </Reveal>
          </div>

          {/* stacked collage */}
          <Reveal variant="zoom" delay={0.15} duration={1.2}>
            <div className="stack-wrap relative cursor-pointer py-10 sm:px-6" onClick={() => setSelected(oyela)}>
              <div className="absolute inset-0 rounded-full blur-[110px]" style={{ background: 'var(--glow)', opacity: 0.4 }} />
              <div className="stack-card absolute w-[62%] left-0 top-0 z-0"
                style={{ '--sx': '0%', '--sy': '0%', '--sr': '-5deg', '--hx': '-6%', '--hy': '-4%', '--hr': '-8deg' }}>
                <BrowserFrame src={oyela.images[3]} alt="Oyela assessment pathways" label="oyela.ai/assessments" />
              </div>
              <div className="stack-card absolute w-[58%] right-0 bottom-0 z-0"
                style={{ '--sx': '0%', '--sy': '0%', '--sr': '5deg', '--hx': '6%', '--hy': '5%', '--hr': '8deg' }}>
                <BrowserFrame src={oyela.images[8]} alt="Oyela for organisations" label="oyela.ai/for-organizations" />
              </div>
              <div className="stack-card relative z-10 w-[84%] mx-auto my-12" style={{ boxShadow: 'var(--shadow-lift)' }}>
                <BrowserFrame src={oyela.images[0]} alt="Oyela home" label="oyela.ai" loading="eager" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* oyela screen strip */}
        <div className="relative z-10 mt-20 edge-fade overflow-hidden">
          <div className="flex gap-5 w-max anim-film-rev">
            {[...oyela.images, ...oyela.images].map((img, i) => (
              <button key={i} onClick={() => setSelected(oyela)} className="w-[340px] shrink-0 transition-transform duration-500 hover:-translate-y-2">
                <BrowserFrame src={thumb(img)} alt={`Oyela screen ${(i % oyela.images.length) + 1}`} label="oyela.ai" loading="eager" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED CLIENT WORK ──────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <Reveal variant="clip-l" as="p" className="eyebrow mb-4">Selected Client Work</Reveal>
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

          <div className="space-y-28">
            {spotlight.map((p, i) => (
              <Reveal key={p.id} variant={i % 2 === 0 ? 'right' : 'left'} duration={1.1}
                className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* framed image on a tinted stage */}
                <div className="relative rounded-[2.2rem] p-5 sm:p-8 cursor-pointer group border border-line overflow-hidden"
                  style={{ background: i % 2 === 0 ? 'linear-gradient(150deg, var(--ember-soft), transparent 70%)' : 'linear-gradient(150deg, var(--pine-soft), transparent 70%)' }}
                  onClick={() => setSelected(p)}>
                  <span className="absolute -right-4 -bottom-10 font-display font-bold text-[9rem] leading-none text-line pointer-events-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Tilt>
                    <BrowserFrame src={p.images[0]} alt={p.title} label={frameLabel(p)} className="img-zoom relative"
                      imgClassName="transition-transform duration-[1.1s]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                        <span className="text-white font-sans font-medium text-sm">Open case study <ArrowUpRight className="inline w-4 h-4" /></span>
                      </div>
                    </BrowserFrame>
                  </Tilt>
                </div>
                {/* copy */}
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ember mb-4">{p.subtitle}</p>
                  <h3 className="font-display font-semibold text-ink text-2xl lg:text-[2.1rem] leading-tight mb-4 hover:text-ember transition-colors cursor-pointer"
                    onClick={() => setSelected(p)}>
                    {p.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">{p.description}</p>
                  <ul className="space-y-2 mb-7">
                    {p.features.slice(0, 3).map(f => (
                      <li key={f} className="flex gap-3 text-sm text-ink-soft">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ember shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
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

      {/* ── TWENTY3 FILMSTRIP ─────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#0E0C0A' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,164,107,0.18), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <Reveal variant="clip-l" as="p" className="eyebrow mb-4" style={{ color: '#C8A46B' }}>Brand & Commerce · Live</Reveal>
            <Reveal variant="up" as="h2" className="font-display font-semibold tracking-tight leading-[1.02] text-white"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              TWENTY3™. <span className="italic" style={{ color: '#C8A46B' }}>Wear your world.</span>
            </Reveal>
            <Reveal variant="up" delay={0.1} as="p" className="text-white/60 max-w-xl leading-relaxed mt-5">
              {t23.description}
            </Reveal>
          </div>
          <Reveal variant="left" delay={0.2} className="flex flex-wrap gap-3">
            <a href={t23.demo} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(120deg, #E8D2A6, #C8A46B)' }}>
              Visit the store <ArrowUpRight className="w-4 h-4" />
            </a>
            <button onClick={() => setSelected(t23)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/25 hover:border-white/60 transition-colors">
              Case study
            </button>
          </Reveal>
        </div>

        <div className="relative z-10 space-y-6 edge-fade overflow-hidden">
          {[film.slice(0, 6), film.slice(6)].map((row, r) => (
            <div key={r} className={`flex gap-6 w-max ${r === 0 ? 'anim-film' : 'anim-film-rev'}`}>
              {[...row, ...row, ...row].map((img, i) => (
                <button key={i} onClick={() => setSelected(t23)}
                  className="w-[380px] shrink-0 rounded-[1.1rem] overflow-hidden border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-0.6deg]">
                  <img src={thumb(img)} alt={`TWENTY3 screen ${i + 1}`} className="w-full aspect-[16/10] object-cover object-top" />
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {t23.metrics.map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 px-5 py-4 bg-white/[0.03]">
              <p className="font-display font-semibold text-3xl leading-none" style={{ color: '#E8D2A6' }}>{v}</p>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-white/50 mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────── */}
      <section className="py-28 bg-surface border-b border-line relative grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal variant="zoom" as="p" className="eyebrow justify-center mb-4" style={{ display: 'inline-flex' }}>Expertise</Reveal>
            <Reveal variant="blur" as="h2" className="font-display font-semibold text-ink tracking-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              Four disciplines, one engineer.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {expertise.map((card, i) => (
              <Reveal key={card.title} variant={['up', 'zoom', 'up', 'zoom'][i]} delay={i * 0.1}>
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

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'var(--glow)', opacity: 0.35 }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: clientProjects.length, suffix: '+', label: 'Client platforms', sub: 'Shipped to production' },
              { value: hitechProjects.length, suffix: '', label: 'Hitech systems', sub: 'In-house, enterprise' },
              { value: projects.length, suffix: '', label: 'Portfolio projects', sub: 'AI, web & backend' },
              { value: 30, suffix: '+', label: 'Technologies', sub: 'Across the stack' },
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

      {/* ── TOOLBOX ───────────────────────────────────────── */}
      <section className="py-28 bg-surface border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="clip-l" as="p" className="eyebrow mb-4">Toolbox</Reveal>
              <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
                The stack I ship with, <span className="text-ember-grad italic">every day.</span>
              </Reveal>
              <Reveal variant="up" delay={0.1} as="p" className="text-muted leading-relaxed">
                Chosen per problem, not per habit. Django and Celery for enterprise back-offices, FastAPI and
                MongoDB for fast-moving products, Next.js for portals, and Claude where language actually helps.
              </Reveal>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {toolbox.map(([area, items], i) => (
                <Reveal key={area} variant={i % 2 ? 'left' : 'up'} delay={i * 0.06}>
                  <div className="card-lux rounded-[1.5rem] p-6 h-full">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember mb-4">{area}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map(t => (
                        <span key={t} className="text-sm px-3 py-1.5 rounded-xl bg-surface border border-line text-ink-soft">{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY ───────────────────────────────────────── */}
      <section className="py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal variant="zoom" as="p" className="eyebrow justify-center mb-4" style={{ display: 'inline-flex' }}>Journey</Reveal>
            <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', textWrap: 'balance' }}>
              From databases to enterprise AI.
            </Reveal>
          </div>
          <div className="relative">
            <Reveal variant="clip" className="absolute left-[11px] top-2 bottom-2 w-px bg-line-strong" duration={2} />
            <div className="space-y-6">
              {experience.map((r, i) => (
                <Reveal key={r.title + r.org} variant="right" delay={i * 0.05} className="relative pl-12">
                  <span className={`absolute left-0 top-6 w-[23px] h-[23px] rounded-full border-2 border-ember flex items-center justify-center ${r.current ? 'bg-ember' : 'bg-bg'}`}
                    style={{ boxShadow: '0 0 0 5px var(--ember-soft)' }}>
                    {r.current && <span className="w-2 h-2 rounded-full bg-white dot-live" />}
                  </span>
                  <div className={`rounded-[1.4rem] border p-6 transition-colors ${r.current ? 'border-ember/40 bg-card' : 'border-line bg-surface'}`}
                    style={r.current ? { boxShadow: 'var(--shadow-card)' } : undefined}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-semibold text-lg text-ink">{r.title} <span className="text-muted font-normal">· {r.org}</span></h3>
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ember">{r.year}</span>
                    </div>
                    {i < 2 && <p className="text-sm text-muted leading-relaxed mt-2">{r.detail}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal variant="up" className="text-center mt-12">
            <Link to="/about" className="btn-ghost px-7 py-3.5 text-sm">Full story <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ── LAB: AI & ENGINEERING ─────────────────────────── */}
      <section className="py-28 bg-surface border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <Reveal variant="clip-l" as="p" className="eyebrow mb-4">The Lab</Reveal>
              <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', textWrap: 'balance' }}>
                AI systems & engineering deep&#8209;cuts.
              </Reveal>
            </div>
            <Reveal variant="left" as="p" className="text-muted max-w-md leading-relaxed">
              RAG assistants, a search engine built from scratch, anomaly detection and adaptive agents.
              These are the experiments that sharpen the production work.
            </Reveal>
          </div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {lab.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="py-28 relative">
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

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden grain border-t border-line">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Reveal variant="zoom" as="p" className="eyebrow justify-center mb-6" style={{ display: 'inline-flex' }}>Open to select collaborations</Reveal>
          <Reveal variant="blur" as="h2" className="font-display font-semibold text-ink tracking-tight leading-[1.05] mb-7"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>
            Your next engineer,<br />
            <span className="text-ember-grad italic">already shipping.</span>
          </Reveal>
          <Reveal variant="up" delay={0.2} as="p" className="text-lg text-muted max-w-xl mx-auto mb-11 font-light">
            Building enterprise systems at Hitech and production products for clients. Happy to talk about
            AI consulting, ambitious product builds and engineering roles. Based in Lagos, working everywhere.
          </Reveal>
          <Reveal variant="up" delay={0.35} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-ember px-10 py-4 text-base">
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
