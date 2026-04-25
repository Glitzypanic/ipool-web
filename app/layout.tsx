import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { allowIndexing, businessInfo, siteUrl } from "@/lib/site-data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: businessInfo.shortName,
  title: {
    default: "iPool | Revestimiento, limpieza y mantención de piscinas",
    template: "%s | iPool",
  },
  description:
    "Mantención de piscinas a domicilio en Santiago y revestimiento en fibra de vidrio en Santiago, Rancagua y Valparaíso. Cotiza por WhatsApp con iPool.",
  keywords: [
    "revestimiento piscina fibra de vidrio",
    "revestimiento de piscinas",
    "revestimiento de piscinas Santiago",
    "revestimiento de piscinas Rancagua",
    "revestimiento de piscinas Valparaíso",
    "reparación filtraciones piscina",
    "limpieza de piscinas",
    "limpieza de piscinas Santiago",
    "mantención de piscinas",
    "mantención de piscinas Santiago",
    "mantención de piscinas a domicilio",
    "piscinas Chile",
    "iPool",
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "iPool | Revestimiento, limpieza y mantención de piscinas",
    description:
      "Mantención de piscinas en Santiago y revestimiento en fibra de vidrio en Santiago, Rancagua y Valparaíso.",
    url: siteUrl,
    siteName: "iPool",
    images: [
      {
        url: "/images/ipool-hero.webp",
        width: 1200,
        height: 630,
        alt: "Piscina residencial cristalina mantenida por iPool",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPool | Revestimiento y mantención de piscinas",
    description:
      "Cotiza mantención de piscinas en Santiago y revestimiento en fibra de vidrio en Santiago, Rancagua y Valparaíso.",
    images: ["/images/ipool-hero.webp"],
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${outfit.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-body)] antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
