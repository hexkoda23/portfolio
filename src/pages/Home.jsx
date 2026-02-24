import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { useNavigate } from 'react-router-dom'

const highlightCards = [
  {
    title: 'Natural Language Processing',
    detail: 'Advanced NLP solutions using embeddings, semantic similarity, and transformer models.',
    meta: 'Building intelligent text analysis and understanding systems.'
  },
  {
    title: 'Machine Learning Engineering',
    detail: 'Production-ready ML systems with anomaly detection, predictive analytics, and model optimization.',
    meta: 'From research to deployment-ready solutions.'
  },
  {
    title: 'AI System Design',
    detail: 'End-to-end AI applications combining multiple technologies for real-world problem solving.',
    meta: 'Architecting scalable, intelligent systems.'
  }
]

const process = [
  {
    stage: 'Research & Analysis',
    description: 'Deep dive into problem space, data exploration, and technology evaluation.',
    duration: 'Week 01'
  },
  {
    stage: 'Architecture Design',
    description: 'System design, model selection, and technical architecture planning.',
    duration: 'Weeks 02—03'
  },
  {
    stage: 'Development & Training',
    description: 'Implementation, model training, testing, and iterative improvement.',
    duration: 'Weeks 04—06'
  },
  {
    stage: 'Deployment & Optimization',
    description: 'Production deployment, monitoring, and continuous performance optimization.',
    duration: 'Launch week'
  }
]

const featuredProjects = [
  {
    title: 'AI Resume & Job Match Scoring System',
    subtitle: 'NLP & Semantic Analysis',
    status: 'Published',
    description:
      'An intelligent system that analyzes CVs and job descriptions to provide match scores, missing skills identification, and personalized improvement recommendations.',
    tags: ['NLP', 'Embeddings', 'FastAPI', 'React'],
    images: ["/ai-resume/ai-resume1.jpg"]
  },
  {
    title: 'Intelligent AI Study Planner',
    subtitle: 'Adaptive Learning Agent',
    status: 'Published',
    description:
      'An AI-powered adaptive learning system that creates personalized study plans and dynamically adjusts them based on user progress and feedback.',
    tags: ['AI Agent', 'Vector DB', 'LLM', 'Next.js'],
    images: [ "/ai-study/ai-study1.jpg"]
  }
]

export default function Home () {
  const navigate = useNavigate()
  
  return (
    <div className='space-y-16 lg:space-y-20'>
      <Hero />

      <section className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <p className='section-label text-slate-900 dark:text-slate-400'>Expertise</p>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-2'>
              Building AI solutions that solve real-world problems.
            </h2>
          </div>
          <p className='text-slate-900 dark:text-slate-400 max-w-xl'>
            From concept to deployment, I develop intelligent systems using cutting-edge 
            AI technologies including NLP, machine learning, and multimodal AI to create 
            practical, impactful solutions.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {highlightCards.map(card => (
            <div key={card.title} className='floating-card dark:bg-slate-900 dark:border-slate-800'>
              <div className='text-xs uppercase tracking-[0.2em] text-orange-400'>
                {card.title}
              </div>
              <p className='mt-3 text-lg font-semibold text-slate-900 dark:text-white'>
                {card.detail}
              </p>
              <p className='mt-2 text-sm text-slate-900 dark:text-slate-400'>{card.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='px-4 sm:px-6'>
        <div className='glass-panel max-w-6xl mx-auto p-8 md:p-12 grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-center'>
          <div>
            <p className='section-label text-slate-900 dark:text-slate-300'>Technologies</p>
            <h3 className='mt-3 text-3xl font-semibold text-slate-900 dark:text-white'>
              NLP · Machine Learning · RAG · Multimodal AI
            </h3>
            <p className='mt-4 text-slate-900 dark:text-slate-200 text-base'>
              Specializing in practical AI applications that deliver measurable value. 
              I combine cutting-edge research with production-ready engineering to build 
              systems that solve real business challenges.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <span className='badge-soft bg-white dark:bg-white/15 text-slate-700 dark:text-white border border-slate-200 dark:border-white/20'>
                Model Development
              </span>
              <span className='badge-soft bg-white dark:bg-white/15 text-slate-700 dark:text-white border border-slate-200 dark:border-white/20'>
                System Architecture
              </span>
              <span className='badge-soft bg-white dark:bg-white/15 text-slate-700 dark:text-white border border-slate-200 dark:border-white/20'>
                Production Deployment
              </span>
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-2xl bg-white dark:bg-[#1e2435] p-5 border border-slate-200 dark:border-[#2d3748]'>
              <p className='text-sm text-slate-900 dark:text-slate-200'>AI Projects</p>
              <p className='text-3xl font-bold text-slate-900 dark:text-white mt-2'>9</p>
              <p className='text-xs text-slate-900 dark:text-slate-300'>
                Production-ready solutions
              </p>
            </div>
            <div className='rounded-2xl bg-white dark:bg-[#1e2435] p-5 border border-slate-200 dark:border-[#2d3748]'>
              <p className='text-sm text-slate-900 dark:text-slate-200'>Technologies</p>
              <p className='text-3xl font-bold text-slate-900 dark:text-white mt-2'>15+</p>
              <p className='text-xs text-slate-900 dark:text-slate-300'>
                AI/ML frameworks mastered
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
          <div>
            <p className='section-label text-slate-900 dark:text-slate-400'>Featured Projects</p>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-2'>
              AI solutions addressing real-world challenges.
            </h2>
          </div>
          <a href='/portfolio' className='btn-primary self-start'>
            See full archive
          </a>
        </div>
        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          {featuredProjects.map(project => (
            <ProjectCard 
              key={project.title} 
              {...project} 
              onClick={() => navigate('/portfolio')}
            />
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-6 pb-16'>
        <div className='rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='section-label text-slate-900 dark:text-slate-500'>Development Process</p>
              <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-2'>
                A systematic, research-driven approach.
              </h2>
            </div>
            <a href='/contact' className='btn-secondary text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'>
              Start a project
            </a>
          </div>
          <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {process.map(step => (
              <div
                key={step.stage}
                className='bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 flex flex-col gap-3'
              >
                <p className='text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-slate-500'>
                  {step.duration}
                </p>
                <h4 className='text-xl font-semibold text-slate-900 dark:text-white'>
                  {step.stage}
                </h4>
                <p className='text-sm text-slate-900 dark:text-slate-400'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
