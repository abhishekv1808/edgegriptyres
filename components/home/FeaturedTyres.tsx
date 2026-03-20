import Link from "next/link";
import { ArrowRight, Star, Shield } from "lucide-react";
import { TYRE_PRODUCTS } from "@/lib/tyreProducts";

const TYRES = TYRE_PRODUCTS;

export default function FeaturedTyres() {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-body font-bold text-brand-red uppercase tracking-[0.15em] mb-5">
            <Shield size={13} />
            Premium Collection
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Available Premium <span className="text-brand-red">Tyres</span>
          </h2>
          <p className="text-white/35 font-body text-lg max-w-xl">
            Choose from a wide range of tyres by top brands. Ride safe and smooth with the best mileage, grip and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TYRES.map((tyre) => (
            <Link
              key={tyre.id}
              href={`/tyres/${tyre.id}`}
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-brand-red/30 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(227,30,36,0.15)] flex flex-col"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Brand badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-brand-red text-white text-[9px] font-body font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
                  {tyre.brand}
                </span>
              </div>

              {/* Image area */}
              <div className="relative px-8 pt-8 pb-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent" />
                <img
                  src={tyre.image}
                  alt={tyre.title}
                  className="relative z-10 w-40 h-40 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col flex-1">
                <span className="text-[10px] font-body text-white/25 tracking-wider uppercase mb-1">
                  {tyre.tagline}
                </span>
                <h3 className="text-lg font-display font-black text-white leading-tight tracking-tight mb-1">
                  {tyre.title}
                </h3>
                <p className="text-sm font-body text-white/40 font-semibold mb-3">
                  {tyre.specs}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tyre.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-body font-bold text-white/50 bg-white/[0.05] border border-white/[0.06] px-2.5 py-1 rounded-md uppercase tracking-wider"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(tyre.ratings.overall)
                            ? "fill-amber-400 text-amber-400"
                            : "text-white/15"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/30 font-body">
                    ({tyre.ratings.count})
                  </span>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto pt-5 border-t border-white/[0.06] flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-display font-black text-white tracking-tight">
                      ₹ {tyre.price}
                    </div>
                    <span className="text-[10px] text-white/20 font-body">
                      Incl. all taxes
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-body font-bold text-brand-red uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    View <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
