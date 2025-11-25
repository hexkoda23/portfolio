import React from 'react'

const stats = [
  { label: 'Brands launched', value: '4' },
  { label: 'Editorial campaigns', value: '85+' },
  { label: 'Years in fashion', value: '7' }
]

export default function Hero () {
  return (
    <section className='hero-gradient py-16 md:py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        <div className='grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center'>
          <div>
            <div className='flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-slate-200/90 accent-pill px-4 py-2 inline-flex'>
              Fashion intelligence & creative direction
            </div>
            <h1 className='mt-6 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight'>
              Designing premium stories for Africa’s leading fashion voices.
            </h1>
            <p className='mt-6 text-lg text-slate-200 max-w-2xl'>
              Adeleke Kehinde is a Lagos-based stylist and entrepreneur guiding
              the visual language of high-growth labels such as Swag Out,
              Retrograde, Yellow Mellow and upcoming luxury line Preppy Nigga.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a href='/portfolio' className='btn-primary'>
                View portfolio
              </a>
              <a href='/contact' className='btn-secondary text-white border-white/40'>
                Book a collaboration
              </a>
            </div>

            <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className='text-3xl font-bold'>{stat.value}</p>
                  <p className='text-xs uppercase tracking-widest text-slate-300'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -top-6 -left-6 w-32 h-32 rounded-full bg-orange-400/40 blur-3xl' />
            <div className='relative rounded-[28px] overflow-hidden shadow-2xl border border-white/10'>
              <img
                src='/Image/2023_12_27_21_03_IMG_9796.JPG'
                alt='Adeleke Kehinde'
                className='object-cover w-full h-[420px]'
                loading='lazy'
              />
            </div>
            <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 min-w-[240px] rounded-2xl accent-pill px-4 py-4 text-center text-xs'>
              <p className='text-[0.95rem] font-semibold text-white'>
                Current focus — Preppy Nigga
              </p>
              <p className='text-slate-200/80 mt-1'>
                Launching premium capsule SS25
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
