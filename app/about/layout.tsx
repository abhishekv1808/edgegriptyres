import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story & Values",
  description:
    "Learn about EdgeGrip Tyres — Bengaluru's trusted multi-brand tyre store in Nagasandra. Discover our story, values, and commitment to expert tyre guidance and honest service.",
  openGraph: {
    title: "About EdgeGrip Tyres — Bengaluru's Premium Tyre Destination",
    description:
      "Born from a belief that every Bengaluru driver deserves expert tyre guidance — not just a sale. Honest service since day one.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
