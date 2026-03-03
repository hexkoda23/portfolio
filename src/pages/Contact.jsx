export default function Contact() {
  return (
    <div>
      {/* Dark hero — SabiLens CTA section */}
      <section className="bg-[#0f172a] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <p className="inline-flex items-center gap-2 font-mono font-semibold text-[0.7rem] uppercase tracking-[0.16em] text-orange-500 mb-4 before:block before:w-5 before:h-0.5 before:bg-orange-500 before:rounded-full justify-center mx-auto">
            Contact
          </p>
          <h1 className="font-syne font-bold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            AI Consulting, partnerships,<br />and development inquiries.
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-lg mx-auto">
            Share your project requirements. I typically reply within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">

            {/* Info card */}
            <div className="bg-white dark:bg-[#1e2435] border border-slate-100 dark:border-white/[0.08] rounded-2xl p-7 shadow-soft">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-600 dark:text-green-400 uppercase tracking-widest font-semibold">Currently Available</span>
              </div>
              <h3 className="font-syne font-bold text-xl text-slate-900 dark:text-white mb-3">Availability</h3>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Open for freelance AI development, technical consulting, and long-term partnerships.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Email', value: 'kehindeadeleke92@gmail.com', href: 'mailto:kehindeadeleke92@gmail.com' },
                  { label: 'Location', value: 'Lagos, Nigeria · Remote', href: null },
                  { label: 'Services', value: 'AI Design · NLP · Full Stack', href: null },
                ].map(item => (
                  <div key={item.label}>
                    <p className="font-mono text-[0.6rem] text-orange-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="font-sans text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 transition-colors">{item.value}</a>
                      : <p className="font-sans text-sm text-slate-500 dark:text-slate-400">{item.value}</p>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Form — SabiLens input style */}
            <form className="bg-white dark:bg-[#1e2435] border border-slate-100 dark:border-white/[0.08] rounded-2xl shadow-soft p-7 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="w-full p-4 border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-[#0d1117] font-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 dark:focus:border-orange-500 transition-all" placeholder="Your name" />
                <input type="email" className="w-full p-4 border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-[#0d1117] font-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 dark:focus:border-orange-500 transition-all" placeholder="Email" />
              </div>
              <input className="w-full p-4 border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-[#0d1117] font-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 dark:focus:border-orange-500 transition-all" placeholder="Company / Organization" />
              <input className="w-full p-4 border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-[#0d1117] font-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 dark:focus:border-orange-500 transition-all" placeholder="Project Type (e.g. RAG Chatbot, NLP Analysis)" />
              <textarea rows={6} className="w-full p-4 border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-[#0d1117] font-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 dark:focus:border-orange-500 transition-all resize-none" placeholder="Describe your project goals, timeline, and requirements…" />
              <button type="submit"
                className="w-full py-4 font-syne font-semibold text-base rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-glow hover:scale-[0.98] active:scale-95 transition-all">
                Send Request →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
