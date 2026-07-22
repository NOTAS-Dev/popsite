import { faqItems } from '@/config/faq';
import { siteConfig, CAL_URL } from '@/config/site';

/**
 * Données structurées JSON-LD.
 *
 * - FAQPage : reprend exactement les questions affichées dans la section FAQ
 *   (Google refuse le balisage dont le contenu n'est pas visible sur la page).
 * - ProfessionalService : identité de l'entreprise.
 *
 * NOTE : aucune adresse ni ville n'est déclarée, car Popsite n'en a pas défini.
 * Pour viser le référencement local, il faudra ajouter `address` et `areaServed`
 * avec une vraie ville — une donnée inventée serait contre-productive.
 */
export function StructuredData() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const entreprise = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/opengraph-image.png`,
    areaServed: { '@type': 'Country', name: 'France' },
    serviceType: 'Création de sites web',
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Réserver un appel',
      target: CAL_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entreprise) }}
      />
    </>
  );
}
