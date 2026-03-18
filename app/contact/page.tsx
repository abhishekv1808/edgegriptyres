"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  Send,
  Lock,
  CheckCircle,
} from "lucide-react";

const vehicleTypes = ["Car", "Bike", "SUV", "Other"];
const serviceOptions = [
  "Tyre Installation",
  "Wheel Balancing",
  "Wheel Alignment",
  "Not sure",
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    serviceNeeded: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-hero-text", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".contact-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.6,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
              <div className="contact-hero-text flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-brand-red" />
                <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
                  Contact Us
                </span>
              </div>
              <h1 className="contact-hero-text text-5xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-brand-white mb-6">
                We&apos;re Right Around{" "}
                <span className="text-brand-red">The Corner</span>
              </h1>
              <p className="contact-hero-text text-lg text-brand-muted font-body leading-relaxed max-w-xl">
                Walk in anytime — or reach out ahead. We&apos;re ready when you
                are.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24 bg-brand-black">
          <div className="section-container">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              <div className="contact-card glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={20} className="text-brand-red" />
                </div>
                <h3 className="text-sm font-body font-semibold text-brand-white mb-2">
                  Address
                </h3>
                <p className="text-xs text-brand-muted font-body leading-relaxed">
                  Nelagadaranahalli Main Rd,
                  <br />
                  Nagasandra, Bengaluru
                  <br />
                  Karnataka – 560073
                </p>
              </div>

              <div className="contact-card glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <Phone size={20} className="text-brand-red" />
                </div>
                <h3 className="text-sm font-body font-semibold text-brand-white mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-xs text-brand-muted hover:text-brand-red transition-colors font-body block"
                >
                  +91-XXXXX-XXXXX
                </a>
                <p className="text-[10px] text-brand-muted/60 font-body mt-1">
                  Mon–Sat, 9AM–7PM
                </p>
              </div>

              <div className="contact-card glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={20} className="text-brand-red" />
                </div>
                <h3 className="text-sm font-body font-semibold text-brand-white mb-2">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="text-xs text-brand-muted hover:text-brand-red transition-colors font-body block"
                >
                  +91-XXXXX-XXXXX
                </a>
                <p className="text-[10px] text-brand-muted/60 font-body mt-1">
                  Quick replies in 10 mins
                </p>
              </div>

              <div className="contact-card glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <Clock size={20} className="text-brand-red" />
                </div>
                <h3 className="text-sm font-body font-semibold text-brand-white mb-2">
                  Hours
                </h3>
                <p className="text-xs text-brand-muted font-body">
                  Mon–Sat: 9AM – 7PM
                </p>
                <p className="text-xs text-brand-muted font-body">
                  Sun: 10AM – 4PM
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-white mb-2">
                  Send Us an <span className="text-brand-red">Enquiry</span>
                </h2>
                <p className="text-sm text-brand-muted font-body mb-8">
                  Drop us your details — we&apos;ll get back within the hour.
                </p>

                {submitted ? (
                  <div className="glass-card rounded-2xl p-8 text-center">
                    <CheckCircle
                      size={48}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-display font-bold text-brand-white mb-2">
                      Enquiry Sent!
                    </h3>
                    <p className="text-sm text-brand-muted font-body">
                      We&apos;ll get back to you within the hour. Thank you!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-body font-semibold text-brand-chrome uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm font-body text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-brand-chrome uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-brand-grey border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-all"
                        placeholder="+91"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-brand-chrome uppercase tracking-wider mb-2">
                        Vehicle Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {vehicleTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, vehicleType: type })
                            }
                            className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                              formData.vehicleType === type
                                ? "bg-brand-red text-white"
                                : "bg-white text-brand-muted border border-black/10 hover:border-brand-red/30"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-brand-chrome uppercase tracking-wider mb-2">
                        Service Needed
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                serviceNeeded: option,
                              })
                            }
                            className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                              formData.serviceNeeded === option
                                ? "bg-brand-red text-white"
                                : "bg-white text-brand-muted border border-black/10 hover:border-brand-red/30"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-brand-chrome uppercase tracking-wider mb-2">
                        Message (optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm font-body text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-all resize-none"
                        placeholder="Tell us about your vehicle or any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)] active:scale-[0.98]"
                    >
                      <Send size={16} />
                      Submit Enquiry
                    </button>

                    <div className="flex items-center gap-2 justify-center text-xs text-brand-muted/60 font-body">
                      <Lock size={12} />
                      We respect your privacy. No spam, ever.
                    </div>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="space-y-6">
                <div className="glass-card rounded-2xl overflow-hidden h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d77.5!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EdgeGrip Tyres Location"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.google.com/?q=Nagasandra+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    className="flex-1 flex items-center justify-center gap-2 border border-black/15 hover:border-brand-red/40 text-brand-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-black/5"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                </div>

                <p className="text-xs text-brand-muted font-body italic text-center">
                  📍 Near Nagasandra Metro Station. Easy parking available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
