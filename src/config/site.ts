/**
 * Configuration centralisée du site Popsite.
 * Tous les liens externes se modifient ICI, à un seul endroit.
 */

/** Lien de prise de rendez-vous Cal.com (CTA « Réserver un appel »). */
export const CAL_LINK = 'kenzo-fernandez-hh1hgw/15min';

/** URL complète Cal.com, utilisée en fallback si le widget ne charge pas. */
export const CAL_URL = `https://cal.com/${CAL_LINK}`;

/**
 * Lien du CTA « Demander un devis ».
 * TODO : remplacer par le formulaire / lien externe définitif.
 * Pour l'instant : mailto pré-rempli en français.
 */
export const DEVIS_LINK =
  'mailto:contact@popsite.fr?subject=Demande%20de%20devis%20—%20Popsite&body=Bonjour%2C%0A%0AJe%20souhaite%20un%20devis%20pour%20mon%20site%20web.%0A%0AMon%20activit%C3%A9%20%3A%0AMon%20besoin%20%3A%0AMon%20d%C3%A9lai%20souhait%C3%A9%20%3A%0A%0AMerci%20%21';

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
