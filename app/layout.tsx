import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloatMenu from "@/components/whatsapp-float-menu";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agerfly.com"),

  title: {
    default: "Ager Fly | Drones agrícolas profesionales",
    template: "%s | Ager Fly",
  },

  description:
    "Ager Fly diseña drones agrícolas profesionales para pulverización y operaciones de precisión. CÓNDOR C80: alto rendimiento, eficiencia operativa y tecnología de vuelo inteligente.",

  keywords: [
    "dron agrícola",
    "dron pulverizador",
    "pulverización agrícola",
    "agricultura de precisión",
    "drones para el agro",
    "CÓNDOR C80",
    "Ager Fly",
    "Dron Argentino",
    "Argentina",
    "Agerfly",
  ],

  authors: [{ name: "Ager Fly" }],
  creator: "Ager Fly",
  publisher: "Ager Fly",

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
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
    ],
  },

  openGraph: {
    title: "Ager Fly | CÓNDOR C80",
    description:
      "Dron agrícola de alto rendimiento con sistema de pulverización avanzada, máxima eficiencia y tecnología de vuelo inteligente.",
    url: "https://www.agerfly.com/",
    siteName: "Ager Fly",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.agerfly.com/images/LogoRedes.png",
        width: 1200,
        height: 630,
        alt: "Ager Fly - Drones agrícolas profesionales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ager Fly | CÓNDOR C80",
    description:
      "Dron agrícola profesional con tecnología avanzada de pulverización y máxima eficiencia operativa.",
    images: ["https://www.agerfly.com/images/LogoRedes.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ager Fly",
    url: "https://www.agerfly.com",
    logo: "https://www.agerfly.com/images/LogoRedes.png",
    sameAs: [
      "https://www.instagram.com/ager.fly",
      "https://www.linkedin.com/company/ager-fly",
      "https://www.youtube.com/@AgerFly",
      "https://x.com/ager_fly",
      "https://www.facebook.com/share/1LuX5MKFwk",
    ],
  };

  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}

        {/* 🔥 BOTÓN WHATSAPP GLOBAL */}
        <WhatsAppFloatMenu
          defaultMessage="Hola! Estoy en la web de Ager Fly y quiero hacer una consulta."
          options={[
            {
              label: "Comercial",
              phoneE164: "5491130183256",
              message:
                "Hola Ager Fly,\nQuisiera recibir información comercial sobre sus drones agrícolas.",
            },
            {
              label: "Partner",
              phoneE164: "5492474562583",
              message:
                "Hola Ager Fly!\nMe gustaría contactarlos para trabajar como revendedor, taller autorizado o partner.",
            },
          ]}
        />
      </body>
    </html>
  );
}