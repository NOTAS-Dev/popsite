/**
 * Questions fréquentes — source unique de vérité.
 *
 * Ce module ne porte pas de directive 'use client' : il est donc lisible
 * aussi bien par la section FAQ (composant client) que par le balisage
 * JSON-LD (composant serveur). Un tableau exporté depuis un composant
 * client devient une simple référence côté serveur, d'où ce fichier séparé.
 *
 * Google exige que le contenu balisé soit visible sur la page : toute
 * modification ici met à jour les deux en même temps.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Avec quels corps de métier travaillez-vous ?',
    answer:
      'Tous les secteurs : artisans, commerçants, restaurants, professions libérales, cabinets de santé, services et entreprises. La méthode reste la même : véhiculer la confiance, mettre en valeur vos prestations et générer des contacts qualifiés.',
  },
  {
    question: 'Je ne suis pas à l’aise avec les outils digitaux.',
    answer:
      'C’est tout à fait normal et prévu. Nous gérons 100% du côté technique. Nous vous posons simplement des questions claires sur votre activité et vos goûts, puis vous n’avez plus qu’à valider les aperçus.',
  },
  {
    question: 'Combien de temps faut-il pour créer le site ?',
    answer:
      'Généralement entre 5 et 10 jours ouvrés selon la complexité et les fonctionnalités souhaitées. Un calendrier précis vous est partagé dès le premier échange.',
  },
  {
    question: 'Peut-on ajouter des fonctionnalités spécifiques (réservation, devis, paiement) ?',
    answer:
      'Absolument. Nous intégrons les modules de réservation (ex: Cal.com, Calendly), paiements sécurisés (Stripe), formulaires de devis personnalisés, galeries HD ou avis clients selon vos besoins.',
  },
  {
    question: 'Le site sera-t-il bien référencé sur Google ?',
    answer:
      'Oui, nous appliquons l’ensemble des standards du SEO moderne : structure HTML5 sémantique, balises optimisées, vitesse de chargement instantanée et optimisation pour le référencement local.',
  },
  {
    question: 'À qui appartient le site web ?',
    answer:
      'Le nom de domaine, le code source et l’ensemble des visuels et contenus vous appartiennent intégralement à 100%.',
  },
];
