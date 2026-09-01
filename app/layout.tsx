import type { Metadata } from "next";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nodra-studio.lexthus.chatgpt.site"),
  title: {
    default: "Nodra Studio — Diseño y desarrollo digital",
    template: "%s — Nodra Studio",
  },
  description:
    "Diseñamos y desarrollamos sitios web, tiendas online y sistemas a medida para marcas y empresas.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "tiendas online",
    "sistemas a medida",
    "Nodra Studio",
  ],
  authors: [{ name: "Nodra Studio" }],
  creator: "Nodra Studio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Nodra Studio",
    title: "Nodra Studio — Diseño y desarrollo digital",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online y sistemas a medida para marcas y empresas.",
  },
  twitter: {
    card: "summary",
    title: "Nodra Studio — Diseño y desarrollo digital",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online y sistemas a medida para marcas y empresas.",
  },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  icons: { icon: "/brand/nodra-mark.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
