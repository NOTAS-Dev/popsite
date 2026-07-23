import type { Metier } from '@/config/metiers';
import { siteConfig, CAL_URL } from '@/config/site';

/**
 * Données structurées d'une page métier.
 *
 * - Service : décrit la prestation « création de site internet pour <métier> »
 *   fournie par Popsite. Aucune donnée inventée (ni note, ni nombre d'avis).
 * - BreadcrumbList : fil d'Ariane Accueil › la page, pour un affichage propre
 *   dans les résultats Google.
 *
 * Composant serveur : le JSON est sérialisé au rendu, sans exécution côté client.
 */
export function MetierJsonLd({ metier }: { metier: Metier }) {
  const pageUrl = `${siteConfig.url}/creation-site-${metier.slug}`;

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Création de site internet pour ${metier.metier}`,
    name: metier.h1,
    description: metier.metaDescription,
    url: pageUrl,
    areaServed: { '@type': 'Country', name: 'France' },
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Réserver un appel',
      target: CAL_URL,
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: metier.h1,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
