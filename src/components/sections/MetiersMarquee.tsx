'use client';

import * as React from 'react';

const metiers = [
  'Plombier',
  'Restaurant Gastronomique',
  'Coiffeur & Barber',
  'Cabinet d’Avocats',
  'Électricien',
  'Kinésithérapeute',
  'Boulangerie Artisanal',
  'Menuisier',
  'Photographe Pro',
  'Garage Automobile',
  'Cabinet Dentaire',
  'Fleuriste Luxe',
  'Maçon & Rénovation',
  'Coach Sportif',
  'Traiteur Événementiel',
  'Architecte d’Intérieur',
  'Vétérinaire',
  'Institut de Beauté',
  'Paysagiste',
  '… et le vôtre',
];

export function MetiersMarquee() {
  return (
    <section className="py-10 bg-white border-y border-zinc-200/60 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 mb-5 text-center">
        <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          — UN SITE D’EXCEPTION POUR CHAQUE MÉTIER —
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3">
          {[...metiers, ...metiers].map((metier, idx) => (
            <div
              key={`${metier}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-50/80 border border-zinc-200/70 shrink-0 hover:border-zinc-950 hover:bg-white hover:shadow-xs transition-all duration-300 group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 shrink-0" />
              <span className="text-xs font-semibold text-zinc-700 group-hover:text-zinc-950 transition-colors whitespace-nowrap">
                {metier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
