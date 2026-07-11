import React, { useState } from 'react'
import { Send, Mail, MapPin, Briefcase } from 'lucide-react'
import Reveal from '../components/anim/Reveal'

const inputCls =
  'w-full p-4 rounded-2xl bg-card border border-line font-sans text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ember focus:ring-2 transition-all duration-300'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio inquiry — ${data.get('type') || 'Project'}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\n\n${data.get('message')}`
    )
    window.location.href = `mailto:kehindeadeleke92@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-grad)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Reveal variant="down" as="p" className="eyebrow justify-center mb-5" style={{ display: 'inline-flex' }}>Contact</Reveal>
          <Reveal variant="blur" as="h1" className="font-display font-semibold text-ink tracking-tight leading-[1.04] mb-6"
            style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
            Tell me what you're<br /><span className="text-ember-grad italic">trying to build.</span>
          </Reveal>
          <Reveal variant="up" delay={0.2} as="p" className="text-lg text-muted max-w-lg mx-auto font-light">
            Roles, contracts, consulting, or ambitious ideas — I reply within 48 hours.
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Info rail */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'kehindeadeleke92@gmail.com', href: 'mailto:kehindeadeleke92@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria · Remote worldwide' },
                { icon: Briefcase, label: 'Open to', value: 'Full-time roles · Contract · AI consulting' },
              ].map((item, i) => (
                <Reveal key={item.label} variant="right" delay={i * 0.12}>
                  <div className="card-lux rounded-[1.6rem] p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--ember-soft)' }}>
                      <item.icon className="w-5 h-5 text-ember" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted mb-1.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="font-sans font-medium text-ink hover:text-ember transition-colors break-all">{item.value}</a>
                        : <p className="font-sans font-medium text-ink">{item.value}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal variant="right" delay={0.4}>
                <div className="rounded-[1.6rem] p-6 border border-line" style={{ background: 'var(--pine-soft)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 dot-live" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">Currently available</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Actively interviewing for software engineering roles and taking on
                    select client platforms.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal variant="left" delay={0.15}>
              <form onSubmit={onSubmit} className="card-lux rounded-[2rem] p-8 grid gap-5" style={{ '--tw-ring-color': 'var(--ember-soft)' }}>
                <div className="grid gap-5 md:grid-cols-2">
                  <input name="name" required className={inputCls} placeholder="Your name" />
                  <input name="email" type="email" required className={inputCls} placeholder="Email address" />
                </div>
                <input name="company" className={inputCls} placeholder="Company / Organization" />
                <input name="type" className={inputCls} placeholder="What is it? (Role, platform build, AI system…)" />
                <textarea name="message" rows={6} required className={`${inputCls} resize-none`} placeholder="Tell me about the goals, timeline, and what success looks like…" />
                <button type="submit" className="btn-ember w-full py-4 text-base group">
                  {sent ? 'Opening your mail client…' : 'Send Message'}
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
