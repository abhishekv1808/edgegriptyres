import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tyre Finder — Find the Perfect Tyre for Your Vehicle",
  description:
    "Use our smart Tyre Finder tool to discover the exact tyre size for your car or bike. Search by vehicle model or select your manufacturer, model, and variant for instant OEM tyre recommendations.",
  openGraph: {
    title: "Tyre Finder — EdgeGrip Tyres Bengaluru",
    description:
      "Search your vehicle or select from dropdowns to instantly view OEM tyre specifications and top-rated upgrade options from global brands.",
  },
};

export default function TyreFinderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
