import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const highlightCards = [
  {
    title: 'Styling & Editorial',
    detail: 'Campaign styling, lookbooks, celebrity fittings and visual rollouts.',
    meta: 'Vogue-level polish for African fashion houses.'
  },
  {
    title: 'Brand Leadership',
    detail: 'Launch strategy, collection planning, pricing architecture and pipeline.',
    meta: 'Trusted by Retrograde, Swag Out and Yellow Mellow.'
  },
  {
    title: 'Creative Direction',
    detail: 'Storytelling, concept decks, set design and production oversight.',
    meta: 'From sketches to launch-ready experiences.'
  }
]

const process = [
  {
    stage: 'Discover',
    description: 'Immersive audit of your culture, customers and aspiration.',
    duration: 'Week 01'
  },
  {
    stage: 'Design',
    description: 'Trend research, mood systems and capsule direction.',
    duration: 'Weeks 02—03'
  },
  {
    stage: 'Build',
    description: 'Talent sourcing, fittings, production supervision and QA.',
    duration: 'Weeks 04—06'
  },
  {
    stage: 'Release',
    description: 'Campaign rollout, retail choreography and press moments.',
    duration: 'Launch week'
  }
]

const featuredProjects = [
  {
    title: 'Swag Out',
    subtitle: 'Contemporary Streetwear',
    status: 'Published',
    description:
      'Scaled the Lagos-born label into a multi-city lifestyle brand with premium drops and experiential retail.',
    tags: ['Retail rollout', 'Collection direction', 'Team leadership']
  },
  {
    title: 'Retrograde',
    subtitle: 'Bold street codes',
    status: 'Published',
    description:
      'Curated expressive silhouettes and modular styling playbooks for editorial partners.',
    tags: ['Editorial', 'Campaign', 'Lookbook']
  }
]

export default function Home () {
  return (
    <div className='space-y-16 lg:space-y-20'>
      <Hero />

      <section className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <p className='section-label'>Expertise</p>
            <h2 className='text-3xl font-bold text-slate-900 mt-2'>
              End-to-end leadership for ambitious fashion teams.
            </h2>
          </div>
          <p className='text-slate-500 max-w-xl'>
            From capsule ideation to go-to-market, I orchestrate styling, design
            and brand strategy so founders can focus on scale.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {highlightCards.map(card => (
            <div key={card.title} className='floating-card'>
              <div className='text-xs uppercase tracking-[0.2em] text-orange-400'>
                {card.title}
              </div>
              <p className='mt-3 text-lg font-semibold text-slate-900'>
                {card.detail}
              </p>
              <p className='mt-2 text-sm text-slate-500'>{card.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='px-4 sm:px-6'>
        <div className='glass-panel max-w-6xl mx-auto p-8 md:p-12 grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-center'>
          <div>
            <p className='section-label text-slate-300'>The brands</p>
            <h3 className='mt-3 text-3xl font-semibold'>
              Retrograde · Yellow Mellow · Swag Out · Preppy Nigga
            </h3>
            <p className='mt-4 text-slate-200 text-base'>
              Multi-label leadership with cross-functional teams — blending
              Lagos grit with global appeal. I build systems for consistency,
              profitability and culture.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <span className='badge-soft bg-white/15 text-white border border-white/20'>
                Production oversight
              </span>
              <span className='badge-soft bg-white/15 text-white border border-white/20'>
                Styling sprints
              </span>
              <span className='badge-soft bg-white/15 text-white border border-white/20'>
                Growth strategy
              </span>
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-2xl bg-white/10 p-5 border border-white/10'>
              <p className='text-sm text-slate-200'>Swag Out</p>
              <p className='text-3xl font-bold text-white mt-2'>33%</p>
              <p className='text-xs text-slate-300'>
                YoY revenue lift since 2022
              </p>
            </div>
            <div className='rounded-2xl bg-white/10 p-5 border border-white/10'>
              <p className='text-sm text-slate-200'>Retrograde</p>
              <p className='text-3xl font-bold text-white mt-2'>11</p>
              <p className='text-xs text-slate-300'>
                Editorial features this year
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
          <div>
            <p className='section-label'>Recent cases</p>
            <h2 className='text-3xl font-bold text-slate-900 mt-2'>
              Work grounded in cultural precision and global taste.
            </h2>
          </div>
          <a href='/portfolio' className='btn-primary self-start'>
            See full archive
          </a>
        </div>
        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          {featuredProjects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-6 pb-16'>
        <div className='rounded-[32px] bg-white border border-slate-100 p-8 md:p-12'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='section-label text-slate-400'>Method</p>
              <h2 className='text-3xl font-bold text-slate-900 mt-2'>
                A thoughtful, sprint-based process.
              </h2>
            </div>
            <a href='/contact' className='btn-secondary text-slate-900 border-slate-200'>
              Start a project
            </a>
          </div>
          <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {process.map(step => (
              <div
                key={step.stage}
                className='border border-slate-100 rounded-2xl p-5 flex flex-col gap-3'
              >
                <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>
                  {step.duration}
                </p>
                <h4 className='text-xl font-semibold text-slate-900'>
                  {step.stage}
                </h4>
                <p className='text-sm text-slate-500'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}