'use client';

import * as React from 'react';

/**
 * Bandeau défilant des métiers : renforce le positionnement universel
 * (« on fait des sites pour tout le monde ») dès le haut de page.
 */
const metiers = [
  'Plombier',
  'Restaurant',
  'Coiffeur',
  'Avocat',
  'Électricien',
  'Kinésithérapeute',
  'Boulangerie',
  'Menuisier',
  'Photographe',
  'Garage automobile',
  'Cabinet dentaire',
  'Fleuriste',
  'Maçon',
  'Coach sportif',
  'Traiteur',
  'Peintre en bâtiment',
  'Architecte',
  'Vétérinaire',
  'Institut de beauté',
  'Paysagiste',
  '… et le vôtre',
];

export function MetiersMarquee() {
  return (
    <section className="py-12 bg-white border-y border-zinc-200/80 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          — Un site pour chaque métier —
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3">
          {[...metiers, ...metiers].map((metier, idx) => (
            <div
              key={`${metier}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 shrink-0 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shrink-0" />
              <span className="text-xs md:text-sm font-semibold text-zinc-700 group-hover:text-indigo-600 transition-colors whitespace-nowrap">
                {metier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
