"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const videoTestimonials = [
  {
    src: "/videos/customer1.mp4",
    customerName: "Rajesh M.",
    location: "Malleshwaram",
    vehicle: "Toyota Fortuner",
    service: "Michelin LTX Trail Fitting",
    quote:
      "The team was honest about my options and didn't oversell. The ride quality is night and day.",
    rating: 5,
  },
  {
    src: "/videos/customer2.mp4",
    customerName: "Karthik S.",
    location: "Yeshwanthpur",
    vehicle: "Bajaj Pulsar",
    service: "Eurogrip Pro Torque Fitting",
    quote:
      "Fixed my bike's tyre in under 20 minutes. Eurogrip fits my Pulsar perfectly. Best tyre shop near Nagasandra.",
    rating: 5,
  },
  {
    src: "/videos/customer3.mp4",
    customerName: "Priya N.",
    location: "Peenya",
    vehicle: "Hyundai Creta",
    service: "Wheel Alignment + Balancing",
    quote:
      "Very professional. Did wheel alignment and balancing together. Car feels brand new!",
    rating: 5,
  },
  {
    src: "/videos/customer4.mp4",
    customerName: "Arun K.",
    location: "Nagasandra",
    vehicle: "Maruti Swift",
    service: "CEAT Tyre Replacement",
    quote:
      "Great pricing, transparent billing, and the free balancing was a pleasant surprise. Highly recommended!",
    rating: 5,
  },
];

const landscapeTestimonials = [
  {
    src: "/videos/interview1.mp4",
    customerName: "Sanjay D.",
    location: "Yelahanka",
    vehicle: "Mahindra XUV700",
    service: "Complete Tyre Makeover",
    quote:
      "The EdgeGrip team completely transformed my SUV's handling. The precision balancing and alignment was top-notch.",
    rating: 5,
  },
  {
    src: "/videos/interview2.mp4",
    customerName: "Ramesh B.",
    location: "Kengeri",
    vehicle: "Royal Enfield Classic 350",
    service: "Touring Tyre Upgrade",
    quote:
      "I travel cross-country, and finding genuine touring tyres was hard. These guys had exactly what I needed with expert fitment.",
    rating: 5,
  },
];

function VideoTestimonialCard({
  testimonial,
}: {
  testimonial: (typeof videoTestimonials)[0];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="vtestimonial-card glass-card rounded-2xl overflow-hidden group hover:border-brand-red/20 transition-all duration-500 flex-shrink-0 w-[340px] sm:w-[380px] lg:w-auto">
      {/* Video */}
      <div className="relative aspect-[9/12] sm:aspect-[9/14] bg-brand-dark-2 overflow-hidden">
        <video
          ref={videoRef}
          src={testimonial.src}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Play overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="w-14 h-14 rounded-full bg-brand-red/90 hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-red/30">
              <Play size={22} className="text-white ml-0.5" fill="white" />
            </div>
          )}
        </div>

        {/* Controls */}
        {isPlaying && (
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red/80 transition-all"
            >
              <Pause size={14} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red/80 transition-all"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>
        )}

        {/* Service Tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-red/90 text-white backdrop-blur-sm">
            {testimonial.service}
          </span>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          {/* Stars */}
          <div className="flex items-center gap-0.5 mb-2">
            {[...Array(testimonial.rating)].map((_, j) => (
              <Star
                key={j}
                size={12}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm text-white/90 font-body leading-relaxed mb-3 line-clamp-3">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Customer Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-red/20 flex items-center justify-center text-xs font-display font-bold text-brand-red border border-brand-red/30">
              {testimonial.customerName[0]}
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-white">
                {testimonial.customerName}
              </p>
              <p className="text-[11px] text-white/50 font-body">
                {testimonial.vehicle} · {testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LargePortraitVideoCard({
  testimonial,
}: {
  testimonial: (typeof landscapeTestimonials)[0];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="vtestimonial-card glass-card rounded-2xl overflow-hidden group hover:border-brand-red/20 transition-all duration-500 w-full max-w-[420px] mx-auto">
      {/* Video */}
      <div className="relative aspect-[9/16] bg-brand-dark-2 overflow-hidden">
        <video
          ref={videoRef}
          src={testimonial.src}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Play overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-brand-red/90 hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-red/30">
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>
          )}
        </div>

        {/* Controls */}
        {isPlaying && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red/80 transition-all"
            >
              <Pause size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red/80 transition-all"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        )}

        {/* Service Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[11px] font-body font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-brand-red/90 text-white backdrop-blur-sm">
            {testimonial.service}
          </span>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-0.5 mb-1">
              {[...Array(testimonial.rating)].map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-base text-white/90 font-body leading-relaxed line-clamp-3">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 mt-2 shrink-0">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-sm font-display font-bold text-brand-red border border-brand-red/30">
                {testimonial.customerName[0]}
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-white">
                  {testimonial.customerName}
                </p>
                <p className="text-xs text-white/50 font-body">
                  {testimonial.vehicle} · {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = document.querySelector(".vtestimonial-heading");
      if (heading) {
        gsap.set(heading, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(heading, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          },
        });
      }

      const cards = gsap.utils.toArray<HTMLElement>(".vtestimonial-card");
      gsap.set(cards, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: ".vtestimonial-scroll",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-red/3 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 vtestimonial-heading">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-brand-red" />
              <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
                Customer Stories
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white mb-3">
              Real Customers. <span className="text-brand-red">Real Fits.</span>
            </h2>
            <p className="text-brand-muted font-body max-w-lg">
              Watch our customers drive away happy — from precision tyre fitting
              to complete wheel makeovers.
            </p>
          </div>

          {/* Scroll Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:text-brand-red hover:border-brand-red/40 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:text-brand-red hover:border-brand-red/40 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Portrait Cards */}
        <div
          ref={scrollContainerRef}
          className="vtestimonial-scroll flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide mb-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videoTestimonials.map((t, i) => (
            <VideoTestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Large Portrait Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 max-w-5xl mx-auto">
          {landscapeTestimonials.map((t, i) => (
            <LargePortraitVideoCard
              key={`portrait-large-${i}`}
              testimonial={t}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
