import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Visit Our Store in Nagasandra",
  description:
    "Get in touch with EdgeGrip Tyres in Nagasandra, Bengaluru. Call, WhatsApp, or visit our store for tyre fitting, wheel alignment, and balancing. Mon–Sat 9AM–7PM, Sunday 10AM–4PM.",
  openGraph: {
    title: "Contact EdgeGrip Tyres — Nagasandra, Bengaluru",
    description:
      "Walk in or reach out ahead. Expert tyre consultation, transparent quotes, and instant fitment. Near Nagasandra Metro Station.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
