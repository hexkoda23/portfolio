import React from 'react'

export default function ProjectCard ({
  title,
  subtitle,
  description,
  status,
  tags = []
}) {
  const isInProgress = status === 'In Progress'

  return (
    <article className='project-card'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>
            {subtitle}
          </p>
          <h3 className='text-2xl font-semibold text-slate-900 mt-2'>{title}</h3>
        </div>
        <div
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            isInProgress
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {status}
        </div>
      </div>

      <p className='text-slate-600 text-sm'>{description}</p>

      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {tags.map(tag => (
            <span key={tag} className='badge-soft bg-slate-50'>
              {tag}
            </span>
          ))}
        </div>
      )}

      <button className='text-sm font-semibold text-slate-900 flex items-center gap-2 mt-1'>
        View case study
        <span aria-hidden='true'>↗</span>
      </button>
    </article>
  )
}