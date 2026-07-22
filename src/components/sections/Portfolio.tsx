'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton } from '@/components/CtaButtons';
import { Sparkles, ImageIcon, ArrowUpRight } from 'lucide-react';

interface Realisation {
  titre: string;
  description: string;
  tags: string[];
  /** Chemin du visuel dans /public — déposez simplement votre image à ce chemin. */
  image: string;
  /** Lien externe optionnel vers le site en ligne. */
  lien?: string;
}

/**
 * ================================================================
 * RÉALISATIONS — 4 emplacements image
 * ----------------------------------------------------------------
 * Pour ajouter un visuel : déposez le fichier au chemin `image`
 * indiqué ci-dessous (format conseillé : 1600 x 1000 px, ratio 16/10).
 * Tant que le fichier n'existe pas, un cadre « à venir » s'affiche
 * automatiquement — la mise en page ne bouge pas.
 * ================================================================
 */
const realisations: Realisation[] = [
  {
    /* REMPLACER : image réalisation 1 — Notas */
    image: '/realisations/notas.png',
    titre: 'Notas',
    description: 'Plateforme web sur-mesure, pensée pour un usage quotidien.',
    tags: ['Application web', 'Design sur-mesure', 'Next.js'],
  },
  {
    /* REMPLACER : image réalisation 2 — Auxilia */
    image: '/realisations/auxilia.png',
    titre: 'Auxilia',
    description: 'Site vitrine clair, services en avant et contact direct.',
    tags: ['Site vitrine', 'Prise de contact', 'Responsive'],
  },
  {
    /* REMPLACER : image réalisation 3 */
    image: '/realisations/projet-3.png',
    titre: 'Projet 3',
    description: 'Emplacement libre pour votre prochaine réalisation.',
    tags: ['À compléter'],
  },
  {
    /* REMPLACER : image réalisation 4 */
    image: '/realisations/projet-4.png',
    titre: 'Projet 4',
    description: 'Emplacement libre pour votre prochaine réalisation.',
    tags: ['À compléter'],
  },
];

/** Visuel du projet : image optimisée, avec repli propre si le fichier n'est pas encore déposé. */
function Visuel({ src, titre }: { src: string; titre: string }) {
  const [erreur, setErreur] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
      {!erreur ? (
        <Image
          src={src}
          alt={`Aperçu du site ${titre} réalisé par Popsite`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          onError={() => setErreur(true)}
        />
      ) : (
        /* Repli affiché tant que l'image n'a pas été déposée */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-50 to-zinc-100 border-2 border-dashed border-zinc-300/80">
          <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 shadow-sm">
            <ImageIcon className="w-5 h-5" />
          </div>
          <p className="text-xs font-semibold text-zinc-500">Visuel à venir</p>
          <code className="text-[10px] font-mono text-zinc-400 bg-white/80 border border-zinc-200 px-2 py-0.5 rounded">
            {src}
          </code>
        </div>
      )}
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="realisations" className="py-24 bg-[#FCFCFD] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="space-y-3 max-w-2xl">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            NOS RÉALISATIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
            Quelques projets qu&rsquo;on a construits.
          </h2>
          <p className="text-zinc-600 text-base">
            Chaque site est conçu de zéro, adapté au métier du client.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realisations.map((projet, i) => (
            <Reveal key={projet.titre} delay={i * 0.08}>
              <article className="group h-full bg-white rounded-3xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200/80 transition-all duration-500 overflow-hidden flex flex-col">
                <Visuel src={projet.image} titre={projet.titre} />

                <div className="p-6 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                      {projet.titre}
                    </h3>
                    {projet.lien && (
                      <a
                        href={projet.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 shrink-0"
                      >
                        Voir le site <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed">{projet.description}</p>

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
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-center">
          <p className="text-sm text-zinc-600">
            Envie du même pour votre activité ?
          </p>
          <BookCallButton size="sm">Réserver un appel</BookCallButton>
        </Reveal>
      </div>
    </section>
  );
}
