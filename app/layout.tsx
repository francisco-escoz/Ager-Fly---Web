import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgerFly | CONDOR C80",
  description:
    "CONDOR C80, dron agrícola de alto rendimiento con sistema de pulverización avanzada, máxima eficiencia y tecnología de vuelo inteligente.",
  keywords: [
    "dron agrícola",
    "dron pulverizador",
    "agricultura de precisión",
    "CONDOR C80",
    "AgerFly",
  ],
  authors: [{ name: "AgerFly" }],
  creator: "AgerFly",
  openGraph: {
    title: "AgerFly | CONDOR C80",
    description:
      "Tecnología avanzada de pulverización agrícola y máxima eficiencia operativa.",
    url: "https://www.agerfly.com",
    siteName: "AgerFly",
    images: [
      {
        url: "https://www.agerfly.com/images/logo-redes.png",
        width: 1200,
        height: 630,
        alt: "AgerFly Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgerFly | CONDOR C80",
    description:
      "Dron agrícola profesional con tecnología avanzada de pulverización.",
    images: ["https://www.agerfly.com/images/logo-redes.png"],
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
