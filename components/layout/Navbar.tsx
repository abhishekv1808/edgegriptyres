"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Clock, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tyre-finder", label: "Find Tyres" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ─── Top Info Bar ─── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="h-full w-full bg-gradient-to-r from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A]">
          <div className="h-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px] mx-auto flex items-center justify-between">
            {/* Left side info */}
            <div className="flex items-center gap-5 text-[11px] font-body text-gray-300">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <MapPin size={11} className="text-brand-red" />
                <span className="hidden sm:inline">Nagasandra, Bengaluru</span>
                <span className="sm:hidden">Bengaluru</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <Clock size={11} className="text-brand-red" />
                Mon–Sat: 9 AM – 7 PM
              </span>
              <a
                href="mailto:info@edgegriptyres.com"
                className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail size={11} className="text-brand-red" />
                info@edgegriptyres.com
              </a>
            </div>

            {/* Right side — phone */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-1.5 text-[11px] font-body font-semibold text-white hover:text-brand-red transition-colors"
            >
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-brand-red/20">
                <Phone size={10} className="text-brand-red" />
              </span>
              <span className="hidden sm:inline">+91 XXXXX XXXXX</span>
              <span className="sm:hidden">Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Navbar ─── */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-[0_1px_15px_rgba(0,0,0,0.06)] border-b border-black/[0.04]"
            : "top-9 bg-white"
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between h-[64px]">
            {/* Real Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/images/edgegriptyres-logo.png"
                alt="EdgeGrip Tyres"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-gray-50/80 rounded-full px-1.5 py-1.5 border border-gray-100/80">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-[13px] font-body font-medium px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "text-white bg-brand-red shadow-sm"
                          : "text-gray-600 hover:text-brand-red"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="flex items-center gap-2 ml-5 bg-[#1A1A1A] hover:bg-black text-white text-[13px] font-body font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-[1px] active:translate-y-0"
              >
                <Phone size={13} strokeWidth={2.5} />
                Get a Quote
              </Link>
            </div>

            {/* Tablet + Mobile controls */}
            <div className="flex lg:hidden items-center gap-2.5">
              <Link
                href="/contact"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] sm:w-auto sm:px-5 sm:rounded-full transition-all duration-300 hover:bg-black active:scale-95"
                aria-label="Get a Quote"
              >
                <Phone size={15} strokeWidth={2.5} />
                <span className="hidden sm:inline sm:ml-2 text-[13px] font-body font-semibold">Quote</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-brand-red border border-gray-100 transition-all duration-300 active:scale-95"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={20} strokeWidth={2.5} />
                ) : (
                  <Menu size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile / Tablet Drawer ─── */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-500 ${
          isOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-[380px] h-full bg-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <img
                src="/images/edgegriptyres-logo.png"
                alt="EdgeGrip Tyres"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-brand-red transition-all border border-gray-100"
              aria-label="Close menu"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-body transition-all duration-200 ${
                      isActive
                        ? "bg-brand-red text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-50 font-medium"
                    }`}
                  >
                    <span className="text-[15px]">{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white/60" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Panel Footer */}
          <div className="px-5 py-5 border-t border-gray-100 space-y-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-[#1A1A1A] hover:bg-black text-white font-body font-semibold text-[15px] py-4 rounded-xl transition-all duration-300"
            >
              <Phone size={16} strokeWidth={2.5} />
              Get a Free Quote
            </Link>
            <div className="flex items-center justify-center gap-3 text-[11px] font-body text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin size={10} className="text-brand-red/50" />
                Nagasandra, Bengaluru
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={10} className="text-brand-red/50" />9 AM – 7 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
