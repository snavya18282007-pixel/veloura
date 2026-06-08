import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5 group', className)}
      aria-label="Veloura Events home"
    >
      <span className="relative flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 overflow-hidden">
        <img src="/apple-icon.png" alt="Veloura V logo" className="w-6 h-6 object-contain" />
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight">
        Veloura<span className="text-primary">.</span>
      </span>
    </Link>
  )
}
