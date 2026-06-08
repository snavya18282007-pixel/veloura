import { cn } from '@/lib/utils'

/**
 * Ambient animated glow backdrop used behind hero / section content.
 * Pure CSS gradients + blur — no decorative blobs as primary content.
 */
export function GlowField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      <div className="absolute -top-32 left-1/4 size-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.13_85/0.16),transparent_70%)] blur-2xl" />
      <div className="absolute -top-10 right-0 size-[34rem] translate-x-1/3 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_300/0.18),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 left-0 size-[30rem] -translate-x-1/4 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_300/0.12),transparent_70%)] blur-2xl" />
    </div>
  )
}
