"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelector(".location-content");
      const map = document.querySelector(".location-map");

      if (content) {
        gsap.set(content, { opacity: 0, x: -40 });
      }
      if (map) {
        gsap.set(map, { opacity: 0, x: 40 });
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (content) {
            gsap.to(content, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
            });
          }
          if (map) {
            gsap.to(map, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.2,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-black relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Location
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white">
            Find Us in <span className="text-brand-red">Nagasandra</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Info */}
          <div className="location-content space-y-6">
            {/* Address */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-brand-white mb-1">
                  Address
                </h3>
                <p className="text-sm text-brand-muted font-body leading-relaxed">
                  EdgeGrip Tyres, <br />
                  Nelagadaranahalli Main Rd, <br />
                  Nagasandra, Bengaluru, <br />
                  Karnataka – 560073
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-brand-white mb-1">
                  Working Hours
                </h3>
                <p className="text-sm text-brand-muted font-body">
                  Mon–Sat: 9:00 AM – 7:00 PM
                </p>
                <p className="text-sm text-brand-muted font-body">
                  Sunday: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-brand-white mb-1">
                  Call Us
                </h3>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-brand-muted hover:text-brand-red transition-colors font-body"
                >
                  +91-XXXXX-XXXXX
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Nagasandra+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20found%20you%20on%20your%20website"
                className="flex items-center justify-center gap-2 border border-black/15 hover:border-brand-red/40 text-brand-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-black/5"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>

            <p className="text-xs text-brand-muted font-body italic">
              📍 Near Nagasandra Metro Station. Easy parking available.
            </p>
          </div>

          {/* Map */}
          <div className="location-map glass-card rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d77.5!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EdgeGrip Tyres Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
