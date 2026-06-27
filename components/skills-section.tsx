import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading num="03" title="Skills" />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60} className="bg-card">
              <div className="flex h-full flex-col p-6">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                  <span className="text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
