import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal, StaggerGroup } from '@/components/motion-primitives'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Explorer',
    price: '$0',
    period: '/forever',
    description: 'For guests who love to discover.',
    features: [
      'Browse all events',
      'Instant RSVP & booking',
      'Personalized recommendations',
      'Mobile tickets',
    ],
    cta: 'Get started',
    href: '/events',
    featured: false,
  },
  {
    name: 'Host',
    price: '$49',
    period: '/month',
    description: 'For creators hosting premium events.',
    features: [
      'Everything in Explorer',
      'Unlimited event listings',
      'Custom branding & themes',
      'Analytics & guest insights',
      'Lower payment fees',
    ],
    cta: 'Start hosting',
    href: '/create',
    featured: true,
  },
  {
    name: 'Atelier',
    price: 'Custom',
    period: '',
    description: 'For agencies and large-scale productions.',
    features: [
      'Everything in Host',
      'Dedicated success manager',
      'API & integrations',
      'White-glove onboarding',
      'Priority support',
    ],
    cta: 'Contact sales',
    href: '/create',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Pricing
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple plans for every ambition
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-3xl border p-8 transition-all duration-300',
                tier.featured
                  ? 'border-primary/40 bg-card glow-gold lg:-translate-y-3'
                  : 'border-border bg-card hover:-translate-y-1'
              )}
            >
              {tier.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-heading text-4xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className="mb-1 text-sm text-muted-foreground">
                  {tier.period}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  'mt-8 rounded-full font-medium',
                  tier.featured ? 'glow-gold' : ''
                )}
                variant={tier.featured ? 'default' : 'secondary'}
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
