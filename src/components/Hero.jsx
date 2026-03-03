import React from 'react'

const stats = [
  { label: 'AI Projects', value: '9' },
  { label: 'Technologies', value: '15+' },
  { label: 'Production Ready', value: '100%' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden">

      {/* Background blobs + dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16 w-full">

        {/* MOBILE ONLY: circular photo above text */}
        <div className="flex justify-center mb-10 lg:hidden">
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
              <img src="/Image/mee.jpg" alt="Adeleke Kehinde"
                className="w-full h-full object-cover"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="w-full h-full bg-[#1e293b] items-center justify-center text-4xl" style={{ display: 'none' }}>👨💻</div>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#0f172a] animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* LEFT: Text */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold text-sm mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              AI & Full-Stack Developer
            </div>

            <h1 className="font-syne font-extrabold text-white leading-[1.1] mb-6 animate-fade-up tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.75rem)', animationDelay: '0.1s' }}>
              Building intelligent AI<br />solutions that solve{' '}
              <span className="relative inline-block" style={{
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 60%, #fed7aa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>
                real-world problems.
                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none" style={{ color: 'rgba(249,115,22,0.3)' }}>
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-lg text-white/60 mb-10 leading-relaxed animate-fade-up max-w-lg mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
              Specializing in NLP, Machine Learning, and AI system design. I build production-ready solutions that combine cutting-edge research with practical engineering to deliver measurable business value.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="/portfolio" className="w-full sm:w-auto px-8 py-4 font-syne font-semibold text-lg rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_8px_24px_rgba(249,115,22,0.35)] hover:shadow-[0_12px_32px_rgba(249,115,22,0.5)] hover:scale-[0.98] active:scale-95 transition-all text-center">
                View Portfolio
              </a>
              <a href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 font-syne font-semibold text-lg text-white/80 hover:text-white py-4 px-6 rounded-xl hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all">
                Get in Touch
              </a>
              <a href="/cv/Adeleke_Kehinde_CV.pdf" download className="w-full sm:w-auto flex items-center justify-center gap-2 font-syne font-semibold text-lg text-white/80 hover:text-white py-4 px-6 rounded-xl hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all">
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="w-1 h-1 rounded-full bg-white/20" />}
                  <div className="flex items-center gap-2">
                    <span className="font-syne font-bold text-white text-xl">{s.value}</span>
                    <span className="font-sans text-white/40 text-sm">{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT: Desktop tall card + floating cards — hidden on mobile */}
          <div className="relative hidden lg:block lg:ml-auto w-full max-sm mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute w-72 h-72 bg-orange-500/15 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative mx-auto w-[300px] rounded-[32px] border-[6px] border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden z-10">
              <img src="/Image/mee.jpg" alt="Adeleke Kehinde — AI Developer"
                className="w-full h-[420px] object-cover"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="hidden w-full h-[420px] bg-[#1e293b] items-center justify-center flex-col gap-4">
                <span className="text-6xl">👨💻</span>
                <p className="font-syne font-bold text-white text-xl">AI Developer</p>
              </div>
            </div>
            {/* Floating card 1 */}
            <div className="absolute -right-12 top-24 z-20 animate-float bg-white p-4 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-slate-100 w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[0.6rem] font-bold text-green-700 tracking-wide uppercase">Available</span>
              </div>
              <p className="font-syne font-semibold text-slate-800 text-sm leading-tight">Open to new projects</p>
              <p className="font-sans text-xs text-slate-400 mt-1">Lagos, Nigeria · Remote</p>
            </div>
            {/* Floating card 2 */}
            <div className="absolute -left-16 bottom-32 z-20 animate-float bg-white p-4 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-slate-100 w-52" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-500">⚡</span>
                <span className="font-mono text-[0.6rem] font-bold text-slate-700 tracking-wide uppercase">Current Focus</span>
              </div>
              <p className="font-syne font-semibold text-slate-800 text-sm leading-tight">Production AI Systems</p>
              <p className="font-sans text-xs text-slate-400 mt-1">RAG · LLMs · NLP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
