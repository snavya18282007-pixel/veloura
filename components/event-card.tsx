'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  formatEventDate,
  formatPrice,
  type VelouraEvent,
} from '@/lib/events'

export function EventCard({
  event,
  index = 0,
}: {
  event: VelouraEvent
  index?: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:glow-gold"
    >
      <Link href={`/events/${event.slug}`} className="relative block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={event.image || '/placeholder.svg'}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <Badge className="absolute left-4 top-4 rounded-full border-0 bg-background/70 text-foreground backdrop-blur">
            {event.category}
          </Badge>
          <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground glow-gold">
            {formatPrice(event.price)}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/events/${event.slug}`}>
          <h3 className="font-heading text-lg font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
            {event.title}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
          {event.tagline}
        </p>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" />
            {formatEventDate(event.date)} · {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            {event.venue}, {event.city}
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4 text-primary" />
            {event.attending.toLocaleString()} attending
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 pt-1">
          <Button asChild className="flex-1 rounded-full font-medium">
            <Link href={`/events/${event.slug}`}>RSVP</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="rounded-full"
          >
            <Link href={`/events/${event.slug}`}>Details</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
