// Swap these per prospect. Single source of truth for the entire landing page.
export const brand = {
  name: "Luxuryloft Apartment",
  shortName: "Luxuryloft",
  location: "Port Harcourt, Nigeria",
  tagline: "Luxury Living Redefined",
  heroHeadline: "Luxury isn't a dream... it's your next stay.",
  heroSub:
    "Looking for a calm, classy and fully serviced shortlet in Port Harcourt? Welcome to call now to book your stay.",
  phone: "+234 803 524 5920",
  whatsapp: "+2348035245920", // digits only for wa.me
  email: "bookings@luxuryloftapartment.com",
  address: "Port Harcourt, Nigeria",
  mapsQuery: "Port Harcourt, Nigeria",
  socials: {
    instagram: "https://instagram.com/luxuryloftapartment",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },
  nearby: [
    { name: "Port Harcourt International Airport", distance: "25 min" },
    { name: "City Center", distance: "15 min" },
    { name: "Shopping Districts", distance: "10 min" },
    { name: "Business Hub", distance: "12 min" },
    { name: "Entertainment Venues", distance: "8 min" },
  ],
};

export type Brand = typeof brand;
