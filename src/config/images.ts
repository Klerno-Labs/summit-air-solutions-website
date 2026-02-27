// ── Image Configuration ──────────────────────────────────────────────
// Replace these Unsplash URLs with your own images.
// All components import from this file, so changing URLs here updates the entire site.

export const images = {
  "hero": {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop&auto=format&q=80",
    alt: "Professional HVAC technician repairing an AC unit",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&auto=format&q=80",
    alt: "Modern home HVAC installation",
    width: 1200,
    height: 800,
  },
  "about": {
    src: "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=1200&h=800&fit=crop&auto=format&q=80",
    alt: "Summit Air Solutions team meeting",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Residential HVAC Installation",
    width: 800,
    height: 600,
  },
  "service-2": {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Commercial HVAC Maintenance",
    width: 800,
    height: 600,
  },
  "service-3": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "HVAC Repair Tools",
    width: 800,
    height: 600,
  },
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Completed AC Unit Installation",
    width: 800,
    height: 600,
  },
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Smart Thermostat Setup",
    width: 800,
    height: 600,
  },
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Air Duct Cleaning",
    width: 800,
    height: 600,
  },
  "cta": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format&q=80",
    alt: "Happy family in comfortable home",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=80",
    alt: "Modern Austin Home",
    width: 1200,
    height: 800,
  },
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "New Furnace Installation",
    width: 800,
    height: 600,
  },
} as const;

export type ImageSlot = keyof typeof images;