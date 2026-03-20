"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandElevation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".brand-heading-line", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Car image animation
      gsap.fromTo(
        ".brand-car",
        { x: 100, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#0a0a0a] border-y border-white/[0.05] overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] flex items-center"
    >
      {/* Content Container */}
      <div className="section-container relative z-20 w-full py-20 lg:py-32">
        <div className="max-w-md md:max-w-xl lg:max-w-xl xl:max-w-2xl relative z-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[7.5rem] font-display font-black text-white leading-[0.9] tracking-tight overflow-visible pr-8">
            <div className="brand-heading-line block pr-4">COMMAND</div>
            <div className="brand-heading-line block text-brand-red italic font-light tracking-normal pr-4">
              EVERY
            </div>
            <div className="brand-heading-line block pr-4">JOURNEY<span className="text-brand-red">.</span></div>
          </h2>
        </div>
      </div>

      {/* Right Image Container - Absolute positioning perfectly on the right edge */}
      <div className="absolute right-0 bottom-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[65%] xl:max-w-[75%] 2xl:max-w-[80%] flex justify-end z-10 pointer-events-none">
        <img 
          src="/images/fortuner_car.png" 
          alt="EdgeGrip Tyres Fortuner" 
          className="brand-car w-full h-auto object-contain object-right drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] opacity-30 lg:opacity-100"
        />
      </div>
    </section>
  );
}
