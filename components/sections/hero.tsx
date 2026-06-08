'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowField } from '@/components/glow-field'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <GlowField />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.13_0.012_285))]"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-4 text-primary" />
          The premium way to host & discover events
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="font-heading text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          Craft <span className="text-gradient-luxe">Unforgettable</span>{' '}
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Veloura brings the world&apos;s most extraordinary events to your
          fingertips. Discover curated experiences, book in seconds, and host
          gatherings worthy of a standing ovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="glow-gold group h-12 rounded-full px-7 text-base font-medium"
          >
            <Link href="/events">
              Explore events
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 rounded-full px-7 text-base"
          >
            <Link href="/create">Host an event</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="size-4 fill-primary text-primary"
              />
            ))}
          </div>
          Loved by 28,000+ hosts and guests worldwide
        </motion.div>
      </div>
    </section>
  )
}
