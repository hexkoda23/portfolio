import React, { useEffect, useState } from 'react'
import { X, ArrowUpRight, Check } from 'lucide-react'

/** Full-screen editorial case-study overlay with image lightbox. */
export default function ProjectDetail({ project, onClose }) {
  const [entered, setEntered] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const t = requestAnimationFrame(() => setEntered(true))
    const onKey = e => {
      if (e.key === 'Escape') (lightbox ? setLightbox(null) : onClose())
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      cancelAnimationFrame(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose, lightbox])

  if (!project) return null

  const Sect = ({ label, children, className = '' }) => (
    <div className={`mb-12 ${className}`}>
      <p className="eyebrow mb-5">{label}</p>
      {children}
    </div>
  )

  return (
    <div
      className={`fixed inset-0 z-[70] overflow-y-auto bg-black/70 backdrop-blur-md transition-opacity duration-500 ${entered ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`relative bg-bg min-h-full w-full max-w-6xl mx-auto my-0 sm:my-8 sm:rounded-[2rem] overflow-hidden border border-line transition-all duration-700 ${entered ? 'translate-y-0 scale-100' : 'translate-y-16 scale-[0.97]'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="fixed sm:absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-ember flex items-center justify-center transition-all duration-300 text-white hover:rotate-90"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero */}
        <div className="relative h-[46vh] min-h-[320px] overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className={`w-full h-full object-cover object-top transition-transform duration-[1.6s] ${entered ? 'scale-100' : 'scale-110'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10">
            <p className={`font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/80 mb-3 transition-all duration-700 delay-200 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {project.category} {project.status === 'Client Work' && '· Client Engagement'}
            </p>
            <h1 className={`font-display font-semibold text-white leading-[1.05] tracking-tight transition-all duration-700 delay-300 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}>
              {project.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 p-6 sm:p-10">
          <div>
            <Sect label="Overview">
              <p className="text-lg text-ink-soft leading-relaxed font-light">{project.overview}</p>
            </Sect>

            {project.whyImpressive && (
              <div className="mb-12 p-7 rounded-3xl border border-line relative overflow-hidden" style={{ background: 'var(--ember-soft)' }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl" style={{ background: 'var(--glow)' }} />
                <p className="eyebrow mb-4">Why it matters</p>
                <p className="text-ink-soft leading-relaxed relative z-10">{project.whyImpressive}</p>
              </div>
            )}

            {project.problemStatement && (
              <Sect label="The Problem">
                <p className="text-muted leading-relaxed">{project.problemStatement}</p>
              </Sect>
            )}

            {project.approach && (
              <Sect label="Approach & Architecture">
                <p className="text-muted leading-relaxed">{project.approach}</p>
              </Sect>
            )}

            {project.features?.length > 0 && (
              <Sect label="Key Features">
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                      <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--ember-soft)' }}>
                        <Check className="w-3 h-3 text-ember" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Sect>
            )}

            {project.images?.length > 1 && (
              <Sect label="Gallery">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <button key={i}
                      className={`img-zoom rounded-2xl border border-line overflow-hidden cursor-zoom-in ${i % 5 === 0 ? 'sm:col-span-2' : ''}`}
                      onClick={() => setLightbox(img)}>
                      <img src={img} alt={`${project.title} — screen ${i + 2}`} loading="lazy"
                        className="w-full object-cover object-top"
                        style={{ maxHeight: i % 5 === 0 ? 420 : 260, minHeight: 180, width: '100%' }} />
                    </button>
                  ))}
                </div>
              </Sect>
            )}

            {project.deliverables?.length > 0 && (
              <Sect label="Deliverables">
                <ul className="space-y-2.5">
                  {project.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Sect>
            )}

            {project.limitations && (
              <div className="p-6 rounded-2xl bg-surface border border-line">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gold mb-3">Roadmap & Notes</p>
                <p className="text-sm text-muted leading-relaxed">{project.limitations}</p>
              </div>
            )}
          </div>

          {/* Sticky meta rail */}
          <aside className="lg:sticky lg:top-8 self-start space-y-6">
            <div className="card-lux rounded-3xl p-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map(t => (
                  <span key={t} className="font-mono text-[0.65rem] px-3 py-1.5 rounded-full bg-surface border border-line text-ink-soft">{t}</span>
                ))}
              </div>
            </div>
            <div className="card-lux rounded-3xl p-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember mb-4">Core Concepts</p>
              <ul className="space-y-2.5">
                {project.coreConcepts?.map(c => (
                  <li key={c} className="text-sm text-muted flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-gold" />{c}
                  </li>
                ))}
              </ul>
            </div>
            {(project.github || project.demo) && (
              <div className="flex flex-col gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ember py-3.5 text-sm">
                    Live Demo <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3.5 text-sm">
                    View on GitHub <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={e => { e.stopPropagation(); setLightbox(null) }}>
          <img src={lightbox} alt="Full view" className="max-w-full max-h-full rounded-xl shadow-2xl" style={{ animation: 'wordRise 0.5s cubic-bezier(0.22,1,0.36,1) both' }} />
        </div>
      )}
    </div>
  )
}
