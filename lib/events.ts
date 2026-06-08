export type EventCategory =
  | 'Music'
  | 'Tech'
  | 'Art'
  | 'Culinary'
  | 'Wellness'
  | 'Business'

export interface Organizer {
  name: string
  role: string
  avatar: string
}

export interface VelouraEvent {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  category: EventCategory
  date: string // ISO
  time: string
  venue: string
  city: string
  image: string
  price: number
  capacity: number
  attending: number
  featured: boolean
  organizer: Organizer
  highlights: string[]
}

export const CATEGORIES: { name: EventCategory; description: string }[] = [
  { name: 'Music', description: 'Concerts, festivals & live sets' },
  { name: 'Tech', description: 'Summits, launches & demos' },
  { name: 'Art', description: 'Galleries, exhibits & shows' },
  { name: 'Culinary', description: 'Tastings & chef dinners' },
  { name: 'Wellness', description: 'Retreats & mindful sessions' },
  { name: 'Business', description: 'Conferences & networking' },
]

export const EVENTS: VelouraEvent[] = [
  {
    id: '1',
    slug: 'aurora-nights-festival',
    title: 'Aurora Nights Festival',
    tagline: 'A luminous night of sound and light',
    description:
      'Aurora Nights is an immersive open-air music experience blending world-class electronic acts with kinetic light architecture. Wander through illuminated installations, sip curated cocktails, and dance beneath a canopy of synchronized lasers as headline artists take the main stage until sunrise.',
    category: 'Music',
    date: '2026-08-22T20:00:00.000Z',
    time: '8:00 PM',
    venue: 'The Glasshouse Rooftop',
    city: 'New York, NY',
    image: '/events/aurora-nights.png',
    price: 189,
    capacity: 2400,
    attending: 1870,
    featured: true,
    organizer: {
      name: 'Lumen Collective',
      role: 'Experience Studio',
      avatar: '/organizers/lumen.png',
    },
    highlights: [
      'Six headline electronic acts',
      'Immersive laser & light installations',
      'Premium rooftop lounge access',
      'Craft cocktail program',
    ],
  },
  {
    id: '2',
    slug: 'frontier-tech-summit',
    title: 'Frontier Tech Summit',
    tagline: 'Where the next decade is built',
    description:
      'Frontier brings together founders, researchers, and product leaders shaping AI, robotics, and spatial computing. Two days of keynotes, hands-on labs, and intimate fireside chats designed to spark the partnerships that define the future.',
    category: 'Tech',
    date: '2026-09-14T09:00:00.000Z',
    time: '9:00 AM',
    venue: 'Pavilion Conference Center',
    city: 'San Francisco, CA',
    image: '/events/frontier-tech.png',
    price: 349,
    capacity: 1800,
    attending: 1420,
    featured: true,
    organizer: {
      name: 'Helix Ventures',
      role: 'Summit Host',
      avatar: '/organizers/helix.png',
    },
    highlights: [
      '40+ keynote speakers',
      'Hands-on AI & robotics labs',
      'Curated investor matchmaking',
      'Gala networking dinner',
    ],
  },
  {
    id: '3',
    slug: 'gilded-canvas-gala',
    title: 'The Gilded Canvas Gala',
    tagline: 'An evening among modern masters',
    description:
      'A black-tie celebration of contemporary art featuring private viewings, live auctions, and performances. Mingle with collectors and artists in a candlelit gallery transformed for one unforgettable night.',
    category: 'Art',
    date: '2026-10-03T19:00:00.000Z',
    time: '7:00 PM',
    venue: 'Meridian Art Museum',
    city: 'Chicago, IL',
    image: '/events/gilded-canvas.png',
    price: 275,
    capacity: 600,
    attending: 510,
    featured: true,
    organizer: {
      name: 'Meridian Foundation',
      role: 'Cultural Patron',
      avatar: '/organizers/meridian.png',
    },
    highlights: [
      'Private collection viewings',
      'Live contemporary art auction',
      'Chef-curated tasting menu',
      'Champagne reception',
    ],
  },
  {
    id: '4',
    slug: 'ember-table-dinner',
    title: 'Ember Table Chef Series',
    tagline: 'A nine-course journey in fire',
    description:
      'An intimate culinary residency where Michelin-starred chefs cook over open flame. Each course is paired with rare wines and storytelling, served at a single communal table beneath the stars.',
    category: 'Culinary',
    date: '2026-07-30T18:30:00.000Z',
    time: '6:30 PM',
    venue: 'The Vineyard Estate',
    city: 'Napa Valley, CA',
    image: '/events/ember-table.png',
    price: 420,
    capacity: 80,
    attending: 72,
    featured: false,
    organizer: {
      name: 'Atelier Flame',
      role: 'Culinary Studio',
      avatar: '/organizers/atelier.png',
    },
    highlights: [
      'Nine-course open-fire menu',
      'Rare wine pairings',
      'Meet the visiting chefs',
      'Single communal table setting',
    ],
  },
  {
    id: '5',
    slug: 'serene-summit-retreat',
    title: 'Serene Summit Retreat',
    tagline: 'Reset your mind, restore your energy',
    description:
      'A weekend wellness retreat in the mountains featuring sunrise yoga, sound healing, breathwork, and guided meditation led by world-renowned practitioners. Limited to a small cohort for a deeply personal experience.',
    category: 'Wellness',
    date: '2026-11-08T07:00:00.000Z',
    time: '7:00 AM',
    venue: 'Cedar Ridge Lodge',
    city: 'Aspen, CO',
    image: '/events/serene-summit.png',
    price: 510,
    capacity: 120,
    attending: 88,
    featured: false,
    organizer: {
      name: 'Stillpoint Studio',
      role: 'Wellness Curator',
      avatar: '/organizers/stillpoint.png',
    },
    highlights: [
      'Sunrise yoga & breathwork',
      'Guided sound healing',
      'Mountain-side accommodation',
      'Organic farm-to-table meals',
    ],
  },
  {
    id: '6',
    slug: 'apex-leaders-forum',
    title: 'Apex Leaders Forum',
    tagline: 'Strategy for the bold',
    description:
      'An invitation-level business forum gathering executives and visionaries to explore growth, leadership, and resilience. Expect candid mainstage conversations and high-signal networking salons.',
    category: 'Business',
    date: '2026-09-28T08:30:00.000Z',
    time: '8:30 AM',
    venue: 'Skyline Grand Ballroom',
    city: 'Austin, TX',
    image: '/events/apex-leaders.png',
    price: 295,
    capacity: 900,
    attending: 640,
    featured: false,
    organizer: {
      name: 'Vanguard Group',
      role: 'Forum Host',
      avatar: '/organizers/vanguard.png',
    },
    highlights: [
      'Executive mainstage sessions',
      'Curated networking salons',
      'Leadership masterclasses',
      'Rooftop closing reception',
    ],
  },
]

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug)
}

export function getRelatedEvents(slug: string, category: EventCategory) {
  return EVENTS.filter((e) => e.slug !== slug)
    .sort((a) => (a.category === category ? -1 : 1))
    .slice(0, 3)
}

export function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function formatPrice(price: number) {
  return price === 0 ? 'Free' : `$${price}`
}
