import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { experiences } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return <section id="experience" className="scroll-mt-20 border-t border-foreground/25"><div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
    <Reveal><SectionHeading num="04" title="Experience" /></Reveal>
    <ol className="mt-14 border-l border-foreground/60">{experiences.map((experience, index) => <Reveal as="li" key={`${experience.org}-${experience.period}`} delay={index * 60}><article className="relative grid gap-3 pb-12 pl-8 last:pb-0 md:grid-cols-[210px_1fr] md:gap-10"><span className="absolute -left-[10px] top-0 font-mono text-xl font-bold leading-none text-accent" aria-hidden="true">*</span>
      <div><p className="font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground">{experience.period}</p>{experience.current && <span className="tilted-label mt-3 inline-block -rotate-[3deg] border border-foreground bg-secondary px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">Current</span>}</div>
      <div><h3 className="font-mono text-base font-bold uppercase leading-snug tracking-wide">{experience.role}<span> · {experience.org}</span></h3><p className="mt-1 font-mono text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{experience.location}</p>{experience.description && <p className="mt-4 max-w-3xl leading-7 text-pretty">{experience.description}</p>}{experience.stats && <div className="mt-5 flex flex-wrap gap-x-10 gap-y-4">{experience.stats.map((stat) => <div key={stat.label}><div className="font-mono text-2xl font-bold">{stat.value}</div><div className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</div></div>)}</div>}</div>
    </article></Reveal>)}</ol>
  </div></section>
}
