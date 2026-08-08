export type CarCategory = "Hatchback" | "Sedan" | "SUV" | "Luxury";

export type Car = {
  slug: string;
  name: string;
  category: CarCategory;
  pricePerDay: number;
  transmission: "Manual" | "Automatic";
  seats: number;
  luggage: number;
  fuel: "Petrol" | "Diesel" | "CNG" | "Petrol/CNG" | "Electric";
  tankOrRange: string;
  minBookingDays: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  features: string[];
};

export const categories: { label: CarCategory; blurb: string }[] = [
  { label: "Hatchback", blurb: "Easy to park, light on fuel, built for the city." },
  { label: "Sedan", blurb: "Comfortable and composed for highway drives." },
  { label: "SUV", blurb: "Room for the whole crew and the rough roads too." },
  { label: "Luxury", blurb: "For the drive that deserves an entrance." },
];

// NOTE ON IMAGES
// Every `image` path below points to /public/images/<file> using the same
// filename the source photos were saved under. If any filename doesn't
// match what's in your public/images folder, just update that one line —
// nothing else needs to change.

export const cars: Car[] = [
  // ── SUVs ────────────────────────────────────────────────
  {
    slug: "thar",
    name: "Thar",
    category: "SUV",
    pricePerDay: 5499,
    transmission: "Manual",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/thar1.avif",
    description:
      "The desert-ready 4x4 for dune runs and open-top highway drives with the wind in your hair.",
    features: ["4x4 capable", "Convertible top", "High ground clearance", "Manual gearbox"],
  },
  {
    slug: "scorpio-n",
    name: "Scorpio N",
    category: "SUV",
    pricePerDay: 6999,
    transmission: "Automatic",
    seats: 7,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/scorpioN.avif",
    description:
      "A commanding 7-seat SUV with the road presence and cabin space for full-family trips.",
    features: ["7 seats", "Automatic", "Bold road presence", "Great highway comfort"],
  },
  {
    slug: "scorpio",
    name: "Scorpio",
    category: "SUV",
    pricePerDay: 6499,
    transmission: "Automatic",
    seats: 7,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 90,
    // Verify this filename in public/images — the source listing reused
    // the Thar photo for this card, which looked like a mix-up.
    image: "/images/scoipoClassic.avif",
    description:
      "The classic Scorpio — a rugged, high-riding SUV built for both city runs and long hauls.",
    features: ["7 seats", "Automatic", "Rugged build", "Comfortable long-haul ride"],
  },
  {
    slug: "kia-carens",
    name: "Kia Carens",
    category: "SUV",
    pricePerDay: 4499,
    transmission: "Automatic",
    seats: 7,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/kiaCarens.avif",
    description:
      "A comfortable 7-seat MUV that's ideal for families and group travel around the city and beyond.",
    features: ["7 seats", "Automatic", "Spacious third row", "Smooth ride quality"],
  },
  {
    slug: "fronx-automatic",
    name: "Fronx Automatic",
    category: "SUV",
    pricePerDay: 3299,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 90,
    image: "/images/Fronx-Automatic.avif",
    description:
      "A stylish compact SUV with an effortless automatic gearbox, perfect for daily city driving.",
    features: ["Automatic", "Compact SUV stance", "Touchscreen infotainment", "Great mileage"],
  },
  {
    slug: "fronx",
    name: "Fronx",
    category: "SUV",
    pricePerDay: 2999,
    transmission: "Manual",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.6,
    reviewCount: 90,
    image: "/images/Fronx-Automatic.avif",
    description:
      "The manual variant of the Fronx — a fun-to-drive, fuel-efficient compact SUV for the city.",
    features: ["Manual gearbox", "Compact SUV stance", "Great mileage", "Easy to park"],
  },
  {
    slug: "kia-sonet-diesel",
    name: "Kia Sonet Diesel",
    category: "SUV",
    pricePerDay: 3999,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Diesel",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 90,
    image: "/images/kiasonet.avif",
    description:
      "A punchy diesel-powered compact SUV with sharp styling, great for longer highway drives.",
    features: ["Diesel engine", "Automatic", "Sunroof", "Strong highway performance"],
  },
  {
    slug: "xuv300-sunroof",
    name: "XUV 300 Sunroof",
    category: "SUV",
    pricePerDay: 3499,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 90,
    image: "/images/xuv300.avif",
    description:
      "A well-equipped compact SUV with a panoramic sunroof — a favourite for weekend getaways.",
    features: ["Sunroof", "Automatic", "5-star safety rating", "Comfortable cabin"],
  },

  // ── Sedans ──────────────────────────────────────────────
  {
    slug: "dzire",
    name: "Dzire",
    category: "Sedan",
    pricePerDay: 2499,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 90,
    image: "/images/dzire.jpg",
    description:
      "A compact, fuel-efficient sedan that's easy to drive and easy on the wallet.",
    features: ["Automatic", "Boot space for 3 bags", "AC", "Great in-city mileage"],
  },
  {
    slug: "verna",
    name: "Verna",
    category: "Sedan",
    pricePerDay: 4499,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/verna.avif",
    description:
      "Sharp looks and a confident highway ride — a favourite for longer inter-city drives.",
    features: ["Automatic", "Premium interiors", "Wireless charging", "Cruise control"],
  },

  // ── Hatchbacks ──────────────────────────────────────────
  {
    slug: "baleno",
    name: "Baleno",
    category: "Hatchback",
    pricePerDay: 2499,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/Baleno.avif",
    description:
      "Spacious cabin, smooth automatic gearbox, and a boot big enough for a proper weekend bag.",
    features: ["Automatic", "Touchscreen infotainment", "Rear AC vents", "Reverse camera"],
  },
  {
    slug: "white-swift",
    name: "White Swift",
    category: "Hatchback",
    pricePerDay: 2499,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/whiteshift.jpg",
    description:
      "A nimble, fuel-efficient hatchback that's perfect for weaving through city lanes.",
    features: ["Automatic", "Power steering", "Bluetooth audio", "ABS"],
  },
  {
    slug: "i10-cng",
    name: "i10 CNG",
    category: "Hatchback",
    pricePerDay: 2399,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol/CNG",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.6,
    reviewCount: 90,
    image: "/images/i10.avif",
    description:
      "A budget-friendly hatchback with a factory-fit CNG option — ideal for keeping running costs low.",
    features: ["Petrol/CNG", "Automatic", "Low running cost", "Easy to park"],
  },

  // ── Luxury / MUV ────────────────────────────────────────
  {
    slug: "fortuner",
    name: "Fortuner",
    category: "Luxury",
    pricePerDay: 17999,
    transmission: "Automatic",
    seats: 7,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.9,
    reviewCount: 90,
    image: "/images/fortuner.jpg",
    description:
      "Premium, powerful, and unmistakably first-class — booked for weddings, VIP transfers and long tours.",
    features: ["Automatic", "Leather seats", "7 seats", "Commanding road presence"],
  },
  {
    slug: "innova",
    name: "Innova",
    category: "Luxury",
    pricePerDay: 6499,
    transmission: "Automatic",
    seats: 7,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image: "/images/innova.jpg",
    description:
      "The gold standard for comfortable group travel — smooth, spacious, and built for long days on the road.",
    features: ["7 seats", "Automatic", "Captain seats", "Great for group travel"],
  },
];

export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);

export const getCarsByCategory = (category: CarCategory) =>
  cars.filter((c) => c.category === category);