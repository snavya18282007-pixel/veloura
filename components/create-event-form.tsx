'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { CalendarPlus, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { CATEGORIES } from '@/lib/events'

const steps = ['Details', 'Schedule', 'Tickets'] as const

export function CreateEventForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    title: '',
    category: '',
    tagline: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    city: '',
    capacity: '',
    price: '',
  })

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  function next() {
    setStep((s) => Math.min(steps.length - 1, s + 1))
  }
  function back() {
    setStep((s) => Math.max(0, s - 1))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    toast.success('Event published', {
      description: `${form.title || 'Your event'} is now live on Veloura.`,
    })
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-border bg-card p-10 text-center"
      >
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary glow-gold">
          <Check className="size-8" />
        </span>
        <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
          Your event is live
        </h2>
        <p className="mx-auto mt-2 max-w-md text-pretty text-muted-foreground">
          {form.title || 'Your event'} has been published to the Veloura
          marketplace. You can manage attendees and tiers from your dashboard.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button
            className="rounded-full"
            onClick={() => {
              setSubmitted(false)
              setStep(0)
              setForm({
                title: '',
                category: '',
                tagline: '',
                description: '',
                date: '',
                time: '',
                venue: '',
                city: '',
                capacity: '',
                price: '',
              })
            }}
          >
            Create another
          </Button>
          <Button variant="secondary" className="rounded-full" asChild>
            <a href="/events">Browse events</a>
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      {/* Stepper */}
      <div className="mb-8 flex items-center gap-3">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`flex size-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  i <= step
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {i < step ? <Check className="size-4" /> : i + 1}
              </span>
              <span
                className={`hidden text-sm sm:block ${
                  i <= step ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-px flex-1 ${
                  i < step ? 'bg-primary' : 'bg-border'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-5">
          <Field label="Event title">
            <Input
              required
              value={form.title}
              onChange={(e) => set('title')(e.target.value)}
              placeholder="Aurora Nights Festival"
              className="h-12 rounded-xl bg-secondary"
            />
          </Field>
          <Field label="Category">
            <Select value={form.category} onValueChange={set('category')}>
              <SelectTrigger className="h-12 rounded-xl bg-secondary">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c.name} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Tagline">
            <Input
              value={form.tagline}
              onChange={(e) => set('tagline')(e.target.value)}
              placeholder="A luminous night of sound and light"
              className="h-12 rounded-xl bg-secondary"
            />
          </Field>
          <Field label="Description">
            <Textarea
              value={form.description}
              onChange={(e) => set('description')(e.target.value)}
              placeholder="Tell guests what makes this experience unforgettable..."
              className="min-h-32 rounded-xl bg-secondary"
            />
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Date">
              <Input
                type="date"
                value={form.date}
                onChange={(e) => set('date')(e.target.value)}
                className="h-12 rounded-xl bg-secondary"
              />
            </Field>
            <Field label="Start time">
              <Input
                type="time"
                value={form.time}
                onChange={(e) => set('time')(e.target.value)}
                className="h-12 rounded-xl bg-secondary"
              />
            </Field>
          </div>
          <Field label="Venue">
            <Input
              value={form.venue}
              onChange={(e) => set('venue')(e.target.value)}
              placeholder="The Glasshouse Rooftop"
              className="h-12 rounded-xl bg-secondary"
            />
          </Field>
          <Field label="City">
            <Input
              value={form.city}
              onChange={(e) => set('city')(e.target.value)}
              placeholder="New York, NY"
              className="h-12 rounded-xl bg-secondary"
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Capacity">
              <Input
                type="number"
                min={1}
                value={form.capacity}
                onChange={(e) => set('capacity')(e.target.value)}
                placeholder="2400"
                className="h-12 rounded-xl bg-secondary"
              />
            </Field>
            <Field label="Ticket price (USD)">
              <Input
                type="number"
                min={0}
                value={form.price}
                onChange={(e) => set('price')(e.target.value)}
                placeholder="189"
                className="h-12 rounded-xl bg-secondary"
              />
            </Field>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-4">
            <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              Premium tiers and dynamic pricing can be configured after
              publishing from your organizer dashboard.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          disabled={step === 0}
          className="rounded-full"
        >
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" onClick={next} className="rounded-full px-7">
            Continue
          </Button>
        ) : (
          <Button type="submit" className="rounded-full px-7 glow-gold">
            <CalendarPlus className="mr-2 size-4" />
            Publish event
          </Button>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      {children}
    </div>
  )
}
