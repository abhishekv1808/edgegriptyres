# EDGEGRIP TYRES — COMPLETE WEBSITE BUILD PLAN
> Master Document for AI-Assisted Development
> Brand: EdgeGrip Tyres | Nagasandra, Bengaluru, Karnataka
> Version: 1.0 | Generated: 2026

---

## TABLE OF CONTENTS
1. [Brand Identity & Logo Analysis](#1-brand-identity--logo-analysis)
2. [Website Strategy](#2-website-strategy)
3. [Website Structure (Sitemap)](#3-website-structure-sitemap)
4. [Complete Content Writing](#4-complete-content-writing)
5. [3D & UI/UX Design Plan](#5-3d--uiux-design-plan)
6. [Tech Stack](#6-tech-stack)
7. [Development Roadmap](#7-development-roadmap)
8. [SEO & Local Marketing Strategy](#8-seo--local-marketing-strategy)
9. [Monetization & Growth Ideas](#9-monetization--growth-ideas)
10. [Prompt Templates for AI Tools](#10-prompt-templates-for-ai-tools)

---

## 1. BRAND IDENTITY & LOGO ANALYSIS

**Logo Breakdown:**
- "EDGE" — Bold red, italic, aggressive forward-lean
- "GRIP" — Jet black, italic, same weight
- "TYRES" — White on dark badge/chevron, smaller, subtitle treatment
- Vibe: Racing-inspired, performance-first, assertive

**Brand Personality:**
- High-performance but accessible
- Local expertise with national-brand authority
- Trustworthy mechanics + premium product range

**Brand Voice:** Confident. Direct. Technical but human. "We know your road."

**Color Palette (extract from logo):**
```css
--brand-red:     #E31E24;   /* Aggressive red — CTAs, accents */
--brand-black:   #111111;   /* Backgrounds, type */
--brand-white:   #F5F5F5;   /* Text on dark */
--brand-dark:    #1A1A1A;   /* Section backgrounds */
--brand-grey:    #2D2D2D;   /* Card backgrounds */
--brand-muted:   #888888;   /* Secondary text */
--brand-chrome:  #C0C0C0;   /* Metallic accent */
```

---

## 2. WEBSITE STRATEGY

### 2.1 Target Audience Breakdown

| Segment | Description | Motivation | Device |
|---|---|---|---|
| **Daily Commuter** | 25–40, Bangalore IT/office worker | Need reliability + quick service | Mobile-first |
| **SUV/Sedan Owner** | 30–50, family vehicle owner | Safety + brand trust | Mobile + Desktop |
| **Bike Rider** | 18–35, motorcycle enthusiast | Performance + price | Mobile |
| **Fleet Manager** | B2B, cab/delivery fleet | Bulk pricing + quick turnaround | Desktop |
| **New Car Owner** | First tyre replacement buyer | Guidance + trust | Mobile |

### 2.2 Positioning Strategy

**NOT:** The cheapest tyre shop in Nagasandra.
**YES:** Bangalore's most trusted multi-brand tyre destination.

**Positioning Statement:**
> "EdgeGrip Tyres is Bengaluru's premium multi-brand tyre expert — where world-class brands meet precision service, right in your neighbourhood."

**Triangle Position:**
```
         PREMIUM
            ▲
           / \
          /   \
  TRUSTED ─────  FAST
```
EdgeGrip sits at the sweet spot: Premium products, trusted service, fast turnaround.

### 2.3 Unique Selling Proposition (USP)

**Primary USP:**
> "5 Global Brands. 1 Expert Address. Zero Compromise."

**Supporting USPs:**
- Free wheel balancing on every tyre purchase
- Expert fitment — cars AND motorcycles under one roof
- Nagasandra's only store stocking Michelin, Pirelli, CEAT, Eurogrip & Maxxis
- Transparent pricing — no hidden charges
- 10-minute tyre check, walk-ins welcome

### 2.4 Conversion Strategy

**Primary Conversion Goals (in order):**
1. WhatsApp enquiry / call
2. Google Maps direction click
3. Contact form lead
4. Instagram follow (nurture)

**CTA Hierarchy:**
- **Hero CTA 1 (Primary):** "Get a Free Tyre Check" → WhatsApp
- **Hero CTA 2 (Secondary):** "View Our Brands" → scrolls to brands
- **Sticky Nav CTA:** "📞 Call Now" (mobile) / "Get Quote" (desktop)
- **Floating WhatsApp Button:** Always visible, bottom-right
- **Section CTAs:** Each section ends with a relevant micro-CTA

**Lead Capture Points:**
1. Homepage popup (exit-intent): "Get 5% off your first purchase — drop your number"
2. Contact form: Name + Phone + Vehicle Type + Message
3. WhatsApp deep link: Pre-filled message "Hi, I found you on your website and need tyre help"

---

## 3. WEBSITE STRUCTURE (SITEMAP)

```
edgegriptyres.in/
├── / (Homepage)
├── /about
├── /services
│   ├── /services/tyre-installation
│   ├── /services/wheel-balancing
│   └── /services/wheel-alignment
├── /brands
│   ├── /brands/michelin
│   ├── /brands/ceat
│   ├── /brands/eurogrip
│   ├── /brands/maxxis
│   └── /brands/pirelli
├── /products
├── /contact
└── /blog (Phase 2)
    ├── /blog/when-to-change-tyres
    ├── /blog/tyre-buying-guide-bangalore
    └── /blog/michelin-vs-ceat-comparison
```

### 3.1 Homepage Sections (in order)

```
1. NAV BAR
   └── Logo | Home | Services | Brands | About | Contact | [Call Now CTA]

2. HERO SECTION (3D animated)
   └── 3D rotating tyre | Headline | Sub | Dual CTA | Trust badges

3. TRUST BAR (social proof strip)
   └── "500+ Happy Customers | 5 Premium Brands | Est. 2015 | Nagasandra"

4. SERVICES OVERVIEW (3 cards)
   └── Installation | Balancing | Alignment

5. BRAND SHOWCASE (horizontal scroll / 3D carousel)
   └── Michelin | CEAT | Eurogrip | Maxxis | Pirelli

6. FEATURED PRODUCTS (3–4 cards)
   └── Michelin LTX Trail | Eurogrip Pro Torque | Goodyear EfficientGrip

7. WHY EDGEGRIP (differentiators)
   └── 5 USP icons with animated counters

8. TESTIMONIALS (3 reviews)
   └── Google-style cards

9. LOCATION + MAP EMBED
   └── Address | Hours | Embedded Google Map | Get Directions CTA

10. INSTAGRAM FEED (6 recent posts)
    └── API-connected or static grid

11. FOOTER
    └── Logo | Links | Contact | Social | "©2025 EdgeGrip Tyres"
```

---

## 4. COMPLETE CONTENT WRITING

### 4.1 HOMEPAGE

**Meta Title:** EdgeGrip Tyres Bengaluru | Michelin, CEAT, Pirelli | Nagasandra
**Meta Description:** EdgeGrip Tyres — Bengaluru's trusted multi-brand tyre store. Expert installation, wheel balancing & alignment. Michelin, CEAT, Eurogrip, Maxxis & Pirelli. Visit us in Nagasandra.

---

**NAV:**
EdgeGrip Tyres | Services | Brands | About | Contact | **[📞 Get a Quote]**

---

**HERO:**

```
HEADLINE (H1):
Drive With Confidence.
Every Road. Every Ride.

SUBHEADLINE:
Bengaluru's premium multi-brand tyre destination.
Expert fitment for cars & motorcycles — walk-ins welcome.

CTA 1 (Primary Button): 🔧 Get a Free Tyre Check
CTA 2 (Ghost Button):   Browse Our Brands →

TRUST MICRO-BADGES (below CTAs):
✓ Michelin Authorised  ✓ Free Balancing  ✓ Same-Day Service
```

---

**TRUST BAR:**
```
500+ Customers Served  |  5 Global Brands  |  3 Expert Services  |  Nagasandra, Bengaluru
```

---

**SERVICES SECTION:**

```
SECTION HEADLINE: What We Do Best

CARD 1 — TYRE INSTALLATION
Icon: wrench/tyre
Title: Precision Tyre Fitting
Body: Whether you drive a Swift or a Fortuner, ride a Royal Enfield or a Pulsar — our technicians fit tyres with precision tools and OEM-grade care.
CTA: Learn More →

CARD 2 — WHEEL BALANCING
Icon: balance/circle
Title: Vibration-Free Wheel Balancing
Body: Unbalanced wheels wear tyres 40% faster and reduce fuel efficiency. We use computerised balancers for a perfectly smooth ride.
CTA: Learn More →

CARD 3 — WHEEL ALIGNMENT
Icon: target/alignment
Title: Laser-Guided Wheel Alignment
Body: Correct alignment saves tyres and improves handling. Our 4-wheel alignment system works on all cars — sedans, SUVs, hatchbacks.
CTA: Learn More →

SECTION CTA: Book a Service Today →
```

---

**BRANDS SECTION:**

```
SECTION HEADLINE: World-Class Brands. Expert Guidance.

SUBHEAD: We carry only the brands we trust. No compromise, no counterfeits.

Brand logos with hover name reveal:
Michelin | CEAT | Eurogrip | Maxxis | Pirelli

BOTTOM TEXT: Not sure which brand suits your vehicle?
CTA: Talk to Our Tyre Expert →
```

---

**WHY EDGEGRIP SECTION:**

```
SECTION HEADLINE: Why Bengaluru Trusts EdgeGrip

STAT 1: 500+
         Happy Customers

STAT 2: 5
         Global Brands in Stock

STAT 3: 10 min
         Free Tyre Health Check

STAT 4: 0
         Hidden Charges. Ever.

STAT 5: 1
         Expert Address for Cars & Bikes

BODY COPY:
We're not a tyre shop — we're your road partners.
EdgeGrip Tyres has built its reputation on honest advice, precision workmanship, and giving every customer the exact tyre they need for their budget and driving style.
```

---

**TESTIMONIALS:**

```
SECTION HEADLINE: Trusted by Bengaluru Drivers

REVIEW 1:
"Got my Fortuner's tyres replaced with Michelin LTX Trail. The team was honest about my options and didn't oversell. The ride quality is night and day."
— Rajesh M., Malleshwaram ⭐⭐⭐⭐⭐

REVIEW 2:
"They fixed my bike's tyre in under 20 minutes. Eurogrip Pro Torque fits my Pulsar perfectly. Best tyre shop near Nagasandra."
— Karthik S., Yeshwanthpur ⭐⭐⭐⭐⭐

REVIEW 3:
"Very professional. Did wheel alignment and balancing together. Car feels new. Free balancing was a pleasant surprise!"
— Priya N., Peenya ⭐⭐⭐⭐⭐
```

---

**LOCATION SECTION:**

```
SECTION HEADLINE: Find Us in Nagasandra

ADDRESS:
EdgeGrip Tyres
Nelagadaranahalli Main Rd,
Nagasandra, Bengaluru,
Karnataka – 560073

HOURS:
Mon–Sat: 9:00 AM – 7:00 PM
Sunday: 10:00 AM – 4:00 PM

[Get Directions on Google Maps →]
[📞 Call Now: +91-XXXXX-XXXXX]
[💬 WhatsApp Us]
```

---

### 4.2 ABOUT US PAGE

**Meta Title:** About EdgeGrip Tyres | Nagasandra's Trusted Tyre Experts
**Meta Description:** Learn about EdgeGrip Tyres — our story, values, and commitment to giving Bengaluru drivers the best tyre experience at honest prices.

```
H1: We Put Our Name On Every Tyre We Fit

STORY SECTION:
EdgeGrip Tyres was born from a simple belief: that every Bengaluru driver deserves expert tyre guidance — not just a sale.

We started on Nelagadaranahalli Main Road with one goal — to be the tyre shop we always wished existed. No pushy upsells. No guesswork. Just genuine expertise and world-class brands.

Today, we serve hundreds of customers across Nagasandra, Yeshwanthpur, Peenya, and Malleshwaram — from daily commuters on bikes to families in Innovas and professionals in BMWs.

OUR VALUES:
🔴 Honesty First — We'll tell you if your tyres don't need replacing yet.
🔴 Precision Always — Every job is done right, not just done.
🔴 Local Pride — We're your neighbours. Your trust means everything.

MEET THE TEAM: (placeholder for photos)
[Owner photo + name + quote]
[Lead Technician photo + name + expertise]

CTA: Visit Our Store →
```

---

### 4.3 SERVICES PAGE

**Meta Title:** Tyre Services in Bengaluru | Installation, Balancing & Alignment | EdgeGrip
**Meta Description:** Expert tyre installation, computerised wheel balancing, and laser wheel alignment at EdgeGrip Tyres, Nagasandra, Bengaluru.

```
H1: Expert Tyre Services. Precision You Can Feel.

INTRO:
Every service at EdgeGrip is performed by trained technicians using professional-grade equipment. We treat every vehicle — from a Honda Activa to a Toyota Land Cruiser — with the same meticulous care.

---

SERVICE 1: TYRE INSTALLATION
H2: Professional Tyre Fitting
BODY:
A tyre is only as good as its fitting. Poor installation causes uneven wear, vibration, and safety risks. Our technicians use torque-calibrated tools and follow manufacturer specs for every fitment.

What's included:
✓ Old tyre removal and disposal
✓ Rim inspection before mounting
✓ Valve replacement (where needed)
✓ Inflation to OEM-spec pressure
✓ Post-fit balancing check

Vehicles: Cars, SUVs, Motorcycles, Scooters

CTA: Book Tyre Fitting →

---

SERVICE 2: WHEEL BALANCING
H2: Computerised Wheel Balancing
BODY:
If your steering wheel vibrates above 60 km/h, your wheels are out of balance. Unbalanced wheels accelerate tyre wear, strain wheel bearings, and reduce fuel efficiency.

Our Process:
✓ High-precision computerised balancer
✓ Weight placement calculated to the gram
✓ Road simulation for real-world accuracy
✓ FREE with every tyre purchase

CTA: Schedule Balancing →

---

SERVICE 3: WHEEL ALIGNMENT
H2: 4-Wheel Laser Alignment
BODY:
Misaligned wheels are the hidden killer of tyres. Even a 1-degree deviation can eat through a tyre 30% faster. Signs you need alignment: car pulling to one side, uneven tyre wear, or steering vibration.

Our Equipment:
✓ 4-wheel computerised alignment system
✓ Live digital readout with before/after comparison
✓ Covers all car types — FWD, RWD, AWD
✓ Recommended every 10,000 km or after a kerb impact

CTA: Book Alignment Check →

PRICING CTA BLOCK:
"Want to know the service cost for your vehicle? Contact us — we give transparent quotes, no surprises."
[Get a Quote on WhatsApp →]
```

---

### 4.4 BRANDS & PRODUCTS PAGE

**Meta Title:** Michelin, CEAT, Pirelli, Eurogrip & Maxxis Tyres in Bengaluru | EdgeGrip
**Meta Description:** Buy genuine Michelin, CEAT, Eurogrip, Maxxis and Pirelli tyres in Bengaluru. Expert guidance for cars and motorcycles at EdgeGrip Tyres, Nagasandra.

```
H1: 5 World-Class Brands. One Expert Store.

INTRO:
We've hand-picked our brand portfolio to cover every driver's need — comfort, performance, durability, value. Every tyre we sell is 100% genuine with manufacturer warranty.

---

BRAND 1: MICHELIN
H2: Michelin — The World's Most Trusted Tyre
Body: From Formula 1 tracks to Bengaluru's flyovers, Michelin sets the standard for safety, longevity, and performance. If you want the best, this is it.

Featured Product: Michelin LTX Trail
Best For: SUVs & Crossovers
Why: Combines comfort on highways with durability on rough roads — perfect for Bengaluru's mixed terrain.
Tag: Long Life | Comfortable | All-Terrain Ready

CTA: Enquire About Michelin →

---

BRAND 2: CEAT
H2: CEAT — India's Road Champion
Body: Built for Indian roads. CEAT tyres deliver outstanding durability on pothole-heavy urban streets, with excellent wet-road grip and competitive pricing.

Best For: Hatchbacks, sedans, everyday commuters
Tag: Value | Durability | India-Ready

CTA: Enquire About CEAT →

---

BRAND 3: EUROGRIP
H2: Eurogrip — The Biker's Choice
Body: Eurogrip is engineered specifically for two-wheelers, with a track record across India's toughest roads.

Featured Products:
• Durat Trail Beamer — Adventure touring performance
• Pro Torque — High-traction urban commuting

Best For: Motorcycles & scooters
Tag: Grip | Control | Two-Wheeler Specialist

CTA: Enquire About Eurogrip →

---

BRAND 4: MAXXIS
H2: Maxxis — Performance Across Categories
Body: Trusted by OEMs worldwide, Maxxis delivers consistent performance for both cars and bikes with an excellent price-to-quality ratio.

Best For: Performance-focused drivers who want more for less
Tag: Performance | Value | Global OEM Trust

CTA: Enquire About Maxxis →

---

BRAND 5: PIRELLI
H2: Pirelli — Born on the Racetrack
Body: If your car is your passion, Pirelli is your tyre. From sports cars to premium sedans, Pirelli offers unmatched handling, aesthetics, and prestige.

Best For: Sports cars, premium sedans, driving enthusiasts
Tag: Prestige | Handling | Track DNA

CTA: Enquire About Pirelli →

---

FOOTER CTA BLOCK:
"Not sure which tyre fits your vehicle and budget?
Our experts will guide you — no pressure, just good advice."
[Chat with a Tyre Expert →]
```

---

### 4.5 CONTACT PAGE

**Meta Title:** Contact EdgeGrip Tyres | Nagasandra, Bengaluru | Directions & Enquiry
**Meta Description:** Visit EdgeGrip Tyres at Nelagadaranahalli Main Rd, Nagasandra, Bengaluru. Call, WhatsApp or fill the form for expert tyre advice.

```
H1: We're Right Around the Corner

SUBHEAD:
Walk in anytime — or reach out ahead. We're ready when you are.

---

CONTACT DETAILS:

📍 Address:
EdgeGrip Tyres,
Nelagadaranahalli Main Rd,
Nagasandra, Bengaluru,
Karnataka – 560073

📞 Phone: +91-XXXXX-XXXXX
(Mon–Sat, 9AM–7PM)

💬 WhatsApp: +91-XXXXX-XXXXX
(Quick replies, usually within 10 mins)

📧 Email: hello@edgegriptyres.in

🕐 Hours:
Monday–Saturday: 9:00 AM – 7:00 PM
Sunday: 10:00 AM – 4:00 PM

[📍 Get Directions on Google Maps]

---

ENQUIRY FORM:

"Drop us your details — we'll get back within the hour."

Fields:
• Name *
• Phone Number *
• Vehicle Type (Car / Bike / SUV / Other)
• Service Needed (Installation / Balancing / Alignment / Not sure)
• Message (optional)

[Submit Enquiry →]

TRUST NOTE BELOW FORM:
🔒 We respect your privacy. No spam, ever.

---

MAP EMBED: Google Maps iframe for Nelagadaranahalli Main Rd, Nagasandra

LANDMARK NOTE:
"Near Nagasandra Metro Station. Easy parking available."
```

---

## 5. 3D & UI/UX DESIGN PLAN

### 5.1 Three.js 3D Elements

**HERO — 3D Rotating Tyre**
```javascript
// Concept: A photorealistic tyre mesh rotates slowly on its axis
// Tread pattern catches light dynamically
// On scroll-down: tyre accelerates spin → road particles emit → hero fades

// Implementation approach:
// 1. Create tyre geometry in Blender (or use Sketchfab model)
// 2. Export as .glb
// 3. Load in Three.js with GLTF loader
// 4. Add HDR environment map for chrome reflections
// 5. Add point lights for dramatic tyre-tread shadows

// Three.js pseudocode:
const loader = new GLTFLoader();
loader.load('/models/tyre.glb', (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.rotation.y += 0.005; // per frame in animate loop
});
```

**BRAND SECTION — 3D Logo Cards**
```javascript
// Concept: Brand logos on 3D cards
// Hover: card tilts with mouse parallax (Vanilla Tilt.js or Three.js)
// CSS approach is fine here — pure CSS 3D transform on hover
```

**SERVICES SECTION — Animated Icon Sequence**
```javascript
// Concept: SVG paths animate on scroll-enter
// Wrench assembles → Tyre appears → Alignment beams draw
// Use GSAP DrawSVG plugin
```

### 5.2 GSAP Animation Sequences

```javascript
// PAGE LOAD SEQUENCE (timeline):
const tl = gsap.timeline();
tl.from(".logo", { opacity: 0, y: -20, duration: 0.5 })
  .from(".hero-headline .word", {
    opacity: 0,
    y: 60,
    stagger: 0.08,
    duration: 0.7,
    ease: "power3.out"
  })
  .from(".hero-cta", { opacity: 0, y: 20, duration: 0.4 }, "-=0.2")
  .from(".trust-badges span", { opacity: 0, stagger: 0.1 }, "-=0.2");

// SCROLL TRIGGER — stats counter:
gsap.from(".stat-number", {
  scrollTrigger: { trigger: ".why-section", start: "top 70%" },
  textContent: 0,
  duration: 2,
  snap: { textContent: 1 },
  ease: "power2.out"
});

// SCROLL TRIGGER — brand logos float in:
gsap.from(".brand-card", {
  scrollTrigger: { trigger: ".brands-section", start: "top 60%" },
  opacity: 0,
  y: 40,
  stagger: 0.12,
  duration: 0.6
});
```

### 5.3 Color Palette

```css
:root {
  /* Primary */
  --red:         #E31E24;
  --red-dark:    #B01519;
  --red-glow:    rgba(227, 30, 36, 0.3);

  /* Neutrals */
  --black:       #0D0D0D;
  --dark:        #141414;
  --dark-2:      #1E1E1E;
  --grey:        #2A2A2A;
  --muted:       #777777;
  --chrome:      #CCCCCC;
  --white:       #F2F2F2;

  /* Gradients */
  --grad-hero:   linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%);
  --grad-red:    linear-gradient(90deg, #E31E24, #FF5555);
  --grad-chrome: linear-gradient(135deg, #888, #CCC, #888);
}
```

### 5.4 Typography

```css
/* Display / Headlines — Bold, condensed, aggressive */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&display=swap');

/* Body — Clean, technical, legible */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

/* Monospace — specs, stats */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

:root {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}

/* Scale */
h1: 72–96px, weight 900, --font-display, uppercase, letter-spacing: -1px
h2: 48–64px, weight 700, --font-display
h3: 28–36px, weight 700, --font-body
body: 16–18px, weight 400, --font-body, line-height 1.7
stats: 56–80px, weight 900, --font-display, --red
```

### 5.5 Layout Rules

- Dark background (never white-first)
- Red used only for CTAs, accents, key numbers
- Full-bleed sections with subtle grid/noise texture
- Cards use subtle borders (1px #2A2A2A) + backdrop-filter blur
- Mobile-first, 100% fluid

---

## 6. TECH STACK

### 6.1 Frontend

```
Framework:    Next.js 14 (App Router)
Language:     TypeScript
Styling:      Tailwind CSS + CSS Modules (for 3D/animations)
3D:           Three.js + @react-three/fiber + @react-three/drei
Animation:    GSAP + ScrollTrigger + @gsap/react
Icons:        Lucide React
Fonts:        Google Fonts (Barlow Condensed + DM Sans)
```

### 6.2 Backend (Minimal)

```
Contact Form:   Next.js API Route → sends email via Resend.com API
WhatsApp CTA:   Static deep link (no backend needed)
CMS (Phase 1):  Contentlayer (markdown-based, zero cost)
CMS (Phase 2):  Sanity.io (if blog + product catalog needed)
```

### 6.3 Infrastructure

```
Hosting:      Vercel (free tier, auto-SSL, edge CDN)
Domain:       edgegriptyres.in via GoDaddy / Namecheap (~₹800/yr)
Forms:        Resend.com (3,000 free emails/month)
Maps:         Google Maps Embed API (free tier)
Analytics:    Vercel Analytics + Google Analytics 4
```

### 6.4 Tools

```
Design:       Figma (wireframes → high-fidelity mockups)
3D Modelling: Blender (tyre model) → export .glb
Icons:        Lucide + custom SVG
Images:       Sharp (Next.js image optimisation built-in)
Code:         VS Code + GitHub
Deploy:       Vercel CLI / GitHub Actions
```

### 6.5 Project File Structure

```
edgegrip-tyres/
├── app/
│   ├── page.tsx              (Homepage)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── brands/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── contact/route.ts  (Form handler)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx   (3D tyre here)
│   │   ├── TrustBar.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── WhySection.tsx
│   │   └── Testimonials.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── BrandCard.tsx
│   │   └── ServiceCard.tsx
│   └── three/
│       ├── TyreModel.tsx     (Three.js component)
│       └── Scene.tsx
├── public/
│   ├── models/tyre.glb
│   ├── images/
│   └── fonts/
├── lib/
│   └── gsap-config.ts
├── styles/
│   └── globals.css
└── content/
    └── brands.json
```

---

## 7. DEVELOPMENT ROADMAP

### Phase 1: Foundation (Week 1)
```
Day 1–2:
□ Buy domain: edgegriptyres.in
□ Set up Next.js 14 project + TypeScript + Tailwind
□ Deploy empty site to Vercel
□ Create Figma project, define color tokens + type scale
□ Sketch all page wireframes (low-fidelity)

Day 3–4:
□ Build Navbar + Footer components
□ Create global CSS variables (colors, fonts, spacing)
□ Set up GSAP + ScrollTrigger
□ Build reusable Button, Card, Section components

Day 5–7:
□ Build Hero Section (static first, 3D later)
□ Build TrustBar + ServicesSection
□ Build BrandsSection + WhySection
□ Build Testimonials + LocationSection
□ Mobile responsiveness pass
```

### Phase 2: 3D & Animation (Week 2)
```
Day 8–9:
□ Download/create tyre .glb model (Sketchfab or Blender)
□ Install @react-three/fiber + drei
□ Build TyreScene component with lighting + environment
□ Integrate into Hero Section

Day 10–11:
□ GSAP hero text animation (word-by-word reveal)
□ Scroll-trigger animations (stats counter, brand logos, services)
□ Floating WhatsApp button (always visible)
□ Sticky header with scroll behaviour

Day 12–14:
□ Brand cards with CSS 3D hover tilt
□ Service cards with SVG path animations
□ Page transition animations (Next.js + GSAP)
□ Performance audit (Lighthouse score target: 85+)
```

### Phase 3: Content & Forms (Week 3)
```
Day 15–16:
□ Write + integrate all page content (use this document)
□ Add all brand/product images (optimised WebP)
□ Build Contact page + form
□ Set up Resend API for form emails

Day 17–18:
□ About page with team section
□ Individual service pages
□ Individual brand pages (basic)
□ Add Google Maps embed

Day 19–21:
□ SEO meta tags (Next.js Metadata API)
□ Sitemap.xml + robots.txt
□ Google Search Console setup
□ Google Analytics 4 integration
□ Final mobile QA across devices
```

### Phase 4: Launch (Week 4)
```
Day 22–23:
□ Domain connected to Vercel
□ SSL + performance check
□ Instagram feed integration
□ Test all forms + WhatsApp links

Day 24–25:
□ Google Business Profile update with website
□ Submit sitemap to Google Search Console
□ Share on WhatsApp broadcast to existing customers
□ Post launch reel on Instagram

Day 26–28:
□ Monitor analytics
□ Fix any reported bugs
□ Add Google reviews widget
□ LAUNCH 🚀
```

**Total Timeline: 4 Weeks**
**Estimated Cost (self-built):**
- Domain: ₹800/yr
- Vercel: Free
- Resend: Free
- Total: ~₹800/yr

---

## 8. SEO & LOCAL MARKETING STRATEGY

### 8.1 Google Business Profile (TOP PRIORITY)

```
□ Claim/update listing: "EdgeGrip Tyres"
□ Category: Tyre Shop / Auto Parts Store
□ Add all 5 brands as products
□ Upload 20+ store photos (inside, technicians, products)
□ Add store hours (accurate)
□ Enable messaging
□ Add website link
□ Request reviews from every happy customer (WhatsApp template below)
□ Post weekly updates (offers, tips, new arrivals)
```

**WhatsApp Review Request Template:**
```
Hi [Name]! Thank you for visiting EdgeGrip Tyres 🙏
If you're happy with our service, it would mean a lot if you left us a quick Google review.
Takes just 30 seconds: [Google Review Link]
Your feedback helps us serve more Bengaluru drivers like you! 🚗
— Team EdgeGrip
```

### 8.2 Target Keywords

```
PRIMARY (high intent, local):
- "tyre shop near Nagasandra"
- "tyre shop Bengaluru"
- "Michelin tyres Bengaluru"
- "wheel alignment Nagasandra"
- "bike tyre fitting Bengaluru"
- "CEAT tyre dealer Bengaluru"
- "Pirelli tyres Bengaluru price"

LONG-TAIL (SEO blog targets):
- "best tyres for Bengaluru roads"
- "when to change car tyres in India"
- "Michelin vs CEAT tyres India comparison"
- "wheel balancing vs alignment difference"
- "Eurogrip bike tyres review India"
```

### 8.3 Instagram Strategy

```
Handle: @edgegriptyres
Bio: "5 Global Tyre Brands 🏁 Cars & Bikes | Nagasandra, Bengaluru 📍 | Book via WhatsApp 👇"

Content Pillars (70/20/10):
70% Value Content:
  - "Signs your tyres need replacing" (carousel)
  - "Michelin LTX Trail — full walkthrough" (Reel)
  - "Wheel balancing explained in 60 sec" (Reel)
  - "Before/After alignment results" (split image)
  - "Tyre pressure tips for Bengaluru rains" (post)

20% Brand/Trust:
  - Happy customer testimonial (with permission)
  - Tech at work (satisfying balancing video)
  - New stock arrival
  - "5 brands under one roof" brand showcase

10% Promotional:
  - "Free balancing this weekend"
  - Festival season offers
  - "Refer a friend, get ₹500 off"

Posting Frequency: 4–5 posts/week, 2–3 Reels/week
Best Times: 8–9 AM, 12–1 PM, 7–9 PM IST

Tools: Canva (designs) + CapCut (Reels editing)
```

### 8.4 WhatsApp Marketing

```
□ Set up WhatsApp Business account
□ Set auto-reply: "Hi! Thanks for reaching out to EdgeGrip Tyres. 
  We'll respond within 10 mins. For urgent help, call us: +91-XXXXX"
□ Create broadcast list of all past customers
□ Monthly: Send 1 value message (tyre tip) + 1 offer
□ Never spam — max 2 messages/month
```

---

## 9. MONETIZATION & GROWTH IDEAS

### Phase 2 Features (3–6 months post-launch)

**Online Appointment Booking:**
```
Tech: Calendly embed OR custom slot-picker
Flow: Pick service → pick date/time → enter vehicle number → confirm
Benefit: Reduces phone calls, shows professional systems
```

**Tyre Finder Tool:**
```
AI-powered form: Enter vehicle model → get recommended tyres with pricing
Tech: Simple JSON lookup table + Claude API for recommendations
Conversion: High-intent leads
```

**Blog / Content Hub:**
```
Topics: Tyre guides, brand comparisons, Bengaluru road tips
SEO Value: Long-tail keyword rankings = free organic traffic
Monetisation: Google AdSense (eventually)
```

### Phase 3 Features (6–12 months)

**Tyre Price Estimator Widget:**
```
Input: Vehicle type + brand preference + budget
Output: 2–3 options with estimated price range
Lead capture: "For exact price, WhatsApp us"
```

**B2B Fleet Portal:**
```
Target: Cab aggregators (Ola/Uber drivers), delivery companies (Swiggy/Dunzo)
Feature: Volume pricing, service scheduling, invoice management
Revenue: Recurring B2B contracts (high LTV)
```

**Loyalty Programme:**
```
Name: "Grip Points"
Earn: 1 point per ₹100 spent
Redeem: ₹500 off at 500 points
Tech: Simple Supabase database + phone OTP login
```

**Referral Programme:**
```
Mechanic partnerships: Local car mechanics refer customers → get ₹200 per referral
Garage network in Nagasandra/Yeshwanthpur/Peenya
```

---

## 10. PROMPT TEMPLATES FOR AI TOOLS

### For Image Generation (Midjourney/DALL-E):
```
"High-end automotive photography of a premium tyre, dramatic studio lighting,
dark background with red rim light, photorealistic, carbon fibre texture,
sharp tread detail, editorial quality, 8K --ar 16:9"
```

### For Blender Tyre Model Prompt (if using AI assist):
```
"Create a realistic tyre model in Blender: 18-inch alloy wheel,
sport tread pattern, rubber sidewall with brand text,
chrome rim with 5-spoke design, suitable for Three.js GLB export"
```

### For Copywriting (Claude/ChatGPT):
```
"Write a 3-sentence product description for [BRAND + MODEL] tyre.
Tone: premium automotive brand. Audience: Indian car owner.
Highlight: [key feature]. End with a soft CTA."
```

### For SEO Blog Posts:
```
"Write a 1200-word SEO blog post titled '[KEYWORD]' for EdgeGrip Tyres,
a multi-brand tyre store in Nagasandra, Bengaluru. Include natural mentions
of our services (installation, balancing, alignment) and brands
(Michelin, CEAT, Eurogrip, Maxxis, Pirelli). Target keyword density: 1.5%.
Conclude with a CTA to visit our store."
```

---

## QUICK REFERENCE CARD

```
BRAND:          EdgeGrip Tyres
LOCATION:       Nelagadaranahalli Main Rd, Nagasandra, Bengaluru
DOMAIN (target): edgegriptyres.in
PRIMARY COLOR:  #E31E24 (Red)
ACCENT:         #111111 (Black)
HEADLINE FONT:  Barlow Condensed 900
BODY FONT:      DM Sans 400/500
FRAMEWORK:      Next.js 14 + TypeScript + Tailwind
3D LIBRARY:     @react-three/fiber + drei
ANIMATION:      GSAP + ScrollTrigger
HOSTING:        Vercel (free)
EMAIL:          Resend.com (free)
MAPS:           Google Maps Embed
PRIMARY CTA:    WhatsApp → "Get Free Tyre Check"
INSTAGRAM:      @edgegriptyres
```

---

*Document prepared for EdgeGrip Tyres Website Build*
*Use this file as context in every Claude/ChatGPT conversation during development*
*Update section 10 with your actual phone number and social handles before use*
