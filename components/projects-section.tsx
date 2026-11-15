import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { projects, profile, type Project } from '@/lib/portfolio-data'

function TechRow({ tech }: { tech: string[] }) {
  return <ul className="flex flex-wrap gap-2">{tech.map((item) => <li key={item} className="border border-foreground bg-secondary px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase">{item}</li>)}</ul>
}

function ProjectRow({ project, delay }: { project: Project; delay: number }) {
  return <Reveal delay={delay}><article className="grid gap-6 border-t border-foreground/35 py-10 md:grid-cols-[150px_1fr] md:gap-10 lg:grid-cols-[190px_1fr]">
    <div className="flex items-start gap-3 font-mono font-bold"><span className="text-5xl leading-none text-accent">*</span><span className="pt-2 text-lg">{project.index}</span></div>
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-3">{project.flagship && <span className="tilted-label -rotate-[4deg] border-2 border-foreground bg-secondary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">Flagship</span>}{project.label && <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{project.label}</p>}</div>
      <h3 className="mt-3 max-w-2xl font-mono text-xl font-bold uppercase leading-tight tracking-wide underline decoration-accent decoration-2 underline-offset-4 sm:text-2xl">{project.title}</h3>
      <p className="mt-3 font-mono text-xs font-medium uppercase leading-relaxed tracking-wide text-muted-foreground">{project.summary}</p>
      <p className="mt-4 max-w-3xl leading-7 text-pretty">{project.description}</p>
      {project.stats && <div className="mt-6 flex flex-wrap gap-x-10 gap-y-5">{project.stats.map((stat) => <div key={stat.label}><div className="font-mono text-3xl font-bold">{stat.value}</div><div className="mt-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</div></div>)}</div>}
      <ul className="mt-6 grid gap-2">{project.features.map((feature) => <li key={feature} className="flex gap-3 leading-relaxed text-pretty"><span className="font-mono font-bold text-accent" aria-hidden="true">*</span><span>{feature}</span></li>)}</ul>
      <div className="mt-7"><p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Stack</p><TechRow tech={project.tech} /></div>
      <a href={project.repo ?? profile.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository of ${project.title}`} className="mt-6 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase underline decoration-accent decoration-2 underline-offset-4 hover:text-muted-foreground">GitHub Repo <ArrowUpRight className="size-4" /></a>
    </div>
  </article></Reveal>
}

export function ProjectsSection() {
  return <section id="projects" className="scroll-mt-20 border-t border-foreground/25"><div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
    <Reveal><SectionHeading num="02" title="Featured Projects" /></Reveal>
    <Reveal><p className="mt-8 font-mono text-xs font-medium text-muted-foreground">{'// selected work — full-stack AI, applied ML, and data systems'}</p></Reveal>
    <div className="mt-10">{projects.map((project, index) => <ProjectRow key={project.id} project={project} delay={index * 60} />)}<div className="border-t border-foreground/35" /></div>
  </div></section>
}
