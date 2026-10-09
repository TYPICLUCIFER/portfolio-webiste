import type { CategoryItem } from '../types';

export const categories: CategoryItem[] = [
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce & Fashion',
    shortDescription: 'High-converting online storefronts, luxury lookbooks, and seamless checkout flows for apparel and lifestyle brands.',
    fullDescription: 'Editorial storefronts crafted to showcase apparel, luxury accessories, and DTC products with fluid micro-interactions, category filters, quick-view draws, and Razorpay/Stripe checkout readiness.',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    iconName: 'ShoppingBag',
    templateCount: 4,
    priceRange: '₹18,000 – ₹38,000',
    featureHighlights: [
      'Interactive Product Quick-view',
      'Filterable Product Collections',
      'Cart Drawer & Express Checkout',
      'Mobile-first Lookbook Layouts'
    ],
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education & Coaching Institutes',
    shortDescription: 'Modern learning portals, course catalogues, batch schedules, and student enquiry systems.',
    fullDescription: 'Purpose-built for academies, coaching centers, test prep institutes, and online tutors. Featuring structured syllabus view, instructor credentials, fee tiers, and admission lead capture.',
    coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    iconName: 'GraduationCap',
    templateCount: 3,
    priceRange: '₹12,000 – ₹24,000',
    featureHighlights: [
      'Course Curriculum Breakdown',
      'Batch Timetable & Intake Dates',
      'Student Results & Testimonial Wall',
      'Admission Enquiry Form'
    ],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    shortDescription: 'Trust-inspiring digital presence for doctors, dental studios, wellness centers, and specialized clinics.',
    fullDescription: 'Calm, patient-friendly medical clinic websites with doctor profiles, treatment explanations, tele-consultation booking buttons, and clinic location maps.',
    coverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Stethoscope',
    templateCount: 3,
    priceRange: '₹14,000 – ₹26,000',
    featureHighlights: [
      'Doctor Bio & Credentials',
      'Treatment & Procedure Details',
      'Appointment Request Calendar',
      'Emergency Helpline Bar'
    ],
  },
  {
    id: 'fitness',
    slug: 'fitness',
    name: 'Fitness & Gyms',
    shortDescription: 'High-energy, conversion-driven websites for fitness studios, CrossFit boxes, yoga spaces, and personal trainers.',
    fullDescription: 'Dynamic websites with bold typography, trainer spotlights, class timetables, membership pricing comparison, and free-trial pass signups.',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Dumbbell',
    templateCount: 2,
    priceRange: '₹10,000 – ₹22,000',
    featureHighlights: [
      'Weekly Class Schedule Grid',
      'Membership Tier Comparison',
      'Trainer Portfolios & Certifications',
      'Free Trial Pass Booking'
    ],
  },
  {
    id: 'business',
    slug: 'business',
    name: 'Business & Professional Services',
    shortDescription: 'Polished, authoritative websites for consultancies, chartered accountants, legal firms, and corporate agencies.',
    fullDescription: 'Corporate layouts communicating competence, client trust, case studies, partner profiles, and consultative discovery calls.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Briefcase',
    templateCount: 3,
    priceRange: '₹12,000 – ₹28,000',
    featureHighlights: [
      'Case Study Deep Dives',
      'Service Matrix & Deliverables',
      'Leadership & Advisor bios',
      'Consultation Scheduler Form'
    ],
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate & Builders',
    shortDescription: 'Architectural property showcases, project galleries, floor plan viewers, and investor enquiries.',
    fullDescription: 'Premium property portals presenting residential developments, luxury villas, and commercial spaces with interactive floor plans, neighborhood highlights, and brochure download requests.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Building2',
    templateCount: 2,
    priceRange: '₹16,000 – ₹32,000',
    featureHighlights: [
      'Interactive Floor Plan Modal',
      'Project Amenities & Location Map',
      'Virtual Tour & Video Embeds',
      'Brochure Download Lead Magnet'
    ],
  },
  {
    id: 'restaurants',
    slug: 'restaurants',
    name: 'Restaurants & Hospitality',
    shortDescription: 'Sensory menus, table reservations, ambience galleries, and location directions for bistros, cafes, and fine dining.',
    fullDescription: 'Appetizing visual design with tabbed food & beverage menus, direct table reservation integrations, private dining enquiry forms, and chef stories.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Utensils',
    templateCount: 3,
    priceRange: '₹10,000 – ₹22,000',
    featureHighlights: [
      'Categorized Food & Wine Menu',
      'Table Reservation Widget',
      'Atmosphere & Dining Space Gallery',
      'Google Maps & Direction Links'
    ],
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    name: 'Portfolio & Personal Websites',
    shortDescription: 'Minimalist editorial portfolios for photographers, architects, designers, developers, and executive leaders.',
    fullDescription: 'Curated gallery formats that put creative work front and center with immersive imagery, client project archives, press mentions, and collaboration requests.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    iconName: 'UserCheck',
    templateCount: 3,
    priceRange: '₹8,000 – ₹18,000',
    featureHighlights: [
      'Fullscreen Image & Case Gallery',
      'Client Roster & Press Mentions',
      'CV & Skill Experience Timeline',
      'Direct Commission Contact Form'
    ],
  },
  {
    id: 'travel',
    slug: 'travel',
    name: 'Travel & Tourism',
    shortDescription: 'Inspiring journey itineraries, boutique stays, experiential tour packages, and inquiry booking flows.',
    fullDescription: 'Scenic, destination-driven templates for tour operators, travel agencies, and boutique homestays with day-by-day itineraries, packing guides, and enquiry cards.',
    coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Compass',
    templateCount: 2,
    priceRange: '₹14,000 – ₹28,000',
    featureHighlights: [
      'Day-wise Tour Itinerary Accordion',
      'Pricing Includes / Excludes Matrix',
      'Guest Reviews & Gallery',
      'Custom Trip Query Form'
    ],
  },
  {
    id: 'events',
    slug: 'events',
    name: 'Events & Weddings',
    shortDescription: 'Romantic wedding portals, corporate summit microsites, RSVP tracking, and schedule planners.',
    fullDescription: 'Elegant celebration websites for bespoke weddings, creative conferences, and galas with RSVP confirmation, accommodations guide, ceremony timelines, and registry links.',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    iconName: 'CalendarHeart',
    templateCount: 2,
    priceRange: '₹10,000 – ₹20,000',
    featureHighlights: [
      'Interactive RSVP Submission',
      'Ceremony & Event Schedule',
      'Venue & Accommodation Details',
      'Story Timeline & Photo Gallery'
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return categories.find((cat) => cat.slug.toLowerCase() === slug.toLowerCase());
}

export function getCategoryById(id: string): CategoryItem | undefined {
  return categories.find((cat) => cat.id.toLowerCase() === id.toLowerCase());
}
