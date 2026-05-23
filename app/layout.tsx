import type { Metadata } from "next";
import type { ReactNode } from "react";
import favicon from "@/assets/Eagle_Lens_Letterhead.jpg-removebg-preview.png";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eagle Horizon Travel and Tour Ltd. — Freight Forwarding & Logistics in Ghana",
  description:
    "Reliable freight forwarding, air & sea freight, customs clearance, and door-to-door logistics from Ghana to the world. Soaring Higher, Together.",
  authors: [{ name: "Eagle Horizon Travel and Tour Ltd." }],
  openGraph: {
    title: "Eagle Horizon Travel and Tour Ltd. — Freight Forwarding & Logistics",
    description:
      "Fast, secure, and efficient cargo and logistics services across borders.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: favicon.src, type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
