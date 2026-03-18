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
} from "lucide-react";

const quickLinks = [
  { href: "/tyre-finder", label: "Find by Vehicle" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const brands = ["Michelin", "CEAT", "Eurogrip", "Maxxis", "Pirelli"];

export default function Footer() {
  return (
    <footer className="bg-brand-dark relative overflow-hidden">
      {/* Top subtle gradient divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />

      {/* Background ambient glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <div className="bg-white rounded-2xl px-5 py-3.5 inline-flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_4px_25px_rgba(227,30,36,0.25)] border border-white/10">
                <img
                  src="/images/edgegriptyres-logo.png"
                  alt="EdgeGrip Tyres"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed mb-8 pr-4">
              Bengaluru&apos;s premium multi-brand tyre destination. Expert
              fitment for cars &amp; motorcycles with zero compromise on
              quality.
            </p>

            {/* Premium Newsletter Input */}
            <div className="mb-8">
              <h4 className="text-xs font-body font-semibold text-brand-white uppercase tracking-wider mb-3">
                Join Our Newsletter
              </h4>
              <div className="relative group/input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-brand-white outline-none focus:border-brand-red/50 transition-colors duration-300 placeholder:text-brand-muted"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center text-white hover:bg-brand-red-dark hover:shadow-[0_0_15px_rgba(227,30,36,0.4)] transition-all duration-300 active:scale-95"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map((Social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:bg-brand-red hover:text-white hover:border-brand-red hover:shadow-[0_0_20px_rgba(227,30,36,0.3)] transition-all duration-300 group"
                  aria-label={Social.label}
                >
                  <Social.icon
                    size={18}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-body font-semibold text-brand-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red/50"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-red transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-body font-semibold text-brand-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red/50"></span>
              Our Brands
            </h4>
            <ul className="space-y-4">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    href="/brands"
                    className="text-sm text-brand-muted hover:text-brand-red transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-body font-semibold text-brand-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red/50"></span>
              Visit Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 transition-colors duration-300">
                  <MapPin size={18} className="text-brand-red" />
                </div>
                <span className="text-sm text-brand-muted mt-1 group-hover:text-brand-white transition-colors duration-300">
                  Nelagadaranahalli Main Rd,
                  <br /> Nagasandra, Bengaluru,
                  <br /> Karnataka – 560073
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 transition-colors duration-300">
                  <Phone size={18} className="text-brand-red" />
                </div>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-brand-muted hover:text-brand-white transition-colors"
                >
                  +91-XXXXX-XXXXX
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-red/30 transition-colors duration-300">
                  <Mail size={18} className="text-brand-red" />
                </div>
                <a
                  href="mailto:hello@edgegriptyres.in"
                  className="text-sm text-brand-muted hover:text-brand-white transition-colors"
                >
                  hello@edgegriptyres.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Bottom Bar */}
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-muted">
          © {new Date().getFullYear()} EdgeGrip Tyres. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-xs text-brand-muted hover:text-brand-red transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-xs text-brand-muted hover:text-brand-red transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
