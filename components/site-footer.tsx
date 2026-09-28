import { Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading num="06" title="Get in touch" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="font-mono text-sm text-primary">{"// let's build something"}</p>
            <p className="mt-4 max-w-xl text-2xl font-bold leading-snug tracking-tight text-foreground text-balance sm:text-3xl">
              Open to 2027 internships and co-ops in software, AI/ML, and data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" />
                {profile.email}
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Download className="size-4" />
                Download Résumé
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border font-mono text-sm">
              <li className="bg-card">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-4 text-primary" />
                  <span className="flex-1 truncate">{profile.githubHandle}</span>
                </a>
              </li>
              <li className="bg-card">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <LinkedinIcon className="size-4 text-primary" />
                  <span className="flex-1 truncate">{profile.linkedinHandle}</span>
                </a>
              </li>
              <li className="bg-card">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-3 px-5 py-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  <span className="flex-1 truncate">{profile.email}</span>
                </a>
              </li>
              <li className="bg-card">
                <div className="flex items-center gap-3 px-5 py-4 text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span className="flex-1">{profile.location}</span>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            <span className="text-primary">{'>'}</span> Designed &amp; built by{' '}
            {profile.name}.
          </p>
          <p>Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
