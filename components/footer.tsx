import Link from 'next/link'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Browse events', href: '/events' },
      { label: 'Host an event', href: '/create' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Categories', href: '/events' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#stats' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'Careers', href: '/events' },
      { label: 'Press', href: '/events' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help center', href: '/events' },
      { label: 'Contact', href: '/events' },
      { label: 'Privacy', href: '/events' },
      { label: 'Terms', href: '/events' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              The premium platform for discovering, hosting, and booking
              unforgettable experiences around the world.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-semibold">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {'© '}
            {new Date().getFullYear()} Veloura Events. Crafted for unforgettable
            moments.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/events" className="hover:text-foreground">
              Twitter
            </Link>
            <Link href="/events" className="hover:text-foreground">
              Instagram
            </Link>
            <Link href="/events" className="hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
