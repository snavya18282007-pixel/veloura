import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  tagline: text('tagline').notNull().default(''),
  description: text('description').notNull().default(''),
  category: text('category').notNull(),
  date: timestamp('date', { withTimezone: true }).notNull(),
  time: text('time').notNull().default(''),
  venue: text('venue').notNull().default(''),
  city: text('city').notNull().default(''),
  image: text('image').notNull().default('/placeholder.svg'),
  price: integer('price').notNull().default(0),
  capacity: integer('capacity').notNull().default(0),
  attending: integer('attending').notNull().default(0),
  featured: boolean('featured').notNull().default(false),
  organizerName: text('organizer_name').notNull().default(''),
  organizerRole: text('organizer_role').notNull().default(''),
  organizerAvatar: text('organizer_avatar').notNull().default('/placeholder.svg'),
  highlights: jsonb('highlights').$type<string[]>().notNull().default([]),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id').notNull(),
  eventSlug: text('event_slug').notNull(),
  tier: text('tier').notNull(),
  quantity: integer('quantity').notNull().default(1),
  total: integer('total').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export type EventRow = typeof events.$inferSelect
export type NewEventRow = typeof events.$inferInsert
export type BookingRow = typeof bookings.$inferSelect
