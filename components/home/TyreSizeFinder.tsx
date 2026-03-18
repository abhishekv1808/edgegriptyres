"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ArrowRight, MessageCircle, Info } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Common tyre width options (mm)
const tyreWidths = [
  "125",
  "135",
  "145",
  "155",
  "165",
  "175",
  "185",
  "195",
  "205",
  "215",
  "225",
  "235",
  "245",
  "255",
  "265",
  "275",
  "285",
  "295",
  "305",
  "315",
];

// Common aspect ratios
const aspectRatios = [
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
  "60",
  "65",
  "70",
  "75",
  "80",
  "85",
];

// Common rim diameters (inches)
const rimDiameters = [
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
];

// Sample tyre recommendations based on size
const tyreDatabase: Record<
  string,
  {
    brand: string;
    model: string;
    price: string;
    bestFor: string;
    tag: string;
    color: string;
  }[]
> = {
  default: [
    {
      brand: "Michelin",
      model: "Energy XM2+",
      price: "₹4,500 – ₹6,000",
      bestFor: "Sedans & Hatchbacks",
      tag: "Long Life",
      color: "#FFD700",
    },
    {
      brand: "CEAT",
      model: "SecuraDrive",
      price: "₹3,200 – ₹4,800",
      bestFor: "Everyday Commute",
      tag: "Value Pick",
      color: "#FF6B35",
    },
    {
      brand: "Maxxis",
      model: "MAP5",
      price: "₹3,000 – ₹4,500",
      bestFor: "Budget Performance",
      tag: "Best Value",
      color: "#4A90D9",
    },
  ],
  suv: [
    {
      brand: "Michelin",
      model: "LTX Trail",
      price: "₹8,500 – ₹12,000",
      bestFor: "SUVs & Crossovers",
      tag: "Premium",
      color: "#FFD700",
    },
    {
      brand: "CEAT",
      model: "CrossDrive AT",
      price: "₹6,000 – ₹8,500",
      bestFor: "Mixed Terrain",
      tag: "All-Terrain",
      color: "#FF6B35",
    },
    {
      brand: "Pirelli",
      model: "Scorpion Verde",
      price: "₹10,000 – ₹15,000",
      bestFor: "Premium SUVs",
      tag: "Track DNA",
      color: "#E31E24",
    },
  ],
  bike: [
    {
      brand: "Eurogrip",
      model: "Pro Torque",
      price: "₹1,800 – ₹2,500",
      bestFor: "Commuter Bikes",
      tag: "Grip",
      color: "#00C49A",
    },
    {
      brand: "Maxxis",
      model: "M6029",
      price: "₹2,000 – ₹3,000",
      bestFor: "Performance Bikes",
      tag: "Performance",
      color: "#4A90D9",
    },
    {
      brand: "Eurogrip",
      model: "Durat Trail Beamer",
      price: "₹2,500 – ₹3,500",
      bestFor: "Adventure Touring",
      tag: "Adventure",
      color: "#00C49A",
    },
  ],
};

export default function TyreSizeFinder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState("");
  const [ratio, setRatio] = useState("");
  const [rim, setRim] = useState("");
  const [results, setResults] = useState<
    (typeof tyreDatabase)["default"] | null
  >(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = document.querySelector(".finder-heading");
      const content = document.querySelector(".finder-content");

      if (heading) {
        gsap.set(heading, { opacity: 0, y: 30 });
      }
      if (content) {
        gsap.set(content, { opacity: 0, y: 40 });
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (heading) {
            gsap.to(heading, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          }
          if (content) {
            gsap.to(content, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.2,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSearch = () => {
    if (!width || !ratio || !rim) return;

    const rimNum = parseInt(rim);
    const widthNum = parseInt(width);

    // Simple logic to determine vehicle type and return recommendations
    let category = "default";
    if (widthNum >= 235 && rimNum >= 17) {
      category = "suv";
    } else if (widthNum <= 150) {
      category = "bike";
    }

    setResults(tyreDatabase[category] || tyreDatabase["default"]);
    setShowResults(true);
  };

  const handleReset = () => {
    setWidth("");
    setRatio("");
    setRim("");
    setResults(null);
    setShowResults(false);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-brand-black relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/2 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 finder-heading">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-red" />
            <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-[0.2em]">
              Tyre Size Finder
            </span>
            <div className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-white mb-4">
            Find Your Perfect <span className="text-brand-red">Tyre</span>
          </h2>
          <p className="text-brand-muted font-body max-w-lg mx-auto">
            Enter your tyre size to get expert recommendations. Check the
            sidewall of your current tyre for these numbers.
          </p>
        </div>

        <div className="finder-content max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Tyre Diagram SVG */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* Premium SVG Tyre Illustration */}
                <svg
                  viewBox="0 0 400 440"
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="tyreOuter" cx="50%" cy="50%" r="50%">
                      <stop offset="65%" stopColor="#404040" />
                      <stop offset="80%" stopColor="#2e2e2e" />
                      <stop offset="92%" stopColor="#1a1a1a" />
                      <stop offset="100%" stopColor="#111" />
                    </radialGradient>
                    <radialGradient id="tyreSidewall" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5a5a5a" />
                      <stop offset="60%" stopColor="#4a4a4a" />
                      <stop offset="100%" stopColor="#333" />
                    </radialGradient>
                    <radialGradient id="tyreRim" cx="38%" cy="35%" r="58%">
                      <stop offset="0%" stopColor="#f5f5f5" />
                      <stop offset="25%" stopColor="#e0e0e0" />
                      <stop offset="50%" stopColor="#c8c8c8" />
                      <stop offset="75%" stopColor="#aaa" />
                      <stop offset="100%" stopColor="#888" />
                    </radialGradient>
                    <radialGradient id="tyreHub" cx="42%" cy="38%" r="55%">
                      <stop offset="0%" stopColor="#777" />
                      <stop offset="50%" stopColor="#555" />
                      <stop offset="100%" stopColor="#2a2a2a" />
                    </radialGradient>
                    <radialGradient id="hubCap" cx="45%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#888" />
                      <stop offset="100%" stopColor="#444" />
                    </radialGradient>
                    <linearGradient id="spokeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d5d5d5" />
                      <stop offset="50%" stopColor="#b0b0b0" />
                      <stop offset="100%" stopColor="#999" />
                    </linearGradient>
                    <filter
                      id="tyreShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="6"
                        stdDeviation="12"
                        floodColor="#000"
                        floodOpacity="0.2"
                      />
                    </filter>
                    <filter
                      id="innerGlow"
                      x="-10%"
                      y="-10%"
                      width="120%"
                      height="120%"
                    >
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* === TYRE BODY === */}

                  {/* Outer tyre ring */}
                  <circle
                    cx="200"
                    cy="220"
                    r="170"
                    fill="url(#tyreOuter)"
                    filter="url(#tyreShadow)"
                  />

                  {/* Outer edge highlight */}
                  <circle
                    cx="200"
                    cy="220"
                    r="169"
                    fill="none"
                    stroke="#555"
                    strokeWidth="0.5"
                    opacity="0.6"
                  />

                  {/* Tread shoulder ring - outer */}
                  <circle
                    cx="200"
                    cy="220"
                    r="164"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    opacity="0.4"
                  />

                  {/* Primary tread grooves */}
                  {[...Array(48)].map((_, i) => {
                    const angle = (i * 7.5 * Math.PI) / 180;
                    return (
                      <line
                        key={`tread-${i}`}
                        x1={200 + 143 * Math.cos(angle)}
                        y1={220 + 143 * Math.sin(angle)}
                        x2={200 + 167 * Math.cos(angle)}
                        y2={220 + 167 * Math.sin(angle)}
                        stroke="#1a1a1a"
                        strokeWidth="1.8"
                        opacity="0.5"
                      />
                    );
                  })}

                  {/* Secondary tread grooves (offset) */}
                  {[...Array(48)].map((_, i) => {
                    const angle = ((i * 7.5 + 3.75) * Math.PI) / 180;
                    return (
                      <line
                        key={`tread2-${i}`}
                        x1={200 + 150 * Math.cos(angle)}
                        y1={220 + 150 * Math.sin(angle)}
                        x2={200 + 166 * Math.cos(angle)}
                        y2={220 + 166 * Math.sin(angle)}
                        stroke="#252525"
                        strokeWidth="1"
                        opacity="0.35"
                      />
                    );
                  })}

                  {/* Tread channel rings */}
                  <circle
                    cx="200"
                    cy="220"
                    r="157"
                    fill="none"
                    stroke="#2a2a2a"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="148"
                    fill="none"
                    stroke="#353535"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Tread shoulder ring - inner */}
                  <circle
                    cx="200"
                    cy="220"
                    r="142"
                    fill="none"
                    stroke="#3a3a3a"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Sidewall */}
                  <circle cx="200" cy="220" r="138" fill="url(#tyreSidewall)" />

                  {/* Sidewall texture rings */}
                  <circle
                    cx="200"
                    cy="220"
                    r="136"
                    fill="none"
                    stroke="#4e4e4e"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="130"
                    fill="none"
                    stroke="#484848"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="124"
                    fill="none"
                    stroke="#444"
                    strokeWidth="0.5"
                    opacity="0.25"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="118"
                    fill="none"
                    stroke="#404040"
                    strokeWidth="0.5"
                    opacity="0.2"
                  />

                  {/* Sidewall bead / lip */}
                  <circle
                    cx="200"
                    cy="220"
                    r="100"
                    fill="none"
                    stroke="#555"
                    strokeWidth="3"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="98"
                    fill="none"
                    stroke="#3a3a3a"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Sidewall size text — top arc */}
                  <text
                    x="200"
                    y="108"
                    textAnchor="middle"
                    fill="#888"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="'Barlow Condensed', sans-serif"
                    letterSpacing="3"
                  >
                    {width || "185"}/{ratio || "65"} R{rim || "15"}
                  </text>

                  {/* Brand text — bottom arc */}
                  <text
                    x="200"
                    y="345"
                    textAnchor="middle"
                    fill="#555"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="'Barlow Condensed', sans-serif"
                    letterSpacing="5"
                  >
                    EDGEGRIP TYRES
                  </text>

                  {/* === RIM === */}

                  {/* Rim outer lip chrome */}
                  <circle
                    cx="200"
                    cy="220"
                    r="96"
                    fill="none"
                    stroke="#ddd"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="94"
                    fill="none"
                    stroke="#bbb"
                    strokeWidth="0.5"
                  />

                  {/* Rim face */}
                  <circle cx="200" cy="220" r="93" fill="url(#tyreRim)" />

                  {/* Spoke shadows (darker, behind spokes) */}
                  {[...Array(10)].map((_, i) => {
                    const angle = ((i * 36 + 2) * Math.PI) / 180;
                    return (
                      <line
                        key={`shadow-${i}`}
                        x1={200 + 36 * Math.cos(angle)}
                        y1={220 + 36 * Math.sin(angle)}
                        x2={200 + 89 * Math.cos(angle)}
                        y2={220 + 89 * Math.sin(angle)}
                        stroke="#666"
                        strokeWidth="14"
                        strokeLinecap="round"
                        opacity="0.3"
                      />
                    );
                  })}

                  {/* Rim spokes */}
                  {[...Array(10)].map((_, i) => {
                    const angle = (i * 36 * Math.PI) / 180;
                    return (
                      <g key={`spoke-${i}`}>
                        <line
                          x1={200 + 35 * Math.cos(angle)}
                          y1={220 + 35 * Math.sin(angle)}
                          x2={200 + 87 * Math.cos(angle)}
                          y2={220 + 87 * Math.sin(angle)}
                          stroke="url(#spokeGrad)"
                          strokeWidth="11"
                          strokeLinecap="round"
                        />
                        {/* Spoke highlight */}
                        <line
                          x1={200 + 40 * Math.cos(angle)}
                          y1={220 + 40 * Math.sin(angle)}
                          x2={200 + 82 * Math.cos(angle)}
                          y2={220 + 82 * Math.sin(angle)}
                          stroke="#e0e0e0"
                          strokeWidth="3"
                          strokeLinecap="round"
                          opacity="0.4"
                        />
                      </g>
                    );
                  })}

                  {/* Inner rim ring */}
                  <circle
                    cx="200"
                    cy="220"
                    r="35"
                    fill="none"
                    stroke="#bbb"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />

                  {/* Hub */}
                  <circle cx="200" cy="220" r="34" fill="url(#tyreHub)" />
                  <circle
                    cx="200"
                    cy="220"
                    r="32"
                    fill="none"
                    stroke="#666"
                    strokeWidth="1"
                  />

                  {/* Lug nuts with bevels */}
                  {[...Array(5)].map((_, i) => {
                    const angle = ((i * 72 - 90) * Math.PI) / 180;
                    const cx = 200 + 22 * Math.cos(angle);
                    const cy = 220 + 22 * Math.sin(angle);
                    return (
                      <g key={`lug-${i}`}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="5"
                          fill="#444"
                          stroke="#555"
                          strokeWidth="0.5"
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="3.5"
                          fill="#3a3a3a"
                          stroke="#666"
                          strokeWidth="0.5"
                        />
                        <circle
                          cx={cx - 1}
                          cy={cy - 1}
                          r="1"
                          fill="#777"
                          opacity="0.4"
                        />
                      </g>
                    );
                  })}

                  {/* Center cap */}
                  <circle
                    cx="200"
                    cy="220"
                    r="10"
                    fill="url(#hubCap)"
                    stroke="#777"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="7"
                    fill="none"
                    stroke="#999"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                  {/* Cap logo mark */}
                  <text
                    x="200"
                    y="223"
                    textAnchor="middle"
                    fill="#aaa"
                    fontSize="6"
                    fontWeight="700"
                    fontFamily="'Barlow Condensed', sans-serif"
                  >
                    EG
                  </text>

                  {/* Valve stem */}
                  <rect
                    x="197"
                    y="48"
                    width="6"
                    height="14"
                    rx="3"
                    fill="#666"
                    stroke="#555"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="198.5"
                    y="45"
                    width="3"
                    height="6"
                    rx="1.5"
                    fill="#888"
                    stroke="#777"
                    strokeWidth="0.5"
                  />

                  {/* Ambient light reflection */}
                  <ellipse
                    cx="165"
                    cy="155"
                    rx="45"
                    ry="25"
                    fill="white"
                    opacity="0.03"
                    transform="rotate(-30, 165, 155)"
                  />

                  {/* === ANNOTATIONS === */}

                  {/* TYRE WIDTH — horizontal across full outer diameter */}
                  <line
                    x1="25"
                    y1="195"
                    x2="25"
                    y2="245"
                    stroke="#E31E24"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="375"
                    y1="195"
                    x2="375"
                    y2="245"
                    stroke="#E31E24"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="25"
                    y1="220"
                    x2="165"
                    y2="220"
                    stroke="#E31E24"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                  <line
                    x1="235"
                    y1="220"
                    x2="375"
                    y2="220"
                    stroke="#E31E24"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                  {/* Arrowheads */}
                  <polygon
                    points="25,216 25,224 32,220"
                    fill="#E31E24"
                    opacity="0.7"
                  />
                  <polygon
                    points="375,216 375,224 368,220"
                    fill="#E31E24"
                    opacity="0.7"
                  />
                  <rect
                    x="145"
                    y="210"
                    width="110"
                    height="20"
                    rx="10"
                    fill="white"
                    stroke="#E31E24"
                    strokeWidth="1"
                    opacity="0.95"
                  />
                  <text
                    x="200"
                    y="224"
                    textAnchor="middle"
                    fill="#E31E24"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="'DM Sans', sans-serif"
                    letterSpacing="1"
                  >
                    TYRE WIDTH
                  </text>

                  {/* ASPECT RATIO — vertical on left sidewall */}
                  <line
                    x1="35"
                    y1="88"
                    x2="52"
                    y2="88"
                    stroke="#FFB800"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="35"
                    y1="128"
                    x2="52"
                    y2="128"
                    stroke="#FFB800"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="42"
                    y1="88"
                    x2="42"
                    y2="128"
                    stroke="#FFB800"
                    strokeWidth="1.5"
                  />
                  {/* Arrowheads */}
                  <polygon
                    points="38,88 46,88 42,95"
                    fill="#FFB800"
                    opacity="0.7"
                  />
                  <polygon
                    points="38,128 46,128 42,121"
                    fill="#FFB800"
                    opacity="0.7"
                  />
                  <line
                    x1="42"
                    y1="88"
                    x2="42"
                    y2="58"
                    stroke="#FFB800"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                  <rect
                    x="5"
                    y="45"
                    width="100"
                    height="18"
                    rx="9"
                    fill="white"
                    stroke="#FFB800"
                    strokeWidth="1"
                    opacity="0.95"
                  />
                  <text
                    x="55"
                    y="57"
                    textAnchor="middle"
                    fill="#FFB800"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="'DM Sans', sans-serif"
                    letterSpacing="1"
                  >
                    ASPECT RATIO
                  </text>

                  {/* RIM DIAMETER — horizontal beneath tyre across the rim */}
                  <line
                    x1="105"
                    y1="315"
                    x2="105"
                    y2="398"
                    stroke="#4A90D9"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.3"
                  />
                  <line
                    x1="295"
                    y1="315"
                    x2="295"
                    y2="398"
                    stroke="#4A90D9"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.3"
                  />
                  <line
                    x1="105"
                    y1="395"
                    x2="148"
                    y2="395"
                    stroke="#4A90D9"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                  <line
                    x1="253"
                    y1="395"
                    x2="295"
                    y2="395"
                    stroke="#4A90D9"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                  <line
                    x1="105"
                    y1="390"
                    x2="105"
                    y2="400"
                    stroke="#4A90D9"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="295"
                    y1="390"
                    x2="295"
                    y2="400"
                    stroke="#4A90D9"
                    strokeWidth="1.5"
                  />
                  {/* Arrowheads */}
                  <polygon
                    points="105,391 105,399 112,395"
                    fill="#4A90D9"
                    opacity="0.7"
                  />
                  <polygon
                    points="295,391 295,399 288,395"
                    fill="#4A90D9"
                    opacity="0.7"
                  />
                  <rect
                    x="148"
                    y="385"
                    width="105"
                    height="20"
                    rx="10"
                    fill="white"
                    stroke="#4A90D9"
                    strokeWidth="1"
                    opacity="0.95"
                  />
                  <text
                    x="200"
                    y="399"
                    textAnchor="middle"
                    fill="#4A90D9"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="'DM Sans', sans-serif"
                    letterSpacing="1"
                  >
                    RIM DIAMETER
                  </text>
                </svg>

                {/* Helper Text */}
                <div className="flex items-start gap-2 mt-4 px-4">
                  <Info
                    size={14}
                    className="text-brand-muted flex-shrink-0 mt-0.5"
                  />
                  <p className="text-[11px] text-brand-muted font-body leading-relaxed">
                    Find these numbers on your tyre sidewall. Example:{" "}
                    <strong className="text-brand-chrome">185/65 R15</strong>{" "}
                    means 185mm width, 65% aspect ratio, 15 inch rim.
                  </p>
                </div>
              </div>
            </div>

            {/* Selector Panel */}
            <div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold text-brand-white mb-1">
                  Select Your Tyre Size
                </h3>
                <p className="text-sm text-brand-muted font-body mb-8">
                  Choose tyre width, aspect ratio, and rim diameter below.
                </p>

                <div className="space-y-6">
                  {/* Tyre Width */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-wider mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                      <span className="text-brand-chrome">Tyre Width</span>
                      <span className="text-brand-muted font-normal normal-case">
                        (mm)
                      </span>
                    </label>
                    <select
                      value={width}
                      onChange={(e) => {
                        setWidth(e.target.value);
                        setShowResults(false);
                      }}
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm font-body text-brand-white appearance-none cursor-pointer focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-all"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23777' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                      }}
                    >
                      <option value="" disabled>
                        Select width
                      </option>
                      {tyreWidths.map((w) => (
                        <option key={w} value={w}>
                          {w} mm
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Aspect Ratio */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-wider mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="text-brand-chrome">Aspect Ratio</span>
                      <span className="text-brand-muted font-normal normal-case">
                        (%)
                      </span>
                    </label>
                    <select
                      value={ratio}
                      onChange={(e) => {
                        setRatio(e.target.value);
                        setShowResults(false);
                      }}
                      className="w-full bg-brand-dark-2 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-body text-brand-white appearance-none cursor-pointer focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-all"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23777' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                      }}
                    >
                      <option value="" disabled>
                        Select ratio
                      </option>
                      {aspectRatios.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rim Diameter */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-wider mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                      <span className="text-brand-chrome">Rim Diameter</span>
                      <span className="text-brand-muted font-normal normal-case">
                        (inches)
                      </span>
                    </label>
                    <select
                      value={rim}
                      onChange={(e) => {
                        setRim(e.target.value);
                        setShowResults(false);
                      }}
                      className="w-full bg-brand-dark-2 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-body text-brand-white appearance-none cursor-pointer focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-all"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23777' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                      }}
                    >
                      <option value="" disabled>
                        Select diameter
                      </option>
                      {rimDiameters.map((d) => (
                        <option key={d} value={d}>
                          {d}&quot;
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleSearch}
                      disabled={!width || !ratio || !rim}
                      className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark disabled:bg-brand-grey disabled:text-brand-muted text-white font-body font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(227,30,36,0.4)] disabled:hover:shadow-none disabled:cursor-not-allowed active:scale-[0.98]"
                    >
                      <Search size={16} />
                      Find Tyres
                    </button>
                    {showResults && (
                      <button
                        onClick={handleReset}
                        className="px-4 py-4 rounded-xl border border-black/10 text-brand-muted hover:text-brand-white hover:border-black/20 transition-all font-body text-sm"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {showResults && results && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-brand-red" />
                <h3 className="text-lg font-display font-bold text-brand-white">
                  Recommended Tyres for{" "}
                  <span className="text-brand-red">
                    {width}/{ratio} R{rim}
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {results.map((tyre, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-2xl p-6 hover:border-brand-red/20 transition-all duration-500 group"
                  >
                    {/* Tag */}
                    <span
                      className="inline-block text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                      style={{
                        background: `${tyre.color}15`,
                        color: tyre.color,
                      }}
                    >
                      {tyre.tag}
                    </span>

                    {/* Brand */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-display font-black mb-3"
                      style={{
                        background: `${tyre.color}15`,
                        color: tyre.color,
                      }}
                    >
                      {tyre.brand[0]}
                    </div>

                    <h4 className="text-base font-display font-bold text-brand-white mb-0.5">
                      {tyre.brand}
                    </h4>
                    <p className="text-sm text-brand-chrome font-body mb-2">
                      {tyre.model}
                    </p>
                    <p className="text-xs text-brand-muted font-body mb-3">
                      Best for: {tyre.bestFor}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-lg font-display font-bold text-brand-red">
                        {tyre.price}
                      </span>
                      <span className="text-[10px] text-brand-muted font-body">
                        /tyre
                      </span>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20${encodeURIComponent(tyre.brand + " " + tyre.model)}%20in%20size%20${width}/${ratio}%20R${rim}`}
                      className="w-full flex items-center justify-center gap-2 border border-black/10 hover:border-brand-red/40 hover:bg-brand-red/5 text-brand-chrome hover:text-brand-red text-sm font-body font-semibold px-4 py-2.5 rounded-lg transition-all duration-300"
                    >
                      <MessageCircle size={14} />
                      Enquire Now
                    </a>
                  </div>
                ))}
              </div>

              {/* Expert help CTA */}
              <div className="text-center mt-8">
                <p className="text-sm text-brand-muted font-body mb-3">
                  Not sure about your tyre size? Our experts can help.
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20help%20finding%20the%20right%20tyre%20size%20for%20my%20vehicle"
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-brand-red hover:gap-3 transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  Talk to a Tyre Expert
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
