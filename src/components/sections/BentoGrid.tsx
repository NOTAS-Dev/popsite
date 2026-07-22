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
  { titre: 'On s’appelle', texte: '15 minutes pour cerner votre besoin.' },
  { titre: 'On vous montre', texte: 'Une maquette avant tout développement.' },
  { titre: 'On ajuste', texte: 'Vous dites ce qui ne va pas, on corrige.' },
  { titre: 'On met en ligne', texte: 'Publié. Et tout vous appartient.' },
];

export function BentoGrid() {
  return (
    <section id="pourquoi-nous" className="py-24 bg-grid-pattern relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              POURQUOI POPSITE
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
            Un interlocuteur direct, un site qui vous ressemble.
          </h2>
          <p className="text-zinc-600 text-base md:text-lg">
            Pas de jargon, pas d&rsquo;intermédiaire, pas de template recyclé.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte large : le déroulé */}
          <Reveal className="md:col-span-2" delay={0.05}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <Badge variant="default" icon={<Handshake className="w-3.5 h-3.5" />}>
                  Comment ça se passe
                </Badge>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Vous savez à tout moment où en est votre site.
                </h3>
                <p className="text-sm text-zinc-600 max-w-lg leading-relaxed">
                  Quatre étapes. Vous validez chacune avant la suivante.
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
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-zinc-200/70"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{e.titre}</p>
                      <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">{e.texte}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Carte : réactivité */}
          <Reveal delay={0.12}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  On répond vite.
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Vous parlez à la personne qui fait le site. Un message suffit, pas de ticket.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Carte : performance */}
          <Reveal delay={0.05}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                <Gauge className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  Des sites rapides.
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Next.js et images optimisées. Un site lent fait fuir les visiteurs.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Carte : mobile */}
          <Reveal delay={0.1}>
            <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  Pensé mobile d&rsquo;abord.
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  La plupart de vos visiteurs arrivent du téléphone. On commence par eux.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Carte sombre : sur-mesure + CTA */}
          <Reveal delay={0.15}>
            <div className="h-full relative overflow-hidden rounded-3xl bg-zinc-950 text-white p-6 md:p-8 flex flex-col justify-between gap-5 shadow-xl">
              <div className="absolute -top-20 -right-10 w-56 h-56 bg-indigo-600/30 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-indigo-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">100&nbsp;% sur-mesure.</h3>
                  <ul className="space-y-1.5 pt-1">
                    {['Aucun template revendu', 'Vos couleurs, vos textes, vos photos', 'Vous restez propriétaire'].map(
                      (item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
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
