import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Skeleton } from '@/components/ui/skeleton'

export default function EventsLoading() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="mt-3 h-12 w-2/3 max-w-lg" />
          <Skeleton className="mt-3 h-4 w-full max-w-md" />

          <Skeleton className="mt-8 h-28 w-full rounded-3xl" />

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <Skeleton className="aspect-[4/3] w-full rounded-none" />
                <div className="space-y-3 p-5">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="mt-4 h-10 w-full rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
