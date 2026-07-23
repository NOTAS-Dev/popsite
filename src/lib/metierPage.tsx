import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CalProvider } from '@/components/CalProvider';
import { Navbar } from '@/components/sections/Navbar';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { MetierContenu } from '@/components/sections/MetierContenu';
import { MetierJsonLd } from '@/components/MetierJsonLd';
import { getMetier } from '@/config/metiers';
import { siteConfig } from '@/config/site';

/**
 * Fabrique partagée des pages métier.
 *
 * Next.js n'accepte pas de segment dynamique partiel (`creation-site-[metier]`
 * n'est pas un paramètre) : chaque métier a donc son propre dossier de route
 * statique `/creation-site-<slug>`. Pour éviter de dupliquer le contenu, ces
 * routes ne font qu'appeler ces deux helpers ; toute la donnée reste dans
 * config/metiers.ts.
 */

/** Métadonnées SEO d'une page métier (title, description, canonical, OG). */
export function buildMetierMetadata(slug: string): Metadata {
  const metier = getMetier(slug);
  if (!metier) return {};

  const url = `${siteConfig.url}/creation-site-${metier.slug}`;

  return {
    title: metier.titleTag,
    description: metier.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: metier.titleTag,
      description: metier.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metier.titleTag,
      description: metier.metaDescription,
    },
  };
}

/** Corps complet d'une page métier. Un slug inconnu déclenche un 404. */
export function MetierPageShell({ slug }: { slug: string }) {
  const metier = getMetier(slug);
  if (!metier) notFound();

  return (
    <main className="relative min-h-screen bg-[#FCFCFD] text-zinc-950 font-sans selection:bg-indigo-500 selection:text-white">
      <MetierJsonLd metier={metier} />
      <CalProvider />
      <Navbar />
      <MetierContenu slug={metier.slug} />
      <FooterCTA />
    </main>
  );
}
