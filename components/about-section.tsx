import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { about, profile } from '@/lib/portfolio-data'

const focusTags = ['RAG', 'NLP', 'OCR', 'Vector search', 'FastAPI', 'PostgreSQL']

export function AboutSection() {
  return <section id="about" className="scroll-mt-20 border-t border-foreground/25">
    <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
      <Reveal><SectionHeading num="01" title="About" /></Reveal>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal><img src="/images/editorial-desk.png" alt="Desk and keyboard workspace" className="aspect-[4/5] max-h-[620px] w-full object-cover grayscale" /></Reveal>
        <Reveal delay={100}>
          <div className="mb-6 inline-block border-2 border-foreground bg-secondary px-4 py-3 font-mono text-sm font-bold uppercase">{profile.name} &lt;/&gt;</div>
          <p className="text-base leading-8 text-pretty sm:text-lg"><strong className="font-mono text-sm font-bold uppercase leading-relaxed">Computer Science undergraduate at Lakehead University (Honours, expected 2027), focused on software development, applied AI, and data systems.</strong>{about.paragraph.slice('Computer Science undergraduate at Lakehead University (Honours, expected 2027), focused on software development, applied AI, and data systems.'.length)}</p>
          <div className="mt-8 flex flex-wrap gap-2">{focusTags.map((tag) => <span key={tag} className="border border-foreground bg-secondary px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wide">{tag}</span>)}</div>
        </Reveal>
      </div>
    </div>
  </section>
}
