"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Got my Fortuner's tyres replaced with Michelin LTX Trail. The team was honest about my options and didn't oversell. The ride quality is night and day.",
    name: "Rajesh M.",
    location: "Malleshwaram",
    rating: 5,
  },
  {
    text: "They fixed my bike's tyre in under 20 minutes. Eurogrip Pro Torque fits my Pulsar perfectly. Best tyre shop near Nagasandra.",
    name: "Karthik S.",
    location: "Yeshwanthpur",
    rating: 5,
  },
  {
    text: "Very professional. Did wheel alignment and balancing together. Car feels new. Free balancing was a pleasant surprise!",
    name: "Priya N.",
    location: "Peenya",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-dark relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Testimonials
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white">
            Trusted by Bengaluru <span className="text-brand-red">Drivers</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card glass-card rounded-2xl p-8 relative hover:border-brand-red/20 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-brand-red/20 mb-4 group-hover:text-brand-red/40 transition-colors"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-brand-chrome leading-relaxed mb-6 font-body">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-sm font-display font-bold text-brand-red">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-brand-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-muted font-body">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
