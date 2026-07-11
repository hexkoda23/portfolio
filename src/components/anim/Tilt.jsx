import { useRef } from 'react'

/** Mouse-follow 3D tilt wrapper (desktop only, capped angles). */
export default function Tilt({ max = 7, className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = e => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--tx', `${px * max}deg`)
    el.style.setProperty('--ty', `${-py * max}deg`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tx', '0deg')
    el.style.setProperty('--ty', '0deg')
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>
      {children}
    </div>
  )
}
