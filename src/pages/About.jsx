import React from 'react'

const roles = [
  {
    title: 'Creative Director · Swag Out',
    detail: 'Owning capsule direction, talent pipelines, production and launch moments.',
    year: '2019 — Present'
  },
  {
    title: 'Founder · Retrograde & Yellow Mellow',
    detail: 'Built two fashion houses serving distinct audiences with unified systems.',
    year: '2017 — Present'
  },
  {
    title: 'Creator · Preppy Nigga',
    detail: 'Designing an export-ready luxury label marrying prep heritage with Lagos grit.',
    year: '2024 — In progress'
  }
]

const capabilities = [
  'Styling direction & fittings',
  'Collection planning & sourcing',
  'Brand strategy and decks',
  'Runway + lookbook production',
  'Retail expansion playbooks',
  'Founders’ advisory & mentorship'
]

export default function About () {
  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12'>
      <div className='grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start'>
        <div className='rounded-[28px] bg-white border border-slate-100 p-8 md:p-10 shadow-xl'>
          <p className='section-label text-slate-400'>About</p>
          <h1 className='mt-4 text-3xl font-bold text-slate-900'>
            Building Lagos fashion stories felt around the world.
          </h1>
          <p className='mt-4 text-slate-600'>
            I’m Adeleke Kehinde — stylist, creative director and multi-brand
            founder aligning culture with commerce. My work sits between editorial
            excellence and operator discipline, helping labels clarify their
            voice while scaling sustainably.
          </p>
          <div className='mt-8 grid gap-4'>
            {roles.map(role => (
              <div key={role.title} className='border border-slate-100 rounded-2xl p-5'>
                <div className='text-xs uppercase tracking-[0.2em] text-slate-400'>
                  {role.year}
                </div>
                <h3 className='text-lg font-semibold text-slate-900 mt-2'>{role.title}</h3>
                <p className='text-sm text-slate-600 mt-1'>{role.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className='space-y-6'>
          <div className='contact-card'>
            <h4 className='text-base font-semibold text-slate-900'>Capabilities</h4>
            <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600'>
              {capabilities.map(item => (
                <li key={item} className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-900' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='contact-card'>
            <h4 className='text-base font-semibold text-slate-900'>Location</h4>
            <p className='text-sm text-slate-500'>Lagos, Nigeria — available worldwide</p>
            <div className='mt-4'>
              <h4 className='text-base font-semibold text-slate-900'>Contact</h4>
              <p className='text-sm text-slate-500'>kehindeadeleke92@gmail.com</p>
            </div>
            <a
              href='/contact'
              className='mt-6 inline-flex justify-center w-full px-4 py-3 text-sm font-semibold rounded-full bg-slate-900 text-white'
            >
              Request availability
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
