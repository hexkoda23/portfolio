import React from 'react'

export default function Footer () {
  return (
    <footer className='bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white mt-16 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-lg font-semibold'>Adeleke Kehinde</p>
          <p className='text-sm text-slate-900 dark:text-slate-300 mt-1'>
            AI Developer · Building intelligent solutions for real-world problems.
          </p>
        </div>
        <div className='text-sm text-slate-900 dark:text-slate-300'>
          <p>Lagos, Nigeria — working globally</p>
          <a href='mailto:kehindeadeleke92@gmail.com' className='text-slate-900 dark:text-white font-semibold hover:text-orange-500 dark:hover:text-orange-400 transition-colors'>
            kehindeadeleke92@gmail.com
          </a>
        </div>
      </div>
      <div className='bg-slate-200 dark:bg-black/40 text-center py-4 text-xs text-slate-900 dark:text-slate-400 transition-colors duration-300'>
        © {new Date().getFullYear()} Adeleke Kehinde. All rights reserved.
      </div>
    </footer>
  )
}
