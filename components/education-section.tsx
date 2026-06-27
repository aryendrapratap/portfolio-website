import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading num="05" title="Education" />
        </Reveal>

        <Reveal className="mt-12">
          <div className="rounded-xl border border-border bg-card p-7 lg:p-9">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-accent-cyan-soft text-primary">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {education.school}
                </h3>
                <p className="font-mono text-sm text-primary">{education.degree}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {education.location} · {education.expected}
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Relevant coursework
              </p>
              <ul className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
