import React from 'react'

/**
 * Presents a screenshot inside a polished browser-window mockup.
 * Designed cover art (`art`) already carries its own chrome, so it is
 * shown bare with only the rounded shell.
 */
export default function BrowserFrame({
  src,
  alt,
  label,
  art = false,
  aspect = '16/10',
  className = '',
  imgClassName = '',
  loading = 'lazy',
  children,
}) {
  if (art) {
    return (
      <div className={`frame-shell relative overflow-hidden ${className}`} style={{ aspectRatio: aspect }}>
        <img src={src} alt={alt} loading={loading} className={`w-full h-full object-cover ${imgClassName}`} />
        {children}
      </div>
    )
  }

  return (
    <div className={`frame-shell relative overflow-hidden flex flex-col ${className}`}>
      <div className="frame-bar flex items-center gap-3 px-3.5 h-8 shrink-0">
        <span className="flex gap-1.5">
          <i className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </span>
        <span className="frame-url flex-1 max-w-[60%] mx-auto h-[18px] rounded-md px-3 flex items-center justify-center font-mono text-[0.58rem] tracking-wide truncate">
          {label}
        </span>
        <span className="w-[42px]" />
      </div>
      <div className="relative flex-1 overflow-hidden" style={{ aspectRatio: aspect }}>
        <img src={src} alt={alt} loading={loading} className={`absolute inset-0 w-full h-full object-cover object-top ${imgClassName}`} />
        {children}
      </div>
    </div>
  )
}
