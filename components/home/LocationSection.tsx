"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock, Navigation, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INFO_ITEMS = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    lines: [
      "EdgeGrip Tyres,",
      "Nelagadaranahalli Main Rd,",
      "Nagasandra, Bengaluru,",
      "Karnataka – 560073",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: 10:00 AM – 4:00 PM"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91-XXXXX-XXXXX"],
    href: "tel:+91XXXXXXXXXX",
  },
];

export default function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".loc-animate").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-red/[0.04] rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-red/[0.03] rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="loc-animate text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm font-body font-semibold text-brand-red mb-6 backdrop-blur-sm">
            <MapPin size={14} />
            Our Location
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white mb-5 tracking-tight">
            Find Us in <span className="text-brand-red">Nagasandra</span>
          </h2>
          <p className="text-white/40 font-body text-base md:text-lg max-w-xl mx-auto">
            Visit our store for expert tyre consultation, instant fitment, and unbeatable prices on premium brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 items-stretch">
          {/* Left Column — Info Cards (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.title}
                className="loc-animate group bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 md:p-6 flex items-start gap-4 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                  <item.icon size={18} className="text-brand-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-display font-bold text-white mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  {item.lines.map((line, i) =>
                    item.href && i === 0 ? (
                      <a
                        key={i}
                        href={item.href}
                        className="block text-sm text-white/50 hover:text-brand-red transition-colors font-body leading-relaxed"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-sm text-white/50 font-body leading-relaxed">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="loc-animate flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://maps.google.com/?q=Nagasandra+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.3)] group"
              >
                <Navigation size={15} />
                Get Directions
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20found%20you%20on%20your%20website"
                className="flex-1 flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.15] text-white font-body font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-300"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>

            {/* Landmark Pill */}
            <div className="loc-animate flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] rounded-full px-4 py-2.5 mt-1">
              <Sparkles size={14} className="text-brand-red flex-shrink-0" />
              <span className="text-xs text-white/40 font-body">
                Near Nagasandra Metro Station • Easy parking available
              </span>
            </div>
          </div>

          {/* Right Column — Map (3 cols) */}
          <div className="loc-animate lg:col-span-3 relative">
            {/* Added group and pointer-events handling to prevent scroll trapping */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] h-[400px] lg:h-full min-h-[450px] group">
              {/* Invisible overlay to catch scrolls unless explicitly clicked (if you want interactivity later, but for now we'll just use CSS to prevent trapping) */}
              <div className="absolute inset-0 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d77.5!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full pointer-events-none"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EdgeGrip Tyres Location"
              />
              {/* Map overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none z-20" />
              {/* Floating badge on map */}
              <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-body font-bold text-white tracking-wide">
                  Open Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
