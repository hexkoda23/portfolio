import React, { useState } from 'react'

export default function CV () {
  const [fallback, setFallback] = useState(false)

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 py-8'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>Curriculum Vitae</h1>
        <div className='flex gap-2'>
          <a
            href='/cv/tife-cv.pdf'
            download
            className='px-4 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
          >
            Download PDF
          </a>
          <a
            href='/cv/tife-cv.pdf'
            target='_blank'
            rel='noreferrer'
            className='px-4 py-2 text-sm font-semibold rounded-full border border-slate-200 text-slate-900 dark:border-slate-700 dark:text-white'
          >
            Open in new tab
          </a>
        </div>
      </div>

      <div className='rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'>
        {!fallback ? (
          <object
            data='/cv/tife-cv.pdf'
            type='application/pdf'
            className='w-full h-[80vh]'
            onError={() => setFallback(true)}
          >
            <div className='p-6'>
              <p className='text-slate-700 dark:text-slate-300'>
                Unable to load PDF inline. You can{' '}
                <a href='/cv/tife-cv.pdf' className='text-blue-600 dark:text-blue-400 underline'>open it in a new tab</a>{' '}
                or download above.
              </p>
            </div>
          </object>
        ) : (
          <div className='p-4'>
            <img
              src='/cv/tife-cv.jpg'
              alt='Tife CV'
              className='w-full h-auto rounded-lg'
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const msg = document.getElementById('cv-missing')
                if (msg) msg.style.display = 'block'
              }}
            />
            <p id='cv-missing' className='hidden text-slate-700 dark:text-slate-300'>
              CV file not found. Please add <code className='font-mono'>public/cv/tife-cv.pdf</code> or an image
              <code className='font-mono'>public/cv/tife-cv.jpg</code>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
