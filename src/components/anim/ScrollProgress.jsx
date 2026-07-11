import { useEffect, useState } from 'react'

/** Thin ember progress bar fixed to the top of the viewport. */
export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        setP(max > 0 ? window.scrollY / max : 0)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${p})`,
          background: 'linear-gradient(90deg, var(--ember), var(--ember-2), var(--gold))',
          boxShadow: '0 0 12px var(--glow)',
        }}
      />
    </div>
  )
}
