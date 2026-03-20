"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame, Eye, Target, MapPin, Wrench, ShieldCheck, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text and images
      gsap.from(".founder-fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Cards staggered
      gsap.from(".founder-card", {
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
      
      // Badges
      gsap.from(".stat-badge", {
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 founder-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-red" />
            <span className="text-sm font-body font-bold text-brand-red uppercase tracking-[0.2em]">
              Founder
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-red" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-brand-white uppercase tracking-tight">
            The Man Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark">
              The Grip
            </span>
          </h2>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Main Image */}
          <div className="relative founder-fade-up group">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-brand-dark">
              {/* PLACEHOLDER: Replace this image with "Founder Hero Shot (standing in front of orange racks)" */}
              <img 
                src="/images/rahul_allan.jpg" 
                alt="Rahul Allan - Founder of EdgeGrip Tyres" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-2xl md:text-3xl font-display font-bold text-brand-white italic mb-2">
                  "Motorcycles for Life. <br/>Instinct over Intellect."
                </p>
                <p className="text-brand-red font-body font-bold uppercase tracking-widest text-sm">
                  — Rahul Allan, Founder
                </p>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="founder-fade-up">
            <h3 className="text-sm font-body font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
              Who Is He?
            </h3>
            <p className="text-brand-white font-body text-xl lg:text-2xl leading-relaxed mb-6">
              Rahul Allan is a motorcycle enthusiast, digital creator, and entrepreneur based in Bangalore, India. 
            </p>
            <div className="space-y-6 text-brand-muted font-body leading-relaxed text-lg">
              <p>
                With over a decade spent living and breathing two wheels, Rahul isn't just someone who sells tyres — he's someone who has ridden on them, raced on them, explored India's back roads on them, and built an entire life around them.
              </p>
              <p>
                Known in the riding community by his Instagram handle <strong>@rahul_allan</strong>, Rahul has spent years documenting his motorcycle journey, building a loyal community of riders, and channelling that passion into a real-world business that serves riders and drivers alike.
              </p>
              <p>
                He is also the founder of <strong>Motorcycle Hustle (@motorcyclehustle)</strong>, a motorcycle lifestyle and media brand that has been bringing the riding community together long before EdgeGrip Tyres was born.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Cards Row */}
        <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          
          {/* Card 1: PASSION */}
          <div className="founder-card glass-card rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/20 transition-colors" />
            <Flame className="w-12 h-12 text-brand-red mb-6" strokeWidth={1.5} />
            <h3 className="text-xs font-body font-bold text-brand-white/50 uppercase tracking-[0.15em] mb-3">
              Passion
            </h3>
            <h4 className="text-xl font-display font-bold text-brand-white mb-4">
              Fuelled by Passion, Not Just Petrol
            </h4>
            <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">
              For Rahul, motorcycles are never just machines. From carving corners on the track to cross-country rides, he understands what's at stake every time rubber meets road.
            </p>
            <p className="text-sm italic text-brand-white/80 border-l-2 border-brand-red pl-4 py-1">
              "It's okay to make your motorcycle more important than a lot of Humans."
            </p>
          </div>

          {/* Card 2: VISION */}
          <div className="founder-card glass-card rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/20 transition-colors" />
            <Eye className="w-12 h-12 text-brand-red mb-6" strokeWidth={1.5} />
            <h3 className="text-xs font-body font-bold text-brand-white/50 uppercase tracking-[0.15em] mb-3">
              Vision
            </h3>
            <h4 className="text-xl font-display font-bold text-brand-white mb-4">
              Building Bengaluru's Best
            </h4>
            <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">
              A clear vision to create a one-stop destination for tyres and wheel care. Not just a place that sells rubber, but a space treating every vehicle with absolute respect.
            </p>
            <p className="text-sm font-body text-brand-chrome pt-2 mt-4 border-t border-white/10">
              Long-term goal: A pan-India brand for tyre excellence.
            </p>
          </div>

          {/* Card 3: GOAL */}
          <div className="founder-card glass-card rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/20 transition-colors" />
            <Target className="w-12 h-12 text-brand-red mb-6" strokeWidth={1.5} />
            <h3 className="text-xs font-body font-bold text-brand-white/50 uppercase tracking-[0.15em] mb-3">
              Goal
            </h3>
            <h4 className="text-xl font-display font-bold text-brand-white mb-4">
              More Than a Store — A Community
            </h4>
            <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">
              Bringing the 'Motorcycle Hustle' community-first energy to EdgeGrip. A place riders and drivers can trust, run by someone who knows the feeling of a bad tyre on a sharp corner.
            </p>
            <p className="text-sm font-body text-brand-red font-semibold uppercase tracking-wider">
              Service is a practice.
            </p>
          </div>

        </div>

        {/* Large Pull Quote */}
        <div className="founder-fade-up my-32 relative">
          <div className="absolute left-0 top-0 text-[180px] font-serif leading-none text-white/5 -translate-y-12 -translate-x-8 select-none">"</div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-center text-brand-white uppercase leading-tight relative z-10">
            "We're not here to take part,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark">we're here to take over."</span>
          </h2>
          <div className="absolute right-0 bottom-0 text-[180px] font-serif leading-none text-white/5 translate-y-24 translate-x-8 select-none">"</div>
        </div>

        {/* Stats Strip */}
        <div className="stats-container flex flex-wrap justify-center gap-4 lg:gap-6 mt-16 border-t border-white/10 pt-16">
          <div className="stat-badge flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <span className="text-xl">🏍️</span>
            <span className="font-body font-semibold text-brand-white text-sm">10+ Years Riding</span>
          </div>
          <div className="stat-badge flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <MapPin size={18} className="text-brand-red" />
            <span className="font-body font-semibold text-brand-white text-sm">Bengaluru — Proudly Local</span>
          </div>
          <div className="stat-badge flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <Wrench size={18} className="text-brand-chrome" />
            <span className="font-body font-semibold text-brand-white text-sm">Alignment · Balancing · Fitment</span>
          </div>
          <div className="stat-badge flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <ShieldCheck size={18} className="text-brand-red" />
            <span className="font-body font-semibold text-brand-white text-sm">Premium Brand Partners</span>
          </div>
          <div className="stat-badge flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <span className="text-xl">🛒</span>
            <span className="font-body font-semibold text-brand-white text-sm">Cars & Bikes One-Stop Shop</span>
          </div>
          <a href="tel:9591696633" className="stat-badge flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark transition-colors rounded-full px-6 py-2.5 group hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]">
            <Phone size={18} className="text-white" />
            <span className="font-body font-bold text-white tracking-widest text-sm">9591696633</span>
          </a>
        </div>

      </div>
    </section>
  );
}
