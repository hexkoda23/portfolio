import React from 'react'

export default function ProjectCard ({
  title,
  subtitle,
  description,
  status,
  tags = [],
  images = [],
  onClick
}) {
  const isInProgress = status === 'In Progress'
  const previewImage = images && images.length > 0 ? images[0] : null

  return (
    <article 
      className='project-card cursor-pointer'
      onClick={onClick}
    >
      {/* Project Image Preview */}
      {previewImage && (
        <div className='relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-blue-500 to-purple-600'>
          <img
            src={previewImage}
            alt={title}
            className='w-full h-full object-cover'
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x300/3b82f6/ffffff?text=${encodeURIComponent(title)}`
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
        </div>
      )}

      <div className='flex items-start justify-between gap-4'>
        <div className='flex-1'>
          <p className='text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-slate-500'>
            {subtitle}
          </p>
          <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mt-2'>{title}</h3>
        </div>
        <div
          className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ${
            isInProgress
              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
          }`}
        >
          {status}
        </div>
      </div>

      <p className='text-slate-900 dark:text-slate-300 text-sm mt-3'>{description}</p>

      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag, idx) => (
            <span key={idx} className='badge-soft bg-slate-50 dark:bg-slate-800 dark:text-slate-300'>
              {tag}
            </span>
          ))}
        </div>
      )}

      <button 
        className='text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 mt-4 hover:text-orange-500 dark:hover:text-orange-400 transition-colors'
        onClick={(e) => {
          e.stopPropagation()
          onClick?.()
        }}
      >
        View project details
        <span aria-hidden='true'>↗</span>
      </button>
    </article>
  )
}
