import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GlowField } from '@/components/glow-field'
import { EventsExplorer } from '@/components/events-explorer'

export const metadata: Metadata = {
  title: 'Browse Events — Veloura',
  description:
    'Discover curated premium events. Search and filter by category, price, and popularity.',
}

export default function EventsPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="relative overflow-hidden pb-10">
          <GlowField />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              The collection
            </p>
            <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Discover your next experience
            </h1>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Browse a hand-picked selection of the world&apos;s most
              extraordinary events. Filter, search, and reserve in seconds.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <EventsExplorer />
        </div>
      </main>
      <Footer />
    </div>
  )
}
