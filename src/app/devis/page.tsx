import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Clock, Lock, MessageSquare } from 'lucide-react';
import { CalProvider } from '@/components/CalProvider';
import { Navbar } from '@/components/sections/Navbar';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { DevisForm } from '@/components/sections/DevisForm';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site';

const url = `${siteConfig.url}/devis`;
const title = 'Demander un devis pour votre site web | Popsite';
const description =
  'Décrivez votre projet de site internet en quelques minutes : Popsite vous recontacte avec une proposition sur-mesure, sans engagement. Devis gratuit.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Demander un devis', item: url },
  ],
};

const points = [
  { icon: Clock, texte: 'Réponse rapide, en général sous 24 à 48 h ouvrées.' },
  { icon: Lock, texte: 'Vos informations servent uniquement à vous recontacter.' },
  { icon: MessageSquare, texte: 'Un échange concret sur votre projet, sans engagement.' },
];

export default function DevisPage() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFD] text-zinc-950 font-sans selection:bg-indigo-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <CalProvider />
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white bg-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-zinc-200/40 via-zinc-100/30 to-zinc-300/20 blur-[130px] rounded-full pointer-events-none -z-10 opacity-70" />

        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d’Ariane" className="flex mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <li>
                <Link href="/" className="hover:text-zinc-950 transition-colors">
                  Accueil
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-300" aria-hidden />
              <li className="text-zinc-950" aria-current="page">
                Demander un devis
              </li>
            </ol>
          </nav>

          <div className="text-center space-y-5 mb-10">
            <div className="flex justify-center">
              <Badge variant="default">Devis gratuit — sans engagement</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-zinc-950 leading-[1.08]">
              Parlez-nous de votre projet.
            </h1>
            <p className="text-zinc-500 text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              Quelques informations suffisent pour qu’on cerne votre besoin et qu’on revienne vers
              vous avec une proposition adaptée à votre métier.
            </p>
          </div>

          <ul className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-10">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.texte}
                  className="flex-1 flex items-start gap-2.5 rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur-md px-4 py-3 text-xs text-zinc-600 leading-relaxed"
                >
                  <Icon className="w-4 h-4 shrink-0 text-zinc-950 mt-0.5" />
                  {p.texte}
                </li>
              );
            })}
          </ul>

          <DevisForm />
        </div>
      </section>

      <FooterCTA />
    </main>
  );
}
