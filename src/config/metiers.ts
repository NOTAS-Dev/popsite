/**
 * Pages métier — source unique de vérité.
 *
 * Chaque entrée génère une page statique `/creation-site-<slug>` ciblant une
 * intention de recherche précise (« création site internet <métier> »).
 * Objectif SEO : une page = un métier = une intention, plutôt qu'une seule
 * page d'accueil qui tente de tout couvrir.
 *
 * Ciblage NATIONAL (choix validé) : aucune ville n'est mentionnée. Le jour où
 * Popsite vise une zone précise, on déclinera ces pages par ville.
 *
 * RÈGLE DE CONTENU : rien d'inventé. Aucun chiffre de résultat, aucun faux
 * avis, aucune référence client fictive. On décrit ce que Popsite fait, pas
 * des performances qu'on ne peut pas prouver.
 *
 * Pour ajouter un métier : ajouter une entrée ici (+ son icône). La route, le
 * sitemap et le maillage interne se mettent à jour automatiquement.
 */
import type { LucideIcon } from 'lucide-react';
import { Wrench, Zap, UtensilsCrossed, Blocks, HardHat, Ruler } from 'lucide-react';

export interface Argument {
  titre: string;
  texte: string;
}

export interface MetierFaq {
  question: string;
  answer: string;
}

export interface Metier {
  /** Segment d'URL : /creation-site-<slug>. */
  slug: string;
  /** Icône lucide affichée dans les cartes de maillage. */
  icon: LucideIcon;
  /** Le métier au singulier, tel qu'employé dans les phrases (« un plombier »). */
  metier: string;
  /** Étiquette courte pour les listes de liens (« Plombier »). */
  label: string;
  /** Balise <title> — viser 50-60 caractères. */
  titleTag: string;
  /** Meta description — viser 150-160 caractères. */
  metaDescription: string;
  /** H1 de la page. */
  h1: string;
  /** Sous-titre sous le H1. */
  accroche: string;
  /** Paragraphe d'introduction (2-3 phrases). */
  intro: string;
  /** « Pourquoi un site quand on est <métier> » — 3 arguments. */
  arguments: Argument[];
  /** Fonctionnalités clés adaptées au métier — 4 éléments. */
  fonctionnalites: Argument[];
  /** Questions fréquentes propres au métier — 3 éléments. */
  faq: MetierFaq[];
}

export const metiers: Metier[] = [
  {
    slug: 'plombier',
    icon: Wrench,
    metier: 'plombier',
    label: 'Plombier',
    titleTag: 'Création de site internet pour plombier | Popsite',
    metaDescription:
      'Popsite crée le site web de votre entreprise de plomberie : demande de devis, numéro d’urgence, avis clients et référencement local. Site livré en quelques jours.',
    h1: 'Création de site internet pour plombier',
    accroche:
      'Un site qui transforme les recherches « plombier près de chez moi » en demandes de devis dans votre boîte mail.',
    intro:
      'Quand une fuite se déclare, votre futur client cherche un plombier sur Google et appelle le premier qui inspire confiance. Popsite conçoit un site clair et rapide qui met en avant vos interventions, vos zones couvertes et un moyen de vous contacter en un geste.',
    arguments: [
      {
        titre: 'Capter les demandes d’urgence',
        texte:
          'Un bouton d’appel visible et un formulaire de contact direct pour que le client vous joigne au moment précis où il a besoin de vous.',
      },
      {
        titre: 'Rassurer avant même le premier appel',
        texte:
          'Vos prestations, vos garanties et vos réalisations présentées proprement : le prospect sait à qui il a affaire avant de composer votre numéro.',
      },
      {
        titre: 'Être trouvé dans votre secteur',
        texte:
          'Un site structuré pour le référencement local, pensé pour remonter sur les recherches de plomberie dans les communes que vous desservez.',
      },
    ],
    fonctionnalites: [
      {
        titre: 'Demande de devis en ligne',
        texte: 'Un formulaire relié à votre mail : le client décrit son besoin, vous recevez tout d’un coup.',
      },
      {
        titre: 'Zones d’intervention',
        texte: 'Une carte et la liste des communes que vous couvrez, pour lever le doute « intervenez-vous chez moi ? ».',
      },
      {
        titre: 'Avis clients',
        texte: 'Vos avis Google mis en avant pour installer la confiance dès la page d’accueil.',
      },
      {
        titre: 'Prise de rendez-vous',
        texte: 'Un module de réservation pour les interventions non urgentes, sans échange de mails interminable.',
      },
    ],
    faq: [
      {
        question: 'Le site pourra-t-il afficher un numéro d’urgence bien visible ?',
        answer:
          'Oui. On place un bouton d’appel en évidence sur mobile, cliquable en un geste, puisque la majorité des recherches de plombier se font depuis un téléphone.',
      },
      {
        question: 'Puis-je présenter mes différentes prestations (dépannage, rénovation, chauffage) ?',
        answer:
          'Bien sûr. Chaque type de prestation peut avoir sa section dédiée, avec le détail de ce que vous proposez et les zones concernées.',
      },
      {
        question: 'Vais-je pouvoir mettre à jour mes tarifs ou mes photos moi-même ?',
        answer:
          'Selon la formule choisie, on peut vous donner un accès simple pour modifier textes et photos, ou s’en charger pour vous à la demande.',
      },
    ],
  },
  {
    slug: 'electricien',
    icon: Zap,
    metier: 'électricien',
    label: 'Électricien',
    titleTag: 'Création de site internet pour électricien | Popsite',
    metaDescription:
      'Popsite crée le site web de votre entreprise d’électricité : mise en valeur de vos prestations, demande de devis, avis clients et référencement local.',
    h1: 'Création de site internet pour électricien',
    accroche:
      'Un site professionnel qui met en confiance et transforme vos visiteurs en demandes de devis.',
    intro:
      'Installation, mise aux normes, dépannage, borne de recharge : vos clients cherchent un électricien de confiance avant de confier leur installation. Popsite construit un site qui présente clairement vos compétences et facilite la prise de contact.',
    arguments: [
      {
        titre: 'Inspirer la confiance',
        texte:
          'L’électricité ne pardonne pas l’amateurisme. Un site soigné signale immédiatement le sérieux de votre entreprise.',
      },
      {
        titre: 'Valoriser vos certifications',
        texte:
          'Qualifications, assurances et garanties mises en avant là où le prospect les cherche : sur votre site, pas ailleurs.',
      },
      {
        titre: 'Générer des demandes qualifiées',
        texte:
          'Un formulaire de devis qui vous fait gagner du temps en récupérant les informations utiles dès le premier contact.',
      },
    ],
    fonctionnalites: [
      {
        titre: 'Catalogue de prestations',
        texte: 'Installation, rénovation, mise aux normes, bornes de recharge : chaque service présenté clairement.',
      },
      {
        titre: 'Demande de devis structurée',
        texte: 'Le client précise son besoin et vous recevez une demande exploitable directement par mail.',
      },
      {
        titre: 'Mise en avant des garanties',
        texte: 'Assurance décennale, certifications et labels affichés pour rassurer avant l’appel.',
      },
      {
        titre: 'Zones d’intervention',
        texte: 'La liste des communes desservies, pour attirer une clientèle locale et éviter les demandes hors zone.',
      },
    ],
    faq: [
      {
        question: 'Puis-je mettre en avant mes qualifications et assurances ?',
        answer:
          'Oui, c’est même recommandé. On réserve un emplacement dédié à vos certifications et à votre assurance décennale, un vrai argument de confiance.',
      },
      {
        question: 'Le site peut-il présenter plusieurs types de prestations séparément ?',
        answer:
          'Absolument. Installation, dépannage, mise aux normes ou bornes de recharge peuvent chacun avoir leur section détaillée.',
      },
      {
        question: 'Combien de temps faut-il pour mettre le site en ligne ?',
        answer:
          'En général quelques jours ouvrés une fois vos informations et photos réunies. Un calendrier vous est communiqué dès le premier échange.',
      },
    ],
  },
  {
    slug: 'restaurant',
    icon: UtensilsCrossed,
    metier: 'restaurant',
    label: 'Restaurant',
    titleTag: 'Création de site internet pour restaurant | Popsite',
    metaDescription:
      'Popsite crée le site web de votre restaurant : menu en ligne, réservation de table sans commission, galerie photos et référencement local. Livré en quelques jours.',
    h1: 'Création de site internet pour restaurant',
    accroche:
      'Menu, réservation et ambiance réunis sur un site qui donne faim et remplit vos tables.',
    intro:
      'Avant de réserver, vos clients regardent votre carte, vos photos et vos avis. Popsite crée un site qui met votre cuisine en valeur et permet de réserver une table directement, sans commission d’une plateforme externe.',
    arguments: [
      {
        titre: 'Donner envie au premier regard',
        texte:
          'De belles photos de vos plats et de votre salle, chargées instantanément, donnent envie de pousser la porte.',
      },
      {
        titre: 'Récupérer vos réservations',
        texte:
          'Un module de réservation sur votre propre site vous évite les commissions prélevées par les plateformes à chaque couvert.',
      },
      {
        titre: 'Toujours à jour',
        texte:
          'Menu de saison, horaires, jours de fermeture : les informations que vos clients cherchent vraiment, faciles à actualiser.',
      },
    ],
    fonctionnalites: [
      {
        titre: 'Menu en ligne',
        texte: 'Votre carte présentée proprement, mise à jour au fil des saisons, consultable sur mobile.',
      },
      {
        titre: 'Réservation de table',
        texte: 'Un module de réservation directe, sans commission, relié à votre organisation.',
      },
      {
        titre: 'Galerie photos',
        texte: 'Vos plats, votre salle et votre équipe mis en valeur en haute définition.',
      },
      {
        titre: 'Infos pratiques',
        texte: 'Horaires, accès, contact et lien vers votre fiche Google, réunis au même endroit.',
      },
    ],
    faq: [
      {
        question: 'Puis-je gérer les réservations sans payer de commission ?',
        answer:
          'Oui. On intègre un module de réservation sur votre propre site : vous gardez la main sur vos couverts, sans commission prélevée par une plateforme.',
      },
      {
        question: 'Le menu sera-t-il facile à mettre à jour ?',
        answer:
          'Oui, le menu est conçu pour être actualisé simplement à chaque changement de carte, sans refaire le site.',
      },
      {
        question: 'Le site sera-t-il agréable à consulter sur téléphone ?',
        answer:
          'Impérativement. La plupart de vos clients consultent votre carte sur mobile : le site est pensé mobile d’abord, avec un chargement rapide.',
      },
    ],
  },
  {
    slug: 'macon',
    icon: Blocks,
    metier: 'maçon',
    label: 'Maçon',
    titleTag: 'Création de site internet pour maçon | Popsite',
    metaDescription:
      'Popsite crée le site web de votre entreprise de maçonnerie : galerie de chantiers, demande de devis, zones d’intervention et référencement local.',
    h1: 'Création de site internet pour maçon',
    accroche:
      'Un site qui montre vos chantiers et transforme les visiteurs en demandes de devis sérieuses.',
    intro:
      'Gros œuvre, rénovation, extension : la maçonnerie se juge sur le rendu. Popsite conçoit un site qui met vos réalisations en avant et donne au client tous les éléments pour vous confier son projet en confiance.',
    arguments: [
      {
        titre: 'Prouver par l’exemple',
        texte:
          'Une galerie avant / après de vos chantiers vaut mieux qu’un long discours. On la met au centre du site.',
      },
      {
        titre: 'Filtrer les bonnes demandes',
        texte:
          'Un formulaire de devis qui récupère les informations utiles pour ne traiter que les projets qui vous correspondent.',
      },
      {
        titre: 'Asseoir votre sérieux',
        texte:
          'Assurance décennale, garanties et zones couvertes affichées clairement pour rassurer avant le premier rendez-vous.',
      },
    ],
    fonctionnalites: [
      {
        titre: 'Galerie de chantiers',
        texte: 'Vos réalisations en avant / après, en haute définition, pour démontrer votre savoir-faire.',
      },
      {
        titre: 'Demande de devis',
        texte: 'Un formulaire relié à votre mail où le client décrit son projet dès le premier contact.',
      },
      {
        titre: 'Zones d’intervention',
        texte: 'Les communes que vous couvrez, pour attirer une clientèle locale et pertinente.',
      },
      {
        titre: 'Garanties mises en avant',
        texte: 'Assurance décennale et garanties affichées là où le client les attend.',
      },
    ],
    faq: [
      {
        question: 'Puis-je présenter mes chantiers en photo ?',
        answer:
          'Oui, c’est le cœur du site. On met en place une galerie avant / après optimisée, qui reste rapide à charger même avec de nombreuses photos.',
      },
      {
        question: 'Le site peut-il séparer gros œuvre, rénovation et extension ?',
        answer:
          'Bien sûr. Chaque type de prestation peut avoir sa section, avec les photos et les explications correspondantes.',
      },
      {
        question: 'Pourrai-je ajouter de nouveaux chantiers au fil du temps ?',
        answer:
          'Oui. Selon la formule, vous pouvez ajouter vos réalisations vous-même, ou nous confier la mise à jour à la demande.',
      },
    ],
  },
  {
    slug: 'couvreur',
    icon: HardHat,
    metier: 'couvreur',
    label: 'Couvreur',
    titleTag: 'Création de site internet pour couvreur | Popsite',
    metaDescription:
      'Popsite crée le site web de votre entreprise de couverture : réalisations, demande de devis, urgences toiture, zones d’intervention et référencement local.',
    h1: 'Création de site internet pour couvreur',
    accroche:
      'Un site qui met en avant vos toitures et capte les demandes de devis dans votre secteur.',
    intro:
      'Réfection de toiture, zinguerie, entretien, urgence après intempéries : le client veut un couvreur fiable et joignable. Popsite conçoit un site qui présente vos réalisations et facilite la prise de contact, y compris en urgence.',
    arguments: [
      {
        titre: 'Répondre à l’urgence',
        texte:
          'Après une tempête, le client cherche vite. Un bouton d’appel visible et un formulaire direct vous placent en première ligne.',
      },
      {
        titre: 'Montrer la qualité du travail',
        texte:
          'Une toiture bien faite se voit. Une galerie de vos chantiers installe la confiance avant même le devis.',
      },
      {
        titre: 'Couvrir votre zone',
        texte:
          'Un site structuré pour le référencement local, pour remonter sur les recherches de couverture dans vos communes.',
      },
    ],
    fonctionnalites: [
      {
        titre: 'Galerie de réalisations',
        texte: 'Réfections, zinguerie et rénovations présentées en photos haute définition.',
      },
      {
        titre: 'Contact d’urgence',
        texte: 'Un bouton d’appel bien visible sur mobile pour les demandes après intempéries.',
      },
      {
        titre: 'Demande de devis',
        texte: 'Un formulaire où le client décrit l’état de sa toiture et son besoin.',
      },
      {
        titre: 'Zones d’intervention',
        texte: 'La liste des communes desservies, pour attirer les bonnes demandes.',
      },
    ],
    faq: [
      {
        question: 'Le site peut-il gérer les demandes urgentes après une tempête ?',
        answer:
          'Oui. On met en avant un bouton d’appel et un contact direct, pour que le client vous joigne immédiatement quand la toiture est touchée.',
      },
      {
        question: 'Puis-je montrer mes différents types de travaux (tuiles, ardoise, zinguerie) ?',
        answer:
          'Absolument. Chaque spécialité peut avoir sa section, avec les photos de chantiers correspondants.',
      },
      {
        question: 'Mes photos de toiture chargeront-elles rapidement ?',
        answer:
          'Oui. Les images sont optimisées automatiquement pour rester nettes tout en gardant un site rapide, y compris en 4G.',
      },
    ],
  },
  {
    slug: 'charpentier',
    icon: Ruler,
    metier: 'charpentier',
    label: 'Charpentier',
    titleTag: 'Création de site internet pour charpentier | Popsite',
    metaDescription:
      'Popsite crée le site web de votre entreprise de charpente : réalisations bois, demande de devis, savoir-faire mis en valeur et référencement local.',
    h1: 'Création de site internet pour charpentier',
    accroche:
      'Un site qui met votre travail du bois en valeur et attire des projets à votre mesure.',
    intro:
      'Charpente traditionnelle, ossature bois, rénovation : votre métier est un travail d’artisan que le client veut voir avant de s’engager. Popsite conçoit un site qui met en avant vos réalisations et la précision de votre savoir-faire.',
    arguments: [
      {
        titre: 'Mettre en valeur l’artisanat',
        texte:
          'La charpente est un travail noble. Un site soigné, à la hauteur de vos réalisations, en donne d’emblée la juste image.',
      },
      {
        titre: 'Attirer les beaux projets',
        texte:
          'En montrant clairement votre savoir-faire, vous attirez les clients qui recherchent précisément votre niveau d’exigence.',
      },
      {
        titre: 'Faciliter la prise de contact',
        texte:
          'Un formulaire de devis clair pour recueillir les projets et échanger sur les plans dès le premier contact.',
      },
    ],
    fonctionnalites: [
      {
        titre: 'Galerie de réalisations',
        texte: 'Charpentes, ossatures et rénovations présentées en photos haute définition.',
      },
      {
        titre: 'Présentation du savoir-faire',
        texte: 'Traditionnel, lamellé-collé, ossature bois : vos spécialités expliquées clairement.',
      },
      {
        titre: 'Demande de devis',
        texte: 'Un formulaire où le client décrit son projet et joint ses éléments.',
      },
      {
        titre: 'Zones d’intervention',
        texte: 'Les secteurs où vous intervenez, pour cibler une clientèle pertinente.',
      },
    ],
    faq: [
      {
        question: 'Puis-je présenter mes différentes techniques de charpente ?',
        answer:
          'Oui. Charpente traditionnelle, lamellé-collé ou ossature bois : chaque spécialité peut être présentée avec ses réalisations.',
      },
      {
        question: 'Le site mettra-t-il vraiment en valeur mes réalisations ?',
        answer:
          'C’est l’objectif. On construit une galerie soignée qui rend justice à la qualité de votre travail, sans ralentir le site.',
      },
      {
        question: 'Pourrai-je ajouter mes nouveaux chantiers ?',
        answer:
          'Oui. Selon la formule, vous ajoutez vos réalisations vous-même ou nous vous accompagnons pour la mise à jour.',
      },
    ],
  },
];

/** Recherche une entrée métier par son slug d'URL. */
export function getMetier(slug: string): Metier | undefined {
  return metiers.find((m) => m.slug === slug);
}

/** Slugs de tous les métiers — utilisé par generateStaticParams et le sitemap. */
export const metierSlugs = metiers.map((m) => m.slug);
