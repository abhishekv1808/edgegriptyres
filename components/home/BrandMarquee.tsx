import React from "react";
import { Star } from "lucide-react";

const brands = [
  {
    name: "MICHELIN",
    src: "/logos/michelin.png",
    width: 130,
  },
  {
    name: "CEAT",
    src: "/logos/ceat_tyres-logo.png",
    width: 100,
  },
  {
    name: "MRF",
    src: "/logos/MRF_tyres-logo.jpg",
    width: 80,
  },
  {
    name: "YOKOHAMA",
    src: "/logos/Yokohama_tyres-logo.png",
    width: 150,
  },
  {
    name: "APOLLO",
    src: "/logos/appolo_tyres-logo.jpg",
    width: 120,
  },
];

export default function BrandMarquee() {
  return (
    <section className="py-6 bg-brand-dark overflow-hidden border-b border-black/5 relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap overflow-hidden">
        {/* We render the same block multiple times for infinite scrolling */}
        <div className="flex animate-[marquee_40s_linear_infinite] items-center shrink-0 min-w-full justify-around pt-2 pb-2">
          {brands.map((brand, i) => (
            <div
              key={`brand-${i}`}
              className="flex items-center mx-10 sm:mx-16"
            >
              <img
                src={brand.src}
                alt={`${brand.name} Tyres`}
                style={{ width: `${brand.width}px`, height: "auto" }}
                className="transition-all duration-300 hover:scale-105 hover:drop-shadow-md contrast-125"
                loading="lazy"
              />
              <Star className="w-4 h-4 text-brand-red ml-10 sm:ml-16 shrink-0 opacity-40 mix-blend-multiply" />
            </div>
          ))}
        </div>

        {/* Duplicate block for seamless loop */}
        <div
          className="flex animate-[marquee_40s_linear_infinite] items-center shrink-0 min-w-full justify-around pt-2 pb-2"
          aria-hidden="true"
        >
          {brands.map((brand, i) => (
            <div
              key={`brand-dup-${i}`}
              className="flex items-center mx-10 sm:mx-16"
            >
              <img
                src={brand.src}
                alt={`${brand.name} Tyres`}
                style={{ width: `${brand.width}px`, height: "auto" }}
                className="transition-all duration-300 hover:scale-105 hover:drop-shadow-md contrast-125"
                loading="lazy"
              />
              <Star className="w-4 h-4 text-brand-red ml-10 sm:ml-16 shrink-0 opacity-40 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
