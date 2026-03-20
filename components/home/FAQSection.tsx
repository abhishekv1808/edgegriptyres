"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How often should I replace my tyres?",
    a: "Most tyre manufacturers recommend replacement every 5 years or when the tread depth reaches 1.6mm — whichever comes first. If you drive in heavy rain frequently, consider replacing at 3mm for better wet grip. At EdgeGrip, we offer free tread depth checks anytime you visit.",
  },
  {
    q: "What's the difference between radial and bias tyres?",
    a: "Radial tyres have cord layers running perpendicular to the tread, providing better road contact, fuel efficiency, and longer life. Bias tyres have crisscrossed layers and are mainly used in off-road or vintage vehicles. For everyday driving, radial tyres are the industry standard and what we recommend.",
  },
  {
    q: "How do I know if my wheels need alignment?",
    a: "Common signs include your car pulling to one side, uneven tyre wear (one edge wearing faster), steering wheel vibration, or a crooked steering wheel when driving straight. We recommend a check every 10,000 km or after hitting a major pothole or kerb.",
  },
  {
    q: "Do you provide tyre fitting for all vehicle types?",
    a: "Yes! We service cars, SUVs, sedans, hatchbacks, motorcycles, and scooters. Our technicians are trained across all major vehicle categories and use torque-calibrated equipment for every fitment.",
  },
  {
    q: "Which tyre brand is best for Indian roads?",
    a: "It depends on your vehicle and driving style. CEAT is excellent for everyday Indian road conditions with great durability. Michelin leads in comfort and longevity. Pirelli is ideal for performance cars. Eurogrip specialises in two-wheelers. Visit us for a free consultation tailored to your vehicle.",
  },
  {
    q: "Is wheel balancing necessary every time I change tyres?",
    a: "Absolutely. Unbalanced wheels cause steering vibration, uneven tyre wear, and stress your suspension components. We include free computerised wheel balancing with every tyre purchase at EdgeGrip.",
  },
  {
    q: "Do you offer any warranty on tyres?",
    a: "All tyres we sell are 100% genuine and come with the full manufacturer warranty (typically 5 years). We also provide our own fitment guarantee — if there's any installation-related issue, we'll fix it at no charge.",
  },
  {
    q: "Can I visit without an appointment?",
    a: "Yes, walk-ins are always welcome! We're open Mon–Sat 9AM–7PM and Sunday 10AM–4PM. Located on Nelagadaranahalli Main Road, Nagasandra — near the Metro Station with easy parking.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-black/[0.05] last:border-0 transition-colors ${isOpen ? "bg-gray-50/50" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 px-6 text-left group"
      >
        <span className={`text-[15px] font-body font-semibold transition-colors ${isOpen ? "text-brand-red" : "text-[#1a1a1a]"}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? "bg-brand-red/10 text-brand-red rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-5 text-sm font-body text-gray-500 leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/5 border border-brand-red/10 text-sm font-body font-semibold text-brand-red mb-6">
                <HelpCircle size={14} />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1a1a1a] mb-4 tracking-tight leading-[1.1]">
                Frequently Asked <span className="text-brand-red">Questions</span>
              </h2>
              <p className="text-gray-500 font-body text-base leading-relaxed mb-8">
                Everything you need to know about our tyres, services, and how we work. Can't find what you're looking for?
              </p>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20have%20a%20question"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-brand-red text-white font-body font-bold text-xs px-6 py-3.5 rounded-xl transition-all duration-300 uppercase tracking-wider"
              >
                Ask Us Directly
              </a>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
