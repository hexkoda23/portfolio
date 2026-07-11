import React, { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper. Hidden per `variant`, animates in when
 * it enters the viewport.
 *
 * variants: up | down | left | right | zoom | zoom-out | blur |
 *           rot | flip | clip | clip-l
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  duration,
  once = true,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={`rv rv-${variant} ${inView ? 'in' : ''} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}s` : undefined,
        ...(duration ? { '--rv-dur': `${duration}s` } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
