"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getTyreById } from "@/lib/tyreProducts";
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Star,
  Gauge,
  Ruler,
  Weight,
  Target,
  Zap,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const TABS = ["Overview", "Specifications", "Reviews"] as const;
type Tab = (typeof TABS)[number];

export default function TyreDetailsPage({ params }: { params: { id: string } }) {
  const tyre = getTyreById(params.id);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  if (!tyre) return notFound();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : i < rating
            ? "fill-amber-400/50 text-amber-400"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Dark Hero with Product Info */}
      <section className="pt-28 pb-20 bg-[#0e0e0e] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-red/[0.04] rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm font-body font-semibold"
          >
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-red/[0.03] rounded-full blur-[80px] w-3/4 h-3/4 mx-auto my-auto" />
              <img
                src={tyre.image}
                alt={tyre.title}
                className="relative z-10 w-full max-w-md drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-[11px] font-bold uppercase tracking-wider rounded-full">
                  {tyre.brand}
                </span>
                <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 text-[11px] font-bold uppercase tracking-wider rounded-full border border-white/[0.06]">
                  {tyre.category}
                </span>
              </div>

              <p className="text-white/30 text-xs font-body tracking-wider uppercase mb-1">
                {tyre.tagline}
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white mb-2 tracking-tight leading-[1]">
                {tyre.title}
              </h1>
              <p className="text-lg font-body text-white/40 font-semibold mb-4">
                {tyre.specs}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-0.5">{renderStars(tyre.ratings.overall)}</div>
                <span className="text-sm font-body text-white/50">
                  {tyre.ratings.overall} ({tyre.ratings.count} reviews)
                </span>
              </div>

              {/* Features pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tyre.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] text-white/60 text-xs font-body font-semibold rounded-lg"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                  ₹ {tyre.price}
                </div>
                <p className="text-xs text-white/30 font-body mt-1">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Warranty badge */}
              <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 mb-8 w-fit">
                <Shield size={18} className="text-green-500" />
                <span className="text-sm font-body text-white/60 font-semibold">
                  {tyre.warranty}
                </span>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                  tyre.brand + " " + tyre.title + " " + tyre.specs
                )}%20tyre%20(%E2%82%B9${tyre.price})`}
                className="inline-flex items-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(227,30,36,0.3)]"
              >
                <MessageCircle size={18} />
                Reserve via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          {/* Tab Navigation */}
          <div className="flex items-center gap-1 bg-white rounded-xl p-1.5 border border-black/[0.06] shadow-sm w-fit mb-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-sm font-body font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1a1a1a] text-white shadow-sm"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab: Overview */}
          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Description */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl p-8 border border-black/[0.04]">
                  <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">
                    About this Tyre
                  </h3>
                  <p className="text-gray-500 font-body leading-relaxed text-[15px]">
                    {tyre.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl p-8 border border-black/[0.04]">
                  <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-6">
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tyre.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={14} className="text-green-600" />
                        </div>
                        <p className="text-sm font-body text-gray-600 leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Ideal For */}
                <div className="bg-white rounded-2xl p-6 border border-black/[0.04]">
                  <h4 className="text-sm font-display font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">
                    Ideal For
                  </h4>
                  <div className="space-y-2">
                    {tyre.idealFor.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 bg-gray-50 rounded-lg px-4 py-2.5"
                      >
                        <ChevronRight size={14} className="text-brand-red" />
                        <span className="text-sm font-body font-semibold text-gray-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="bg-white rounded-2xl p-6 border border-black/[0.04]">
                  <h4 className="text-sm font-display font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">
                    Quick Specs
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Speed Rating", value: tyre.technicalSpecs.speedRating, icon: Gauge },
                      { label: "Load Index", value: tyre.technicalSpecs.loadIndex, icon: Weight },
                      { label: "Tread Pattern", value: tyre.technicalSpecs.treadPattern, icon: Target },
                      { label: "Construction", value: tyre.technicalSpecs.construction, icon: Zap },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between py-2 border-b border-black/[0.03] last:border-0">
                        <span className="text-xs text-gray-400 font-body flex items-center gap-2">
                          <s.icon size={13} className="text-brand-red" />
                          {s.label}
                        </span>
                        <span className="text-sm font-body font-bold text-[#1a1a1a]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Specifications */}
          {activeTab === "Specifications" && (
            <div className="max-w-3xl">
              <div className="bg-white rounded-2xl border border-black/[0.04] overflow-hidden">
                <div className="px-8 py-5 border-b border-black/[0.04] bg-gray-50">
                  <h3 className="text-xl font-display font-bold text-[#1a1a1a]">
                    Technical Specifications
                  </h3>
                  <p className="text-xs text-gray-400 font-body mt-1">
                    {tyre.brand} {tyre.title} — {tyre.specs}
                  </p>
                </div>
                <div className="divide-y divide-black/[0.03]">
                  {Object.entries(tyre.technicalSpecs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between px-8 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm text-gray-400 font-body capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-sm font-body font-bold text-[#1a1a1a]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Reviews */}
          {activeTab === "Reviews" && (
            <div className="max-w-3xl space-y-6">
              {/* Rating Summary */}
              <div className="bg-white rounded-2xl p-8 border border-black/[0.04] flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-5xl font-display font-black text-[#1a1a1a]">
                    {tyre.ratings.overall}
                  </div>
                  <div className="flex items-center gap-0.5 mt-1 justify-center sm:justify-start">
                    {renderStars(tyre.ratings.overall)}
                  </div>
                  <p className="text-xs text-gray-400 font-body mt-2">
                    Based on {tyre.ratings.count} reviews
                  </p>
                </div>
                <div className="sm:border-l sm:border-black/[0.04] sm:pl-6 flex-1">
                  <p className="text-sm text-gray-500 font-body leading-relaxed">
                    Customers love the {tyre.title} for its balanced performance across wet and dry conditions, quiet ride quality, and excellent value for money.
                  </p>
                </div>
              </div>

              {/* Individual Reviews */}
              {tyre.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-black/[0.04]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-red to-red-400 flex items-center justify-center text-white text-xs font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <span className="text-sm font-body font-bold text-[#1a1a1a]">
                          {review.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 font-body ml-10">
                        {review.vehicle}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-0.5">{renderStars(review.rating)}</div>
                      <span className="text-[11px] text-gray-400 font-body">{review.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-body leading-relaxed mt-4 pl-10">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
