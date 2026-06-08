import { Star } from 'lucide-react'
import { Reveal, StaggerGroup } from '@/components/motion-primitives'

const testimonials = [
  {
    quote:
      'Veloura turned our product launch into an event people are still talking about. The platform felt as premium as the night itself.',
    name: 'Sofia Marchetti',
    role: 'Head of Brand, Lumière',
  },
  {
    quote:
      'Booking was effortless and the curation is unmatched. Every event I have attended through Veloura has been flawless.',
    name: 'Daniel Okafor',
    role: 'Creative Director',
  },
  {
    quote:
      'As a host, the tools are gorgeous and powerful. Selling out our retreat took less than 48 hours.',
    name: 'Amara Lin',
    role: 'Founder, Stillpoint Studio',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Loved by hosts and guests alike
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-purple"
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-pretty leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
