"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  {
    name: "Michelin",
    tagline: "The World's Most Trusted Tyre",
    description:
      "From Formula 1 tracks to Bengaluru's flyovers, Michelin sets the standard for safety, longevity, and performance. If you want the best, this is it.",
    featuredProduct: "Michelin LTX Trail",
    bestFor: "SUVs & Crossovers",
    why: "Combines comfort on highways with durability on rough roads — perfect for Bengaluru's mixed terrain.",
    tags: ["Long Life", "Comfortable", "All-Terrain Ready"],
    color: "#FFD700",
  },
  {
    name: "CEAT",
    tagline: "India's Road Champion",
    description:
      "Built for Indian roads. CEAT tyres deliver outstanding durability on pothole-heavy urban streets, with excellent wet-road grip and competitive pricing.",
    bestFor: "Hatchbacks, Sedans, Everyday Commuters",
    tags: ["Value", "Durability", "India-Ready"],
    color: "#FF6B35",
  },
  {
    name: "Eurogrip",
    tagline: "The Biker's Choice",
    description:
      "Eurogrip is engineered specifically for two-wheelers, with a track record across India's toughest roads.",
    featuredProducts: [
      "Durat Trail Beamer — Adventure touring",
      "Pro Torque — Urban commuting",
    ],
    bestFor: "Motorcycles & Scooters",
    tags: ["Grip", "Control", "Two-Wheeler Specialist"],
    color: "#00C49A",
  },
  {
    name: "Maxxis",
    tagline: "Performance Across Categories",
    description:
      "Trusted by OEMs worldwide, Maxxis delivers consistent performance for both cars and bikes with an excellent price-to-quality ratio.",
    bestFor: "Performance-focused Drivers",
    tags: ["Performance", "Value", "Global OEM Trust"],
    color: "#4A90D9",
  },
  {
    name: "Pirelli",
    tagline: "Born on the Racetrack",
    description:
      "If your car is your passion, Pirelli is your tyre. From sports cars to premium sedans, Pirelli offers unmatched handling, aesthetics, and prestige.",
    bestFor: "Sports Cars, Premium Sedans, Driving Enthusiasts",
    tags: ["Prestige", "Handling", "Track DNA"],
    color: "#E31E24",
  },
];

export default function BrandsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".brands-hero-text", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      brands.forEach((_, i) => {
        gsap.from(`.brand-section-${i}`, {
          scrollTrigger: {
            trigger: `.brand-section-${i}`,
            start: "top 70%",
          },
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-grad-hero relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="brands-hero-text flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-brand-red" />
                <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
                  Our Brands
                </span>
              </div>
              <h1 className="brands-hero-text text-5xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-brand-white mb-6">
                5 World-Class Brands.{" "}
                <span className="text-brand-red">One Expert</span> Store.
              </h1>
              <p className="brands-hero-text text-lg text-brand-muted font-body leading-relaxed max-w-xl">
                We&apos;ve hand-picked our brand portfolio to cover every
                driver&apos;s need — comfort, performance, durability, value.
                Every tyre we sell is 100% genuine with manufacturer warranty.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Sections */}
        {brands.map((brand, i) => (
          <section
            key={brand.name}
            className={`py-20 ${i % 2 === 0 ? "bg-brand-black" : "bg-brand-dark"}`}
          >
            <div className={`section-container brand-section-${i}`}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                {/* Brand Card */}
                <div
                  className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div
                    className="glass-card rounded-2xl p-8 text-center"
                    style={{ borderColor: `${brand.color}15` }}
                  >
                    <div
                      className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl font-display font-black"
                      style={{
                        background: `${brand.color}15`,
                        color: brand.color,
                      }}
                    >
                      {brand.name[0]}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brand-white mb-1">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-brand-muted font-body italic">
                      {brand.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {brand.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                          style={{
                            background: `${brand.color}15`,
                            color: brand.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-4">
                    {brand.name} —{" "}
                    <span style={{ color: brand.color }}>{brand.tagline}</span>
                  </h2>
                  <p className="text-brand-muted font-body leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {brand.featuredProduct && (
                    <div className="glass-card rounded-xl p-5 mb-6">
                      <p className="text-xs font-body font-semibold text-brand-red uppercase tracking-wider mb-2">
                        Featured Product
                      </p>
                      <p className="text-lg font-display font-bold text-brand-white mb-1">
                        {brand.featuredProduct}
                      </p>
                      {brand.why && (
                        <p className="text-sm text-brand-muted font-body">
                          {brand.why}
                        </p>
                      )}
                    </div>
                  )}

                  {brand.featuredProducts && (
                    <div className="glass-card rounded-xl p-5 mb-6">
                      <p className="text-xs font-body font-semibold text-brand-red uppercase tracking-wider mb-2">
                        Featured Products
                      </p>
                      <ul className="space-y-1">
                        {brand.featuredProducts.map((p, j) => (
                          <li
                            key={j}
                            className="text-sm text-brand-chrome font-body"
                          >
                            • {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-sm text-brand-muted font-body mb-6">
                    <strong className="text-brand-chrome">Best For:</strong>{" "}
                    {brand.bestFor}
                  </p>

                  <a
                    href={`https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(brand.name)}%20tyres`}
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]"
                  >
                    Enquire About {brand.name}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Footer CTA */}
        <section className="py-20 bg-brand-black border-t border-black/5">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-4">
              Not sure which tyre fits your vehicle?
            </h2>
            <p className="text-brand-muted font-body mb-8 max-w-lg mx-auto">
              Our experts will guide you — no pressure, just good advice.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20tyre"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)]"
            >
              <MessageCircle size={16} />
              Chat with a Tyre Expert
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
