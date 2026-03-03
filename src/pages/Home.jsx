import React from 'react'
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
    title: 'NYSC AI Chatbot',
    subtitle: 'Multilingual Intelligent Assistant',
    status: 'In Progress',
    description:
      'A pioneering AI solution designed to assist National Youth Service Corps (NYSC) members. Recognizing the struggle many corps members face in accessing timely and accurate information, this chatbot serves as a 24/7 knowledge hub. It uniquely supports English, Yoruba, and Hausa, ensuring inclusivity across diverse cultural backgrounds. This is the first stage of a larger vision to digitalize information access for Nigerian youth.',
    tags: ['NLP', 'Multi-Language', 'LLM', 'Python'],
    images: ["/nysc-ai-chatbot/nysc1.jpg", "/nysc-ai-chatbot/nysc2.jpg", "/nysc-ai-chatbot/nysc3.jpg"],
    github: 'https://github.com/hexkoda23/nysc_chatbot_ai',
    demo: 'https://nysc-ai-chatbot.vercel.app/'
  },
  {
    title: '23 — Fashion Platform & Brand Experience',
    subtitle: 'E‑commerce, Lookbook & Outfit Generator',
    status: 'Published',
    description:
      'A polished brand experience for 23 that blends shopping, storytelling and an outfit generator — built as a platform that inspires greatness, not just a storefront.',
    tags: ['E‑commerce', 'Fashion UX', 'React', 'Tailwind', 'Outfit Generator'],
    images: ["/23/23-1.jpg", "/23/23-2.jpg", "/23/23-3.jpg", "/23/23-4.jpg"]
  },
  {
    title: 'AI Resume & Job Match Scoring System',
    subtitle: 'NLP & Semantic Analysis',
    status: 'Published',
    description:
      'An intelligent system that analyzes CVs and job descriptions to provide match scores, missing skills identification, and personalized improvement recommendations.',
    tags: ['NLP', 'Embeddings', 'FastAPI', 'React'],
    images: ["/ai-resume/ai-resume1.jpg"]
  }
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <Hero />

      {/* ── EXPERTISE — SabiLens Features section pattern ── */}
      <section className="py-24 bg-white dark:bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-4 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full justify-center mx-auto">
              Expertise
            </p>
            <h2 className="font-syne font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
              Building AI solutions that solve real-world problems.
            </h2>
            <p className="font-sans text-lg text-slate-500 dark:text-slate-400">
              From concept to deployment — intelligent systems using NLP, ML, and multimodal AI.
            </p>
          </div>

          {/* SabiLens 3-col feature grid with white cards + border + hover-shadow-card hover:-translate-y-1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightCards.map((card, i) => (
              <div key={card.title}
                className={`bg-white dark:bg-[#1e2435] border border-slate-100 dark:border-white/[0.08] rounded-2xl p-6 shadow-soft hover:border-orange-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.10)] dark:hover:border-orange-500/30 dark:hover:shadow-[0_8px_32px_rgba(249,115,22,0.10)] hover:-translate-y-1 transition-all duration-300 animate-fade-up stagger-${i + 1}`}>
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 text-2xl">
                  ⚡
                </div>
                <p className="font-mono font-bold tracking-widest uppercase text-[0.65rem] text-orange-500 mb-2">{card.title}</p>
                <h3 className="font-syne font-semibold text-xl text-slate-900 dark:text-white mb-3">{card.detail}</h3>
                <p className="font-sans text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — SabiLens dark "Built for Everyone" section ── */}
      <section className="py-20 bg-accent text-white relative overflow-hidden">
        {/* SabiLens dot bg */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '9', label: 'AI Projects', sub: 'Production-ready' },
              { value: '15+', label: 'Technologies', sub: 'AI/ML frameworks' },
              { value: '3+', label: 'Years Experience', sub: 'Building AI systems' },
              { value: '100%', label: 'Delivery Rate', sub: 'Client satisfaction' },
            ].map((s, i) => (
              <div key={s.label}
                className={`glass-dark rounded-3xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300 animate-fade-up stagger-${i + 1}`}>
                <p className="font-syne font-bold text-4xl text-white mb-2">{s.value}</p>
                <p className="font-syne font-semibold text-white/80 text-lg mb-1">{s.label}</p>
                <p className="font-sans text-white/40 text-sm">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 bg-white dark:bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-12">
            <div>
              <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-4 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full">
                Featured Projects
              </p>
              <h2 className="font-syne font-bold text-slate-900 dark:text-white tracking-tight"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}>
                AI solutions addressing real-world challenges.
              </h2>
            </div>
            <a href="/portfolio"
              className="self-start px-6 py-3 font-syne font-semibold text-sm rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-glow hover:scale-[0.98] transition-all">
              See full archive →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map(project => (
              <ProjectCard key={project.title} {...project} onClick={() => navigate('/portfolio')} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — SabiLens "How It Works" section ── */}
      <section className="py-24 bg-white dark:bg-[#0d1117] relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
            <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-4 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full justify-center mx-auto">
              Process
            </p>
            <h2 className="font-syne font-bold text-slate-900 dark:text-white tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
              A systematic, research-driven approach.
            </h2>
          </div>

          {/* SabiLens How It Works grid */}
          <div className="relative">
            <div className="hidden lg:block absolute top-[10%] left-[15%] right-[15%] h-px bg-border z-0 border-dashed border-2" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {process.map((step, i) => (
                <div key={step.stage}
                  className={`flex flex-col items-center text-center animate-fade-up stagger-${i + 1}`}>
                  {/* SabiLens step number badge */}
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-syne font-bold text-2xl mb-8 shadow-glow">
                    {i + 1}
                  </div>
                  <div className="mb-6 w-full bg-white dark:bg-[#1e2435] rounded-2xl border border-slate-100 dark:border-white/[0.08] shadow-soft flex items-center justify-center p-5 min-h-[80px]">
                    <p className="font-mono font-bold text-[0.65rem] text-orange-500 uppercase tracking-widest">{step.duration}</p>
                  </div>
                  <h3 className="font-syne font-bold text-xl text-slate-900 dark:text-white mb-3">{step.stage}</h3>
                  <p className="font-sans text-slate-500 dark:text-slate-400 text-sm px-2 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — SabiLens Download/CTA section ── */}
      <section className="bg-accent py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-accent-2 border border-white/10 rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] opacity-[0.03]" />
            <div className="max-w-xl text-center lg:text-left relative z-10">
              <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-6 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full">
                Available for Work
              </p>
              <h2 className="font-syne font-bold text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
                Let's Build Something Intelligent Together
              </h2>
              <p className="font-sans text-lg text-white/60 mb-10">
                Open for AI consulting, freelance development, and long-term partnerships. Based in Lagos — working globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/contact"
                  className="px-8 py-4 font-syne font-semibold text-lg rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-glow hover:scale-[0.98] active:scale-95 transition-all">
                  Start a Project →
                </a>
                <a href="/about"
                  className="px-8 py-4 font-syne font-semibold text-lg rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
