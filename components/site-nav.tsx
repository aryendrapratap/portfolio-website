'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/portfolio-data'

export function SiteNav() {
  const [active, setActive] = useState<string>('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.href.slice(1))).filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) }), { rootMargin: '-45% 0px -50% 0px', threshold: 0 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const links = <>
    {navItems.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className={cn('flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider transition-colors hover:text-accent', active === item.href.slice(1) ? 'text-foreground' : 'text-muted-foreground')}><span className="text-accent">{item.num}.</span>{item.label}</a></li>)}
    <li><a href="#contact" onClick={() => setOpen(false)} className="font-mono text-[11px] font-bold uppercase tracking-wider underline decoration-accent decoration-2 underline-offset-4">Contact</a></li>
  </>

  return <header className="sticky top-0 z-50 border-b border-foreground/25 bg-background">
    <nav aria-label="Primary" className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 lg:px-10">
      <a href="#top" className="font-mono text-sm font-bold tracking-tight"><span className="text-accent">&gt;</span>aps<span className="text-accent">_</span></a>
      <ul className="hidden items-center gap-6 md:flex">{links}</ul>
      <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex size-10 items-center justify-center border border-foreground md:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
    </nav>
    {open && <div className="fixed inset-0 top-14 z-40 min-h-[calc(100dvh-3.5rem)] bg-background px-8 py-12 md:hidden"><ul className="flex flex-col gap-8">{links}</ul></div>}
  </header>
}
