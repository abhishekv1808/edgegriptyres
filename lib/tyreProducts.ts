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
    id: "securadrive-suv-205",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE SUV",
    specs: "205/60R16 92H",
    features: ["Tube Less", "Radial"],
    price: "8,850",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "The CEAT SecuraDrive SUV is engineered for superior control and confident handling on both highways and city roads. Its advanced tread compound delivers shorter braking distances on wet surfaces while maintaining exceptional mileage.",
    ratings: { overall: 4.5, count: 128 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Highway Cruising", "City Commute", "Wet Conditions"],
    highlights: [
      "Optimised tread design for reduced road noise",
      "Advanced silica compound for superior wet grip",
      "Reinforced sidewalls for pothole protection",
      "Fuel-efficient rolling resistance",
    ],
    technicalSpecs: {
      width: "205 mm",
      aspectRatio: "60%",
      rimDiameter: "16 inches",
      loadIndex: "92 (630 kg)",
      speedRating: "H (210 km/h)",
      treadDepth: "8.5 mm",
      weight: "9.8 kg",
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
          "Excellent grip in Bangalore rains. My Creta feels much more planted on the highway now. Braking confidence has improved dramatically.",
        vehicle: "Hyundai Creta 2023",
      },
      {
        name: "Priya M.",
        rating: 4,
        date: "Jan 2026",
        comment:
          "Very quiet on the road compared to my old tyres. Good value for an SUV tyre at this price point.",
        vehicle: "Kia Seltos 2024",
      },
      {
        name: "Vikram T.",
        rating: 5,
        date: "Dec 2025",
        comment:
          "Got these fitted at EdgeGrip. The ride quality improvement is immediately noticeable. Smooth and soft over speed bumps.",
        vehicle: "MG Hector 2023",
      },
    ],
  },
  {
    id: "securadrive-suv-205-65",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE SUV",
    specs: "205/65R16 95/H",
    features: ["Tube Less", "Radial"],
    price: "8,150",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "A taller sidewall variant offering enhanced ride comfort and bump absorption. Perfect for Indian roads, this tyre balances comfort with stability for mid-size SUVs.",
    ratings: { overall: 4.3, count: 96 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Comfort Rides", "City & Highway", "All Season"],
    highlights: [
      "Higher aspect ratio for better bump absorption",
      "Multi-groove channels for hydroplaning resistance",
      "Long-lasting tread compound for extended mileage",
      "Low rolling noise for cabin comfort",
    ],
    technicalSpecs: {
      width: "205 mm",
      aspectRatio: "65%",
      rimDiameter: "16 inches",
      loadIndex: "95 (690 kg)",
      speedRating: "H (210 km/h)",
      treadDepth: "8.8 mm",
      weight: "10.2 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Symmetric",
    },
    reviews: [
      {
        name: "Anand K.",
        rating: 4,
        date: "Mar 2026",
        comment:
          "Comfortable ride over bad roads. Noise levels are impressively low for an SUV tyre. Happy with the purchase.",
        vehicle: "Tata Harrier 2024",
      },
      {
        name: "Deepa R.",
        rating: 5,
        date: "Jan 2026",
        comment:
          "Best tyre in this budget. Handles rain very well and the mileage hasn't dropped at all after switching.",
        vehicle: "Hyundai Venue 2023",
      },
    ],
  },
  {
    id: "securadrive-suv-215",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE SUV",
    specs: "215/55R17 94V",
    features: ["Tube Less"],
    price: "10,200",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "A performance-oriented SUV tyre with a V-speed rating for higher speed stability. The lower profile provides sharper steering response and a sportier driving feel.",
    ratings: { overall: 4.6, count: 74 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Performance Driving", "Highway Speed", "Sharp Handling"],
    highlights: [
      "V-speed rated for sustained high-speed driving",
      "Stiffer sidewall for precise cornering",
      "Heat-resistant compound for long highway runs",
      "Aggressive tread blocks for confident grip",
    ],
    technicalSpecs: {
      width: "215 mm",
      aspectRatio: "55%",
      rimDiameter: "17 inches",
      loadIndex: "94 (670 kg)",
      speedRating: "V (240 km/h)",
      treadDepth: "8.2 mm",
      weight: "10.5 kg",
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
          "The handling improvement on my XUV700 is phenomenal. Takes corners like a sedan. EdgeGrip team did a perfect alignment too.",
        vehicle: "Mahindra XUV700 2024",
      },
      {
        name: "Kiran D.",
        rating: 4,
        date: "Dec 2025",
        comment:
          "Solid tyre for highway use. Very confident at 120-140 kmph, no wobble whatsoever. Slightly firm ride though.",
        vehicle: "Tata Safari 2023",
      },
    ],
  },
  {
    id: "securadrive-suv-215-60",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE SUV",
    specs: "215/60R17 96H",
    features: ["Tube Less"],
    price: "9,900",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "The ideal all-rounder SUV tyre balancing comfort, grip, and longevity. A popular choice for mid-to-large SUVs on Indian roads, offering dependable performance in all conditions.",
    ratings: { overall: 4.4, count: 112 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["All-Round Performance", "Family Trips", "Long Distance"],
    highlights: [
      "Balanced tread for comfort and grip",
      "Higher load capacity for fully loaded SUVs",
      "4-channel drainage for excellent wet traction",
      "Even wear pattern for maximum tyre life",
    ],
    technicalSpecs: {
      width: "215 mm",
      aspectRatio: "60%",
      rimDiameter: "17 inches",
      loadIndex: "96 (710 kg)",
      speedRating: "H (210 km/h)",
      treadDepth: "8.6 mm",
      weight: "11.0 kg",
      maxPressure: "44 PSI",
      construction: "Radial",
      treadPattern: "Symmetric",
    },
    reviews: [
      {
        name: "Manoj V.",
        rating: 5,
        date: "Mar 2026",
        comment:
          "Perfect balance of comfort and grip. Did a Bangalore to Goa trip and the tyres were absolutely fantastic on both highway and ghat roads.",
        vehicle: "Hyundai Alcazar 2024",
      },
      {
        name: "Ravi G.",
        rating: 4,
        date: "Feb 2026",
        comment:
          "Good value for this specification. The road noise is minimal and wet grip inspires confidence.",
        vehicle: "MG Hector Plus 2023",
      },
    ],
  },
  {
    id: "securadrive-suv-215-65",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE SUV",
    specs: "215/65R16 98H",
    features: ["Tube Less"],
    price: "10,600",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "Built for maximum load bearing and comfort, this high-aspect-ratio variant excels on rough and uneven Indian road surfaces. The extra sidewall cushion absorbs impacts effectively.",
    ratings: { overall: 4.5, count: 88 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Rough Roads", "Heavy Load", "Maximum Comfort"],
    highlights: [
      "98 load index — handles fully loaded SUVs effortlessly",
      "Extra sidewall height for pothole protection",
      "Durable casing for rough terrain durability",
      "Quiet and comfortable at highway speeds",
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
      treadPattern: "Symmetric",
    },
    reviews: [
      {
        name: "Arun B.",
        rating: 5,
        date: "Jan 2026",
        comment:
          "Incredible on Bangalore's pothole-ridden roads. My Nexon feels like a completely different car. Smooth and quiet.",
        vehicle: "Tata Nexon 2024",
      },
      {
        name: "Lakshmi N.",
        rating: 4,
        date: "Dec 2025",
        comment:
          "Really comfortable tyre. The higher profile makes a big difference on bad roads near my area. Good grip in rain too.",
        vehicle: "Renault Kiger 2023",
      },
    ],
  },
  {
    id: "securadrive-suv-225",
    brand: "CEAT",
    tagline: "Crafted for Control",
    title: "SECURADRIVE SUV",
    specs: "225/60R17 99/H",
    features: ["Tube Less", "Radial"],
    price: "10,200",
    image: "/images/hero-tyre.png",
    category: "SUV",
    description:
      "The widest variant in the SecuraDrive SUV range, offering maximum road contact for superior traction. Ideal for larger SUVs that demand extra grip and braking power.",
    ratings: { overall: 4.7, count: 65 },
    warranty: "5 Years Manufacturer Warranty",
    idealFor: ["Large SUVs", "Maximum Traction", "Confident Braking"],
    highlights: [
      "225mm width for maximum road contact patch",
      "Wide grooves for rapid water evacuation",
      "Premium compound for longer tread life",
      "Strongest load rating in the range (99)",
    ],
    technicalSpecs: {
      width: "225 mm",
      aspectRatio: "60%",
      rimDiameter: "17 inches",
      loadIndex: "99 (775 kg)",
      speedRating: "H (210 km/h)",
      treadDepth: "8.8 mm",
      weight: "11.5 kg",
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
          "These on my Fortuner are brilliant. The wider footprint gives so much more grip, especially during emergency braking. EdgeGrip service was top-notch.",
        vehicle: "Toyota Fortuner 2023",
      },
      {
        name: "Nikhil S.",
        rating: 5,
        date: "Feb 2026",
        comment:
          "Best CEAT tyre I've used. Wide, grippy, quiet. Perfect for my Scorpio-N on both city and highway.",
        vehicle: "Mahindra Scorpio-N 2024",
      },
      {
        name: "Asha P.",
        rating: 4,
        date: "Jan 2026",
        comment:
          "Very impressed with the ride quality. The wider tyre looks great too. Would definitely recommend to other SUV owners.",
        vehicle: "Hyundai Tucson 2023",
      },
    ],
  },
];

export function getTyreById(id: string): TyreProduct | undefined {
  return TYRE_PRODUCTS.find((t) => t.id === id);
}
