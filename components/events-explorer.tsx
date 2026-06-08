'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { EventCard } from '@/components/event-card'
import { CATEGORIES, EVENTS, type EventCategory } from '@/lib/events'

type Filter = 'All' | EventCategory
const filters: Filter[] = ['All', ...CATEGORIES.map((c) => c.name)]

export function EventsExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Filter>('All')
  const [sort, setSort] = useState('soonest')

  const results = useMemo(() => {
    let list = EVENTS.filter((e) => {
      const matchesQuery =
        !query ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.city.toLowerCase().includes(query.toLowerCase()) ||
        e.venue.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || e.category === category
      return matchesQuery && matchesCategory
    })

    list = [...list].sort((a, b) => {
      if (sort === 'soonest')
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'popular') return b.attending - a.attending
      return 0
    })
    return list
  }, [query, category, sort])

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, venues, or cities..."
              aria-label="Search events"
              className="h-12 rounded-full bg-secondary pl-11 text-base"
            />
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="h-12 w-full rounded-full bg-secondary px-5 lg:w-52">
              <SlidersHorizontal className="size-4 text-muted-foreground" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soonest">Soonest first</SelectItem>
              <SelectItem value="popular">Most popular</SelectItem>
              <SelectItem value="price-low">Price: low to high</SelectItem>
              <SelectItem value="price-high">Price: high to low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setCategory(f)}
              className="outline-none"
              aria-pressed={category === f}
            >
              <Badge
                variant={category === f ? 'default' : 'secondary'}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm transition-all ${
                  category === f ? 'glow-gold' : 'hover:bg-secondary/70'
                }`}
              >
                {f}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? 'event' : 'events'} found
        </p>
      </div>

      <AnimatePresence mode="popLayout">
        {results.length > 0 ? (
          <motion.div
            layout
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {results.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 rounded-3xl border border-border bg-card py-20 text-center"
          >
            <p className="font-heading text-lg font-semibold">
              No events match your search
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword or category.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
