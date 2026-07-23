'use client';

import * as React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { metiers } from '@/config/metiers';

/**
 * Maillage interne depuis l'accueil vers les pages métier.
 *
 * Sans cette section, les pages /creation-site-<métier> seraient orphelines
 * (aucun lien entrant depuis le site) : Google les explorerait mal et elles ne
 * recevraient aucune autorité de la page d'accueil. Chaque carte est un lien
 * interne réel, pas une simple animation décorative.
 */
export function ExpertisesMetier() {
  return (
    <section id="metiers" className="py-24 bg-[#FCFCFD] relative border-t border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="max-w-2xl space-y-3">
          <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
            Expertises métier
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Un site pensé pour votre métier.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg font-normal">
            Chaque activité a ses attentes. Découvrez notre approche pour votre secteur.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metiers.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.slug} delay={i * 0.06}>
                <Link
                  href={`/creation-site-${m.slug}`}
                  className="group h-full flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-white shadow-2xs hover:shadow-xl hover:border-zinc-400 transition-all duration-500 p-6 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/10 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-950 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                      Site internet pour {m.label.toLowerCase()}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                      {m.accroche}
                    </p>
                  </div>

                  <span className="mt-auto pt-2 text-xs font-semibold text-zinc-950 group-hover:underline">
                    Voir la page {m.label.toLowerCase()}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
