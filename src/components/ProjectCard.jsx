import Reveal from './anim/Reveal'

const variants = ['up', 'zoom', 'left', 'right', 'blur', 'rot', 'flip']

/** Image-led project card with zoom hover + varied entrance. */
export default function ProjectCard({ project, index = 0, onClick }) {
  const { title, subtitle, status, description, tags, images } = project
  const variant = variants[index % variants.length]

  return (
    <Reveal variant={variant} delay={(index % 3) * 0.08}>
      <article
        onClick={onClick}
        className="card-lux rounded-3xl overflow-hidden cursor-pointer group h-full flex flex-col"
      >
        {images?.[0] && (
          <div className="img-zoom aspect-[16/10] bg-surface relative">
            <img src={images[0]} alt={title} loading="lazy" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-4 left-4 text-white font-sans font-medium text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              View case study →
            </span>
            {status && (
              <span className={`absolute top-4 right-4 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] px-3 py-1.5 rounded-full backdrop-blur-md border
                ${status === 'Client Work'
                  ? 'bg-black/40 border-white/25 text-white'
                  : 'bg-white/70 dark:bg-black/40 border-line text-ink dark:text-white'}`}>
                {status}
              </span>
            )}
          </div>
        )}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember">{subtitle}</span>
          <h3 className="font-display font-semibold text-xl text-ink leading-snug group-hover:text-ember transition-colors duration-300">{title}</h3>
          <p className="text-muted text-sm leading-relaxed line-clamp-3">{description}</p>
          {tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {tags.slice(0, 5).map(tag => (
                <span key={tag} className="font-mono text-[0.6rem] px-2.5 py-1 rounded-full bg-surface text-muted border border-line group-hover:border-line-strong transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}
