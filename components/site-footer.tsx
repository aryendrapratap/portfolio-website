import { Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return <footer id="contact" className="relative scroll-mt-20 border-t border-foreground/25"><div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
    <Reveal><SectionHeading num="06" title="Get in touch" /></Reveal>
    <div className="mt-14 grid gap-12 md:grid-cols-[1.2fr_.8fr] md:gap-16">
      <Reveal><p className="font-mono text-xs font-medium text-muted-foreground">{"// let's build something"}</p><p className="mt-5 max-w-xl text-2xl font-medium leading-snug text-balance sm:text-3xl">Open to 2027 internships and co-ops in software, AI/ML, and data.</p>
        <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-bold underline decoration-accent decoration-2 underline-offset-4"><Mail className="size-4" />{profile.email}</a>
        <ul className="mt-6 grid gap-4 font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-foreground"><GithubIcon className="size-4" />{profile.githubHandle}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-foreground"><LinkedinIcon className="size-4" />{profile.linkedinHandle}</a></li>
          <li><span className="inline-flex items-center gap-3"><MapPin className="size-4" />{profile.location}</span></li>
        </ul>
        <a href={profile.resume} download className="hard-hover mt-8 inline-flex min-h-12 items-center gap-2 border-2 border-foreground px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider"><Download className="size-4" />Download Résumé</a>
      </Reveal>
      <Reveal delay={100}><img src="/images/aryendra-portrait.png" alt="Portrait of Aryendra Pratap Singh" className="aspect-[4/5] max-h-[510px] w-full object-cover object-top grayscale" /></Reveal>
    </div>
    <div className="pointer-events-none absolute left-1/2 top-[46%] z-10 hidden -translate-x-1/2 rotate-[-4deg] border-2 border-foreground bg-secondary px-5 py-3 font-mono text-lg font-bold uppercase tracking-wide md:block">Connect with me</div>
    <div className="mt-16 flex flex-col justify-between gap-4 border-t border-foreground/40 pt-6 font-mono text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:flex-row"><p><span className="text-accent">&gt;</span> Designed &amp; built by {profile.name}.</p><p>Next.js · TypeScript · Tailwind CSS</p></div>
  </div></footer>
}
