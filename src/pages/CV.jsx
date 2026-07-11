import React, { useState } from 'react'
import Reveal from '../components/anim/Reveal'

export default function CV() {
  const [fallback, setFallback] = useState(false)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
      <Reveal variant="down" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="eyebrow mb-3">Curriculum Vitae</p>
          <h1 className="font-display font-semibold text-3xl text-ink tracking-tight">The paper trail.</h1>
        </div>
        <div className="flex gap-3">
          <a href="/cv/tife-cv.pdf" download className="btn-ember px-6 py-3 text-sm">Download PDF</a>
          <a href="/cv/tife-cv.pdf" target="_blank" rel="noreferrer" className="btn-ghost px-6 py-3 text-sm">Open in new tab</a>
        </div>
      </Reveal>

      <Reveal variant="zoom" delay={0.15}>
        <div className="rounded-[1.6rem] overflow-hidden border border-line bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
          {!fallback ? (
            <object
              data="/cv/tife-cv.pdf"
              type="application/pdf"
              className="w-full h-[80vh]"
              onError={() => setFallback(true)}
            >
              <div className="p-6">
                <p className="text-muted">
                  Unable to load the PDF inline. You can{' '}
                  <a href="/cv/tife-cv.pdf" className="text-ember underline">open it in a new tab</a>{' '}
                  or download it above.
                </p>
              </div>
            </object>
          ) : (
            <div className="p-4">
              <img
                src="/cv/tife-cv.jpg"
                alt="Adeleke Kehinde CV"
                className="w-full h-auto rounded-lg"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  const msg = document.getElementById('cv-missing')
                  if (msg) msg.style.display = 'block'
                }}
              />
              <p id="cv-missing" className="hidden text-muted">
                CV file not found. Add <code className="font-mono">public/cv/tife-cv.pdf</code> or{' '}
                <code className="font-mono">public/cv/tife-cv.jpg</code>.
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  )
}
