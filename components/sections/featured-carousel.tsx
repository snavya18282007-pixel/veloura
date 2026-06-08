'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/motion-primitives'
import { EVENTS, formatEventDate, formatPrice } from '@/lib/events'

const featured = EVENTS.filter((e) => e.featured)

export function FeaturedCarousel() {
  const [active, setActive] = useState(0)
  const event = featured[active]

  const go = (dir: number) =>
    setActive((p) => (p + dir + featured.length) % featured.length)

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Featured
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Experiences worth the spotlight
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="size-11 rounded-full"
              onClick={() => go(-1)}
              aria-label="Previous featured event"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-11 rounded-full"
              onClick={() => go(1)}
              aria-label="Next featured event"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>

        <div className="relative overflow-hidden rounded-[2rem] border border-border glow-purple">
          <AnimatePresence mode="wait">
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative grid lg:grid-cols-2"
            >
              <div className="relative min-h-[20rem] lg:min-h-[28rem]">
                <Image
                  src={event.image || '/placeholder.svg'}
                  alt={event.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>

              <div className="flex flex-col justify-center gap-5 bg-card p-8 sm:p-12">
                <Badge className="w-fit rounded-full bg-secondary text-foreground">
                  {event.category}
                </Badge>
                <h3 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  {event.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {event.tagline}. {event.description.split('. ')[0]}.
                </p>
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="size-4 text-primary" />
                    {formatEventDate(event.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    {event.city}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="glow-gold rounded-full font-medium"
                  >
                    <Link href={`/events/${event.slug}`}>
                      Book from {formatPrice(event.price)}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {featured.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              aria-label={`Show ${f.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? 'w-8 bg-primary'
                  : 'w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
