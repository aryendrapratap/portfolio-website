import { cn } from '@/lib/utils'

function Smile() {
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="size-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="24" cy="24" r="19" /><path d="M17 20v1m14-1v1M16 28c2 5 6 7 9 7s7-2 9-7" /></svg>
}

export function SectionHeading({ num, title, className }: { num: string; title: string; className?: string }) {
  const parts = title === 'Featured Projects' ? ['Featured', 'Projects'] : title === 'Skills · I work with' ? ['Skills', 'I work with'] : null
  return <div className={cn('flex items-center gap-4', className)}>
    <span className="font-mono text-xs font-medium text-muted-foreground">{num}.</span>
    <h2 aria-label={title} className="flex max-w-full flex-wrap items-center gap-2 font-mono text-lg font-bold uppercase leading-tight tracking-[.04em] sm:text-2xl">
      <span className="tilted-label inline-flex -rotate-[3deg] items-center gap-2 border-2 border-foreground bg-secondary px-4 py-3 sm:px-6"><Smile />{parts ? <span className="sr-only">{title}</span> : title}{parts?.[0]}</span>
      {parts?.[1] && <span aria-hidden="true" className="tilted-label inline-block rotate-[2deg] border-2 border-foreground bg-secondary px-4 py-3 sm:px-6">{parts[1]}</span>}
    </h2>
    <span className="h-px flex-1 bg-accent" aria-hidden="true" />
  </div>
}
