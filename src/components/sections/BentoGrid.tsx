'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton } from '@/components/CtaButtons';
import {
  Sparkles,
  MessageCircle,
  Gauge,
  Palette,
  Smartphone,
  Handshake,
  Check,
} from 'lucide-react';

const etapes = [
  { titre: '1. On s’appelle', texte: '15 minutes pour cerner précisément votre vision.' },
  { titre: '2. Maquette 3D', texte: 'Une maquette interactive avant tout développement.' },
  { titre: '3. Ajustements', texte: 'Ajustements en direct selon vos remarques.' },
  { titre: '4. Mise en ligne', texte: 'Site publié. 100% de la propriété vous appartient.' },
];

export function BentoGrid() {
  return (
    <section id="pourquoi-nous" className="py-24 bg-white bg-grid-pattern relative border-t border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
              NOTRE ENGAGEMENT
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Un interlocuteur direct, un rendu d’exception.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg font-normal">
            Pas de jargon, pas d’intermédiaire, pas de template réutilisé.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte large : le déroulé */}
          <Reveal className="md:col-span-2" delay={0.05}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <Badge variant="default" icon={<Handshake className="w-3.5 h-3.5 text-zinc-950" />}>
                  PROCESSUS CLAIR
                </Badge>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Vous suivez la création à chaque étape.
                </h3>
                <p className="text-sm text-zinc-500 max-w-lg leading-relaxed font-normal">
                  Quatre étapes simples. Vous validez chaque rendu avant le passage à la phase suivante.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {etapes.map((e, i) => (
                  <motion.div
                    key={e.titre}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-950 text-white text-[11px] font-mono font-bold flex items-center justify-center shadow-xs">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{e.titre}</p>
                      <p className="text-xs text-zinc-500 leading-relaxed mt-0.5 font-normal">{e.texte}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Carte : réactivité */}
          <Reveal delay={0.1}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/10">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  Réponse directe.
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Vous échangez directement avec le designer qui conçoit votre site.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Carte : performance */}
          <Reveal delay={0.05}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/10">
                <Gauge className="w-4 h-4" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  Vitesse instantanée.
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Architecture Next.js optimisée pour un score de performance maximal sur Google.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Carte : mobile */}
          <Reveal delay={0.1}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/10">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  Mobile First.
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Plus de 70% de vos clients consultent depuis leur smartphone. Expérience mobile irréprochable.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Carte sombre : sur-mesure + CTA */}
          <Reveal delay={0.15}>
            <div className="h-full relative overflow-hidden rounded-3xl bg-zinc-950 text-white p-6 md:p-8 flex flex-col justify-between gap-5 shadow-2xl">
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">100% sur-mesure.</h3>
                  <ul className="space-y-2 pt-1">
                    {['Aucun template revendu', 'Votre identité visuelle unique', 'Code & domaine à vous à 100%'].map(
                      (item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-300 font-normal">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <BookCallButton variant="light" size="sm" className="relative z-10 w-full">
                En discuter
              </BookCallButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
