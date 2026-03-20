import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { href: "/tyre-finder", label: "Find by Vehicle" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const brands = ["Michelin", "CEAT", "Eurogrip", "Maxxis", "Pirelli"];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Road-like illustration divider */}
      <div className="w-full h-12 bg-[#151515] border-y border-white/[0.08] relative overflow-hidden flex items-center justify-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)]">
        {/* Dashed median line (white road stripe) */}
        <div
          className="w-full h-1 opacity-60"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 50%, transparent 50%)",
            backgroundSize: "80px 100%",
          }}
        />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="section-container relative z-10 pt-20 pb-12">
        {/* Top row: Brand + Newsletter Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/[0.06]">
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-4 group">
              <div className="bg-white rounded-2xl px-5 py-3 inline-flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-white/10">
                <img
                  src="/images/edgegriptyres-logo.png"
                  alt="EdgeGrip Tyres"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-white/35 leading-relaxed font-body">
              Bengaluru&apos;s premium multi-brand tyre destination. Expert
              fitment for cars &amp; motorcycles with zero compromise on
              quality.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <h4 className="text-[11px] font-body font-bold text-white/50 uppercase tracking-[0.15em] mb-3">
              Stay Updated
            </h4>
            <div className="relative group/input flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/[0.04] border border-white/[0.08] focus:border-brand-red/40 rounded-l-xl py-3.5 pl-5 pr-4 text-sm text-white font-body outline-none transition-all duration-300 placeholder:text-white/25"
              />
              <button
                type="button"
                className="bg-brand-red hover:bg-brand-red-dark text-white px-6 rounded-r-xl font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(227,30,36,0.3)] active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-[11px] font-body font-bold text-white/50 uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white font-body transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1.5px] bg-brand-red transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-[11px] font-body font-bold text-white/50 uppercase tracking-[0.15em] mb-5">
              Our Brands
            </h4>
            <ul className="space-y-3">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    href="/brands"
                    className="text-sm text-white/40 hover:text-white font-body transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1.5px] bg-brand-red transition-all duration-300" />
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <h4 className="text-[11px] font-body font-bold text-white/50 uppercase tracking-[0.15em] mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 group-hover:bg-brand-red/5 transition-all duration-300 mt-0.5">
                  <MapPin size={15} className="text-brand-red" />
                </div>
                <p className="text-sm text-white/40 font-body leading-relaxed group-hover:text-white/60 transition-colors">
                  Nelagadaranahalli Main Rd,
                  <br /> Nagasandra, Bengaluru,
                  <br /> Karnataka – 560073
                </p>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 group-hover:bg-brand-red/5 transition-all duration-300">
                  <Phone size={15} className="text-brand-red" />
                </div>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-white/40 hover:text-white font-body transition-colors"
                >
                  +91-XXXXX-XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 group-hover:bg-brand-red/5 transition-all duration-300">
                  <Mail size={15} className="text-brand-red" />
                </div>
                <a
                  href="mailto:hello@edgegriptyres.in"
                  className="text-sm text-white/40 hover:text-white font-body transition-colors"
                >
                  hello@edgegriptyres.in
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 group-hover:bg-brand-red/5 transition-all duration-300">
                  <Clock size={15} className="text-brand-red" />
                </div>
                <div className="text-sm text-white/40 font-body">
                  <p>Mon–Sat: 9 AM – 7 PM</p>
                  <p>Sunday: 10 AM – 4 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social + CTA Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="text-[11px] font-body font-bold text-white/50 uppercase tracking-[0.15em] mb-5">
              Follow Us
            </h4>
            <div className="flex items-center gap-2 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:bg-brand-red hover:text-white hover:border-brand-red hover:shadow-[0_0_20px_rgba(227,30,36,0.25)] transition-all duration-300 group"
                  aria-label={s.label}
                >
                  <s.icon
                    size={17}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Nagasandra+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold text-xs px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(227,30,36,0.3)] uppercase tracking-wider"
            >
              Get Directions <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05]">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-body">
            © {new Date().getFullYear()} EdgeGrip Tyres. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors duration-300 font-body"
            >
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <a
              href="#"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors duration-300 font-body"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Full-Width Logo */}
      <div className="border-t border-white/[0.03] py-8 pb-12 md:py-10">
        <div className="section-container flex items-center justify-center">
          <img
            src="/images/edgegriptyres-logo.png"
            alt="EdgeGrip Tyres"
            className="w-full max-w-4xl h-auto object-contain opacity-[0.55]"
          />
        </div>
      </div>
    </footer>
  );
}
