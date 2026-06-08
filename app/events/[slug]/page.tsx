import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Check, MapPin, Clock, Users } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Countdown } from '@/components/countdown'
import { BookingCard } from '@/components/booking-card'
import { EventCard } from '@/components/event-card'
import { Reveal } from '@/components/motion-primitives'
import {
  EVENTS,
  getEventBySlug,
  getRelatedEvents,
  formatEventDate,
} from '@/lib/events'

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: 'Event not found · Veloura' }
  return {
    title: `${event.title} · Veloura Events`,
    description: event.tagline,
  }
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const related = getRelatedEvents(slug, event.category)
  const pct = Math.round((event.attending / event.capacity) * 100)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[58vh] min-h-[26rem] w-full overflow-hidden">
          <Image
            src={event.image || '/placeholder.svg'}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
              <Link
                href="/events"
                className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                All events
              </Link>
              <Badge className="mb-4 block w-fit rounded-full bg-primary text-primary-foreground">
                {event.category}
              </Badge>
              <h1 className="max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                {event.title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                {event.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: CalendarDays, label: 'Date', value: formatEventDate(event.date) },
                  { icon: Clock, label: 'Time', value: event.time },
                  { icon: MapPin, label: 'Venue', value: event.venue },
                  { icon: Users, label: 'Attending', value: `${event.attending.toLocaleString()}` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-card p-4"
                  >
                    <item.icon className="size-5 text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={0.05} className="mt-10">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  About this event
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="mt-10">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  What to expect
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {event.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-4" />
                      </span>
                      <span className="text-sm text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15} className="mt-10">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  Starts in
                </h2>
                <div className="mt-5 max-w-md">
                  <Countdown date={event.date} />
                </div>
              </Reveal>

              <Reveal delay={0.2} className="mt-10">
                <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5">
                  <Image
                    src={event.organizer.avatar || '/placeholder.svg'}
                    alt={event.organizer.name}
                    width={56}
                    height={56}
                    className="size-14 rounded-full border border-border object-cover"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Hosted by
                    </p>
                    <p className="font-heading text-lg font-semibold">
                      {event.organizer.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {event.organizer.role}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="mt-10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Capacity filled</span>
                  <span className="font-medium text-foreground">{pct}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary glow-gold"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-1">
              <BookingCard event={event} />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                You may also like
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((e, i) => (
                <EventCard key={e.id} event={e} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
