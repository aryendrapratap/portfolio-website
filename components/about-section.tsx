import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { about, profile } from '@/lib/portfolio-data'

const focusTags = ['RAG', 'NLP', 'OCR', 'Vector search', 'FastAPI', 'PostgreSQL']

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading num="01" title="About" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {about.paragraph}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {focusTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="rounded-lg border border-border bg-card p-6 font-mono text-sm">
              <div className="flex flex-col gap-1 py-2">
                <dt className="text-xs uppercase tracking-widest text-primary">
                  Education
                </dt>
                <dd className="text-foreground">Honours BSc Computer Science</dd>
              </div>
              <div className="flex flex-col gap-1 border-t border-border py-2">
                <dt className="text-xs uppercase tracking-widest text-primary">
                  Status
                </dt>
                <dd className="text-foreground">Expected April 2027</dd>
              </div>
              <div className="flex flex-col gap-1 border-t border-border py-2">
                <dt className="text-xs uppercase tracking-widest text-primary">
                  Seeking
                </dt>
                <dd className="text-foreground">
                  Summer 2026 / 2027 internships &amp; co-ops
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-t border-border py-2">
                <dt className="text-xs uppercase tracking-widest text-primary">
                  Based in
                </dt>
                <dd className="text-foreground">{profile.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
