import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edgegriptyres.in"),
  title: {
    default: "EdgeGrip Tyres Bengaluru | Michelin, CEAT, Pirelli | Nagasandra",
    template: "%s | EdgeGrip Tyres Bengaluru",
  },
  description:
    "EdgeGrip Tyres — Bengaluru's trusted multi-brand tyre store in Nagasandra. Expert installation, wheel balancing & alignment. Michelin, CEAT, Eurogrip, Maxxis & Pirelli. Walk-ins welcome.",
  keywords: [
    "tyre shop Nagasandra",
    "tyre shop Bengaluru",
    "Michelin tyres Bengaluru",
    "wheel alignment Nagasandra",
    "CEAT tyre dealer Bengaluru",
    "Pirelli tyres Bengaluru",
    "EdgeGrip Tyres",
    "tyre fitting near me",
    "wheel balancing Bengaluru",
    "best tyre shop Bangalore",
    "SUV tyres Bengaluru",
    "bike tyres Nagasandra",
  ],
  authors: [{ name: "EdgeGrip Tyres" }],
  creator: "EdgeGrip Tyres",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EdgeGrip Tyres — Bengaluru's Premium Tyre Destination",
    description:
      "5 Global Brands. 1 Expert Address. Zero Compromise. Expert fitment for cars & motorcycles in Nagasandra, Bengaluru.",
    url: "https://edgegriptyres.in",
    siteName: "EdgeGrip Tyres",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EdgeGrip Tyres — Bengaluru's Premium Tyre Destination",
    description:
      "5 Global Brands. 1 Expert Address. Zero Compromise. Expert fitment for cars & motorcycles.",
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
