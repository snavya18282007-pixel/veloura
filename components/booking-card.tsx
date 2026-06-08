'use client'

import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Minus, Plus, Ticket, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { formatPrice, type VelouraEvent } from '@/lib/events'

export function BookingCard({ event }: { event: VelouraEvent }) {
  const tiers = useMemo(
    () => [
      { id: 'standard', name: 'General Admission', perk: 'Full event access', price: event.price },
      {
        id: 'premium',
        name: 'Premium',
        perk: 'Priority seating & lounge',
        price: Math.round(event.price * 1.6),
      },
      {
        id: 'vip',
        name: 'VIP Experience',
        perk: 'All-access & host reception',
        price: Math.round(event.price * 2.4),
      },
    ],
    [event.price],
  )

  const [qty, setQty] = useState(1)
  const [tierId, setTierId] = useState(tiers[0].id)
  const tier = tiers.find((t) => t.id === tierId) ?? tiers[0]
  const total = tier.price * qty
  const spotsLeft = event.capacity - event.attending

  function handleBook() {
    toast.success('Reservation confirmed', {
      description: `${qty} × ${tier.name} for ${event.title}. A confirmation has been sent to your inbox.`,
    })
  }

  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-24 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-sm text-muted-foreground">Starting from</p>
        <p className="font-heading text-3xl font-semibold text-foreground">
          {formatPrice(event.price)}
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Select tier</p>
        {tiers.map((t) => {
          const active = t.id === tierId
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTierId(t.id)}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors ${
                active
                  ? 'border-primary/60 bg-primary/10'
                  : 'border-border bg-background/40 hover:border-foreground/30'
              }`}
            >
              <span>
                <span className="block text-sm font-medium text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.perk}</span>
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">
                {formatPrice(t.price)}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Quantity</span>
        <div className="flex items-center gap-3 rounded-full border border-border bg-background/40 px-2 py-1">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-6 text-center font-medium text-foreground">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => Math.min(8, q + 1))}
            className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-muted-foreground">Total</span>
        <span className="font-heading text-2xl font-semibold text-foreground">
          ${total.toLocaleString()}
        </span>
      </div>

      <Button onClick={handleBook} size="lg" className="mt-5 w-full rounded-full text-base glow-gold">
        <Ticket className="mr-2 size-4" />
        Reserve your place
      </Button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Only {spotsLeft.toLocaleString()} spots remaining
      </p>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 text-primary" />
        Free cancellation up to 48 hours before
      </p>
    </motion.aside>
  )
}
