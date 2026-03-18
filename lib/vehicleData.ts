// Vehicle & Tyre Database for EdgeGrip Tyres
// Sourced from OEM specifications across Indian car & bike manufacturers

export interface TyreOption {
  brand: string;
  model: string;
  type: string; // "Touring" | "Performance" | "SUV" | "All-Season"
  warranty: string;
  priceRange: string; // "₹X,XXX – ₹X,XXX"
}

export interface VehicleModel {
  id: string;
  name: string;
  category: "Hatchback" | "Sedan" | "SUV" | "MPV" | "Compact SUV" | "Premium SUV" | "Bike" | "Scooter";
  manufacturer: string;
  year: string; // e.g. "2020–2026"
  image?: string;
  variants: {
    name: string;
    tyreSize: string; // e.g. "185/65 R15"
  }[];
}

export interface TyreSizeMap {
  [size: string]: TyreOption[];
}

// ─── TYRE OPTIONS BY SIZE ────────────────────────────────────────
// These map each tyre size to available options from the 5 brands EdgeGrip carries

export const tyresBySize: TyreSizeMap = {
  // ── SMALL HATCHBACK SIZES ──
  "155/80 R13": [
    { brand: "CEAT", model: "Milaze X3", type: "Touring", warranty: "5 Years", priceRange: "₹2,200 – ₹2,800" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹2,400 – ₹3,000" },
  ],
  "165/80 R14": [
    { brand: "CEAT", model: "Milaze X3", type: "Touring", warranty: "5 Years", priceRange: "₹2,800 – ₹3,400" },
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,200 – ₹4,000" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹2,600 – ₹3,200" },
  ],
  "165/70 R14": [
    { brand: "CEAT", model: "Milaze X3", type: "Touring", warranty: "5 Years", priceRange: "₹2,700 – ₹3,300" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹2,500 – ₹3,100" },
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,100 – ₹3,800" },
  ],
  "175/65 R14": [
    { brand: "CEAT", model: "SecuraDrive", type: "Touring", warranty: "5 Years", priceRange: "₹3,200 – ₹3,900" },
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,600 – ₹4,400" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹3,000 – ₹3,600" },
    { brand: "Pirelli", model: "Cinturato P6", type: "Touring", warranty: "5 Years", priceRange: "₹3,800 – ₹4,600" },
  ],
  "175/65 R15": [
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,800 – ₹4,600" },
    { brand: "CEAT", model: "SecuraDrive", type: "Touring", warranty: "5 Years", priceRange: "₹3,400 – ₹4,100" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹3,200 – ₹3,800" },
  ],
  "175/70 R14": [
    { brand: "CEAT", model: "Milaze X3", type: "Touring", warranty: "5 Years", priceRange: "₹2,900 – ₹3,500" },
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,300 – ₹4,000" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹2,700 – ₹3,300" },
  ],

  // ── HATCHBACK / SEDAN SIZES ──
  "185/65 R15": [
    { brand: "Michelin", model: "Primacy 4", type: "Performance", warranty: "5 Years", priceRange: "₹4,500 – ₹5,800" },
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,800 – ₹4,800" },
    { brand: "CEAT", model: "SecuraDrive", type: "Touring", warranty: "5 Years", priceRange: "₹3,500 – ₹4,200" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹3,400 – ₹4,000" },
    { brand: "Pirelli", model: "Cinturato P6", type: "Touring", warranty: "5 Years", priceRange: "₹4,200 – ₹5,200" },
  ],
  "185/60 R15": [
    { brand: "Michelin", model: "Energy XM2+", type: "Touring", warranty: "5 Years", priceRange: "₹3,900 – ₹4,800" },
    { brand: "CEAT", model: "SecuraDrive", type: "Touring", warranty: "5 Years", priceRange: "₹3,600 – ₹4,300" },
    { brand: "Pirelli", model: "Cinturato P6", type: "Touring", warranty: "5 Years", priceRange: "₹4,300 – ₹5,300" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹3,500 – ₹4,100" },
  ],
  "185/55 R16": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "Performance", warranty: "5 Years", priceRange: "₹5,000 – ₹6,200" },
    { brand: "CEAT", model: "SecuraDrive", type: "Performance", warranty: "5 Years", priceRange: "₹4,200 – ₹5,000" },
    { brand: "Pirelli", model: "Cinturato P1 Verde", type: "Performance", warranty: "5 Years", priceRange: "₹5,200 – ₹6,400" },
  ],
  "195/55 R16": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "Performance", warranty: "5 Years", priceRange: "₹5,500 – ₹6,800" },
    { brand: "CEAT", model: "SecuraDrive", type: "Performance", warranty: "5 Years", priceRange: "₹4,800 – ₹5,600" },
    { brand: "Pirelli", model: "Cinturato P1 Verde", type: "Performance", warranty: "5 Years", priceRange: "₹5,800 – ₹7,000" },
    { brand: "Maxxis", model: "MAP1", type: "Performance", warranty: "5 Years", priceRange: "₹4,500 – ₹5,400" },
  ],
  "195/60 R16": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "Touring", warranty: "5 Years", priceRange: "₹5,200 – ₹6,400" },
    { brand: "CEAT", model: "SecuraDrive", type: "Touring", warranty: "5 Years", priceRange: "₹4,500 – ₹5,400" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹4,200 – ₹5,000" },
    { brand: "Pirelli", model: "Cinturato P6", type: "Touring", warranty: "5 Years", priceRange: "₹5,000 – ₹6,200" },
  ],
  "195/65 R15": [
    { brand: "Michelin", model: "Primacy 4", type: "Touring", warranty: "5 Years", priceRange: "₹4,800 – ₹6,000" },
    { brand: "CEAT", model: "SecuraDrive", type: "Touring", warranty: "5 Years", priceRange: "₹4,200 – ₹5,000" },
    { brand: "Maxxis", model: "MAP1", type: "Touring", warranty: "5 Years", priceRange: "₹4,000 – ₹4,800" },
    { brand: "Pirelli", model: "Cinturato P6", type: "Touring", warranty: "5 Years", priceRange: "₹4,600 – ₹5,600" },
  ],

  // ── SUV / CROSSOVER SIZES ──
  "205/65 R15": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "SUV", warranty: "5 Years", priceRange: "₹5,000 – ₹6,200" },
    { brand: "CEAT", model: "SecuraDrive", type: "SUV", warranty: "5 Years", priceRange: "₹4,600 – ₹5,400" },
    { brand: "Pirelli", model: "Cinturato P6", type: "SUV", warranty: "5 Years", priceRange: "₹5,200 – ₹6,400" },
  ],
  "205/65 R16": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "SUV", warranty: "5 Years", priceRange: "₹5,500 – ₹6,800" },
    { brand: "CEAT", model: "SecuraDrive SUV", type: "SUV", warranty: "5 Years", priceRange: "₹4,800 – ₹5,800" },
    { brand: "Maxxis", model: "HT-760 Bravo", type: "SUV", warranty: "5 Years", priceRange: "₹4,600 – ₹5,600" },
    { brand: "Pirelli", model: "Cinturato P6", type: "SUV", warranty: "5 Years", priceRange: "₹5,600 – ₹6,800" },
  ],
  "215/60 R16": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "SUV", warranty: "5 Years", priceRange: "₹5,800 – ₹7,200" },
    { brand: "CEAT", model: "SecuraDrive SUV", type: "SUV", warranty: "5 Years", priceRange: "₹5,200 – ₹6,200" },
    { brand: "Maxxis", model: "HT-760 Bravo", type: "SUV", warranty: "5 Years", priceRange: "₹5,000 – ₹6,000" },
    { brand: "Pirelli", model: "Cinturato P6", type: "SUV", warranty: "5 Years", priceRange: "₹5,800 – ₹7,000" },
  ],
  "215/60 R17": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "SUV", warranty: "5 Years", priceRange: "₹6,500 – ₹8,000" },
    { brand: "CEAT", model: "SecuraDrive SUV", type: "SUV", warranty: "5 Years", priceRange: "₹5,800 – ₹7,000" },
    { brand: "Maxxis", model: "HT-760 Bravo", type: "SUV", warranty: "5 Years", priceRange: "₹5,500 – ₹6,800" },
  ],
  "215/55 R17": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "Performance", warranty: "5 Years", priceRange: "₹7,000 – ₹8,500" },
    { brand: "CEAT", model: "SecuraDrive", type: "Performance", warranty: "5 Years", priceRange: "₹6,200 – ₹7,400" },
    { brand: "Maxxis", model: "HT-760 Bravo", type: "SUV", warranty: "5 Years", priceRange: "₹5,800 – ₹7,000" },
    { brand: "Pirelli", model: "Cinturato P7", type: "Performance", warranty: "5 Years", priceRange: "₹7,200 – ₹8,800" },
  ],
  "215/55 R18": [
    { brand: "Michelin", model: "Primacy 4 ST", type: "SUV", warranty: "5 Years", priceRange: "₹7,500 – ₹9,200" },
    { brand: "CEAT", model: "SecuraDrive SUV", type: "SUV", warranty: "5 Years", priceRange: "₹6,800 – ₹8,000" },
    { brand: "Pirelli", model: "Scorpion Verde", type: "SUV", warranty: "5 Years", priceRange: "₹7,800 – ₹9,500" },
  ],
  "235/65 R17": [
    { brand: "Michelin", model: "Primacy SUV+", type: "SUV", warranty: "5 Years", priceRange: "₹8,500 – ₹10,500" },
    { brand: "CEAT", model: "CrossDrive AT", type: "All-Season", warranty: "5 Years", priceRange: "₹7,200 – ₹8,800" },
    { brand: "Maxxis", model: "HT-770 Bravo", type: "SUV", warranty: "5 Years", priceRange: "₹7,000 – ₹8,600" },
    { brand: "Pirelli", model: "Scorpion Verde", type: "SUV", warranty: "5 Years", priceRange: "₹8,800 – ₹10,800" },
  ],
  "235/60 R18": [
    { brand: "Michelin", model: "Primacy SUV+", type: "SUV", warranty: "5 Years", priceRange: "₹9,200 – ₹11,200" },
    { brand: "CEAT", model: "CrossDrive AT", type: "All-Season", warranty: "5 Years", priceRange: "₹7,800 – ₹9,500" },
    { brand: "Maxxis", model: "HT-770 Bravo", type: "SUV", warranty: "5 Years", priceRange: "₹7,500 – ₹9,200" },
    { brand: "Pirelli", model: "Scorpion Verde", type: "SUV", warranty: "5 Years", priceRange: "₹9,500 – ₹11,500" },
  ],
  "235/55 R19": [
    { brand: "Michelin", model: "Primacy SUV+", type: "SUV", warranty: "5 Years", priceRange: "₹10,000 – ₹12,500" },
    { brand: "Pirelli", model: "Scorpion Verde", type: "SUV", warranty: "5 Years", priceRange: "₹10,500 – ₹13,000" },
  ],
  "235/45 R18": [
    { brand: "Michelin", model: "Pilot Sport 4", type: "Performance", warranty: "5 Years", priceRange: "₹9,500 – ₹11,500" },
    { brand: "Pirelli", model: "P Zero", type: "Performance", warranty: "5 Years", priceRange: "₹10,000 – ₹12,500" },
    { brand: "CEAT", model: "SportDrive", type: "Performance", warranty: "5 Years", priceRange: "₹7,500 – ₹9,000" },
  ],
  "265/65 R17": [
    { brand: "Michelin", model: "Latitude Cross", type: "SUV", warranty: "5 Years", priceRange: "₹11,000 – ₹13,500" },
    { brand: "Pirelli", model: "Scorpion ATR", type: "All-Season", warranty: "5 Years", priceRange: "₹11,500 – ₹14,000" },
    { brand: "Maxxis", model: "AT-771 Bravo", type: "All-Season", warranty: "5 Years", priceRange: "₹9,500 – ₹11,500" },
  ],
  "265/60 R18": [
    { brand: "Michelin", model: "Latitude Cross", type: "SUV", warranty: "5 Years", priceRange: "₹12,000 – ₹14,500" },
    { brand: "Pirelli", model: "Scorpion ATR", type: "All-Season", warranty: "5 Years", priceRange: "₹12,500 – ₹15,000" },
    { brand: "Maxxis", model: "AT-771 Bravo", type: "All-Season", warranty: "5 Years", priceRange: "₹10,500 – ₹12,500" },
  ],

  // ── BIKE SIZES ──
  "80/100-18": [
    { brand: "CEAT", model: "Secura Zoom F", type: "Touring", warranty: "4 Years", priceRange: "₹900 – ₹1,200" },
    { brand: "Maxxis", model: "M6302", type: "Touring", warranty: "3 Years", priceRange: "₹850 – ₹1,100" },
    { brand: "Michelin", model: "City Pro", type: "Touring", warranty: "3 Years", priceRange: "₹1,000 – ₹1,300" },
    { brand: "Pirelli", model: "Angel City", type: "Touring", warranty: "3 Years", priceRange: "₹1,100 – ₹1,400" },
  ],
  "90/90-17": [
    { brand: "CEAT", model: "Zoom Rad X1", type: "Sport", warranty: "4 Years", priceRange: "₹1,200 – ₹1,600" },
    { brand: "Maxxis", model: "M6234", type: "Sport", warranty: "3 Years", priceRange: "₹1,100 – ₹1,400" },
    { brand: "Michelin", model: "Pilot Street", type: "Sport", warranty: "3 Years", priceRange: "₹1,300 – ₹1,700" },
    { brand: "Pirelli", model: "Angel City", type: "Sport", warranty: "3 Years", priceRange: "₹1,400 – ₹1,800" },
  ],
  "100/80-17": [
    { brand: "CEAT", model: "Zoom Rad X1", type: "Sport", warranty: "4 Years", priceRange: "₹1,400 – ₹1,800" },
    { brand: "Michelin", model: "Pilot Street 2", type: "Sport", warranty: "3 Years", priceRange: "₹1,600 – ₹2,000" },
    { brand: "Pirelli", model: "Angel City", type: "Sport", warranty: "3 Years", priceRange: "₹1,600 – ₹2,100" },
    { brand: "Maxxis", model: "M6234", type: "Sport", warranty: "3 Years", priceRange: "₹1,300 – ₹1,700" },
  ],
  "100/90-19": [
    { brand: "CEAT", model: "Gripp XL", type: "Cruiser", warranty: "4 Years", priceRange: "₹1,800 – ₹2,300" },
    { brand: "Michelin", model: "Commander III", type: "Cruiser", warranty: "3 Years", priceRange: "₹2,200 – ₹2,800" },
    { brand: "Pirelli", model: "MT 66 Route", type: "Cruiser", warranty: "3 Years", priceRange: "₹2,400 – ₹3,000" },
  ],
  "110/70-17": [
    { brand: "Michelin", model: "Pilot Street 2", type: "Sport", warranty: "3 Years", priceRange: "₹2,800 – ₹3,500" },
    { brand: "Pirelli", model: "Diablo Rosso III", type: "Sport", warranty: "3 Years", priceRange: "₹3,200 – ₹4,000" },
    { brand: "CEAT", model: "Zoom Rad X1", type: "Sport", warranty: "4 Years", priceRange: "₹2,200 – ₹2,800" },
    { brand: "Maxxis", model: "Supermaxx ST", type: "Sport", warranty: "3 Years", priceRange: "₹2,500 – ₹3,200" },
  ],
  "110/80-17": [
    { brand: "CEAT", model: "Zoom Rad X1", type: "Sport", warranty: "4 Years", priceRange: "₹1,600 – ₹2,100" },
    { brand: "Michelin", model: "Pilot Street", type: "Sport", warranty: "3 Years", priceRange: "₹1,800 – ₹2,300" },
    { brand: "Maxxis", model: "M6234", type: "Sport", warranty: "3 Years", priceRange: "₹1,500 – ₹1,900" },
  ],
  "120/80-18": [
    { brand: "CEAT", model: "Gripp XL", type: "Cruiser", warranty: "4 Years", priceRange: "₹2,000 – ₹2,600" },
    { brand: "Michelin", model: "Commander III", type: "Cruiser", warranty: "3 Years", priceRange: "₹2,500 – ₹3,200" },
    { brand: "Pirelli", model: "MT 66 Route", type: "Cruiser", warranty: "3 Years", priceRange: "₹2,800 – ₹3,500" },
    { brand: "Maxxis", model: "M6011", type: "Cruiser", warranty: "3 Years", priceRange: "₹2,200 – ₹2,800" },
  ],
  "130/70-17": [
    { brand: "Michelin", model: "Pilot Street 2", type: "Sport", warranty: "3 Years", priceRange: "₹2,200 – ₹2,800" },
    { brand: "CEAT", model: "Zoom Rad X1", type: "Sport", warranty: "4 Years", priceRange: "₹1,800 – ₹2,400" },
    { brand: "Pirelli", model: "Angel City", type: "Sport", warranty: "3 Years", priceRange: "₹2,400 – ₹3,000" },
    { brand: "Maxxis", model: "Supermaxx ST", type: "Sport", warranty: "3 Years", priceRange: "₹2,000 – ₹2,600" },
  ],
  "150/60-17": [
    { brand: "Michelin", model: "Pilot Street 2", type: "Sport", warranty: "3 Years", priceRange: "₹3,500 – ₹4,200" },
    { brand: "Pirelli", model: "Diablo Rosso III", type: "Sport", warranty: "3 Years", priceRange: "₹4,000 – ₹5,000" },
    { brand: "CEAT", model: "Zoom Rad X1", type: "Sport", warranty: "4 Years", priceRange: "₹3,000 – ₹3,700" },
    { brand: "Maxxis", model: "Supermaxx ST", type: "Sport", warranty: "3 Years", priceRange: "₹3,200 – ₹4,000" },
  ],
  "90/90-12": [
    { brand: "CEAT", model: "Zoom D", type: "Scooter", warranty: "4 Years", priceRange: "₹700 – ₹950" },
    { brand: "Michelin", model: "City Grip 2", type: "Scooter", warranty: "3 Years", priceRange: "₹900 – ₹1,200" },
    { brand: "Maxxis", model: "M6029", type: "Scooter", warranty: "3 Years", priceRange: "₹650 – ₹900" },
  ],
  "90/100-10": [
    { brand: "CEAT", model: "Zoom D", type: "Scooter", warranty: "4 Years", priceRange: "₹650 – ₹900" },
    { brand: "Michelin", model: "City Grip 2", type: "Scooter", warranty: "3 Years", priceRange: "₹850 – ₹1,100" },
    { brand: "Maxxis", model: "M6029", type: "Scooter", warranty: "3 Years", priceRange: "₹600 – ₹850" },
  ],
};

// ─── VEHICLE DATABASE ────────────────────────────────────────────

export const vehicles: VehicleModel[] = [
  // ── MARUTI SUZUKI ──
  {
    id: "maruti-swift",
    name: "Swift",
    category: "Hatchback",
    manufacturer: "Maruti Suzuki",
    year: "2018–2026",
    variants: [
      { name: "LXi / VXi / LDi / VDi", tyreSize: "165/80 R14" },
      { name: "ZXi / ZDi / ZXi+ / ZDi+", tyreSize: "185/65 R15" },
    ],
  },
  {
    id: "maruti-baleno",
    name: "Baleno",
    category: "Hatchback",
    manufacturer: "Maruti Suzuki",
    year: "2022–2026",
    variants: [
      { name: "Sigma / Delta", tyreSize: "185/65 R15" },
      { name: "Zeta / Alpha", tyreSize: "195/55 R16" },
    ],
  },
  {
    id: "maruti-dzire",
    name: "Dzire",
    category: "Sedan",
    manufacturer: "Maruti Suzuki",
    year: "2020–2026",
    variants: [
      { name: "LXi / VXi", tyreSize: "165/80 R14" },
      { name: "ZXi / ZXi+", tyreSize: "185/65 R15" },
    ],
  },
  {
    id: "maruti-brezza",
    name: "Brezza",
    category: "Compact SUV",
    manufacturer: "Maruti Suzuki",
    year: "2022–2026",
    variants: [
      { name: "LXi / VXi", tyreSize: "205/65 R16" },
      { name: "ZXi / ZXi+", tyreSize: "215/60 R16" },
    ],
  },
  {
    id: "maruti-fronx",
    name: "Fronx",
    category: "Compact SUV",
    manufacturer: "Maruti Suzuki",
    year: "2023–2026",
    variants: [
      { name: "Sigma / Delta", tyreSize: "195/65 R15" },
      { name: "Zeta / Alpha / Turbo", tyreSize: "195/55 R16" },
    ],
  },
  {
    id: "maruti-ertiga",
    name: "Ertiga",
    category: "MPV",
    manufacturer: "Maruti Suzuki",
    year: "2019–2026",
    variants: [
      { name: "LXi / VXi", tyreSize: "185/65 R15" },
      { name: "ZXi / ZXi+", tyreSize: "195/55 R16" },
    ],
  },
  {
    id: "maruti-grand-vitara",
    name: "Grand Vitara",
    category: "SUV",
    manufacturer: "Maruti Suzuki",
    year: "2022–2026",
    variants: [
      { name: "Sigma / Delta / Zeta", tyreSize: "215/60 R17" },
      { name: "Alpha / Alpha+", tyreSize: "215/55 R17" },
    ],
  },
  {
    id: "maruti-alto-k10",
    name: "Alto K10",
    category: "Hatchback",
    manufacturer: "Maruti Suzuki",
    year: "2022–2026",
    variants: [
      { name: "All Variants", tyreSize: "155/80 R13" },
    ],
  },
  {
    id: "maruti-wagon-r",
    name: "WagonR",
    category: "Hatchback",
    manufacturer: "Maruti Suzuki",
    year: "2019–2026",
    variants: [
      { name: "LXi / VXi (1.0L)", tyreSize: "155/80 R13" },
      { name: "ZXi / ZXi+ (1.2L)", tyreSize: "165/70 R14" },
    ],
  },

  // ── HYUNDAI ──
  {
    id: "hyundai-i20",
    name: "i20",
    category: "Hatchback",
    manufacturer: "Hyundai",
    year: "2020–2026",
    variants: [
      { name: "Magna / Sportz", tyreSize: "185/65 R15" },
      { name: "Asta / Asta(O)", tyreSize: "195/55 R16" },
      { name: "N Line", tyreSize: "195/55 R16" },
    ],
  },
  {
    id: "hyundai-creta",
    name: "Creta",
    category: "SUV",
    manufacturer: "Hyundai",
    year: "2020–2026",
    variants: [
      { name: "E / EX / S", tyreSize: "205/65 R16" },
      { name: "SX / SX(O) / Knight", tyreSize: "215/60 R17" },
      { name: "N Line / SX(O) Turbo", tyreSize: "215/55 R18" },
    ],
  },
  {
    id: "hyundai-venue",
    name: "Venue",
    category: "Compact SUV",
    manufacturer: "Hyundai",
    year: "2019–2026",
    variants: [
      { name: "E / S / S+ / SX", tyreSize: "205/65 R16" },
      { name: "SX(O) / SX+ / N Line", tyreSize: "215/60 R16" },
    ],
  },
  {
    id: "hyundai-verna",
    name: "Verna",
    category: "Sedan",
    manufacturer: "Hyundai",
    year: "2023–2026",
    variants: [
      { name: "EX / S / SX", tyreSize: "195/55 R16" },
      { name: "SX(O) / Turbo", tyreSize: "215/55 R17" },
    ],
  },
  {
    id: "hyundai-exter",
    name: "Exter",
    category: "Compact SUV",
    manufacturer: "Hyundai",
    year: "2023–2026",
    variants: [
      { name: "EX / S / SX", tyreSize: "175/65 R15" },
      { name: "SX(O) / SX Connect", tyreSize: "185/65 R15" },
    ],
  },
  {
    id: "hyundai-grand-i10-nios",
    name: "Grand i10 Nios",
    category: "Hatchback",
    manufacturer: "Hyundai",
    year: "2019–2026",
    variants: [
      { name: "Era / Magna / Sportz", tyreSize: "175/65 R14" },
      { name: "Asta / Asta(O)", tyreSize: "185/65 R15" },
    ],
  },
  {
    id: "hyundai-tucson",
    name: "Tucson",
    category: "Premium SUV",
    manufacturer: "Hyundai",
    year: "2022–2026",
    variants: [
      { name: "Platinum / Signature", tyreSize: "235/55 R19" },
    ],
  },

  // ── TATA ──
  {
    id: "tata-nexon",
    name: "Nexon",
    category: "Compact SUV",
    manufacturer: "Tata",
    year: "2020–2026",
    variants: [
      { name: "Smart / Pure / Creative", tyreSize: "195/60 R16" },
      { name: "Fearless / Fearless+ / Dark", tyreSize: "215/60 R16" },
    ],
  },
  {
    id: "tata-punch",
    name: "Punch",
    category: "Compact SUV",
    manufacturer: "Tata",
    year: "2021–2026",
    variants: [
      { name: "Pure / Adventure", tyreSize: "175/65 R15" },
      { name: "Accomplished / Creative", tyreSize: "185/65 R15" },
    ],
  },
  {
    id: "tata-altroz",
    name: "Altroz",
    category: "Hatchback",
    manufacturer: "Tata",
    year: "2020–2026",
    variants: [
      { name: "XE / XM / XM+", tyreSize: "185/65 R15" },
      { name: "XZ / XZ+ / Dark", tyreSize: "195/55 R16" },
    ],
  },
  {
    id: "tata-harrier",
    name: "Harrier",
    category: "SUV",
    manufacturer: "Tata",
    year: "2023–2026",
    variants: [
      { name: "Smart / Pure / Adventure", tyreSize: "215/60 R17" },
      { name: "Accomplished / Creative", tyreSize: "235/60 R18" },
    ],
  },
  {
    id: "tata-safari",
    name: "Safari",
    category: "Premium SUV",
    manufacturer: "Tata",
    year: "2023–2026",
    variants: [
      { name: "Smart / Pure / Adventure", tyreSize: "215/60 R17" },
      { name: "Accomplished / Creative", tyreSize: "235/60 R18" },
    ],
  },
  {
    id: "tata-tiago",
    name: "Tiago",
    category: "Hatchback",
    manufacturer: "Tata",
    year: "2020–2026",
    variants: [
      { name: "XE / XM", tyreSize: "175/65 R14" },
      { name: "XZ / XZ+", tyreSize: "175/65 R15" },
    ],
  },

  // ── MAHINDRA ──
  {
    id: "mahindra-xuv700",
    name: "XUV700",
    category: "SUV",
    manufacturer: "Mahindra",
    year: "2021–2026",
    variants: [
      { name: "MX / AX3 / AX5", tyreSize: "235/65 R17" },
      { name: "AX7 / AX7L", tyreSize: "235/60 R18" },
    ],
  },
  {
    id: "mahindra-scorpio-n",
    name: "Scorpio N",
    category: "SUV",
    manufacturer: "Mahindra",
    year: "2022–2026",
    variants: [
      { name: "Z4 / Z6 / Z8", tyreSize: "215/60 R17" },
      { name: "Z8L", tyreSize: "235/60 R18" },
    ],
  },
  {
    id: "mahindra-xuv-3xo",
    name: "XUV 3XO",
    category: "Compact SUV",
    manufacturer: "Mahindra",
    year: "2024–2026",
    variants: [
      { name: "MX1 / MX2 / MX3", tyreSize: "205/65 R16" },
      { name: "AX5 / AX7 / AX7L", tyreSize: "215/55 R17" },
    ],
  },
  {
    id: "mahindra-thar",
    name: "Thar",
    category: "SUV",
    manufacturer: "Mahindra",
    year: "2020–2026",
    variants: [
      { name: "AX / AX Opt / LX", tyreSize: "235/65 R17" },
      { name: "LX Hard Top", tyreSize: "255/65 R18" },
    ],
  },

  // ── KIA ──
  {
    id: "kia-seltos",
    name: "Seltos",
    category: "SUV",
    manufacturer: "Kia",
    year: "2023–2026",
    variants: [
      { name: "HTE / HTK / HTK(O)", tyreSize: "205/65 R16" },
      { name: "HTX / HTX+", tyreSize: "215/60 R17" },
      { name: "GTX / GTX+ / X-Line", tyreSize: "215/55 R18" },
    ],
  },
  {
    id: "kia-sonet",
    name: "Sonet",
    category: "Compact SUV",
    manufacturer: "Kia",
    year: "2020–2026",
    variants: [
      { name: "HTE / HTK / HTK+", tyreSize: "195/65 R15" },
      { name: "HTX / HTX+ / GTX+", tyreSize: "215/60 R16" },
    ],
  },
  {
    id: "kia-carens",
    name: "Carens",
    category: "MPV",
    manufacturer: "Kia",
    year: "2022–2026",
    variants: [
      { name: "Premium / Prestige", tyreSize: "205/65 R16" },
      { name: "Luxury / Luxury Plus", tyreSize: "215/55 R17" },
    ],
  },

  // ── HONDA ──
  {
    id: "honda-city",
    name: "City",
    category: "Sedan",
    manufacturer: "Honda",
    year: "2020–2026",
    variants: [
      { name: "V / VX", tyreSize: "185/60 R15" },
      { name: "ZX / ZX eHEV", tyreSize: "185/55 R16" },
    ],
  },
  {
    id: "honda-amaze",
    name: "Amaze",
    category: "Sedan",
    manufacturer: "Honda",
    year: "2024–2026",
    variants: [
      { name: "E / S", tyreSize: "175/65 R15" },
      { name: "VX / ZX", tyreSize: "185/65 R15" },
    ],
  },
  {
    id: "honda-elevate",
    name: "Elevate",
    category: "SUV",
    manufacturer: "Honda",
    year: "2023–2026",
    variants: [
      { name: "SV / V", tyreSize: "215/60 R16" },
      { name: "VX / ZX", tyreSize: "215/60 R17" },
    ],
  },

  // ── TOYOTA ──
  {
    id: "toyota-innova-crysta",
    name: "Innova Crysta",
    category: "MPV",
    manufacturer: "Toyota",
    year: "2021–2026",
    variants: [
      { name: "GX / VX", tyreSize: "205/65 R16" },
      { name: "ZX", tyreSize: "215/55 R17" },
    ],
  },
  {
    id: "toyota-innova-hycross",
    name: "Innova Hycross",
    category: "MPV",
    manufacturer: "Toyota",
    year: "2023–2026",
    variants: [
      { name: "G / GX", tyreSize: "215/60 R17" },
      { name: "VX / ZX", tyreSize: "215/55 R18" },
    ],
  },
  {
    id: "toyota-fortuner",
    name: "Fortuner",
    category: "Premium SUV",
    manufacturer: "Toyota",
    year: "2021–2026",
    variants: [
      { name: "4x2 / 4x4", tyreSize: "265/65 R17" },
      { name: "Legender / GR Sport", tyreSize: "265/60 R18" },
    ],
  },
  {
    id: "toyota-urban-cruiser-hyryder",
    name: "Urban Cruiser Hyryder",
    category: "SUV",
    manufacturer: "Toyota",
    year: "2022–2026",
    variants: [
      { name: "E / S", tyreSize: "215/60 R17" },
      { name: "G / V", tyreSize: "215/55 R17" },
    ],
  },

  // ── RENAULT ──
  {
    id: "renault-kwid",
    name: "Kwid",
    category: "Hatchback",
    manufacturer: "Renault",
    year: "2020–2026",
    variants: [
      { name: "RXE / RXL (0.8L)", tyreSize: "155/80 R13" },
      { name: "RXT / Climber (1.0L)", tyreSize: "165/70 R14" },
    ],
  },
  {
    id: "renault-kiger",
    name: "Kiger",
    category: "Compact SUV",
    manufacturer: "Renault",
    year: "2021–2026",
    variants: [
      { name: "RXE / RXL", tyreSize: "195/60 R16" },
      { name: "RXT / RXZ / Turbo", tyreSize: "215/60 R16" },
    ],
  },

  // ── NISSAN ──
  {
    id: "nissan-magnite",
    name: "Magnite",
    category: "Compact SUV",
    manufacturer: "Nissan",
    year: "2021–2026",
    variants: [
      { name: "All Variants", tyreSize: "195/60 R16" },
    ],
  },

  // ── VOLKSWAGEN ──
  {
    id: "volkswagen-virtus",
    name: "Virtus",
    category: "Sedan",
    manufacturer: "Volkswagen",
    year: "2022–2026",
    variants: [
      { name: "Comfortline / Highline", tyreSize: "195/55 R16" },
      { name: "GT / GT+", tyreSize: "205/55 R16" },
    ],
  },
  {
    id: "volkswagen-taigun",
    name: "Taigun",
    category: "SUV",
    manufacturer: "Volkswagen",
    year: "2021–2026",
    variants: [
      { name: "Comfortline / Highline", tyreSize: "205/65 R16" },
      { name: "Topline / GT / GT+", tyreSize: "215/55 R17" },
    ],
  },

  // ── SKODA ──
  {
    id: "skoda-kushaq",
    name: "Kushaq",
    category: "SUV",
    manufacturer: "Skoda",
    year: "2021–2026",
    variants: [
      { name: "Active / Ambition", tyreSize: "205/65 R16" },
      { name: "Style / Monte Carlo", tyreSize: "215/55 R17" },
    ],
  },
  {
    id: "skoda-slavia",
    name: "Slavia",
    category: "Sedan",
    manufacturer: "Skoda",
    year: "2022–2026",
    variants: [
      { name: "Active / Ambition", tyreSize: "195/55 R16" },
      { name: "Style / Monte Carlo", tyreSize: "205/55 R16" },
    ],
  },

  // ── MG ──
  {
    id: "mg-hector",
    name: "Hector",
    category: "SUV",
    manufacturer: "MG",
    year: "2023–2026",
    variants: [
      { name: "Style / Super / Smart", tyreSize: "215/60 R17" },
      { name: "Sharp / Savvy / Select Pro", tyreSize: "215/55 R18" },
    ],
  },
  {
    id: "mg-astor",
    name: "Astor",
    category: "SUV",
    manufacturer: "MG",
    year: "2021–2026",
    variants: [
      { name: "Style / Super", tyreSize: "205/65 R16" },
      { name: "Smart / Sharp / Savvy", tyreSize: "215/55 R17" },
    ],
  },

  // ════════════════════════════════════════════════
  // ── BIKES ──
  // ════════════════════════════════════════════════
  {
    id: "royal-enfield-classic-350",
    name: "Classic 350",
    category: "Bike",
    manufacturer: "Royal Enfield",
    year: "2021–2026",
    variants: [
      { name: "Front", tyreSize: "100/90-19" },
      { name: "Rear", tyreSize: "120/80-18" },
    ],
  },
  {
    id: "royal-enfield-hunter-350",
    name: "Hunter 350",
    category: "Bike",
    manufacturer: "Royal Enfield",
    year: "2022–2026",
    variants: [
      { name: "Front", tyreSize: "100/80-17" },
      { name: "Rear", tyreSize: "130/70-17" },
    ],
  },
  {
    id: "royal-enfield-bullet-350",
    name: "Bullet 350",
    category: "Bike",
    manufacturer: "Royal Enfield",
    year: "2023–2026",
    variants: [
      { name: "Front", tyreSize: "100/90-19" },
      { name: "Rear", tyreSize: "120/80-18" },
    ],
  },
  {
    id: "bajaj-pulsar-ns200",
    name: "Pulsar NS200",
    category: "Bike",
    manufacturer: "Bajaj",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "100/80-17" },
      { name: "Rear", tyreSize: "130/70-17" },
    ],
  },
  {
    id: "bajaj-pulsar-150",
    name: "Pulsar 150",
    category: "Bike",
    manufacturer: "Bajaj",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "80/100-18" },
      { name: "Rear", tyreSize: "130/70-17" },
    ],
  },
  {
    id: "tvs-apache-rtr-160-4v",
    name: "Apache RTR 160 4V",
    category: "Bike",
    manufacturer: "TVS",
    year: "2022–2026",
    variants: [
      { name: "Front", tyreSize: "90/90-17" },
      { name: "Rear", tyreSize: "130/70-17" },
    ],
  },
  {
    id: "tvs-apache-rtr-200",
    name: "Apache RTR 200 4V",
    category: "Bike",
    manufacturer: "TVS",
    year: "2022–2026",
    variants: [
      { name: "Front", tyreSize: "90/90-17" },
      { name: "Rear", tyreSize: "130/70-17" },
    ],
  },
  {
    id: "ktm-duke-200",
    name: "Duke 200",
    category: "Bike",
    manufacturer: "KTM",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "110/70-17" },
      { name: "Rear", tyreSize: "150/60-17" },
    ],
  },
  {
    id: "ktm-duke-390",
    name: "Duke 390",
    category: "Bike",
    manufacturer: "KTM",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "110/70-17" },
      { name: "Rear", tyreSize: "150/60-17" },
    ],
  },
  {
    id: "hero-splendor-plus",
    name: "Splendor Plus",
    category: "Bike",
    manufacturer: "Hero",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "80/100-18" },
      { name: "Rear", tyreSize: "80/100-18" },
    ],
  },
  {
    id: "hero-xtreme-160r",
    name: "Xtreme 160R",
    category: "Bike",
    manufacturer: "Hero",
    year: "2022–2026",
    variants: [
      { name: "Front", tyreSize: "100/80-17" },
      { name: "Rear", tyreSize: "130/70-17" },
    ],
  },
  {
    id: "yamaha-mt-15",
    name: "MT-15 V2",
    category: "Bike",
    manufacturer: "Yamaha",
    year: "2023–2026",
    variants: [
      { name: "Front", tyreSize: "110/70-17" },
      { name: "Rear", tyreSize: "150/60-17" },
    ],
  },
  {
    id: "yamaha-r15",
    name: "R15 V4",
    category: "Bike",
    manufacturer: "Yamaha",
    year: "2022–2026",
    variants: [
      { name: "Front", tyreSize: "110/70-17" },
      { name: "Rear", tyreSize: "150/60-17" },
    ],
  },

  // ── SCOOTERS ──
  {
    id: "honda-activa-6g",
    name: "Activa 6G",
    category: "Scooter",
    manufacturer: "Honda",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "90/90-12" },
      { name: "Rear", tyreSize: "90/100-10" },
    ],
  },
  {
    id: "tvs-jupiter",
    name: "Jupiter",
    category: "Scooter",
    manufacturer: "TVS",
    year: "2020–2026",
    variants: [
      { name: "Front", tyreSize: "90/90-12" },
      { name: "Rear", tyreSize: "90/100-10" },
    ],
  },
  {
    id: "tvs-ntorq",
    name: "NTorq 125",
    category: "Scooter",
    manufacturer: "TVS",
    year: "2022–2026",
    variants: [
      { name: "Front", tyreSize: "110/80-12" },
      { name: "Rear", tyreSize: "130/70-12" },
    ],
  },
];

// ─── HELPERS ────────────────────────────────────────────────────

/** Get unique manufacturers */
export function getManufacturers(vehicleType?: "car" | "bike"): string[] {
  const bikeCategories = ["Bike", "Scooter"];
  const filtered = vehicleType === "car"
    ? vehicles.filter(v => !bikeCategories.includes(v.category))
    : vehicleType === "bike"
    ? vehicles.filter(v => bikeCategories.includes(v.category))
    : vehicles;

  return Array.from(new Set(filtered.map(v => v.manufacturer))).sort();
}

/** Get models for a manufacturer */
export function getModels(manufacturer: string): VehicleModel[] {
  return vehicles.filter(v => v.manufacturer === manufacturer);
}

/** Get tyre options for a size */
export function getTyreOptions(size: string): TyreOption[] {
  return tyresBySize[size] || [];
}

/** Search vehicles by name */
export function searchVehicles(query: string): VehicleModel[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return vehicles.filter(
    v =>
      v.name.toLowerCase().includes(q) ||
      v.manufacturer.toLowerCase().includes(q) ||
      `${v.manufacturer} ${v.name}`.toLowerCase().includes(q)
  );
}
