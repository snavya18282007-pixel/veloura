'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GlowField } from '@/components/glow-field'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Placeholder for API integration (e.g. POST /api/subscribe)
    setDone(true)
    toast.success('You are on the list. Welcome to Veloura.')
    setEmail('')
    setTimeout(() => setDone(false), 2500)
  }

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center sm:p-16">
          <GlowField />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Never miss an unforgettable night
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Join the Veloura insider list for early access to the most
              exclusive events and member-only pricing.
            </p>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="h-12 rounded-full bg-secondary px-5 text-base"
              />
              <Button
                type="submit"
                size="lg"
                className="glow-gold h-12 shrink-0 rounded-full px-6 font-medium"
              >
                {done ? (
                  <>
                    Subscribed <Check className="ml-1 size-4" />
                  </>
                ) : (
                  <>
                    Join <ArrowRight className="ml-1 size-4" />
                  </>
                )}
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
