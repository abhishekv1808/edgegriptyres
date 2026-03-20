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
    logo: "/logos/michelin.png",
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
    logo: "/logos/ceat_tyres-logo.png",
    tagline: "India's Road Champion",
    description:
      "Built for Indian roads. CEAT tyres deliver outstanding durability on pothole-heavy urban streets, with excellent wet-road grip and competitive pricing.",
    bestFor: "Hatchbacks, Sedans, Everyday Commuters",
    tags: ["Value", "Durability", "India-Ready"],
    color: "#FF6B35",
  },
  {
    name: "Eurogrip",
    logo: "/logos/TVS-Eurogrip-logo.jpg",
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
    logo: "/logos/maxxis-logo.png",
    tagline: "Performance Across Categories",
    description:
      "Trusted by OEMs worldwide, Maxxis delivers consistent performance for both cars and bikes with an excellent price-to-quality ratio.",
    bestFor: "Performance-focused Drivers",
    tags: ["Performance", "Value", "Global OEM Trust"],
    color: "#4A90D9",
  },
  {
    name: "Pirelli",
    logo: "/logos/Pirelli_logo.png",
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
                    className="glass-card rounded-2xl p-8 text-center relative overflow-hidden lg:sticky lg:top-28"
                    style={{ borderColor: `${brand.color}20` }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, transparent, ${brand.color}, transparent)` }}
                    />

                    {/* Logo */}
                    <div
                      className="w-40 h-40 rounded-3xl mx-auto mb-6 flex items-center justify-center overflow-hidden p-4"
                      style={{
                        background: `linear-gradient(135deg, ${brand.color}10, ${brand.color}20)`,
                        boxShadow: `0 8px 40px ${brand.color}15`,
                      }}
                    >
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-brand-white mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-brand-muted font-body italic mb-5">
                      {brand.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {brand.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border"
                          style={{
                            background: `${brand.color}10`,
                            borderColor: `${brand.color}25`,
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
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-white mb-4 tracking-tight">
                    {brand.name} <span className="font-light text-brand-muted/40">|</span>{" "}
                    <span
                      style={{
                        background: `linear-gradient(to right, ${brand.color}, ${brand.color}80)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {brand.tagline}
                    </span>
                  </h2>
                  <p className="text-brand-muted font-body text-lg leading-relaxed mb-8">
                    {brand.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {brand.featuredProduct && (
                      <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: brand.color }} />
                          <p className="text-xs font-body font-bold text-brand-white uppercase tracking-[0.15em]">
                            Hero Product
                          </p>
                        </div>
                        <p className="text-xl font-display font-bold text-brand-white mb-2">
                          {brand.featuredProduct}
                        </p>
                        {brand.why && (
                          <p className="text-sm text-brand-muted font-body leading-relaxed">
                            {brand.why}
                          </p>
                        )}
                      </div>
                    )}

                    {brand.featuredProducts && (
                      <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: brand.color }} />
                          <p className="text-xs font-body font-bold text-brand-white uppercase tracking-[0.15em]">
                            Popular Models
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {brand.featuredProducts.map((p, j) => (
                            <li
                              key={j}
                              className="text-sm text-brand-muted font-body flex items-start gap-2"
                            >
                              <span style={{ color: brand.color }}>•</span>
                              <span className="flex-1">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/5 pt-6 mt-6">
                    <div className="flex-1">
                      <p className="text-xs font-body font-bold text-brand-white/40 uppercase tracking-widest mb-1">
                        Best For
                      </p>
                      <p className="text-sm text-brand-white font-body font-medium">
                        {brand.bestFor}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(brand.name)}%20tyres`}
                      className="group flex w-full sm:w-auto items-center justify-center gap-3 text-brand-black font-body font-bold px-6 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden"
                      style={{ backgroundColor: brand.color }}
                    >
                      <span className="relative z-10">Enquire Now</span>
                      <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center relative z-10 group-hover:bg-black/20 transition-colors">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </a>
                  </div>
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
