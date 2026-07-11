import React, { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Signature scroll piece: featured projects begin scattered and rotated
 * across the viewport; as you scroll through the pinned section they
 * gather into a clean collage while zooming up to full size. Cards are
 * clickable throughout.
 *
 * Desktop: pinned 300vh scroll-driven animation.
 * Mobile / reduced-motion: graceful static collage.
 */

// scatter start (vw/vh offsets, deg, scale) → gather end (% positions)
const LAYOUT = [
  { sx: -46, sy: -34, sr: -22, end: { left: '4%',  top: '6%',  w: '30%' } },
  { sx: 48,  sy: -30, sr: 18,  end: { left: '36%', top: '0%',  w: '28%' } },
  { sx: -52, sy: 28,  sr: 14,  end: { left: '66%', top: '8%',  w: '30%' } },
  { sx: 44,  sy: 36,  sr: -16, end: { left: '10%', top: '52%', w: '28%' } },
  { sx: 0,   sy: -52, sr: 8,   end: { left: '40%', top: '46%', w: '26%' } },
  { sx: 8,   sy: 54,  sr: -9,  end: { left: '68%', top: '56%', w: '28%' } },
]

export default function ScatterGallery({ projects, onSelect }) {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const [staticMode, setStaticMode] = useState(false)
  const progressRef = useRef(0)

  useEffect(() => {
    const check = () =>
      setStaticMode(window.innerWidth < 900 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const apply = useCallback(p => {
    const ease = 1 - Math.pow(1 - p, 3) // easeOutCubic
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const L = LAYOUT[i % LAYOUT.length]
      const inv = 1 - ease
      const x = L.sx * inv
      const y = L.sy * inv
      const r = L.sr * inv
      const s = 0.55 + 0.45 * ease
      el.style.transform = `translate(${x}vw, ${y}vh) rotate(${r}deg) scale(${s})`
      el.style.opacity = `${Math.min(1, 0.15 + ease * 1.2)}`
    })
  }, [])

  useEffect(() => {
    if (staticMode) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const sec = sectionRef.current
        if (!sec) return
        const rect = sec.getBoundingClientRect()
        const vh = window.innerHeight
        const total = rect.height - vh
        const p = Math.max(0, Math.min(1, -rect.top / total))
        progressRef.current = p
        apply(p)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [staticMode, apply])

  const items = projects.slice(0, 6)

  if (staticMode) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 max-w-6xl mx-auto">
        {items.map((p, i) => (
          <ScatterCard key={p.id} project={p} onClick={() => onSelect(p)} refFn={null} idx={i} staticMode />
        ))}
      </div>
    )
  }

  return (
    <section ref={sectionRef} style={{ height: '320vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* backdrop text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-bold text-line-strong/60 tracking-tight" style={{ fontSize: '16vw', opacity: 0.16 }}>
            WORK
          </span>
        </div>
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          {items.map((p, i) => {
            const L = LAYOUT[i % LAYOUT.length]
            return (
              <div
                key={p.id}
                className="scatter-card"
                style={{ left: L.end.left, top: L.end.top, width: L.end.w, padding: '0.5rem' }}
                ref={el => (cardRefs.current[i] = el)}
              >
                <ScatterCard project={p} onClick={() => onSelect(p)} idx={i} />
              </div>
            )
          })}
        </div>
        {/* progress hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-muted font-mono text-[0.62rem] uppercase tracking-[0.24em]">
          <span className="w-8 h-px bg-line-strong" /> keep scrolling — the work assembles <span className="w-8 h-px bg-line-strong" />
        </div>
      </div>
    </section>
  )
}

function ScatterCard({ project, onClick, idx, staticMode = false }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-line bg-card transition-shadow duration-500 hover:shadow-2xl"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <div className="img-zoom relative aspect-[16/10]">
        <img src={project.images[0]} alt={project.title} loading={staticMode ? 'lazy' : 'eager'}
          className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white font-display font-semibold text-base leading-tight drop-shadow">{project.title}</p>
          <p className="text-white/70 font-mono text-[0.6rem] uppercase tracking-[0.18em] mt-1">Click to open case study</p>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between gap-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ember truncate">{project.subtitle}</span>
        <span className="font-mono text-[0.58rem] text-muted shrink-0">{project.status}</span>
      </div>
    </article>
  )
}
