import Reveal from './anim/Reveal'
import BrowserFrame from './BrowserFrame'
import { frameLabel } from '../data/projects'

const variants = ['up', 'zoom', 'left', 'right', 'blur', 'rot', 'flip']

/** Image-led project card: screenshot in a browser frame, zoom hover, varied entrance. */
export default function ProjectCard({ project, index = 0, onClick }) {
  const { title, subtitle, status, description, tags, images, year } = project
  const variant = variants[index % variants.length]

  return (
    <Reveal variant={variant} delay={(index % 3) * 0.08}>
      <article
        onClick={onClick}
        className="card-lux rounded-3xl overflow-hidden cursor-pointer group h-full flex flex-col"
      >
        {images?.[0] && (
          <div className="p-3 pb-0 relative" style={{ background: 'linear-gradient(160deg, var(--ember-soft), var(--pine-soft))' }}>
            <BrowserFrame src={images[0]} alt={title} label={frameLabel(project)} art={project.art}
              className="img-zoom rounded-b-none border-b-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <span className="absolute bottom-4 left-6 text-white font-sans font-medium text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              View case study →
            </span>
            {status && (
              <span className="absolute top-6 right-6 font-mono text-[0.58rem] font-medium uppercase tracking-[0.14em] px-3 py-1.5 rounded-full backdrop-blur-md border bg-black/50 border-white/25 text-white">
                {status}
              </span>
            )}
          </div>
        )}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember truncate">{subtitle}</span>
            {year && <span className="font-mono text-[0.58rem] text-muted shrink-0">{year}</span>}
          </div>
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
