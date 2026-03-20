import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Tyre Fitting, Wheel Balancing & Alignment",
  description:
    "Professional tyre installation, computerised wheel balancing, and 4-wheel laser alignment at EdgeGrip Tyres, Nagasandra, Bengaluru. Trained technicians, professional-grade equipment.",
  openGraph: {
    title: "Expert Tyre Services — EdgeGrip Tyres Bengaluru",
    description:
      "Professional tyre fitting, computerised wheel balancing, and 4-wheel laser alignment. Every service done right, not just done.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
