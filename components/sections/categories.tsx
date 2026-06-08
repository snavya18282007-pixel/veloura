import Link from 'next/link'
import {
  Music,
  Cpu,
  Palette,
  UtensilsCrossed,
  Leaf,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import { Reveal, StaggerGroup } from '@/components/motion-primitives'
import { CATEGORIES, type EventCategory } from '@/lib/events'

const icons: Record<EventCategory, LucideIcon> = {
  Music,
  Tech: Cpu,
  Art: Palette,
  Culinary: UtensilsCrossed,
  Wellness: Leaf,
  Business: Briefcase,
}

export function Categories() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Categories
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Find your kind of extraordinary
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            From rooftop concerts to chef&apos;s tables, explore curated
            categories tailored to every taste.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const Icon = icons[cat.name]
            return (
              <Link
                key={cat.name}
                href="/events"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-gold"
              >
                <div className="absolute -right-6 -top-6 size-24 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.13_85/0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </Link>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
