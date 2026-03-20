import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tyre Care Tips & Knowledge",
  description:
    "Expert advice on tyre maintenance, safety tips, and knowledge articles from EdgeGrip Tyres, Bengaluru. Learn how to care for your tyres and stay safe on the road.",
  openGraph: {
    title: "Tyre Care Blog — EdgeGrip Tyres Bengaluru",
    description:
      "Expert tyre care guides, monsoon safety tips, alignment vs balancing explained, and more from Bengaluru's trusted tyre specialists.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
