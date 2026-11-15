'use client'

import { ArrowDown, Download, Mail } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

function Smile() {
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="size-9 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="24" cy="24" r="19" /><path d="M17 20v1m14-1v1M16 28c2 5 6 7 9 7s7-2 9-7" /></svg>
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] items-stretch gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_.9fr] md:gap-16 md:pb-24 md:pt-20 lg:px-10">
        <div className="relative z-10 flex flex-col items-start justify-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[.18em] text-muted-foreground">software · <strong className="font-bold underline decoration-accent decoration-2 underline-offset-4">ai/ml</strong> · data</p>
          <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[.18em] text-muted-foreground">Hi, my name is</p>
          <h1 className="mt-4 flex flex-col items-start gap-3 font-mono text-4xl font-bold uppercase leading-[1.05] tracking-[.035em] sm:text-6xl lg:text-[4.3rem]">
            <span className="tilted-label inline-flex -rotate-[4deg] items-center gap-3 border-2 border-foreground bg-secondary px-4 py-3 sm:px-6"><Smile />Aryendra</span>
            <span className="tilted-label ml-5 inline-block rotate-[2deg] border-2 border-foreground bg-secondary px-4 py-3 sm:ml-12 sm:px-6">Pratap Singh</span>
          </h1>
          <svg aria-hidden="true" viewBox="0 0 220 110" className="pointer-events-none absolute right-[-2rem] top-[27%] hidden h-28 w-52 text-foreground md:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path className="arrow-draw" d="M8 72c31-49 72-63 99-33 24 28-21 50-31 24-9-25 31-43 75-35 19 4 33 14 48 29m0 0-2-21m2 21-21-4" /></svg>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">{profile.subhead}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            <span>{profile.location}</span><span aria-hidden="true">/</span><span className="max-w-md">{profile.status}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="hard-hover inline-flex min-h-12 items-center gap-2 border-2 border-foreground bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground">View Projects<ArrowDown className="size-4" /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hard-hover inline-flex min-h-12 items-center gap-2 border-2 border-foreground px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider"><GithubIcon className="size-4" />GitHub</a>
            <a href={profile.resume} download className="hard-hover inline-flex min-h-12 items-center gap-2 border-2 border-foreground px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider"><Download className="size-4" />Download Résumé</a>
            <a href={`mailto:${profile.email}`} className="hard-hover inline-flex min-h-12 items-center gap-2 border-2 border-foreground px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider"><Mail className="size-4" />Email me</a>
          </div>
          <div className="mt-12 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[.16em] text-muted-foreground"><span className="h-px w-8 bg-accent" />Scroll for proof<svg aria-hidden="true" viewBox="0 0 24 32" className="h-6 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-2 8 2 15 0 25m0 0-7-7m7 7 7-7" /></svg></div>
        </div>
        <div className="relative order-last md:order-none">
          <img src="/images/aryendra-portrait.png" alt="Portrait of Aryendra Pratap Singh" className="h-full max-h-[690px] min-h-[380px] w-full object-cover object-top grayscale" />
        </div>
      </div>
    </section>
  )
}
