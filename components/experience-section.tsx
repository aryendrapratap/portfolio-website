import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { experiences } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading num="04" title="Experience" />
        </Reveal>

        <ol className="mt-12 border-l border-border">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={`${exp.org}-${exp.period}`} delay={i * 80}>
              <div className="relative pb-12 pl-8 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border border-primary bg-background"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {exp.period}
                  {exp.current && (
                    <span className="ml-2 inline-flex items-center gap-1.5 text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Current
                    </span>
                  )}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                  {exp.role}
                  <span className="text-primary"> · {exp.org}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {exp.location}
                </p>

                {exp.description && (
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                    {exp.description}
                  </p>
                )}

                {exp.stats && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {exp.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg border border-border bg-card px-4 py-2"
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
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
