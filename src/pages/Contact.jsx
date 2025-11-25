import React from 'react'

export default function Contact () {
  return (
    <section className='max-w-5xl mx-auto px-4 sm:px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto'>
        <p className='section-label'>Contact</p>
        <h1 className='mt-3 text-3xl sm:text-4xl font-bold text-slate-900'>
          Collaborations, styling inquiries, press and partnerships.
        </h1>
        <p className='mt-3 text-slate-500'>
          Share your project timeline, goals and brand DNA. I typically reply
          within 48 hours.
        </p>
      </div>

      <div className='mt-10 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]'>
        <div className='contact-card'>
          <h3 className='text-xl font-semibold text-slate-900'>Availability</h3>
          <p className='text-sm text-slate-500 mt-2'>
            Currently booking for Spring/Summer 2025 capsules, editorial
            campaigns and global brand launches.
          </p>
          <div className='mt-6 space-y-4 text-sm text-slate-600'>
            <div>
              <p className='font-semibold text-slate-900'>Email</p>
              <a href='mailto:kehindeadeleke92@gmail.com' className='text-slate-600'>
                kehindeadeleke92@gmail.com
              </a>
            </div>
            <div>
              <p className='font-semibold text-slate-900'>Location</p>
              <p>Lagos, Nigeria · Available for travel</p>
            </div>
            <div>
              <p className='font-semibold text-slate-900'>Services</p>
              <p>Styling direction, brand building, consulting retainers</p>
            </div>
          </div>
        </div>

        <form className='bg-white border border-slate-100 rounded-[28px] shadow-xl p-6 sm:p-8 grid gap-5'>
          <div className='grid gap-4 md:grid-cols-2'>
            <input className='p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20' placeholder='Your name' required />
            <input className='p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20' placeholder='Email' type='email' required />
          </div>
          <input className='p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20' placeholder='Brand / Company' />
          <input className='p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20' placeholder='Project focus (e.g. lookbook, launch, styling)' />
          <textarea className='p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20' rows='6' placeholder='Share timeline, scope, links…' required />
          <button type='submit' className='inline-flex justify-center px-6 py-4 text-base font-semibold rounded-full bg-slate-900 text-white'>
            Send request
          </button>
        </form>
      </div>
    </section>
  )
}
