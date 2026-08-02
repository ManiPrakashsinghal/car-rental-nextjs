export type CarCategory = "Hatchback" | "Sedan" | "SUV" | "Luxury";

export type Car = {
  slug: string;
  name: string;
  category: CarCategory;
  pricePerDay: number;
  transmission: "Manual" | "Automatic";
  seats: number;
  luggage: number;
  fuel: "Petrol" | "Diesel" | "CNG" | "Electric";
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

export const cars: Car[] = [
  {
    slug: "swift",
    name: "Maruti Suzuki Swift",
    category: "Hatchback",
    pricePerDay: 1799,
    transmission: "Manual",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 84,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop",
    description:
      "A nimble, fuel-efficient hatchback that's perfect for weaving through old-city lanes and quick errands alike.",
    features: ["Power steering", "AC", "Bluetooth audio", "ABS"],
  },
  {
    slug: "baleno",
    name: "Maruti Suzuki Baleno",
    category: "Hatchback",
    pricePerDay: 2199,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Spacious cabin, smooth automatic gearbox, and a boot big enough for a proper weekend bag.",
    features: ["Automatic", "Touchscreen infotainment", "Rear AC vents", "Reverse camera"],
  },
  {
    slug: "i20",
    name: "Hyundai i20",
    category: "Hatchback",
    pricePerDay: 2399,
    transmission: "Manual",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    tankOrRange: "37 Ltr.",
    minBookingDays: 1,
    rating: 4.6,
    reviewCount: 61,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium hatchback styling with a planted ride, well suited to both city runs and short highway hops.",
    features: ["Sunroof", "Cruise control", "Push-button start", "Steering-mounted controls"],
  },
  {
    slug: "city",
    name: "Honda City",
    category: "Sedan",
    pricePerDay: 3199,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "40 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 73,
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200&auto=format&fit=crop",
    description:
      "A quiet, refined sedan for business trips, airport runs, and anyone who wants a proper back seat.",
    features: ["Automatic", "Leatherette seats", "Climate control", "Rear armrest"],
  },
  {
    slug: "verna",
    name: "Hyundai Verna",
    category: "Sedan",
    pricePerDay: 3499,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "45 Ltr.",
    minBookingDays: 1,
    rating: 4.7,
    reviewCount: 52,
    image:
      "https://images.unsplash.com/photo-1622194993926-c8082efd2f39?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sharp looks and a confident highway ride — a favourite for longer inter-city drives out of Jaipur.",
    features: ["Ventilated seats", "Automatic", "Wireless charging", "6 airbags"],
  },
  {
    slug: "thar",
    name: "Mahindra Thar",
    category: "SUV",
    pricePerDay: 5499,
    transmission: "Manual",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    tankOrRange: "57 Ltr.",
    minBookingDays: 1,
    rating: 4.9,
    reviewCount: 90,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    description:
      "The desert-ready 4×4 for dune runs near Sam and open-top highway drives with the wind in your hair.",
    features: ["4×4", "Convertible top", "Off-road tyres", "Rock-solid ground clearance"],
  },
  {
    slug: "scorpio-n",
    name: "Mahindra Scorpio-N",
    category: "SUV",
    pricePerDay: 6999,
    transmission: "Automatic",
    seats: 7,
    luggage: 3,
    fuel: "Diesel",
    tankOrRange: "57 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 90,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
    description:
      "A commanding 7-seat SUV with the road presence and cabin space for full-family highway trips.",
    features: ["7 seats", "Automatic", "Panoramic sunroof", "All-terrain drive modes"],
  },
  {
    slug: "fortuner",
    name: "Toyota Fortuner",
    category: "Luxury",
    pricePerDay: 12999,
    transmission: "Automatic",
    seats: 7,
    luggage: 4,
    fuel: "Diesel",
    tankOrRange: "80 Ltr.",
    minBookingDays: 1,
    rating: 4.9,
    reviewCount: 47,
    image:
      "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium, powerful, and unmistakably first-class — booked for weddings, VIP transfers and long tours.",
    features: ["Automatic", "Leather seats", "Chauffeur available on request", "7 seats"],
  },
  {
    slug: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Luxury",
    pricePerDay: 8499,
    transmission: "Automatic",
    seats: 7,
    luggage: 4,
    fuel: "Diesel",
    tankOrRange: "65 Ltr.",
    minBookingDays: 1,
    rating: 4.8,
    reviewCount: 65,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop",
    description:
      "The gold standard for comfortable group travel — smooth, spacious, and built for long days on the road.",
    features: ["7 seats", "Captain seats", "Automatic", "Rear entertainment ready"],
  },
];

export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);

export const getCarsByCategory = (category: CarCategory) =>
  cars.filter((c) => c.category === category);
