/**
 * Configuration centralisée du site Popsite.
 * Tous les liens externes se modifient ICI, à un seul endroit.
 */

/** Lien de prise de rendez-vous Cal.com (CTA « Réserver un appel »). */
export const CAL_LINK = 'kenzo-fernandez-hh1hgw/15min';

/** URL complète Cal.com, utilisée en fallback si le widget ne charge pas. */
export const CAL_URL = `https://cal.com/${CAL_LINK}`;

/**
 * Lien du CTA « Demander un devis » : la page /devis (formulaire structuré).
 * Remplace l'ancien mailto brut, pour disposer d'une page indexable et d'un
 * formulaire qui récupère les informations utiles dès le premier contact.
 */
export const DEVIS_LINK = '/devis';

export const siteConfig = {
  name: 'Popsite',
  // Toujours la version « www » : popsite.fr redirige en 308 vers www.popsite.fr.
  // Doit rester identique au canonical de layout.tsx et au sitemap.
  url: 'https://www.popsite.fr',
  email: 'contact@popsite.fr',
  location: 'France',
  description:
    'Popsite crée des sites web sur-mesure pour tous les corps de métier. Site vitrine, réservation en ligne, paiement, SEO : dites-nous ce que vous voulez, on le construit.',
} as const;

/**
 * Liens de navigation (navbar + footer).
 * Préfixés par « / » et non par un simple « # » : depuis une page métier, une
 * ancre nue (#services) ne mène nulle part puisque la section n'existe que sur
 * l'accueil. « /#services » ramène à l'accueil au bon endroit depuis n'importe
 * quelle page.
 */
export const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Métiers', href: '/#metiers' },
  { name: 'Réalisations', href: '/#realisations' },
  { name: 'Pourquoi Popsite', href: '/#pourquoi-nous' },
  { name: 'Questions', href: '/#faq' },
] as const;
