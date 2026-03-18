import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E31E24",
          "red-dark": "#B01519",
          black: "#FFFFFF",
          dark: "#F5F5F5",
          "dark-2": "#EEEEEE",
          grey: "#E0E0E0",
          muted: "#666666",
          chrome: "#444444",
          white: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grad-hero": "linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%)",
        "grad-red": "linear-gradient(90deg, #E31E24, #FF5555)",
        "grad-chrome": "linear-gradient(135deg, #AAA, #DDD, #AAA)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
