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

        {/* Contact info and Form Section */}
        <section className="py-24 bg-[#0e0e0e] relative">
          <div className="section-container relative z-10">
            {/* 4 Info Cards Top */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-red/20 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors flex items-center justify-center mx-auto mb-6">
                  <MapPin size={22} className="text-brand-red" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-3">
                  Address
                </h3>
                <p className="text-sm text-white/50 font-body leading-relaxed">
                  Nelagadaranahalli Main Rd,
                  <br />
                  Nagasandra, Bengaluru
                  <br />
                  Karnataka – 560073
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-red/20 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors flex items-center justify-center mx-auto mb-6">
                  <Phone size={22} className="text-brand-red" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-white/50 hover:text-brand-red transition-colors font-body block mb-2"
                >
                  +91-XXXXX-XXXXX
                </a>
                <p className="text-xs text-white/30 font-body">
                  Mon–Sat, 9AM–7PM
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-red/20 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={22} className="text-brand-red" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-3">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="text-sm text-white/50 hover:text-brand-red transition-colors font-body block mb-2"
                >
                  +91-XXXXX-XXXXX
                </a>
                <p className="text-xs text-white/30 font-body">
                  Quick replies in 10 mins
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-red/20 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors flex items-center justify-center mx-auto mb-6">
                  <Clock size={22} className="text-brand-red" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-3">
                  Hours
                </h3>
                <p className="text-sm text-white/50 font-body mb-1">
                  Mon–Sat: 9AM – 7PM
                </p>
                <p className="text-sm text-white/50 font-body">
                  Sun: 10AM – 4PM
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column: Contact Form */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-4 tracking-tight">
                  Send Us an <span className="text-brand-red">Enquiry</span>
                </h2>
                <p className="text-base text-white/40 font-body mb-10">
                  Drop us your details — we&apos;ll get back within the hour.
                </p>

                {submitted ? (
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-12 text-center">
                    <CheckCircle
                      size={56}
                      className="text-green-500 mx-auto mb-6"
                    />
                    <h3 className="text-2xl font-display font-bold text-white mb-3">
                      Enquiry Sent!
                    </h3>
                    <p className="text-base text-white/50 font-body">
                      We&apos;ll get back to you within the hour. Thank you!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-body font-bold text-white/50 uppercase tracking-[0.1em] mb-3">
                        Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-sm font-body text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 focus:bg-white/[0.05] transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-bold text-white/50 uppercase tracking-[0.1em] mb-3">
                        Phone Number <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-sm font-body text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 focus:bg-white/[0.05] transition-all"
                        placeholder="+91"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-bold text-white/50 uppercase tracking-[0.1em] mb-3">
                        Vehicle Type
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {vehicleTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, vehicleType: type })
                            }
                            className={`px-5 py-2.5 rounded-xl text-sm font-body transition-all duration-300 ${
                              formData.vehicleType === type
                                ? "bg-brand-red text-white shadow-[0_0_20px_rgba(227,30,36,0.3)]"
                                : "bg-white/[0.03] text-white/60 border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-body font-bold text-white/50 uppercase tracking-[0.1em] mb-3">
                        Service Needed
                      </label>
                      <div className="flex flex-wrap gap-3">
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
                            className={`px-5 py-2.5 rounded-xl text-sm font-body transition-all duration-300 ${
                              formData.serviceNeeded === option
                                ? "bg-brand-red text-white shadow-[0_0_20px_rgba(227,30,36,0.3)]"
                                : "bg-white/[0.03] text-white/60 border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06]"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-body font-bold text-white/50 uppercase tracking-[0.1em] mb-3">
                        Message (optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-sm font-body text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 focus:bg-white/[0.05] transition-all resize-none"
                        placeholder="Tell us about your vehicle or any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold text-base px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)] mt-4"
                    >
                      <Send size={18} />
                      Submit Enquiry
                    </button>

                    <div className="flex items-center gap-2 text-xs text-white/30 font-body mt-4">
                      <Lock size={12} className="text-white/20" />
                      We respect your privacy. No spam, ever.
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Map & Actions */}
              <div className="flex flex-col h-full">
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] h-[400px] lg:h-[500px] group mb-6 flex-shrink-0">
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
                  {/* Floating badge on map */}
                  <div className="absolute top-5 left-5 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-body font-bold text-white tracking-wide">
                      Open Now
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  <a
                    href="https://maps.google.com/?q=Nagasandra+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-brand-red hover:bg-[#c9181e] text-white font-body font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(227,30,36,0.3)] hover:shadow-[0_15px_40px_rgba(227,30,36,0.4)]"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </a>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    className="flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-white font-body font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>
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
