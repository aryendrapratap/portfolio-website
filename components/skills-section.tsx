import { Brain, Cloud, Code, Database, Monitor, Server, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

const icons = [Code, Brain, Server, Database, Monitor, Cloud, Wrench]

export function SkillsSection() {
  return <section id="skills" className="scroll-mt-20 border-t border-foreground/25"><div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
    <Reveal><SectionHeading num="03" title="Skills · I work with" /></Reveal>
    <div className="mt-14 grid gap-x-12 md:grid-cols-2">{skillGroups.map((group, index) => { const Icon = icons[index] ?? Code; return <Reveal key={group.label} delay={index * 50}><article className="grid grid-cols-[64px_1fr] gap-4 border-t border-foreground/35 py-7"><Icon aria-hidden="true" className="size-12 stroke-[1.5]" /><div><h3 className="font-mono text-sm font-bold uppercase tracking-wide underline decoration-accent decoration-2 underline-offset-4">{group.label}</h3><p className="mt-3 leading-7 text-pretty">{group.skills.join(', ')}</p></div></article></Reveal>})}</div>
  </div></section>
}
