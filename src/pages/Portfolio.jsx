import React from 'react'
import ProjectCard from '../components/ProjectCard'

const portfolioItems = [
  {
    title: 'Retrograde',
    subtitle: 'Streetwear — Lagos',
    status: 'Published',
    description:
      'Built expressive capsules with dramatic silhouettes and experimental textiles for youth-driven fashion drops.',
    tags: ['Capsule design', 'Editorial styling', 'Brand strategy']
  },
  {
    title: 'Yellow Mellow',
    subtitle: 'Minimal & Bright',
    status: 'Published',
    description:
      'Launched a color-forward diffusion label with modular fits, inclusive sizing and clever retail activations.',
    tags: ['Lookbooks', 'Retail playbooks', 'Press kits']
  },
  {
    title: 'Swag Out',
    subtitle: 'Contemporary',
    status: 'Published',
    description:
      'As CEO, I lead product, merchandising and creative operations, steering it toward premium, export-ready releases.',
    tags: ['Operations', 'Campaigns', 'Team leadership']
  },
  {
    title: 'Preppy Nigga',
    subtitle: 'In Development',
    status: 'In Progress',
    description:
      'Premium project blending prep classics with Lagos street energy; currently in prototype and narrative build.',
    tags: ['Brand creation', 'Sampling', 'Launch strategy']
  }
]

export default function Portfolio () {
  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12'>
      <div className='text-center max-w-3xl mx-auto'>
        <p className='section-label'>Selected Works</p>
        <h1 className='mt-3 text-3xl sm:text-4xl font-bold text-slate-900'>
          Styling direction, brand building and cultural storytelling.
        </h1>
        <p className='mt-3 text-slate-500'>
          Each partnership is treated like a studio residency — with bespoke
          research, creative leadership and rigorous execution.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {portfolioItems.map(item => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
