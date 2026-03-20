import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands — Michelin, CEAT, Eurogrip, Maxxis & Pirelli",
  description:
    "Explore our curated selection of 5 world-class tyre brands at EdgeGrip Tyres, Bengaluru. Michelin, CEAT, Eurogrip, Maxxis, and Pirelli — 100% genuine with manufacturer warranty.",
  openGraph: {
    title: "5 World-Class Tyre Brands — EdgeGrip Tyres Bengaluru",
    description:
      "Hand-picked brand portfolio covering every driver's need — comfort, performance, durability, and value. 100% genuine with full warranty.",
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
