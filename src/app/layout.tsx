import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Popsite — Création de site web pour tous les métiers";
// 155 caractères : au-delà de ~160, Google tronque la description dans les résultats.
const description =
  "Sites web sur-mesure pour tous les métiers : artisans, commerçants, restaurants, professions libérales. Réservation, paiement, SEO. Appel offert 15 min.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.popsite.fr"),
  title,
  description,
  // Pas de `keywords` : Google ignore cette balise depuis 2009.
  authors: [{ name: "Popsite", url: "https://www.popsite.fr" }],
  creator: "Popsite",
  publisher: "Popsite",
  alternates: {
    canonical: "https://www.popsite.fr",
  },
  openGraph: {
    title,
    description,
    url: "https://www.popsite.fr",
    siteName: "Popsite",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full font-sans bg-white text-zinc-950 flex flex-col selection:bg-zinc-950 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
