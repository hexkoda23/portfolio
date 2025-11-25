import React from 'react'

export default function Footer () {
  return (
    <footer className='bg-slate-900 text-white mt-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-lg font-semibold'>Adeleke Kehinde</p>
          <p className='text-sm text-slate-300 mt-1'>
            Styling director · Founder · Creative partner to ambitious fashion labels.
          </p>
        </div>
        <div className='text-sm text-slate-300'>
          <p>Lagos, Nigeria — working globally</p>
          <a href='mailto:kehindeadeleke92@gmail.com' className='text-white font-semibold'>
            kehindeadeleke92@gmail.com
          </a>
        </div>
      </div>
      <div className='bg-black/40 text-center py-4 text-xs text-slate-400'>
        © {new Date().getFullYear()} Adeleke Kehinde. All rights reserved.
      </div>
    </footer>
  )
}
