import { Crosshair, Zap, Shield, Eye, ArrowUpDown, Weight, Gauge, Lock, Scan, Target, CircleDot, Maximize2 } from "lucide-react";

const EQUIPMENT = [
  {
    name: "Hunter Hawkeye Lite",
    tagline: "Aligned by Hawkeye Vision. Not Guesswork.",
    description:
      "A digital imaging alignment system trusted by workshops worldwide. It reads your wheels to 0.01° precision using HD cameras and reflective targets. No wires. No guesswork. Just perfect alignment, every time.",
    image: "/images/Hunter Hawkeye Lite Wheel Aligner.png",
    badge: "Hunter Hawkeye Lite",
    highlights: [
      { icon: Eye, label: "HD Digital Imaging", desc: "Pinpoint accuracy with high-definition camera tracking" },
      { icon: Zap, label: "Setup in Seconds", desc: "Patented QuickGrip® adaptors — no rim contact, zero damage" },
      { icon: Crosshair, label: "Precision to 0.01°", desc: "Camber, caster & toe measured with sub-degree accuracy" },
      { icon: Shield, label: "World-Trusted by Hunter", desc: "Same technology used in championship motorsport workshops" },
    ],
  },
  {
    name: "Hunter SmartWeight Pro",
    tagline: "Balanced to the Gram. Every Single Time.",
    description:
      "Our computerised wheel balancer uses Hunter's patented SmartWeight technology with laser-guided weight placement. It differentiates between hop and wobble for a balance quality you can feel on the road — not just on paper.",
    image: "/images/computerised-wheel-balancing.png",
    badge: "Hunter SmartWeight Pro",
    highlights: [
      { icon: Target, label: "Laser-Guided Placement", desc: "Exact position laser identifies the precise weight spot" },
      { icon: CircleDot, label: "1g Resolution", desc: "Imbalance detected to ±1 gram for flawless smoothness" },
      { icon: Scan, label: "No-Touch Measurement", desc: "Laser vision reads wheel dimensions — zero contact" },
      { icon: Maximize2, label: "SmartWeight Tech", desc: "Differentiates hop vs wobble for superior accuracy" },
    ],
  },
  {
    name: "Hanmecson NBS40A-45",
    tagline: "Elevated Precision. Ground-Level Trust.",
    description:
      "Our in-ground scissor lift is built to handle up to 4 tonnes with synchronized dual-platform hydraulics. Flush-mounted for seamless access, it gives our technicians full 360° workspace with zero obstruction.",
    image: "/images/hanmecson-scissor-lift.png",
    badge: "Hanmecson NBS40A-45",
    highlights: [
      { icon: Weight, label: "4-Tonne Capacity", desc: "Handles everything from hatchbacks to full-size SUVs" },
      { icon: ArrowUpDown, label: "1920mm Lift Height", desc: "Full undercarriage access for thorough inspection" },
      { icon: Lock, label: "Failsafe Hydraulics", desc: "Master-slave sync with manual lowering in power cuts" },
      { icon: Gauge, label: "Flush In-Ground Design", desc: "Open front & rear — maximises workspace for technicians" },
    ],
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-body font-bold text-brand-red uppercase tracking-[0.15em] mb-6">
            <Crosshair size={13} />
            Our Equipment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white tracking-tight leading-[1.05]">
            Built on <span className="text-brand-red">World-Class</span> Hardware
          </h2>
        </div>

        {/* Equipment Cards */}
        <div className="space-y-28 lg:space-y-36">
          {/* Equipment 1 — Hunter Hawkeye Lite (side-by-side, image left) */}
          {(() => {
            const item = EQUIPMENT[0];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-full h-auto max-h-[550px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] scale-105 lg:scale-115" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-body font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg whitespace-nowrap">{item.badge}</div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white leading-[1.1] tracking-tight mb-4">{item.tagline}</h3>
                  <p className="text-white/35 font-body text-[15px] leading-relaxed mb-10 max-w-lg">{item.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.highlights.map((h) => (
                      <div key={h.label} className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] rounded-xl px-5 py-4 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h.icon size={16} className="text-brand-red" />
                          <span className="text-sm font-body font-bold text-white/80">{h.label}</span>
                        </div>
                        <p className="text-xs font-body text-white/30 leading-relaxed pl-7">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Equipment 2 — Hunter SmartWeight Pro (side-by-side, image right) */}
          {(() => {
            const item = EQUIPMENT[1];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="lg:order-2 relative flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-full h-auto max-h-[550px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] scale-105 lg:scale-115" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-body font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg whitespace-nowrap">{item.badge}</div>
                </div>
                <div className="lg:order-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white leading-[1.1] tracking-tight mb-4">{item.tagline}</h3>
                  <p className="text-white/35 font-body text-[15px] leading-relaxed mb-10 max-w-lg">{item.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.highlights.map((h) => (
                      <div key={h.label} className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] rounded-xl px-5 py-4 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h.icon size={16} className="text-brand-red" />
                          <span className="text-sm font-body font-bold text-white/80">{h.label}</span>
                        </div>
                        <p className="text-xs font-body text-white/30 leading-relaxed pl-7">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Equipment 3 — Hanmecson Scissor Lift (stacked: content top, image bottom) */}
          {(() => {
            const item = EQUIPMENT[2];
            return (
              <div className="flex flex-col items-center">
                <div className="text-center max-w-2xl mb-12">
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-display font-black text-white leading-[1.1] tracking-tight mb-5">{item.tagline}</h3>
                  <p className="text-white/35 font-body text-[15px] leading-relaxed mb-10 mx-auto">{item.description}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {item.highlights.map((h) => (
                      <div key={h.label} className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] rounded-xl px-4 py-4 transition-all duration-300 text-center">
                        <h.icon size={18} className="text-brand-red mx-auto mb-2" />
                        <span className="block text-sm font-body font-bold text-white/80 mb-1">{h.label}</span>
                        <p className="text-[11px] font-body text-white/30 leading-relaxed">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative w-full flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-full max-w-4xl h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-body font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg whitespace-nowrap">{item.badge}</div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
