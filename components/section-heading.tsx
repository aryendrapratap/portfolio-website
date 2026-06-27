import { cn } from '@/lib/utils'

export function SectionHeading({
  num,
  title,
  className,
}: {
  num: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span className="font-mono text-sm text-primary">{num}.</span>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
