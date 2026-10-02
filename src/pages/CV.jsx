import React, { useEffect, useState } from 'react'
import { Download, ExternalLink, X } from 'lucide-react'
import Reveal from '../components/anim/Reveal'

const PDF = '/cv/Adeleke_Kehinde_CV.pdf'
// Pages are pre-rendered images so every page shows on every device;
// inline PDF viewers often show only page one, or nothing on mobile.
const PAGES = [1, 2, 3, 4, 5].map(n => `/cv/pages/cv-${n}.jpg`)

export default function CV() {
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (zoom === null) return
    const onKey = e => e.key === 'Escape' && setZoom(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24">
      <Reveal variant="down" className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
        <div>
          <p className="eyebrow mb-3">Curriculum Vitae · {PAGES.length} pages</p>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">The paper trail.</h1>
          <p className="text-muted text-sm mt-2">Scroll through every page below, or click a page to zoom in.</p>
        </div>
        <div className="flex gap-3">
          <a href={PDF} download="Adeleke_Kehinde_CV.pdf" className="btn-ember px-6 py-3 text-sm">
            <Download className="w-4 h-4" /> Download PDF
          </a>
          <a href={PDF} target="_blank" rel="noreferrer" className="btn-ghost px-6 py-3 text-sm">
            <ExternalLink className="w-4 h-4" /> Open PDF
          </a>
        </div>
      </Reveal>

      {/* page jump bar */}
      <nav className="sticky top-20 z-20 mb-8 flex justify-center">
        <div className="glass-bar border border-line rounded-full px-2 py-1.5 flex gap-1">
          {PAGES.map((_, i) => (
            <a key={i} href={`#cv-page-${i + 1}`}
              className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs text-muted hover:text-white hover:bg-ember transition-colors">
              {i + 1}
            </a>
          ))}
        </div>
      </nav>

      <div className="space-y-8">
        {PAGES.map((src, i) => (
          <Reveal key={src} variant="up" delay={0.05}>
            <figure id={`cv-page-${i + 1}`} className="scroll-mt-36">
              <button onClick={() => setZoom(i)}
                className="block w-full rounded-[1.2rem] overflow-hidden border border-line bg-white cursor-zoom-in transition-transform duration-500 hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-lift)' }}>
                <img src={src} alt={`Adeleke Kehinde CV, page ${i + 1} of ${PAGES.length}`}
                  loading={i === 0 ? 'eager' : 'lazy'} width="1547" height="2189" className="w-full h-auto" />
              </button>
              <figcaption className="text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted mt-3">
                Page {i + 1} / {PAGES.length}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href={PDF} download="Adeleke_Kehinde_CV.pdf" className="btn-ember px-8 py-3.5 text-sm">
          <Download className="w-4 h-4" /> Download the full CV
        </a>
      </div>

      {zoom !== null && (
        <div className="fixed inset-0 z-[80] bg-black/90 overflow-y-auto cursor-zoom-out" onClick={() => setZoom(null)}>
          <button aria-label="Close" onClick={() => setZoom(null)}
            className="fixed top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-ember">
            <X className="w-5 h-5" />
          </button>
          <img src={PAGES[zoom]} alt={`CV page ${zoom + 1}`} className="w-full max-w-[1200px] mx-auto my-6 rounded-lg" />
        </div>
      )}
    </div>
  )
}
