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
  image: string;
  lien?: string;
}

const realisations: Realisation[] = [
  {
    image: '/realisations/notas.png',
    titre: 'Notas',
    description: 'Plateforme web d’ingénierie sur-mesure, ultra-rapide et responsive.',
    tags: ['Application web', 'Next.js', 'Design System'],
  },
  {
    image: '/realisations/auxilia.png',
    titre: 'Auxilia',
    description: 'Site vitrine institutionnel avec prise de rendez-vous et espace client.',
    tags: ['Site vitrine', 'Prise de contact', 'Responsive'],
  },
  {
    image: '/realisations/projet-3.png',
    titre: 'Maison Flore',
    description: 'Boutique en ligne haut de gamme et abonnements récurrents.',
    tags: ['E-Commerce', 'Stripe', 'Mobile First'],
  },
  {
    image: '/realisations/projet-4.png',
    titre: 'Cabinet Valmont',
    description: 'Site de cabinet d’avocats épuré, axé sur l’expertise et les publications.',
    tags: ['Profession Libérale', 'SEO Local', 'Sur-mesure'],
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

export function Portfolio() {
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
              <article className="group h-full bg-white rounded-3xl border border-zinc-200/80 shadow-2xs hover:shadow-xl hover:border-zinc-400 transition-all duration-500 overflow-hidden flex flex-col">
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
                        className="text-xs font-semibold text-zinc-950 hover:underline flex items-center gap-1 shrink-0"
                      >
                        Voir le site <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
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
              </article>
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
