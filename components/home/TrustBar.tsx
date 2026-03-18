"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Globe, Wrench, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: "500+", label: "Customers Served" },
  { icon: Globe, value: "5", label: "Global Brands" },
  { icon: Wrench, value: "3", label: "Expert Services" },
  { icon: MapPin, value: "1", label: "Nagasandra, Bengaluru" },
];

export default function TrustBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".trust-item");
      gsap.set(items, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: barRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={barRef}
      className="relative py-8 border-y border-black/5 bg-brand-dark/50"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="trust-item flex items-center gap-3 justify-center"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-red" />
                </div>
                <div>
                  <span className="text-lg font-display font-bold text-brand-white">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-body text-brand-muted">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
