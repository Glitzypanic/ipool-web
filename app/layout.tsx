import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
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
  metadataBase: new URL("https://ipool.cl"),
  title: {
    default: "iPool | Limpieza y mantención de piscinas",
    template: "%s | iPool",
  },
  description:
    "Servicio de limpieza, mantención y revestimiento en fibra de vidrio para piscinas en Chile. Cotiza por WhatsApp con iPool.",
  keywords: [
    "limpieza de piscinas",
    "mantención de piscinas",
    "revestimiento fibra de vidrio piscina",
    "piscinas Chile",
    "iPool",
  ],
  openGraph: {
    title: "iPool | Haz que tu piscina brille",
    description:
      "Limpieza, mantención y revestimiento en fibra de vidrio para piscinas durante todo el año.",
    url: "https://ipool.cl",
    siteName: "iPool",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${outfit.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-body)] antialiased">{children}</body>
    </html>
  );
}
