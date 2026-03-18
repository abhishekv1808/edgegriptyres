"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Heart, Target, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: "Honesty First",
    description:
      "We'll tell you if your tyres don't need replacing yet. No pushy upsells — ever.",
  },
  {
    icon: Target,
    title: "Precision Always",
    description:
      "Every job is done right, not just done. We follow manufacturer specifications to the letter.",
  },
  {
    icon: Users,
    title: "Local Pride",
    description:
      "We're your neighbours. Your trust means everything. We've served Nagasandra since day one.",
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-text", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".value-card", {
        scrollTrigger: { trigger: ".values-section", start: "top 70%" },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".story-text", {
        scrollTrigger: { trigger: ".story-section", start: "top 70%" },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
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
              <div className="about-hero-text flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-brand-red" />
                <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
                  About Us
                </span>
              </div>
              <h1 className="about-hero-text text-5xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-brand-white mb-6">
                We Put Our Name On{" "}
                <span className="text-brand-red">Every Tyre</span> We Fit
              </h1>
              <p className="about-hero-text text-lg text-brand-muted font-body leading-relaxed max-w-xl">
                EdgeGrip Tyres was born from a simple belief: that every
                Bengaluru driver deserves expert tyre guidance — not just a
                sale.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="story-section py-24 bg-brand-black">
          <div className="section-container">
            <div className="max-w-3xl mx-auto story-text">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-8">
                Our <span className="text-brand-red">Story</span>
              </h2>
              <div className="space-y-6 text-brand-muted font-body leading-relaxed">
                <p>
                  We started on Nelagadaranahalli Main Road with one goal — to
                  be the tyre shop we always wished existed. No pushy upsells.
                  No guesswork. Just genuine expertise and world-class brands.
                </p>
                <p>
                  Today, we serve hundreds of customers across Nagasandra,
                  Yeshwanthpur, Peenya, and Malleshwaram — from daily commuters
                  on bikes to families in Innovas and professionals in BMWs.
                </p>
                <p>
                  Our team combines deep technical knowledge with a commitment
                  to transparency. We believe every customer deserves to
                  understand what they&apos;re buying and why — so we take the
                  time to explain, educate, and recommend with integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section py-24 bg-brand-dark">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-brand-red" />
                <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
                  Our Values
                </span>
                <div className="h-[1px] w-8 bg-brand-red" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-brand-white">
                What Drives <span className="text-brand-red">Us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="value-card glass-card rounded-2xl p-8 text-center hover:border-brand-red/20 transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
                      <Icon size={28} className="text-brand-red" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-white mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm text-brand-muted font-body leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand-black">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-4">
              Ready to experience the{" "}
              <span className="text-brand-red">difference</span>?
            </h2>
            <p className="text-brand-muted font-body mb-8 max-w-lg mx-auto">
              Visit our store in Nagasandra or reach out — we&apos;re always
              happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)]"
            >
              Visit Our Store
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
