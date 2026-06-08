import { asc, desc, eq, ne } from 'drizzle-orm'
import { db } from '@/lib/db'
import { events, type EventRow } from '@/lib/db/schema'
import type { EventCategory, VelouraEvent } from '@/lib/events'

function mapRow(row: EventRow): VelouraEvent {
  return {
    id: String(row.id),
    slug: row.slug,
    title: row.title,
    tagline: row.tagline,
    description: row.description,
    category: row.category as EventCategory,
    date: row.date.toISOString(),
    time: row.time,
    venue: row.venue,
    city: row.city,
    image: row.image,
    price: row.price,
    capacity: row.capacity,
    attending: row.attending,
    featured: row.featured,
    organizer: {
      name: row.organizerName,
      role: row.organizerRole,
      avatar: row.organizerAvatar,
    },
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
  }
}

export async function getAllEvents(): Promise<VelouraEvent[]> {
  const rows = await db.select().from(events).orderBy(asc(events.date))
  return rows.map(mapRow)
}

export async function getFeaturedEvents(): Promise<VelouraEvent[]> {
  const rows = await db
    .select()
    .from(events)
    .where(eq(events.featured, true))
    .orderBy(asc(events.date))
  return rows.map(mapRow)
}

export async function getEventBySlug(
  slug: string,
): Promise<VelouraEvent | undefined> {
  const rows = await db.select().from(events).where(eq(events.slug, slug)).limit(1)
  return rows[0] ? mapRow(rows[0]) : undefined
}

export async function getRelatedEvents(
  slug: string,
  category: EventCategory,
): Promise<VelouraEvent[]> {
  const rows = await db.select().from(events).where(ne(events.slug, slug))
  return rows
    .map(mapRow)
    .sort((a) => (a.category === category ? -1 : 1))
    .slice(0, 3)
}

export async function getEventSlugs(): Promise<{ slug: string }[]> {
  const rows = await db.select({ slug: events.slug }).from(events)
  return rows
}
