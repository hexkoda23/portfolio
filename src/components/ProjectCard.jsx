export default function ProjectCard({ title, subtitle, status, description, tags, images, onClick }) {
  return (
    <div onClick={onClick}
      className="bg-white dark:bg-[#1e2435] border border-slate-100 dark:border-white/[0.08] rounded-2xl p-6 shadow-soft hover:border-orange-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.10)] dark:hover:border-orange-500/30 dark:hover:shadow-[0_8px_32px_rgba(249,115,22,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-4">
      {images?.[0] && (
        <div className="rounded-xl overflow-hidden aspect-video bg-slate-50 dark:bg-[#0d1117]">
          <img src={images[0]} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex items-center justify-between">
        <span className="font-mono font-bold text-[0.65rem] uppercase tracking-widest text-orange-500">{subtitle}</span>
        {status && (
          <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500">{status}</span>
        )}
      </div>
      <h3 className="font-syne font-bold text-xl text-slate-900 dark:text-white leading-snug">{title}</h3>
      <p className="font-sans text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-100 dark:border-white/8">
          {tags.map(tag => (
            <span key={tag} className="font-mono text-[0.62rem] font-medium px-2.5 py-1 rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-white/8">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
