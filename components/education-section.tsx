import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return <section id="education" className="scroll-mt-20 border-t border-foreground/25"><div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
    <Reveal><SectionHeading num="05" title="Education" /></Reveal>
    <Reveal className="mt-14"><article className="border-t border-foreground/40 py-8"><div className="flex items-start gap-5"><GraduationCap aria-hidden="true" className="mt-1 size-10 stroke-[1.5]" /><div><h3 className="font-mono text-lg font-bold uppercase tracking-wide">{education.school}</h3><p className="mt-2 font-mono text-xs font-medium uppercase tracking-wide">{education.degree}</p><p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{education.location} · {education.expected}</p></div></div>
      <div className="mt-8 border-t border-accent pt-6"><p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Relevant coursework</p><ul className="flex flex-wrap gap-2">{education.coursework.map((course) => <li key={course} className="border border-foreground bg-secondary px-3 py-2 font-mono text-[10px] font-medium uppercase">{course}</li>)}</ul></div>
    </article></Reveal>
  </div></section>
}
