import React, { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectDetail from '../components/ProjectDetail'
import ScatterGallery from '../components/ScatterGallery'
import Reveal from '../components/anim/Reveal'
import projects, { featuredProjects } from '../data/projects'

const FILTERS = [
  { key: 'all', label: 'All Work' },
  { key: 'client', label: 'Client Platforms' },
  { key: 'ai', label: 'AI & ML' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'product', label: 'Product & Frontend' },
]

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter(p => p.kind === filter)),
    [filter]
  )

  return (
    <>
      {/* intro */}
      <section className="pt-40 pb-10 relative overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal variant="down" as="p" className="eyebrow justify-center mb-5" style={{ display: 'inline-flex' }}>
            The Work
          </Reveal>
          <Reveal variant="blur" as="h1" className="font-display font-semibold text-ink tracking-tight leading-[1.03] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
            Scattered ideas,<br />
            <span className="text-ember-grad italic">assembled into products.</span>
          </Reveal>
          <Reveal variant="up" delay={0.25} as="p" className="text-lg text-muted max-w-xl mx-auto font-light">
            Five client platforms in production, plus AI systems and engineering deep-cuts.
            Scroll — the featured work gathers itself. Click any piece to open its case study.
          </Reveal>
        </div>
      </section>

      {/* signature scatter gallery */}
      <ScatterGallery projects={featuredProjects} onSelect={setSelected} />

      {/* archive grid */}
      <section className="py-24 bg-surface border-t border-line relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <Reveal variant="clip-l" as="p" className="eyebrow mb-4">Full Archive</Reveal>
              <Reveal variant="up" as="h2" className="font-display font-semibold text-ink tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                Every build, catalogued.
              </Reveal>
            </div>

            {/* filters */}
            <Reveal variant="left" delay={0.15} className="flex flex-wrap gap-2">
              {FILTERS.map(f => (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  className={`px-5 py-2.5 rounded-full font-sans font-medium text-sm border transition-all duration-300
                    ${filter === f.key
                      ? 'text-white border-transparent'
                      : 'text-muted border-line hover:border-ember hover:text-ink bg-card'}`}
                  style={filter === f.key ? { background: 'linear-gradient(120deg, var(--ember), var(--ember-2))', boxShadow: '0 6px 20px var(--glow)' } : undefined}>
                  {f.label}
                </button>
              ))}
            </Reveal>
          </div>

          <div key={filter} className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-muted py-20 font-mono text-sm">Nothing in this category yet.</p>
          )}
        </div>
      </section>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
