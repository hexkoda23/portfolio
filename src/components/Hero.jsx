import React from 'react'

const stats = [
  { label: 'AI Projects', value: '8' },
  { label: 'Technologies', value: '15+' },
  { label: 'Production Ready', value: '100%' }
]

export default function Hero () {
  return (
    <section className='hero-gradient py-16 md:py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        <div className='grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center'>
          <div>
            <div className='flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-slate-200/90 accent-pill px-4 py-2 inline-flex transition-colors'>
              AI Developer
            </div>
            <h1 className='mt-6 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-white transition-colors'>
              Building intelligent AI solutions that solve real-world problems.
            </h1>
            <p className='mt-6 text-lg text-slate-200 max-w-2xl transition-colors'>
              Specializing in Natural Language Processing, Machine Learning, and AI system design. 
              I develop production-ready solutions that combine cutting-edge research with practical 
              engineering to deliver measurable business value.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a href='/portfolio' className='btn-primary'>
                View portfolio
              </a>
              <a href='/contact' className='btn-secondary text-white border-white/40 hover:bg-white/10 transition-colors'>
                Get in touch
              </a>
              <a 
                href='/cv/tife-cv.pdf' 
                download='Tife_CV.pdf'
                className='btn-secondary text-white border-white/40 hover:bg-white/10 transition-colors flex items-center gap-2'
              >
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>

            <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className='text-3xl font-bold text-white transition-colors'>{stat.value}</p>
                  <p className='text-xs uppercase tracking-widest text-slate-300 transition-colors'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -top-6 -left-6 w-32 h-32 rounded-full bg-orange-400/40 blur-3xl' />
            <div className='relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-blue-600 dark:to-purple-600 transition-colors'>
              <div className='w-full h-[420px] relative overflow-hidden'>
                <img 
                  src='/Image/meee.jpg' 
                  alt='Adeleke Kehinde - AI Developer' 
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className='absolute inset-0 flex items-center justify-center text-center text-slate-900 dark:text-white hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-none'>
                  <div>
                    <div className='text-6xl mb-4'>🤖</div>
                    <p className='text-xl font-semibold'>AI Portfolio</p>
                    <p className='text-sm text-slate-900 dark:text-white/80 mt-2'>Innovative Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 min-w-[240px] rounded-2xl accent-pill px-4 py-4 text-center text-xs transition-colors'>
              <p className='text-[0.95rem] font-semibold text-slate-900 dark:text-white'>
                Current focus — Production AI Systems
              </p>
              <p className='text-slate-900 dark:text-slate-200/80 mt-1'>
                Building scalable, intelligent solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
