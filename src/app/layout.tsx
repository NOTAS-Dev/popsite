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

export const metadata: Metadata = {
  metadataBase: new URL("https://popsite.fr"),
  title: "Popsite — Sites web sur-mesure & haute performance",
  description:
    "Agence web nouvelle génération. Nous concevons des sites web ultra-rapides, sur-mesure et orientés conversion pour entreprises, indépendants et startups.",
  keywords: [
    "Popsite",
    "Agence web",
    "Création site internet",
    "Landing Page haute conversion",
    "Next.js",
    "Tailwind CSS",
    "Site vitrine sur-mesure",
    "E-commerce haute performance",
    "SEO optimisé",
  ],
  authors: [{ name: "Popsite Studio", url: "https://popsite.fr" }],
  creator: "Popsite Studio",
  publisher: "Popsite Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Popsite — Sites web sur-mesure & haute performance",
    description:
      "Des expériences web d'exception conçues pour convertir vos visiteurs en clients. Délais garantis, design sur-mesure & score 100/100 Lighthouse.",
    url: "https://popsite.fr",
    siteName: "Popsite",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popsite — Sites web sur-mesure & haute performance",
    description:
      "Des expériences web d'exception conçues pour convertir vos visiteurs en clients.",
    creator: "@popsite_fr",
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
