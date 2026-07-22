'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton } from '@/components/CtaButtons';
import { Sparkles, ImageIcon, ArrowUpRight } from 'lucide-react';

/**
 * Réalisations réellement livrées, uniquement.
 *
 * « Maison Flore » et « Cabinet Valmont » ont été retirés : c'étaient les noms
 * des maquettes fictives du Hero, présentés ici comme des projets livrés.
 *
 * La grille compte toujours TOTAL_EMPLACEMENTS cartes : les emplacements non
 * encore pourvus s'affichent comme « à venir » plutôt que d'être remplis par
 * un projet inventé. Pour ajouter un vrai projet, il suffit de compléter le
 * tableau ci-dessous et de déposer la capture dans public/realisations/.
 */
const TOTAL_EMPLACEMENTS = 4;

interface Realisation {
  titre: string;
  description: string;
  tags: string[];
  image: string;
  lien?: string;
}

const realisations: Realisation[] = [
  {
    image: '/realisations/atelier-bp.jpg',
    titre: 'Atelier B&P',
    description:
      'Bureau d’études et collectif d’artisans d’art à Paris. Galerie avant/après et demande de devis intégrée.',
    tags: ['Site vitrine', 'Artisanat & BTP', 'Demande de devis'],
    lien: 'https://atelier-bp-renovation.vercel.app/',
  },
  {
    image: '/realisations/notas.jpg',
    titre: 'Notas',
    description:
      'Plateforme de suivi des dossiers de vente pour les études notariales, avec tableau de bord et relances automatiques.',
    tags: ['Application web', 'Tableau de bord', 'Next.js'],
    lien: 'https://www.notas.fr/',
  },
  {
    image: '/realisations/checklistpro.jpg',
    titre: 'Check-list Pro',
    description:
      'Landing page d’une application d’inspection de flotte, avec redirection vers l’App Store et Google Play.',
    tags: ['Landing page', 'Application mobile', 'Transport'],
    lien: 'https://www.check-listpro.com/',
  },
  {
    image: '/realisations/auxilia.jpg',
    titre: 'AuxilIA',
    description:
      'Site d’un assistant téléphonique IA pour auto-écoles, avec prise de rendez-vous et espace client.',
    tags: ['Site vitrine', 'Prise de rendez-vous', 'Espace client'],
    lien: 'https://www.auxilia-connect.fr/',
  },
];

function Visuel({ src, titre }: { src: string; titre: string }) {
  const [erreur, setErreur] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border-b border-zinc-200/60">
      {!erreur ? (
        <Image
          src={src}
          alt={`Aperçu du site ${titre} réalisé par Popsite`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          onError={() => setErreur(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-50 border-2 border-dashed border-zinc-200">
          <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 shadow-2xs">
            <ImageIcon className="w-4 h-4 text-zinc-600" />
          </div>
          <p className="text-xs font-semibold text-zinc-600">Aperçu du projet</p>
          <code className="text-[10px] font-mono text-zinc-400 bg-white border border-zinc-200 px-2 py-0.5 rounded">
            {src}
          </code>
        </div>
      )}
    </div>
  );
}

/**
 * Carte d'un projet livré.
 *
 * La carte entière est cliquable quand `lien` est renseigné : c'est la zone de
 * clic attendue par un visiteur qui veut voir la réalisation. Le lien enveloppe
 * donc tout le contenu — un seul lien par carte, sans lien imbriqué, pour que
 * la navigation au clavier reste lisible (un seul arrêt de tabulation).
 */
function CarteProjet({ projet }: { projet: Realisation }) {
  const contenu = (
    <>
      <Visuel src={projet.image} titre={projet.titre} />

      <div className="p-6 space-y-3 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-zinc-950 tracking-tight">{projet.titre}</h3>
          {projet.lien && (
            <span className="text-xs font-semibold text-zinc-950 flex items-center gap-1 shrink-0 group-hover:underline">
              Voir le site
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          )}
        </div>

        <p className="text-sm text-zinc-500 leading-relaxed font-normal">{projet.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-zinc-100">
          {projet.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-zinc-600 bg-zinc-100/80 px-2.5 py-0.5 rounded-full border border-zinc-200/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const style =
    'group h-full bg-white rounded-3xl border border-zinc-200/80 shadow-2xs hover:shadow-xl hover:border-zinc-400 transition-all duration-500 overflow-hidden flex flex-col';

  if (!projet.lien) {
    return <article className={style}>{contenu}</article>;
  }

  return (
    <a
      href={projet.lien}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Voir le site ${projet.titre} (nouvel onglet)`}
      className={`${style} block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950`}
    >
      <article className="flex flex-col h-full">{contenu}</article>
    </a>
  );
}

/** Carte neutre pour un emplacement pas encore pourvu. */
function EmplacementLibre() {
  return (
    <article className="h-full rounded-3xl border-2 border-dashed border-zinc-200 bg-zinc-50/60 flex flex-col items-center justify-center text-center gap-3 p-10 min-h-[320px]">
      <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-2xs">
        <ImageIcon className="w-4 h-4 text-zinc-400" />
      </div>
      <p className="text-sm font-semibold text-zinc-600">Prochain projet</p>
      <p className="text-xs text-zinc-400 max-w-[22ch] leading-relaxed">
        Une nouvelle réalisation est publiée ici à chaque livraison.
      </p>
    </article>
  );
}

export function Portfolio() {
  const emplacementsLibres = Math.max(0, TOTAL_EMPLACEMENTS - realisations.length);

  return (
    <section id="realisations" className="py-24 bg-white relative border-t border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="space-y-3 max-w-2xl">
          <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
            PORTFOLIO & RÉALISATIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Quelques projets récemment livrés.
          </h2>
          <p className="text-zinc-500 text-base font-normal">
            Chaque projet est conçu de zéro, adapté à la vision et aux objectifs du client.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realisations.map((projet, i) => (
            <Reveal key={projet.titre} delay={i * 0.08}>
              <CarteProjet projet={projet} />
            </Reveal>
          ))}

          {Array.from({ length: emplacementsLibres }).map((_, i) => (
            <Reveal key={`libre-${i}`} delay={(realisations.length + i) * 0.08}>
              <EmplacementLibre />
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-center">
          <p className="text-sm text-zinc-500">
            Envie de concevoir le site de votre entreprise ?
          </p>
          <BookCallButton size="sm">Réserver un appel</BookCallButton>
        </Reveal>
      </div>
    </section>
  );
}
