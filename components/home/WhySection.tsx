"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 5, suffix: "", label: "Global Brands in Stock" },
  { value: 10, suffix: " min", label: "Free Tyre Health Check" },
  { value: 0, suffix: "", label: "Hidden Charges. Ever.", special: true },
  { value: 1, suffix: "", label: "Expert Address for Cars & Bikes" },
];

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      const heading = document.querySelector(".why-heading");
      if (heading) {
        gsap.set(heading, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(heading, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          },
        });
      }

      // Stat cards animation
      const cards = gsap.utils.toArray<HTMLElement>(".stat-card");
      gsap.set(cards, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: ".stats-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });

      // Counter animation
      countersRef.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        if (stat.special) return; // Skip the "0" stat

        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: stat.value,
            duration: 2,
            snap: { textContent: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-brand-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/3 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 why-heading">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white mb-6">
            Why Bengaluru Trusts{" "}
            <span className="text-brand-red">EdgeGrip</span>
          </h2>
          <p className="text-brand-muted font-body max-w-2xl mx-auto leading-relaxed">
            We&apos;re not a tyre shop — we&apos;re your road partners. EdgeGrip
            Tyres has built its reputation on honest advice, precision
            workmanship, and giving every customer the exact tyre they need.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card glass-card rounded-2xl p-6 text-center hover:border-brand-red/20 transition-all duration-500"
            >
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span
                  ref={(el) => {
                    if (el) countersRef.current[i] = el;
                  }}
                  className="text-4xl sm:text-5xl font-display font-black text-brand-red"
                >
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl font-display font-bold text-brand-red">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-brand-muted font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
