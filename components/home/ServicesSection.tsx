"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Circle, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Precision Tyre Fitting",
    description:
      "Whether you drive a Swift or a Fortuner, ride a Royal Enfield or a Pulsar — our technicians fit tyres with precision tools and OEM-grade care.",
    href: "/services#tyre-installation",
  },
  {
    icon: Circle,
    title: "Vibration-Free Wheel Balancing",
    description:
      "Unbalanced wheels wear tyres 40% faster and reduce fuel efficiency. We use computerised balancers for a perfectly smooth ride.",
    href: "/services#wheel-balancing",
  },
  {
    icon: Target,
    title: "Laser-Guided Wheel Alignment",
    description:
      "Correct alignment saves tyres and improves handling. Our 4-wheel alignment system works on all cars — sedans, SUVs, hatchbacks.",
    href: "/services#wheel-alignment",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-brand-black relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Our Services
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white">
            What We Do <span className="text-brand-red">Best</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="service-card group glass-card rounded-2xl p-8 hover:border-brand-red/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Icon size={24} className="text-brand-red" />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-brand-red hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-brand-chrome hover:text-brand-red transition-colors duration-300"
          >
            Book a Service Today
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
