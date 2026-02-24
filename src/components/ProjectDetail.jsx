import React from 'react'

export default function ProjectDetail ({ project, onClose }) {
  if (!project) return null

  return (
    <div 
      className='fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div 
        className='relative bg-white dark:bg-[#1e2435] border border-slate-200 dark:border-[#2d3748] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-colors duration-300'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-900 dark:text-white'
          aria-label='Close'
        >
          <span className='text-2xl'>×</span>
        </button>

        {/* Hero Image */}
        <div className='relative h-64 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl overflow-hidden'>
          <img
            src={project.images[0]}
            alt={project.title}
            className='w-full h-full object-cover'
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/800x400/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          <div className='absolute bottom-6 left-6 right-6'>
            <p className='text-sm uppercase tracking-wider text-white/90 mb-2'>
              {project.category}
            </p>
            <h1 className='text-3xl md:text-4xl font-bold text-white'>
              {project.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className='p-6 md:p-10'>
          {/* Overview */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>Overview</h2>
            <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed'>
              {project.overview}
            </p>
          </div>

          {/* Why It's Impressive */}
          {project.whyImpressive && (
            <div className='mb-8 p-6 bg-orange-50 dark:bg-[#1e2435] rounded-xl border border-orange-100 dark:border-[#2d3748]'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Why It's Impressive
              </h3>
              <p className='text-slate-700 dark:text-slate-300'>{project.whyImpressive}</p>
            </div>
          )}

          {/* Core AI Concepts */}
          {project.coreConcepts && project.coreConcepts.length > 0 && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Core AI Concepts
              </h2>
              <div className='flex flex-wrap gap-2'>
                {project.coreConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className='px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium'
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Tech Stack
              </h2>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Key Features
              </h2>
              <ul className='space-y-3'>
                {project.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <span className='text-orange-500 mt-1'>✓</span>
                    <span className='text-slate-700 dark:text-slate-300'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem Statement */}
          {project.problemStatement && (
            <div className='mb-8 p-6 bg-slate-50 dark:bg-[#1e2435] rounded-xl border border-slate-200 dark:border-[#2d3748]'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Problem Statement
              </h3>
              <p className='text-slate-700 dark:text-slate-300'>{project.problemStatement}</p>
            </div>
          )}

          {/* Architecture/Approach */}
          {project.approach && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Architecture & Approach
              </h2>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed'>{project.approach}</p>
            </div>
          )}

          {/* Project Images Gallery */}
          {project.images && project.images.length > 1 && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Project Gallery
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {project.images.slice(1).map((image, idx) => (
                  <div
                    key={idx}
                    className='rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700'
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${idx + 2}`}
                      className='w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Deliverables
              </h2>
              <ul className='space-y-2'>
                {project.deliverables.map((deliverable, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-3 text-slate-700 dark:text-slate-300'
                  >
                    <span className='w-2 h-2 bg-orange-500 rounded-full' />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Limitations & Future Improvements */}
          {project.limitations && (
            <div className='mb-8 p-6 bg-amber-50 dark:bg-[#1e2435] rounded-xl border border-amber-100 dark:border-[#2d3748]'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Limitations & Future Improvements
              </h3>
              <p className='text-slate-700 dark:text-slate-300'>{project.limitations}</p>
          </div>
          )}

          {/* Links */}
          {(project.github || project.demo) && (
            <div className='flex flex-wrap gap-4 pt-6 border-t border-slate-200 dark:border-slate-800'>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary'
                >
                  View on GitHub
                  <span aria-hidden='true'>↗</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-secondary dark:text-white dark:border-slate-700 dark:hover:bg-slate-800'
                >
                  Live Demo
                  <span aria-hidden='true'>↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
