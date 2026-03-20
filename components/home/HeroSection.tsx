"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TyreModel = dynamic(() => import("@/components/ui/TyreModel"), {
  ssr: false,
  loading: () => null,
});

const trustBadges = [
  "Michelin Authorised",
  "Free Balancing",
  "Same-Day Service",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const headlineWords = ["Drive", "With", "Confidence."];
  const sublineWords = ["Every", "Road.", "Every", "Ride."];

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={heroRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--grad-hero)" }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blurred red circle */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-brand-red/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Continuous Rolling Premium Tyre */}
        <div className="absolute right-[-30px] md:right-[-15px] lg:right-[1%] xl:right-[4%] 2xl:right-[6%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[1]">
          <div className="w-full h-full pointer-events-auto">
            <TyreModel />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px] mx-auto relative z-10 pt-4 pb-4 md:pt-8 md:pb-8 lg:pt-12 lg:pb-12">
        <div className="max-w-2xl lg:max-w-3xl relative z-20">
          {/* Overline */}
          <motion.div
            variants={itemVariants}
            className="hero-overline flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Nagasandra, Bengaluru
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mb-2">
            <span className="block overflow-hidden">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="hero-word inline-block text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-display font-black uppercase tracking-tight mr-4"
                  style={{
                    color: word === "Confidence." ? "#E31E24" : "#1A1A1A",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2 overflow-hidden">
              {sublineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="hero-word inline-block text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-display font-black uppercase tracking-tight mr-4 text-black/20"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="hero-sub text-lg sm:text-xl text-brand-muted font-body leading-relaxed max-w-xl mt-6 mb-10"
          >
            Bengaluru&apos;s premium multi-brand tyre destination. Expert
            fitment for cars &amp; motorcycles — walk-ins welcome.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-4 mb-10"
          >
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20found%20you%20on%20your%20website%20and%20need%20tyre%20help"
              className="hero-cta group flex items-center justify-between gap-4 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold pl-7 pr-3 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)] active:scale-95 text-base border border-transparent shadow-lg"
            >
              <span>Get a Free Tyre Check</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/hero-tyre.png"
                  alt="Roll"
                  className="w-7 h-7 object-contain group-hover:translate-x-1 group-hover:rotate-[360deg] transition-all duration-700 ease-in-out drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </a>
            <Link
              href="/brands"
              className="hero-cta group flex items-center justify-between gap-4 bg-white hover:bg-gray-50 text-brand-chrome font-body font-semibold pl-7 pr-3 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:border-brand-red/30 active:scale-95 text-base border border-black/10 shadow-sm"
            >
              <span>Browse Our Brands</span>
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/hero-tyre.png"
                  alt="Roll"
                  className="w-7 h-7 object-contain group-hover:translate-x-1 group-hover:rotate-[360deg] transition-all duration-700 ease-in-out drop-shadow-md brightness-50 contrast-125"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="hero-badge flex items-center gap-2 text-sm text-brand-muted font-body"
              >
                <CheckCircle size={14} className="text-brand-red" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </motion.section>
  );
}
