import React from 'react'

const roles = [
  {
    title: 'Data Annotation Specialist · Awarri',
    detail: 'Served as a key contributor to a high-precision computer vision project aimed at revolutionizing healthcare diagnostics through AI. Meticulously performed semantic segmentation and object detection tasks on complex hospital laboratory datasets. Ensured the production of high-quality, pixel-perfect training data, which was critical for building robust AI models capable of accurately detecting medical equipment and anomalies in real-world clinical environments.',
    year: 'Dec 2025 — Jan 2025'
  },
  {
    title: 'AI Developer · Nigerian Communications Commission (NCC)',
    detail: 'Spearheaded the strategic integration of cutting-edge AI technologies into national regulatory frameworks, significantly enhancing operational efficiency and data-driven decision-making processes. Designed, developed, and deployed sophisticated machine learning models to automate complex regulatory compliance tasks. Deepened technical expertise in Natural Language Processing (NLP) and advanced data analytics while collaborating with cross-functional teams to drive impactful digital transformation initiatives across the organization.',
    year: 'Aug 2025 — Jan 2025'
  },
  {
    title: 'AI Developer · Freelance',
    detail: 'Building intelligent applications using LLMs, RAG, and modern web technologies. delivering custom AI solutions that address specific business needs and drive innovation.',
    year: 'Nov 2023 — Present'
  },
  {
    title: 'Database Manager (SIWES) · Sonet Technology Limited',
    detail: 'Industrial training (SIWES): Managed Oracle databases, data integrity, and day-to-day operations. Assisted with data migration, backups, and performance monitoring; collaborated with teams to ensure reliable data access.',
    year: 'May 2023 — Nov 2023'
  },
  {
    title: 'Software Engineer · Tech Startups',
    detail: 'Developing scalable backend systems and interactive frontend interfaces. Collaborating with agile teams to deliver high-quality software products.',
    year: '2021 — 2023'
  }
]

const capabilities = [
  'Natural Language Processing (NLP)',
  'Large Language Models (LLMs)',
  'RAG & Vector Databases',
  'AI Agents & Automation',
  'Full Stack Development (React/Python)',
  'API Design & Integration'
]

export default function About() {
  return (
    <div>
      {/* Dark header — SabiLens dark section */}
      <section className="bg-[#0f172a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-4 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full">
            About
          </p>
          <h1 className="font-syne font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Building intelligent systems<br />that solve complex problems.
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-xl leading-relaxed">
            I'm Adeleke Kehinde — an AI & Full-Stack Developer bridging the gap between cutting-edge AI research and real-world applications. Based in Lagos, working globally.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">

            {/* Timeline */}
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-6 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full">
                Experience
              </p>
              {roles.map((role, i) => (
                <div key={role.title}
                  className={`bg-white dark:bg-[#1e2435] border border-slate-100 dark:border-white/[0.08] rounded-2xl p-6 shadow-soft hover:border-orange-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.10)] dark:hover:border-orange-500/30 dark:hover:shadow-[0_8px_32px_rgba(249,115,22,0.10)] hover:-translate-y-1 transition-all duration-300 animate-fade-up stagger-${Math.min(i + 1, 5)}`}>
                  <p className="font-mono font-bold text-[0.65rem] text-orange-500 uppercase tracking-widest mb-2">{role.year}</p>
                  <h3 className="font-syne font-semibold text-lg text-slate-900 dark:text-white mb-2">{role.title}</h3>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{role.detail}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              {/* Capabilities */}
              <div className="bg-white dark:bg-[#1e2435] border border-slate-100 dark:border-white/[0.08] rounded-2xl p-6 shadow-soft">
                <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-5 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full">
                  Capabilities
                </p>
                <ul className="space-y-3">
                  {capabilities.map(item => (
                    <li key={item} className="flex items-center gap-3 font-sans text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card — SabiLens dark card with glow */}
              <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-xs text-green-400 uppercase tracking-widest font-semibold">Available for Work</span>
                  </div>
                  <p className="font-syne font-bold text-white text-base mb-1">Lagos, Nigeria</p>
                  <p className="font-sans text-white/40 text-sm mb-2">Available worldwide · Remote</p>
                  <p className="font-sans text-white/50 text-sm mb-6">kehindeadeleke92@gmail.com</p>
                  <a href="/contact"
                    className="block w-full py-3 text-center font-syne font-semibold text-sm rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-glow hover:scale-[0.98] transition-all">
                    Request Availability →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
