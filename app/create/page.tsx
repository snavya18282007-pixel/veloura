import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GlowField } from '@/components/glow-field'
import { Reveal } from '@/components/motion-primitives'
import { CreateEventForm } from '@/components/create-event-form'

export const metadata: Metadata = {
  title: 'Host an event · Veloura Events',
  description:
    'Publish your event to the Veloura marketplace and reach a curated audience.',
}

export default function CreateEventPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <GlowField />
        <section className="relative mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Host with Veloura
            </p>
            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring your event to life
            </h1>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Create a beautifully presented listing in minutes. Set the scene,
              the schedule, and your tickets — we&apos;ll handle the rest.
            </p>
          </Reveal>

          <div className="mt-10">
            <CreateEventForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
