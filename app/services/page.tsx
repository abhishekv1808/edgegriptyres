"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BrandsSection from "@/components/home/BrandsSection";
import {
  Wrench,
  Circle,
  Target,
  Check,
  ArrowRight,
  MessageCircle,
  Shield,
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
    image: "/images/hanmecson-scissor-lift.png",
    equipment: "Hanmecson NBS40A-45 Scissor Lift",
    equipmentDesc: "4-tonne in-ground scissor lift with synchronized dual-platform hydraulics for safe, precise vehicle elevation.",
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
    image: "/images/computerised-wheel-balancing.png",
    equipment: "Hunter SmartWeight Pro",
    equipmentDesc: "Patented SmartWeight technology with laser-guided weight placement and 1g imbalance resolution for perfect balance every time.",
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
    image: "/images/Hunter Hawkeye Lite Wheel Aligner.png",
    equipment: "Hunter Hawkeye Lite",
    equipmentDesc: "HD digital imaging alignment system with 0.01° precision. The same technology trusted by championship motorsport workshops.",
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
        <section className="pt-32 pb-20 bg-[#0e0e0e] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="services-hero-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-body font-bold text-brand-red uppercase tracking-[0.15em] mb-6">
                <Shield size={13} />
                Our Services
              </div>
              <h1 className="services-hero-text text-4xl sm:text-5xl lg:text-7xl font-display font-black uppercase tracking-tight text-white mb-6 leading-[1.05]">
                Expert Tyre Services.{" "}
                <span className="text-brand-red">Precision</span> You Can Feel.
              </h1>
              <p className="services-hero-text text-lg text-white/35 font-body leading-relaxed max-w-xl">
                Every service at EdgeGrip is performed by trained technicians
                using professional-grade equipment. We treat every vehicle with
                meticulous care.
              </p>
            </div>
          </div>
        </section>

        {/* Premium Partners Section */}
        <BrandsSection />

        {/* Service Details */}
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 lg:py-32 ${
                i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#111111]"
              } relative overflow-hidden`}
            >
              <div className={`section-container service-detail-${i}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                  {/* Info */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6">
                      <Icon size={24} className="text-brand-red" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-5 tracking-tight leading-[1.1]">
                      {service.title}
                    </h2>
                    <p className="text-white/35 font-body text-[15px] leading-relaxed mb-8 max-w-lg">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-white/50 font-body"
                        >
                          <Check
                            size={16}
                            className="text-brand-red mt-0.5 flex-shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-white/25 font-body mb-8">
                      <strong className="text-white/40">Vehicles:</strong>{" "}
                      {service.vehicles}
                    </p>

                    <a
                      href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20help%20with%20"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(227,30,36,0.3)] uppercase tracking-wider"
                    >
                      Book {service.title.split(" ")[0]}
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Equipment Image */}
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative flex flex-col items-center">
                      {/* Image */}
                      <div className="relative w-full flex items-center justify-center mb-6">
                        <img
                          src={service.image}
                          alt={service.equipment}
                          className="w-full max-w-md h-auto max-h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                      </div>

                      {/* Equipment Info Card */}
                      <div className="w-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl px-6 py-4">
                        <div className="flex items-center gap-3 mb-1.5">
                          <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_rgba(227,30,36,0.5)]" />
                          <span className="text-sm font-display font-bold text-white/80">
                            {service.equipment}
                          </span>
                        </div>
                        <p className="text-xs font-body text-white/30 leading-relaxed pl-5">
                          {service.equipmentDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Pricing CTA */}
        <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.04] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-red/[0.03] rounded-full blur-[100px]" />
          </div>
          <div className="section-container text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 tracking-tight">
              Want to know the <span className="text-brand-red">service cost</span> for your vehicle?
            </h2>
            <p className="text-white/30 font-body mb-10 max-w-lg mx-auto text-[15px]">
              Contact us — we give transparent quotes, no surprises.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20a%20service%20quote"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)] uppercase tracking-wider text-sm"
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
