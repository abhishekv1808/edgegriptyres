export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-should-you-change-tyres",
    title: "How Often Should You Change Your Tyres? A Complete Guide",
    excerpt:
      "Most drivers don't know when to replace their tyres. Learn the signs, the rules, and the expert tips that can save your life on the road.",
    category: "Tyre Care",
    readTime: "4 min read",
    date: "March 2026",
    content: [
      "Your tyres are the only part of your vehicle that touches the road — yet most drivers overlook them until it's too late. Knowing when to change your tyres isn't just about performance; it's a matter of safety.",
      "The general rule is to replace tyres every 5 years regardless of tread depth, or when the tread reaches 1.6mm — the legal minimum in India. However, many experts, including us at EdgeGrip, recommend replacing at 3mm for better wet weather grip.",
      "Look for these warning signs: visible wear bars on the tread, cracks or bulges on the sidewall, persistent vibration at speed, or uneven wear patterns (which also indicate alignment issues). If you're unsure, visit a professional — at EdgeGrip, tread checks are always free.",
      "A simple test: place a ₹1 coin into the tread groove. If you can see the top of the coin clearly, your tread is too low and it's time for a replacement.",
      "Regular rotation (every 10,000 km) and correct inflation pressure can extend the life of your tyres significantly. Under-inflation causes the edges to wear faster, while over-inflation wears the centre.",
      "Investing in quality tyres from brands like Michelin, CEAT, or Pirelli doesn't just give you peace of mind — premium compounds last longer, grip better, and actually save you money in the long run through better fuel economy and longer life.",
    ],
  },
  {
    slug: "radial-vs-bias-tyres-explained",
    title: "Radial vs Bias Tyres: Which One Should You Choose?",
    excerpt:
      "The construction of your tyre matters more than you think. Understand the fundamental difference between radial and bias-ply tyres.",
    category: "Knowledge",
    readTime: "3 min read",
    date: "February 2026",
    content: [
      "Radial and bias (or bias-ply) are two fundamentally different tyre construction methods, and choosing the right one affects your ride quality, fuel efficiency, and safety.",
      "In radial tyres, the internal cord layers run perpendicular (at 90°) to the direction of travel. This allows the sidewall and tread to flex independently, resulting in better road contact, lower heat build-up, improved fuel economy, and significantly longer tyre life.",
      "Bias-ply tyres have cord layers running diagonally across the tyre at 30-45° angles. They're stiffer, generate more heat at speed, and wear out faster. However, they're tougher against impacts and are still preferred for off-road, agricultural, and vintage vehicles.",
      "For everyday road driving — whether in a car, SUV, or motorcycle — radial tyres are the clear winner. Every major tyre brand today develops their road tyres in radial construction.",
      "At EdgeGrip, all the tyres we stock from Michelin, CEAT, Eurogrip, Maxxis, and Pirelli are radial construction for road vehicles. If you need speciality tyres, we can source them on request.",
    ],
  },
  {
    slug: "monsoon-tyre-safety-tips",
    title: "5 Essential Monsoon Tyre Safety Tips for Bengaluru Drivers",
    excerpt:
      "Bengaluru's monsoon season means waterlogged roads and reduced visibility. Here's how your tyres can keep you safe.",
    category: "Safety",
    readTime: "3 min read",
    date: "January 2026",
    content: [
      "Bengaluru's monsoon season is beautiful but treacherous for drivers. Waterlogged roads, oil-slicked surfaces, and reduced visibility make quality tyres more important than ever.",
      "Tip 1: Check your tread depth before monsoon. Tyres with less than 3mm tread depth lose their ability to channel water effectively, dramatically increasing hydroplaning risk. Don't wait for the legal minimum; replace early.",
      "Tip 2: Maintain correct tyre pressure. Under-inflated tyres increase the contact patch in the wrong way, making them more prone to aquaplaning. Check pressure weekly during monsoon — and always when tyres are cold.",
      "Tip 3: Avoid mixing tyre brands or tread patterns. Mismatched tyres can behave unpredictably on wet surfaces. If you must replace only two, put the newer ones on the rear axle for better stability.",
      "Tip 4: Slow down on standing water. Even premium tyres have limits. At high speeds, water can't be evacuated fast enough and you lose contact with the road. If you see standing water, reduce speed gradually — never brake suddenly.",
      "Tip 5: Consider wet-grip-rated tyres. Brands like Michelin and CEAT have specific models designed for wet performance. The EU tyre label wet grip rating (A being best) is a reliable indicator. Ask us at EdgeGrip for monsoon-specific recommendations.",
    ],
  },
  {
    slug: "wheel-alignment-vs-wheel-balancing",
    title: "Wheel Alignment vs Wheel Balancing: What's the Difference?",
    excerpt:
      "Many drivers confuse these two services. Learn when you need each one and why both matter for tyre longevity.",
    category: "Services",
    readTime: "3 min read",
    date: "December 2025",
    content: [
      "Wheel alignment and wheel balancing are two completely different services that are often confused. Both are essential, but they solve different problems.",
      "Wheel Balancing ensures that the weight of the tyre and wheel assembly is evenly distributed around the axle. Symptoms of unbalanced wheels include vibration in the steering wheel (front wheels) or the seat (rear wheels) at speeds above 60 km/h. Balancing involves adding small weights to the rim to counteract heavy spots.",
      "Wheel Alignment adjusts the angles of the wheels relative to the car's body and each other. The three key angles are Camber (inward/outward tilt), Toe (inward/outward pointing), and Caster (steering axis tilt). Misalignment causes the car to pull to one side, rapid or uneven tyre wear, and a crooked steering wheel.",
      "When do you need each? Balancing: every time new tyres are fitted, or if you feel steering vibration. Alignment: every 10,000 km, after hitting a significant pothole or kerb, or if you notice uneven tyre wear.",
      "At EdgeGrip, we include free computerised balancing with every tyre purchase. Our 4-wheel laser alignment system provides a printout showing before and after angles, so you can see the exact correction made.",
    ],
  },
  {
    slug: "tyre-pressure-guide",
    title: "The Ultimate Guide to Tyre Pressure: PSI, When & How",
    excerpt:
      "Incorrect tyre pressure is the #1 cause of premature tyre failure. Learn how to check, when to check, and what numbers to target.",
    category: "Tyre Care",
    readTime: "4 min read",
    date: "November 2025",
    content: [
      "Tyre pressure is arguably the single most important factor in tyre performance and safety. Yet a survey found that nearly 70% of cars on Indian roads have at least one tyre at the wrong pressure.",
      "Your vehicle's recommended tyre pressure is NOT on the tyre itself — that number is the maximum pressure. The correct number is in your owner's manual or on a sticker usually found on the driver's door frame or fuel filler cap.",
      "Always check tyre pressure when the tyres are cold — meaning the car hasn't been driven for at least 3 hours or has driven less than 3 km. Hot tyres read 4-6 PSI higher than true pressure.",
      "Under-inflation causes: excessive heat build-up, higher fuel consumption (up to 3% per 6 PSI low), faster edge wear, risk of blowout, and poor handling. Over-inflation causes: harsh ride, reduced traction, centre tread wear, and increased susceptibility to impact damage.",
      "We recommend checking pressure fortnightly and always before long trips. At EdgeGrip, we offer free pressure checks and adjust all four tyres to your vehicle's exact specification — no appointment needed.",
      "Pro tip: if you frequently carry heavy loads or tow, increase pressure by 2-4 PSI above the standard recommendation. Check your manual for the 'full load' pressure figure.",
    ],
  },
  {
    slug: "how-to-read-tyre-markings",
    title: "How to Read the Numbers on Your Tyre: A Simple Breakdown",
    excerpt:
      "205/55R16 91V — looks like a code? It's actually telling you everything about your tyre. Here's how to decode it.",
    category: "Knowledge",
    readTime: "3 min read",
    date: "October 2025",
    content: [
      "Every tyre has a series of numbers and letters on its sidewall that tell you its exact size, type, and performance capabilities. Understanding these markings helps you make informed purchasing decisions.",
      "Let's break down '205/55R16 91V': 205 = tyre width in millimetres. 55 = aspect ratio (sidewall height is 55% of the width). R = radial construction. 16 = rim diameter in inches. 91 = load index (615 kg per tyre). V = speed rating (240 km/h max).",
      "Common speed ratings: S (180 km/h), T (190), H (210), V (240), W (270), Y (300). Higher-rated tyres are built for better high-speed stability but aren't necessarily 'faster' — they're safer at sustained speeds.",
      "The load index tells you how much weight each tyre can safely carry. Multiply by 4 for your vehicle's total tyre load capacity. Never fit tyres with a lower load index than your vehicle's OEM specification.",
      "Other markings to look for: DOT code (manufacturing date — e.g., '2425' means week 24 of 2025), M+S (Mud and Snow rated), the treadwear/traction/temperature (UTQG) rating, and the EU energy label rating.",
      "At EdgeGrip, our team helps you decode these markings and find the exact right match for your vehicle. Visit us or use our online Tyre Finder tool to get started.",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
