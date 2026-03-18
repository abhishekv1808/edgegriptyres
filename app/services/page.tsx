"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  Wrench,
  Circle,
  Target,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "tyre-installation",
    icon: Wrench,
    title: "Professional Tyre Fitting",
    description:
      "A tyre is only as good as its fitting. Poor installation causes uneven wear, vibration, and safety risks. Our technicians use torque-calibrated tools and follow manufacturer specs for every fitment.",
    features: [
      "Old tyre removal and disposal",
      "Rim inspection before mounting",
      "Valve replacement (where needed)",
      "Inflation to OEM-spec pressure",
      "Post-fit balancing check",
    ],
    vehicles: "Cars, SUVs, Motorcycles, Scooters",
  },
  {
    id: "wheel-balancing",
    icon: Circle,
    title: "Computerised Wheel Balancing",
    description:
      "If your steering wheel vibrates above 60 km/h, your wheels are out of balance. Unbalanced wheels accelerate tyre wear, strain wheel bearings, and reduce fuel efficiency.",
    features: [
      "High-precision computerised balancer",
      "Weight placement calculated to the gram",
      "Road simulation for real-world accuracy",
      "FREE with every tyre purchase",
    ],
    vehicles: "All Cars & SUVs",
  },
  {
    id: "wheel-alignment",
    icon: Target,
    title: "4-Wheel Laser Alignment",
    description:
      "Misaligned wheels are the hidden killer of tyres. Even a 1-degree deviation can eat through a tyre 30% faster. Signs you need alignment: car pulling to one side, uneven tyre wear, or steering vibration.",
    features: [
      "4-wheel computerised alignment system",
      "Live digital readout with before/after comparison",
      "Covers all car types — FWD, RWD, AWD",
      "Recommended every 10,000 km or after a kerb impact",
    ],
    vehicles: "All Cars & SUVs",
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-hero-text", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      services.forEach((_, i) => {
        gsap.from(`.service-detail-${i}`, {
          scrollTrigger: {
            trigger: `.service-detail-${i}`,
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
              <div className="services-hero-text flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-brand-red" />
                <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
                  Our Services
                </span>
              </div>
              <h1 className="services-hero-text text-5xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-brand-white mb-6">
                Expert Tyre Services.{" "}
                <span className="text-brand-red">Precision</span> You Can Feel.
              </h1>
              <p className="services-hero-text text-lg text-brand-muted font-body leading-relaxed max-w-xl">
                Every service at EdgeGrip is performed by trained technicians
                using professional-grade equipment. We treat every vehicle with
                meticulous care.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 ${i % 2 === 0 ? "bg-brand-black" : "bg-brand-dark"}`}
            >
              <div className={`section-container service-detail-${i}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Info */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-brand-red" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-brand-muted font-body leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-brand-chrome font-body"
                        >
                          <Check
                            size={16}
                            className="text-brand-red mt-0.5 flex-shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-brand-muted font-body mb-6">
                      <strong className="text-brand-chrome">Vehicles:</strong>{" "}
                      {service.vehicles}
                    </p>

                    <a
                      href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20help%20with%20"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]"
                    >
                      Book {service.title.split(" ")[0]}
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Visual placeholder */}
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="glass-card rounded-2xl aspect-[4/3] flex items-center justify-center">
                      <Icon size={80} className="text-brand-red/20" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Pricing CTA */}
        <section className="py-20 bg-brand-dark border-t border-black/5">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-4">
              Want to know the service cost for your vehicle?
            </h2>
            <p className="text-brand-muted font-body mb-8 max-w-lg mx-auto">
              Contact us — we give transparent quotes, no surprises.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20a%20service%20quote"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)]"
            >
              <MessageCircle size={16} />
              Get a Quote on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
