import type { Metadata } from "next";
import { getTyreById } from "@/lib/tyreProducts";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tyre = getTyreById(params.id);

  if (!tyre) {
    return {
      title: "Tyre Not Found",
      description: "The requested tyre product could not be found.",
    };
  }

  const title = `${tyre.brand} ${tyre.title} ${tyre.specs} — ₹${tyre.price}`;
  const description = `Buy ${tyre.brand} ${tyre.title} (${tyre.specs}) at ₹${tyre.price}. ${tyre.features.join(", ")}. ${tyre.warranty}. Available at EdgeGrip Tyres, Nagasandra, Bengaluru.`;

  return {
    title,
    description,
    openGraph: {
      title: `${tyre.brand} ${tyre.title} ${tyre.specs} — EdgeGrip Tyres`,
      description,
      type: "website",
    },
  };
}

export default function TyreDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
