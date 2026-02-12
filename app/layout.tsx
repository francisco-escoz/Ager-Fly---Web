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
      // Opcional si lo agregás en /public:
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    // Opcional si lo agregás en /public:
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
        url: "/images/logo-redes.png",
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
    images: ["/images/logo-redes.png"],
  },

  // ✅ Si tenés el archivo de verificación (googleXXXX.html) en /public
  // o si querés verificación por meta tag, descomentá:
  // verification: {
  //   google: "TU_CODIGO_DE_GOOGLE_SEARCH_CONSOLE",
  // },
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
