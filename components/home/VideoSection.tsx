"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    src: "/videos/video1.mp4",
    title: "Precision Tyre Fitting",
    description:
      "Watch our certified technicians fit your tyres with OEM-grade precision tools — every bolt torqued to spec.",
    tag: "Installation",
  },
  {
    src: "/videos/video2.mp4",
    title: "Computerised Wheel Balancing",
    description:
      "Our high-precision balancer calculates weight placement to the gram for a vibration-free ride.",
    tag: "Balancing",
  },
  {
    src: "/videos/video3.mp4",
    title: "Our Workshop in Action",
    description:
      "A glimpse inside EdgeGrip Tyres — where 5 world-class brands meet expert hands and modern equipment.",
    tag: "Behind the Scenes",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
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
    <div
      className={`video-card glass-card rounded-2xl overflow-hidden group hover:border-brand-red/20 transition-all duration-500`}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-brand-dark-2 overflow-hidden">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
          onEnded={() => setIsPlaying(false)}
        />

        {/* Play/Pause Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-brand-red/90 hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-red/30">
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>
          )}
        </div>

        {/* Controls (visible when playing) */}
        {isPlaying && (
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
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

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-red/90 text-white backdrop-blur-sm">
            {video.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-display font-bold text-brand-white mb-2">
          {video.title}
        </h3>
        <p className="text-sm text-brand-muted font-body leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = document.querySelector(".video-heading");
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

      const cards = gsap.utils.toArray<HTMLElement>(".video-card");
      gsap.set(cards, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: ".video-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/3 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 video-heading">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              See Us in Action
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white mb-4">
            Watch. Trust. <span className="text-brand-red">Drive.</span>
          </h2>
          <p className="text-brand-muted font-body max-w-lg mx-auto">
            See how we work — from precision tyre fitting to computerised
            balancing. Real work, real results, real care.
          </p>
        </div>

        {/* Video Grid */}
        <div className="video-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
