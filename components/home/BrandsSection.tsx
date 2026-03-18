"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

// Real brand logos from public/logos
const brandLogos = [
  { name: "Michelin", src: "/logos/michelin.png" },
  { name: "CEAT", src: "/logos/ceat_tyres-logo.png" },
  { name: "MRF", src: "/logos/MRF_tyres-logo.jpg" },
  { name: "Yokohama", src: "/logos/Yokohama_tyres-logo.png" },
  { name: "Apollo", src: "/logos/appolo_tyres-logo.jpg" },
];

// Duplicate the array to create a seamless infinite loop
const marqueeLogos = [
  ...brandLogos,
  ...brandLogos,
  ...brandLogos,
  ...brandLogos,
];

export default function BrandsSection() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="section-container text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Premium Partners
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white mb-4">
            World-Class Brands.{" "}
            <span className="text-brand-red">Expert Guidance.</span>
          </h2>
          <p className="text-brand-muted font-body max-w-lg mx-auto">
            We carry only the brands we trust. No compromise on safety, grip, or
            longevity.
          </p>
        </div>

        {/* Horizontal Marquee Section */}
        <div className="relative w-full overflow-hidden py-10 flex bg-white/5 border-y border-white/10 backdrop-blur-sm group">
          {/* Left shadow gradient for smooth fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />

          {/* Right shadow gradient for smooth fade effect */}
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          {/* Marquee Track 1 */}
          <div className="flex items-center justify-around gap-8 md:gap-16 px-4 md:px-8 flex-shrink-0 min-w-full animate-marquee group-hover:[animation-play-state:paused]">
            {brandLogos.map((logo, index) => (
              <div
                key={`m1-${index}`}
                className="flex-shrink-0 w-32 md:w-48 h-20 md:h-24 relative hover:scale-105 transition-all duration-300 flex items-center justify-center bg-white/90 rounded-xl p-4 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} Tyres`}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>

          {/* Marquee Track 2 (Duplicate for seamless loop) */}
          <div
            className="flex items-center justify-around gap-8 md:gap-16 px-4 md:px-8 flex-shrink-0 min-w-full animate-marquee group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {brandLogos.map((logo, index) => (
              <div
                key={`m2-${index}`}
                className="flex-shrink-0 w-32 md:w-48 h-20 md:h-24 relative grayscale hover:grayscale-0 hover:scale-105 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center bg-white/90 rounded-xl p-4 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} Tyres`}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="section-container text-center mt-16">
          <p className="text-brand-muted font-body mb-5">
            Not sure which brand suits your vehicle?
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20tyre"
            className="inline-flex items-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-body font-semibold px-6 py-3 rounded-full hover:shadow-[0_4px_20px_rgba(227,30,36,0.3)] transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0"
          >
            <MessageCircle size={16} />
            Talk to Our Tyre Expert
            <ArrowRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
