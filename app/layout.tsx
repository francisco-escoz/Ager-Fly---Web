import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agerfly.com"),

  title: {
    default: "AgerFly | Drones agrícolas profesionales",
    template: "%s | AgerFly",
  },

  description:
    "AgerFly diseña drones agrícolas profesionales para pulverización y operaciones de precisión. CONDOR C80: alto rendimiento, eficiencia operativa y tecnología de vuelo inteligente.",

  keywords: [
    "dron agrícola",
    "dron pulverizador",
    "pulverización agrícola",
    "agricultura de precisión",
    "drones para el agro",
    "CONDOR C80",
    "AgerFly",
    "Argentina",
  ],

  authors: [{ name: "AgerFly" }],
  creator: "AgerFly",
  publisher: "AgerFly",

  alternates: {
    canonical: "https://www.agerfly.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },

  openGraph: {
    title: "AgerFly | CONDOR C80",
    description:
      "Dron agrícola de alto rendimiento con sistema de pulverización avanzada, máxima eficiencia y tecnología de vuelo inteligente.",
    url: "https://www.agerfly.com/",
    siteName: "AgerFly",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/LogoRedes.png",
        width: 1200,
        height: 630,
        alt: "AgerFly - Drones agrícolas profesionales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AgerFly | CONDOR C80",
    description:
      "Dron agrícola profesional con tecnología avanzada de pulverización y máxima eficiencia operativa.",
    images: ["/images/LogoRedes.png"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
