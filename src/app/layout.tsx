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
const description =
  "Popsite crée des sites web sur-mesure pour tous les corps de métier : artisans, commerçants, restaurants, professions libérales, entreprises. Réservation en ligne, paiement, galeries, référencement SEO.";

export const metadata: Metadata = {
  metadataBase: new URL("https://popsite.fr"),
  title,
  description,
  keywords: [
    "Popsite",
    "création site internet",
    "site web sur-mesure",
    "site vitrine",
    "site web artisan",
    "site web commerçant",
    "site web restaurant",
    "référencement SEO local",
    "agence web France",
  ],
  authors: [{ name: "Popsite", url: "https://popsite.fr" }],
  creator: "Popsite",
  publisher: "Popsite",
  alternates: {
    canonical: "https://popsite.fr",
  },
  openGraph: {
    title,
    description,
    url: "https://popsite.fr",
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
    >
      <body className="min-h-full font-sans bg-[#FCFCFD] text-zinc-950 flex flex-col selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
