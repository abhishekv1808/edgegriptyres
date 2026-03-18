import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EdgeGrip Tyres Bengaluru | Michelin, CEAT, Pirelli | Nagasandra",
  description:
    "EdgeGrip Tyres — Bengaluru's trusted multi-brand tyre store. Expert installation, wheel balancing & alignment. Michelin, CEAT, Eurogrip, Maxxis & Pirelli. Visit us in Nagasandra.",
  keywords: [
    "tyre shop Nagasandra",
    "tyre shop Bengaluru",
    "Michelin tyres Bengaluru",
    "wheel alignment Nagasandra",
    "CEAT tyre dealer Bengaluru",
    "Pirelli tyres Bengaluru",
    "EdgeGrip Tyres",
  ],
  openGraph: {
    title: "EdgeGrip Tyres — Bengaluru's Premium Tyre Destination",
    description:
      "5 Global Brands. 1 Expert Address. Zero Compromise. Expert fitment for cars & motorcycles.",
    locale: "en_IN",
    type: "website",
  },
};

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
