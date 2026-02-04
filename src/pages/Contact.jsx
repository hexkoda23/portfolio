import React from 'react'

export default function Contact () {
  return (
    <section className='max-w-5xl mx-auto px-4 sm:px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto'>
        <p className='section-label text-slate-900 dark:text-slate-400'>Contact</p>
        <h1 className='mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white'>
          AI Consulting, technical partnerships, and development inquiries.
        </h1>
        <p className='mt-3 text-slate-900 dark:text-slate-400'>
          Share your project requirements, technical challenges, or collaboration ideas. 
          I typically reply within 48 hours.
        </p>
      </div>

      <div className='mt-10 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]'>
        <div className='contact-card dark:bg-slate-900 dark:border-slate-800'>
          <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>Availability</h3>

          <p className='text-sm text-slate-900 dark:text-slate-400 mt-2'>
            Currently open for freelance AI development projects, technical consulting, 
            and long-term partnerships.
          </p>
          <div className='mt-6 space-y-4 text-sm text-slate-900 dark:text-slate-300'>
            <div>
              <p className='font-semibold text-slate-900 dark:text-white'>Email</p>
              <a href='mailto:kehindeadeleke92@gmail.com' className='text-slate-900 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'>
                kehindeadeleke92@gmail.com
              </a>
            </div>
            <div>
              <p className='font-semibold text-slate-900 dark:text-white'>Location</p>
              <p>Lagos, Nigeria · Remote</p>
            </div>
            <div>
              <p className='font-semibold text-slate-900 dark:text-white'>Services</p>
              <p>AI System Design, NLP Solutions, Full Stack Development</p>
            </div>
          </div>
        </div>

        <form className='bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[28px] shadow-xl p-6 sm:p-8 grid gap-5'>
          <div className='grid gap-4 md:grid-cols-2'>
            <input 
              className='p-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-500' 
              placeholder='Your name' 
              required 
            />
            <input 
              className='p-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-500' 
              placeholder='Email' 
              type='email' 
              required 
            />
          </div>
          <input 
            className='p-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-500' 
            placeholder='Company / Organization' 
          />
          <input 
            className='p-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-500' 
            placeholder='Project Type (e.g. RAG Chatbot, NLP Analysis)' 
          />
          <textarea 
            className='p-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-500' 
            rows='6' 
            placeholder='Describe your project goals, timeline, and requirements…' 
            required 
          />
          <button type='submit' className='inline-flex justify-center px-6 py-4 text-base font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity'>
            Send request
          </button>
        </form>
      </div>
    </section>
  )
}
