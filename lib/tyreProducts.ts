export interface TyreProduct {
  id: string;
  brand: string;
  tagline: string;
  title: string;
  specs: string;
  features: string[];
  price: string;
  image: string;
  category: string;
  // Detailed info for product page
  description: string;
  ratings: { overall: number; count: number };
  warranty: string;
  idealFor: string[];
  highlights: string[];
  technicalSpecs: {
    width: string;
    aspectRatio: string;
    rimDiameter: string;
    loadIndex: string;
    speedRating: string;
    treadDepth: string;
    weight: string;
    maxPressure: string;
    construction: string;
    treadPattern: string;
  };
  reviews: {
    name: string;
    rating: number;
    date: string;
    comment: string;
    vehicle: string;
  }[];
}

export const TYRE_PRODUCTS: TyreProduct[] = [
  {
    id: "michelin-primacy-4-plus",
    brand: "Michelin",
    tagline: "Performance Meets Safety",
    title: "PRIMACY 4+",
    specs: "215/55R17 94W",
    features: ["Tube Less", "Radial", "Run Flat"],
    price: "12,450",
    image: "/images/hero-tyre.png",
    category: "Sedan",
    description:
      "The Michelin Primacy 4+ delivers exceptional wet and dry braking performance that lasts. Its EverGrip technology ensures safety even when the tyre is worn, while the optimised contact patch provides a quiet, comfortable ride for premium sedans.",
    ratings: { overall: 4.8, count: 214 },
    warranty: "6 Years Manufacturer Warranty",
    idealFor: ["Premium Sedans", "Wet Braking", "Long Highway Trips"],
    highlights: [
      "EverGrip technology for safety even when worn",
      "Silica-infused compound for superior wet grip",
      "Low rolling resistance for better fuel efficiency",
      "Ultra-silent tread design for cabin comfort",
    ],
    technicalSpecs: {
      width: "215 mm",
      aspectRatio: "55%",
      rimDiameter: "17 inches",
      loadIndex: "94 (670 kg)",
      speedRating: "W (270 km/h)",
      treadDepth: "8.2 mm",
      weight: "9.6 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Asymmetric",
    },
    reviews: [
      {
        name: "Rahul S.",
        rating: 5,
        date: "Feb 2026",
        comment:
          "Absolutely phenomenal in Bangalore rains. My Civic feels planted at any speed. The quietness is unreal — feels like a luxury upgrade.",
        vehicle: "Honda Civic 2024",
      },
      {
        name: "Priya M.",
        rating: 5,
        date: "Jan 2026",
        comment:
          "Worth every rupee. The braking difference compared to my old tyres is night and day. Highly recommend for anyone who values safety.",
        vehicle: "Hyundai Verna 2024",
      },
      {
        name: "Vikram T.",
        rating: 4,
        date: "Dec 2025",
        comment:
          "Excellent comfort and grip. A bit premium in price but you can feel the quality immediately. EdgeGrip did a perfect fitment.",
        vehicle: "Skoda Slavia 2023",
      },
    ],
  },
  {
    id: "bridgestone-turanza-t005",
    brand: "Bridgestone",
    tagline: "Engineered for Comfort",
    title: "TURANZA T005",
    specs: "205/60R16 92V",
    features: ["Tube Less", "Radial"],
    price: "9,750",
    image: "/images/hero-tyre.png",
    category: "Sedan",
    description:
      "The Bridgestone Turanza T005 is a touring tyre designed for refined driving comfort and excellent wet performance. Its NanoPro-Tech compound maximises the contact between rubber and road, delivering outstanding wet braking and long tread life.",
    ratings: { overall: 4.5, count: 176 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Touring", "City & Highway", "Wet Roads"],
    highlights: [
      "NanoPro-Tech compound for superior road contact",
      "Wide circumferential grooves for aquaplaning resistance",
      "Optimised pitch sequence for reduced road noise",
      "Even pressure distribution for uniform tread wear",
    ],
    technicalSpecs: {
      width: "205 mm",
      aspectRatio: "60%",
      rimDiameter: "16 inches",
      loadIndex: "92 (630 kg)",
      speedRating: "V (240 km/h)",
      treadDepth: "8.5 mm",
      weight: "9.2 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Symmetric",
    },
    reviews: [
      {
        name: "Anand K.",
        rating: 5,
        date: "Mar 2026",
        comment:
          "The ride quality is superb. My Creta glides over bumps now. Very quiet on the highway, exactly what I expected from Bridgestone.",
        vehicle: "Hyundai Creta 2023",
      },
      {
        name: "Deepa R.",
        rating: 4,
        date: "Jan 2026",
        comment:
          "Great tyre for the price. The wet grip is noticeably better than my previous set. Smooth and predictable on city roads.",
        vehicle: "Kia Seltos 2024",
      },
    ],
  },
  {
    id: "apollo-apterra-hp",
    brand: "Apollo",
    tagline: "Built for Indian Roads",
    title: "APTERRA H/P",
    specs: "215/65R16 98H",
    features: ["Tube Less", "Radial"],
    price: "8,200",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "The Apollo Apterra H/P is purpose-built for Indian SUVs tackling everything from highway cruising to pothole-ridden city roads. Its reinforced construction offers exceptional durability while the optimised tread pattern provides a quiet, comfortable ride.",
    ratings: { overall: 4.4, count: 152 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Indian Roads", "SUV Comfort", "All-Season Driving"],
    highlights: [
      "Reinforced sidewalls for pothole and curb protection",
      "Deep tread grooves for extended tyre life",
      "Heat-resistant compound for Indian summers",
      "Optimised block stiffness for stable highway handling",
    ],
    technicalSpecs: {
      width: "215 mm",
      aspectRatio: "65%",
      rimDiameter: "16 inches",
      loadIndex: "98 (750 kg)",
      speedRating: "H (210 km/h)",
      treadDepth: "9.0 mm",
      weight: "10.8 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Asymmetric",
    },
    reviews: [
      {
        name: "Suresh P.",
        rating: 5,
        date: "Feb 2026",
        comment:
          "These tyres handle Bangalore's potholes like a champ. My Scorpio finally rides smooth. Great value for an SUV tyre.",
        vehicle: "Mahindra Scorpio-N 2024",
      },
      {
        name: "Kiran D.",
        rating: 4,
        date: "Dec 2025",
        comment:
          "Solid tyre from Apollo. The grip is good and they're holding up really well after 15,000 km. EdgeGrip fitment was excellent.",
        vehicle: "Tata Safari 2023",
      },
    ],
  },
  {
    id: "mrf-perfinza-clx2",
    brand: "MRF",
    tagline: "India's Most Trusted",
    title: "PERFINZA CLX2",
    specs: "205/55R16 91V",
    features: ["Tube Less", "Radial"],
    price: "7,650",
    image: "/images/hero-tyre.png",
    category: "Hatchback",
    description:
      "The MRF Perfinza CLX2 is India's favourite premium hatchback tyre, offering the perfect balance of grip, comfort, and mileage. Engineered specifically for Indian driving conditions, it delivers confident handling and impressive tread life.",
    ratings: { overall: 4.3, count: 289 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Hatchbacks", "City Commute", "Budget Performance"],
    highlights: [
      "Advanced silica compound for wet & dry grip",
      "Jointless nylon cover for high-speed stability",
      "Wide contact patch for even tread wear",
      "Fuel-efficient low rolling resistance design",
    ],
    technicalSpecs: {
      width: "205 mm",
      aspectRatio: "55%",
      rimDiameter: "16 inches",
      loadIndex: "91 (615 kg)",
      speedRating: "V (240 km/h)",
      treadDepth: "7.8 mm",
      weight: "8.5 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Directional",
    },
    reviews: [
      {
        name: "Manoj V.",
        rating: 5,
        date: "Mar 2026",
        comment:
          "Best tyre for the i20. Incredible grip in corners, and the tread life is amazing — 25,000 km and still looks almost new.",
        vehicle: "Hyundai i20 2023",
      },
      {
        name: "Ravi G.",
        rating: 4,
        date: "Feb 2026",
        comment:
          "Very reliable tyre. MRF never disappoints. Got these fitted at EdgeGrip and they aligned everything perfectly.",
        vehicle: "Maruti Baleno 2024",
      },
    ],
  },
  {
    id: "jk-tyre-ux-royale",
    brand: "JK Tyre",
    tagline: "Royal Ride Quality",
    title: "UX ROYALE",
    specs: "185/65R15 88H",
    features: ["Tube Less", "Radial"],
    price: "5,450",
    image: "/images/hero-tyre.png",
    category: "Hatchback",
    description:
      "The JK Tyre UX Royale delivers a royally comfortable ride for compact cars and hatchbacks. Its unique tread design minimises road noise while the durable compound ensures long-lasting performance, making it one of India's best value tyres.",
    ratings: { overall: 4.2, count: 198 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Budget Cars", "Maximum Mileage", "Daily Commute"],
    highlights: [
      "Special noise-cancelling tread pattern",
      "High-mileage compound for extended tread life",
      "Lateral grooves for confident wet handling",
      "Lightweight construction for improved fuel economy",
    ],
    technicalSpecs: {
      width: "185 mm",
      aspectRatio: "65%",
      rimDiameter: "15 inches",
      loadIndex: "88 (560 kg)",
      speedRating: "H (210 km/h)",
      treadDepth: "7.5 mm",
      weight: "7.8 kg",
      maxPressure: "42 PSI",
      construction: "Radial",
      treadPattern: "Symmetric",
    },
    reviews: [
      {
        name: "Arun B.",
        rating: 4,
        date: "Jan 2026",
        comment:
          "Great value for money. My Swift is so much quieter now. The mileage has also slightly improved after switching to these.",
        vehicle: "Maruti Swift 2023",
      },
      {
        name: "Lakshmi N.",
        rating: 5,
        date: "Dec 2025",
        comment:
          "Incredibly comfortable ride for this price. Handles rain well, and the tyre life is looking very promising so far. Happy customer!",
        vehicle: "Tata Altroz 2024",
      },
    ],
  },
  {
    id: "ceat-securadrive-225",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE",
    specs: "225/45R17 94W",
    features: ["Tube Less", "Radial"],
    price: "9,200",
    image: "/images/hero-tyre.png",
    category: "Sedan",
    description:
      "The CEAT SecuraDrive is engineered for sporty sedans that demand precise steering response and confident braking. Its asymmetric tread design delivers exceptional cornering grip while maintaining impressive wet weather safety.",
    ratings: { overall: 4.6, count: 134 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Sporty Sedans", "Sharp Handling", "High-Speed Stability"],
    highlights: [
      "Asymmetric tread for balanced wet and dry grip",
      "Stiff shoulder blocks for responsive cornering",
      "Wide centre rib for precise steering feedback",
      "Advanced silica compound for shorter braking distances",
    ],
    technicalSpecs: {
      width: "225 mm",
      aspectRatio: "45%",
      rimDiameter: "17 inches",
      loadIndex: "94 (670 kg)",
      speedRating: "W (270 km/h)",
      treadDepth: "7.6 mm",
      weight: "9.4 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Asymmetric",
    },
    reviews: [
      {
        name: "Sanjay M.",
        rating: 5,
        date: "Mar 2026",
        comment:
          "The grip on my Virtus is mind-blowing. Takes highway curves without a flinch. EdgeGrip team recommended these and I'm so glad they did.",
        vehicle: "Volkswagen Virtus 2024",
      },
      {
        name: "Nikhil S.",
        rating: 5,
        date: "Feb 2026",
        comment:
          "My City feels like a sports car on these tyres. The braking improvement alone was worth the upgrade. Highly recommended.",
        vehicle: "Honda City 2023",
      },
      {
        name: "Asha P.",
        rating: 4,
        date: "Jan 2026",
        comment:
          "Excellent handling and very low road noise. A premium tyre at a reasonable price. The low profile looks great too.",
        vehicle: "Skoda Kushaq 2024",
      },
    ],
  },
];

export function getTyreById(id: string): TyreProduct | undefined {
  return TYRE_PRODUCTS.find((t) => t.id === id);
}
