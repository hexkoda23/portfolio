import React from 'react'

const roles = [
  {
    title: 'Data Annotation Specialist · Awarri',
    detail: 'Served as a key contributor to a high-precision computer vision project aimed at revolutionizing healthcare diagnostics through AI. Meticulously performed semantic segmentation and object detection tasks on complex hospital laboratory datasets. Ensured the production of high-quality, pixel-perfect training data, which was critical for building robust AI models capable of accurately detecting medical equipment and anomalies in real-world clinical environments.',
    year: 'Dec 2025 — Jan 2025'
  },
  {
    title: 'AI Developer · Nigerian Communications Commission (NCC)',
    detail: 'Spearheaded the strategic integration of cutting-edge AI technologies into national regulatory frameworks, significantly enhancing operational efficiency and data-driven decision-making processes. Designed, developed, and deployed sophisticated machine learning models to automate complex regulatory compliance tasks. Deepened technical expertise in Natural Language Processing (NLP) and advanced data analytics while collaborating with cross-functional teams to drive impactful digital transformation initiatives across the organization.',
    year: 'Aug 2025 — Jan 2025'
  },
  {
    title: 'AI Developer · Freelance',
    detail: 'Building intelligent applications using LLMs, RAG, and modern web technologies. delivering custom AI solutions that address specific business needs and drive innovation.',
    year: '2023 — Present'
  },
  {
    title: 'Software Engineer · Tech Startups',
    detail: 'Developing scalable backend systems and interactive frontend interfaces. Collaborating with agile teams to deliver high-quality software products.',
    year: '2021 — 2023'
  }
]

const capabilities = [
  'Natural Language Processing (NLP)',
  'Large Language Models (LLMs)',
  'RAG & Vector Databases',
  'AI Agents & Automation',
  'Full Stack Development (React/Python)',
  'API Design & Integration'
]

export default function About () {
  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12'>
      <div className='grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start'>
        <div className='rounded-[28px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-10 shadow-xl'>
          <p className='section-label text-slate-900 dark:text-slate-400'>About</p>
          <h1 className='mt-4 text-3xl font-bold text-slate-900 dark:text-white'>
            Building intelligent systems that solve complex problems.
          </h1>
          <p className='mt-4 text-slate-900 dark:text-slate-300'>
            I’m Adeleke Kehinde — an AI Developer and Software Engineer passionate about 
            bridging the gap between cutting-edge AI research and practical applications. 
            My work focuses on creating autonomous agents, intelligent assistants, and 
            data-driven solutions that drive real value.
          </p>
          <div className='mt-8 grid gap-4'>
            {roles.map(role => (
              <div key={role.title} className='border border-slate-100 dark:border-slate-800 rounded-2xl p-5'>
                <div className='text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-slate-400'>
                  {role.year}
                </div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mt-2'>{role.title}</h3>
                <p className='text-sm text-slate-900 dark:text-slate-300 mt-1'>{role.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className='space-y-6'>
          <div className='contact-card dark:bg-slate-900 dark:border-slate-800'>
            <h4 className='text-base font-semibold text-slate-900 dark:text-white'>Capabilities</h4>
            <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-900 dark:text-slate-300'>
              {capabilities.map(item => (
                <li key={item} className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-900 dark:bg-white' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='contact-card dark:bg-slate-900 dark:border-slate-800'>
            <h4 className='text-base font-semibold text-slate-900 dark:text-white'>Location</h4>
            <p className='text-sm text-slate-900 dark:text-slate-400'>Lagos, Nigeria — available worldwide</p>
            <div className='mt-4'>
              <h4 className='text-base font-semibold text-slate-900 dark:text-white'>Contact</h4>
              <p className='text-sm text-slate-900 dark:text-slate-400'>kehindeadeleke92@gmail.com</p>
            </div>
            <a
              href='/contact'
              className='mt-6 inline-flex justify-center w-full px-4 py-3 text-sm font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900'
            >
              Request availability
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
