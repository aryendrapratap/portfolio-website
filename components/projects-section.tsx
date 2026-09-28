import { Sparkles, Check } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { projects, profile, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

function TechRow({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={project.repo ?? profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        aria-label={`GitHub repository of ${project.title}`}
      >
        <GithubIcon className="size-3.5" />
        GitHub Repo
      </a>
    </div>
  )
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {features.map((f) => (
        <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-pretty">{f}</span>
        </li>
      ))}
    </ul>
  )
}

function FlagshipCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card">
        <div
          className="pointer-events-none absolute inset-0 grid-lines opacity-[0.18]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-cyan-soft blur-3xl" />
        <div className="relative grid gap-8 p-7 lg:grid-cols-[1.4fr_1fr] lg:p-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-accent-cyan-soft px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
                <Sparkles className="size-3" />
                Flagship
              </span>
              <span className="font-mono text-sm text-muted-foreground">
                {project.index}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-sm text-primary">{project.summary}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground text-pretty">
              {project.description}
            </p>
            <div className="mt-7">
              <ProjectLinks project={project} />
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:border-l lg:border-border lg:pl-8">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Key features
              </p>
              <FeatureList features={project.features} />
            </div>
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Stack
              </p>
              <TechRow tech={project.tech} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function StandardCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-sm text-primary">{project.index}</span>
          <span className="h-px flex-1 mx-4 bg-border transition-colors group-hover:bg-primary/30" />
        </div>
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-xs text-primary">{project.summary}</p>
        {project.label && (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {project.label}
          </p>
        )}
        <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>

        {project.stats && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-secondary/50 px-4 py-2"
              >
                <div className="font-heading text-lg font-bold text-primary">
                  {s.value}
                </div>
                <div className="font-mono text-[11px] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <FeatureList features={project.features} />
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Stack
          </p>
          <TechRow tech={project.tech} />
        </div>

        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  )
}

export function ProjectsSection() {
  const flagship = projects.find((p) => p.flagship)
  const rest = projects.filter((p) => !p.flagship)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading num="02" title="Featured Projects" />
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl font-mono text-sm text-muted-foreground">
            {'// selected work — full-stack AI, applied ML, and data systems'}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {flagship && <FlagshipCard project={flagship} />}

          <div className={cn('grid gap-8 lg:grid-cols-2')}>
            {rest.map((project, i) => (
              <div key={project.id} className={i === rest.length - 1 && rest.length % 2 !== 0 ? 'lg:col-span-2' : ''}>
                <StandardCard project={project} delay={i * 90} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
