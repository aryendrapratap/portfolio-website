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

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-cyan-soft blur-3xl"
                aria-hidden="true"
              />
              <img
                src="/images/aryendra-portrait.png"
                alt="Portrait of Aryendra Pratap Singh"
                className="relative aspect-[4/5] w-full object-cover object-top transition duration-500 [filter:grayscale(0.35)_contrast(1.02)] group-hover:[filter:grayscale(0)]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-mono text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {profile.name}
                </span>
                <span className="text-primary">{'</>'}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
