// Conference Event Data
export const upcomingEvent = {
  name: 'Organize Conferences 2025',
  tagline: 'Connecting Leaders, Inspiring Innovation',
  date: new Date('2025-06-15'),
  endDate: new Date('2025-06-17'),
  location: 'San Francisco, CA',
  venue: 'Moscone Center',
  description: 'Join industry leaders and innovators for three days of inspiring talks, hands-on workshops, and meaningful networking opportunities.',
  theme: 'Digital Transformation in the Modern Era',
  registrationURL: '#register',
}

// Previous Conferences
export const previousConferences = [
  {
    id: 1,
    year: 2024,
    name: 'Organize Conferences 2024',
    theme: 'Building Sustainable Communities',
    location: 'Chicago, IL',
    attendees: 2500,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    highlights: ['50+ Speakers', '15 Tracks', '120 Sessions'],
  },
  {
    id: 2,
    year: 2023,
    name: 'Organize Conferences 2023',
    theme: 'Future of Work',
    location: 'New York, NY',
    attendees: 2000,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop',
    highlights: ['45+ Speakers', '12 Tracks', '100 Sessions'],
  },
  {
    id: 3,
    year: 2022,
    name: 'Organize Conferences 2022',
    theme: 'Post-Pandemic Innovation',
    location: 'Austin, TX',
    attendees: 1800,
    image: 'https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=500&h=300&fit=crop',
    highlights: ['40+ Speakers', '10 Tracks', '85 Sessions'],
  },
]

// Conference Tracks/Topics
export const conferenceTopics = [
  {
    id: 1,
    name: 'Digital Innovation',
    description: 'Explore cutting-edge technologies and digital transformation strategies',
    icon: 'Zap',
  },
  {
    id: 2,
    name: 'Business Leadership',
    description: 'Learn from industry leaders on strategy, management, and growth',
    icon: 'TrendingUp',
  },
  {
    id: 3,
    name: 'Sustainability',
    description: 'Discover sustainable practices and environmental responsibility',
    icon: 'Leaf',
  },
  {
    id: 4,
    name: 'Networking',
    description: 'Build meaningful connections with peers and industry experts',
    icon: 'Users',
  },
]

// Featured Speakers
export const featuredSpeakers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Chief Innovation Officer',
    company: 'TechVision Corp',
    bio: 'Sarah leads innovation initiatives across 50+ countries with a focus on sustainable technology.',
    image: '/speakers/speaker1.jpg',
    presentation: 'The Future of AI in Enterprise Solutions',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Founder & CEO',
    company: 'StartupHub',
    bio: 'Michael has founded and scaled three successful tech companies in the past decade.',
    image: '/speakers/speaker2.jpg',
    presentation: 'Building Scalable Organizations',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Head of Strategy',
    company: 'Global Industries',
    bio: 'Emma specializes in corporate transformation and market expansion strategies.',
    image: '/speakers/speaker3.jpg',
    presentation: 'Strategic Planning for Uncertain Times',
  },
  {
    id: 4,
    name: 'David Park',
    title: 'Sustainability Officer',
    company: 'Green Future Inc',
    bio: 'David drives environmental initiatives and sustainable business practices worldwide.',
    image: '/speakers/speaker4.jpg',
    presentation: 'Sustainable Business Models for 2025',
  },
]

// Sponsors by Tier
export const sponsors = {
  platinum: [
    { id: 1, name: 'TechVision', logo: '/sponsors/techvision.jpg' },
    { id: 2, name: 'InnovateCorp', logo: '/sponsors/innovate.jpg' },
  ],
  gold: [
    { id: 3, name: 'FutureTech', logo: '/sponsors/futuretech.jpg' },
    { id: 4, name: 'Nexus Solutions', logo: '/sponsors/nexus.jpg' },
    { id: 5, name: 'Apex Industries', logo: '/sponsors/apex.jpg' },
  ],
  silver: [
    { id: 6, name: 'Quantum Labs', logo: '/sponsors/quantum.jpg' },
    { id: 7, name: 'Eclipse Systems', logo: '/sponsors/eclipse.jpg' },
    { id: 8, name: 'Prism Tech', logo: '/sponsors/prism.jpg' },
    { id: 9, name: 'DigitalFirst', logo: '/sponsors/techvision.jpg' },
  ],
}

// Pricing Tiers
export const pricingTiers = [
  {
    id: 'student',
    name: 'Student',
    regularPrice: 99,
    earlyBirdPrice: 49,
    features: ['All sessions access', 'Conference materials', 'Networking events', 'Digital badge'],
  },
  {
    id: 'professional',
    name: 'Professional',
    regularPrice: 299,
    earlyBirdPrice: 199,
    features: ['All sessions access', 'Premium seating', 'Conference materials', 'Networking events', 'Exclusive workshops', 'Digital badge'],
    popular: true,
  },
  {
    id: 'speaker',
    name: 'Speaker',
    regularPrice: 0,
    earlyBirdPrice: 0,
    features: ['All sessions access', 'Premium seating', 'VIP networking', 'Dedicated support', 'Speaking slot'],
  },
]

// FAQ Data
export const faqs = [
  {
    category: 'Registration',
    questions: [
      {
        q: 'When does registration close?',
        a: 'Registration closes on June 10, 2025, or when capacity is reached. Early bird pricing ends May 15, 2025.',
      },
      {
        q: 'Can I get a refund?',
        a: 'We offer full refunds up to 2 weeks before the event. After that date, cancellations are non-refundable.',
      },
      {
        q: 'Is group discount available?',
        a: 'Yes! Groups of 5 or more receive a 15% discount. Contact sales@organizeconferences.com for details.',
      },
    ],
  },
  {
    category: 'Schedule',
    questions: [
      {
        q: 'What time does the conference start each day?',
        a: 'Day 1 & 2: 8:00 AM - 6:00 PM. Day 3: 8:00 AM - 4:00 PM. Registration opens 30 minutes before each day.',
      },
      {
        q: 'How many sessions can I attend?',
        a: 'Tracks run in parallel, so you can choose one session per time slot. Full schedule available after registration.',
      },
    ],
  },
  {
    category: 'Venue & Travel',
    questions: [
      {
        q: 'Where is the conference being held?',
        a: 'Moscone Center, 747 Howard Street, San Francisco, CA 94103. Parking validation available for attendees.',
      },
      {
        q: 'What accommodations are recommended?',
        a: 'We have partnerships with nearby hotels offering 20% discount. See the Event Details page for a full list.',
      },
    ],
  },
]
