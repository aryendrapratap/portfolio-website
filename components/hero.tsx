'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

const TYPED = 'software · ai/ml · data'

function useTyped(text: string) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setOut(text)
      setDone(true)
      return
    }
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) {
        window.clearInterval(id)
        setDone(true)
      }
    }, 55)
    return () => window.clearInterval(id)
  }, [text])

  return { out, done }
}

export function Hero() {
  const { out, done } = useTyped(TYPED)

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35]"
        aria-hidden="true"
        style={{
          maskImage:
            'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28 lg:px-8 lg:pt-32">
        {/* terminal command line */}
        <div className="mb-8 flex items-center gap-3 font-mono text-sm">
          <span className="text-primary">$</span>
          <span className="text-muted-foreground">whoami</span>
          <span className="text-foreground">{out}</span>
          <span
            className={`inline-block h-4 w-2 bg-primary ${done ? 'caret-blink' : ''}`}
            aria-hidden="true"
          />
        </div>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-primary">
          Hi, my name is
        </p>

        <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {profile.name}.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          {profile.subhead}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {profile.location}
          </span>
          <span className="hidden sm:inline text-border">/</span>
          <span className="max-w-md text-pretty">{profile.status}</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Download className="size-4" />
            Download Résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail className="size-4" />
            Email me
          </a>
        </div>

        <div className="mt-16 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-10 bg-border" aria-hidden="true" />
          Scroll for proof
          <ArrowUpRight className="size-3.5 text-primary" />
        </div>
      </div>
    </section>
  )
}
