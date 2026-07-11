import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/anim/Reveal'
import Tilt from '../components/anim/Tilt'

const roles = [
  {
    title: 'Software Engineer · Client Platforms (Contract)',
    detail: 'Designed and shipped multiple production platforms end-to-end, including: Oyela (AI assessment & coaching reports), IHS Procure vendor portal (enterprise procurement for IHS Towers), TASCK OS (creative-economy CRM & portals), Talent Nation (AI engineering fellowship platform), and Atom (THCO\'s general AI assistant). Owned everything from architecture and AI pipelines to payments, Docker deployment, and client demo loops.',
    year: '2025 — Present',
  },
  {
    title: 'Data Annotation Specialist · Awarri',
    detail: 'Key contributor to a high-precision computer vision project for healthcare diagnostics. Performed semantic segmentation and object detection on complex hospital laboratory datasets, producing pixel-perfect training data for models detecting medical equipment and anomalies in clinical environments.',
    year: 'Dec 2024 — Jan 2025',
  },
  {
    title: 'AI Developer · Nigerian Communications Commission (NCC)',
    detail: 'Spearheaded integration of AI technologies into national regulatory frameworks. Designed and deployed machine learning models automating regulatory compliance tasks, deepening expertise in NLP and advanced analytics while collaborating with cross-functional teams on digital transformation.',
    year: 'Aug 2024 — Jan 2025',
  },
  {
    title: 'AI Developer · Freelance',
    detail: 'Building intelligent applications using LLMs, RAG, and modern web technologies — custom AI solutions addressing specific business needs, from multilingual chatbots to retail intelligence.',
    year: 'Nov 2023 — Present',
  },
  {
    title: 'Database Manager (SIWES) · Sonet Technology Limited',
    detail: 'Managed Oracle databases, data integrity, and day-to-day operations. Assisted with data migration, backups, and performance monitoring, collaborating with teams to ensure reliable data access.',
    year: 'May 2023 — Nov 2023',
  },
]

const capabilities = [
  ['Frontend', 'React 19, Next.js 15, TypeScript, Tailwind, Vite, design systems'],
  ['Backend', 'FastAPI, NestJS, ASP.NET Core, REST API design, Prisma'],
  ['AI / ML', 'LLM pipelines (Claude, OpenAI), RAG, embeddings, agents, report generation'],
  ['Data', 'PostgreSQL, MongoDB, Redis, vector stores'],
  ['Delivery', 'Docker, Azure DevOps, protected-branch workflows, Vitest/xUnit'],
  ['Product', 'Client demo loops, feature-flagged launches, payment integration'],
]

const values = [
  { n: '01', t: 'Ship, don\'t just demo', d: 'Every client platform I\'ve built is live — with payments, auth, and users, not lorem ipsum.' },
  { n: '02', t: 'Taste is engineering', d: 'Design systems, typography, and motion are part of the product\'s correctness, not decoration.' },
  { n: '03', t: 'Own the whole stack', d: 'From Postgres schema to scroll animation — accountability across every layer of the build.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
        <div className="absolute -top-20 right-[8%] w-72 h-72 rounded-full border border-dashed anim-spin-slow pointer-events-none hidden lg:block" style={{ borderColor: 'var(--line-strong)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
            <div>
              <Reveal variant="down" as="p" className="eyebrow mb-5">About</Reveal>
              <Reveal variant="blur" as="h1" className="font-display font-semibold text-ink leading-[1.04] tracking-tight mb-7"
                style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
                An engineer who treats<br />
                <span className="text-ember-grad italic">every build like a flagship.</span>
              </Reveal>
              <Reveal variant="up" delay={0.2} as="p" className="text-lg text-muted leading-relaxed max-w-xl font-light mb-9">
                I'm Adeleke Kehinde — a software engineer bridging full-stack product engineering and
                applied AI. I've shipped a growing portfolio of client platforms to production —
                assessment engines with AI-authored clinical reports, an enterprise procurement portal
                for one of Africa's largest telecom infrastructure companies, a creative-economy
                operating system, an edtech fellowship platform, a premium AI assistant, and more.
              </Reveal>
              <Reveal variant="up" delay={0.3} className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-ember px-8 py-3.5 text-sm">See the Work</Link>
                <a href="/cv/Adeleke_Kehinde_CV.pdf" download className="btn-ghost px-8 py-3.5 text-sm">Download CV</a>
              </Reveal>
            </div>

            <Reveal variant="rot" delay={0.25} className="hidden lg:block">
              <Tilt className="relative max-w-[360px] mx-auto">
                <div className="portrait-halo" />
                <div className="portrait-lit relative rounded-[2.4rem] overflow-hidden border border-line rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[9/16]"
                  style={{ boxShadow: 'var(--shadow-lift), 0 0 50px var(--glow)' }}>
                  <img src="/Image/Tife%20(2).jpeg" alt="Adeleke Kehinde" className="w-full h-full object-cover"
                    onError={e => { e.target.parentElement.style.display = 'none' }} />
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-20 bg-surface border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.n} variant={['up', 'zoom', 'up'][i]} delay={i * 0.12}>
              <div className="flex gap-5 items-start">
                <span className="font-display font-bold text-4xl text-line-strong">{v.n}</span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">{v.t}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience + capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
            {/* Timeline */}
            <div>
              <Reveal variant="clip-l" as="p" className="eyebrow mb-8">Experience</Reveal>
              <div className="relative">
                <Reveal variant="clip" className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong" duration={2} />
                <div className="space-y-10">
                  {roles.map((role, i) => (
                    <Reveal key={role.title} variant={i % 2 === 0 ? 'right' : 'blur'} delay={0.08}
                      className="relative pl-10">
                      <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-ember bg-bg"
                        style={{ boxShadow: '0 0 0 4px var(--ember-soft)' }} />
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember mb-2">{role.year}</p>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2.5">{role.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{role.detail}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              <Reveal variant="left" delay={0.15}>
                <div className="card-lux rounded-[1.8rem] p-7">
                  <p className="eyebrow mb-6">Capabilities</p>
                  <ul className="space-y-4">
                    {capabilities.map(([area, items]) => (
                      <li key={area} className="pb-4 border-b border-line last:border-0 last:pb-0">
                        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-1.5">{area}</p>
                        <p className="text-sm text-ink-soft leading-relaxed">{items}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="left" delay={0.25}>
                <div className="rounded-[1.8rem] p-7 relative overflow-hidden border border-line"
                  style={{ background: 'linear-gradient(140deg, var(--ember-soft), var(--pine-soft))' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 dot-live" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft font-medium">Open to opportunities</span>
                  </div>
                  <p className="font-display font-semibold text-ink text-lg mb-1">Lagos, Nigeria</p>
                  <p className="text-muted text-sm mb-1.5">Remote-ready · Worldwide</p>
                  <p className="text-muted text-sm mb-7">kehindeadeleke92@gmail.com</p>
                  <Link to="/contact" className="btn-ember w-full py-3.5 text-sm">Request Availability →</Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
