export const siteConfig = {
  name: "Summit Air Solutions",
  description: "Austin's Most Trusted HVAC Experts. 24/7 Emergency Service, Repair, and Installation.",
  url: "https://summitairsolutions.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    phone: "(512) 555-0199",
    email: "service@summitairsolutions.com",
    address: "1234 Capital of TX Hwy S, Austin, TX 78746",
    hours: "24/7 Emergency Service Available",
  },
  navItems: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Financing", href: "/financing" },
    { title: "About", href: "/about" },
    { title: "Service Areas", href: "/service-areas" },
    { title: "Contact", href: "/contact" },
  ],
} as const;