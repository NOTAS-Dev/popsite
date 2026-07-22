'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { BookCallButton, DevisButton } from '@/components/CtaButtons';
import {
  Sparkles,
  Globe,
  Layers,
  Wrench,
  UtensilsCrossed,
  Stethoscope,
  Store,
  Scale,
} from 'lucide-react';

/**
 * Aperçus illustratifs : ils montrent le type de site qu'on peut construire
 * pour chaque métier. Aucun chiffre, aucun nom de client — ce sont des exemples de rendu.
 */
interface Demo {
  id: string;
  metier: string;
  icon: React.ElementType;
  titre: string;
  accroche: string;
  bg: string;
  accent: string;
  briques: string[];
}

const demos: Demo[] = [
  {
    id: 'artisan',
    metier: 'Artisan',
    icon: Wrench,
    titre: 'Devis en ligne et galerie de chantiers',
    accroche: 'Vos réalisations en photo. Un bouton pour vous contacter.',
    bg: 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900',
    accent: 'from-indigo-500 to-purple-500',
    briques: ['Galerie avant / après', 'Formulaire de devis', 'Zone d’intervention'],
  },
  {
    id: 'restaurant',
    metier: 'Restaurant',
    icon: UtensilsCrossed,
    titre: 'Carte, horaires et réservation de table',
    accroche: 'Le menu toujours à jour. La réservation sur le site.',
    bg: 'bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900',
    accent: 'from-amber-500 to-orange-500',
    briques: ['Menu dynamique', 'Réservation en ligne', 'Google Maps'],
  },
  {
    id: 'sante',
    metier: 'Santé',
    icon: Stethoscope,
    titre: 'Prise de rendez-vous et infos patients',
    accroche: 'Un cabinet clair, rassurant, joignable en deux clics.',
    bg: 'bg-gradient-to-br from-zinc-900 via-teal-950 to-zinc-900',
    accent: 'from-emerald-500 to-teal-500',
    briques: ['Agenda en ligne', 'Fiches praticiens', 'Accès et horaires'],
  },
  {
    id: 'commerce',
    metier: 'Commerce',
    icon: Store,
    titre: 'Vitrine, catalogue et paiement en ligne',
    accroche: 'Vos produits en avant. Et le bouton pour acheter.',
    bg: 'bg-gradient-to-br from-slate-950 via-rose-950 to-zinc-900',
    accent: 'from-rose-500 to-pink-500',
    briques: ['Catalogue produits', 'Paiement sécurisé', 'Click & collect'],
  },
  {
    id: 'liberal',
    metier: 'Profession libérale',
    icon: Scale,
    titre: 'Présentation, expertises et contact',
    accroche: 'Une image sérieuse, dès la première seconde.',
    bg: 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900',
    accent: 'from-blue-500 to-indigo-500',
    briques: ['Domaines d’expertise', 'Prise de contact', 'Articles & actualités'],
  },
];

export function Hero() {
  const [selectedId, setSelectedId] = useState<string>('artisan');
  const active = demos.find((d) => d.id === selectedId) ?? demos[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Halos d'ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-orange-400/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center"
        >
          <Badge variant="purple" className="py-1.5 px-4 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse mr-1" />
            Création de sites web — tous les métiers
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 max-w-4xl mx-auto leading-[1.08]"
        >
          Quel que soit votre métier,{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            on vous crée le site qu&rsquo;il vous faut.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed"
        >
          Artisan, commerçant, restaurateur, profession libérale, entreprise. Des sites rapides,
          avec exactement ce qu&rsquo;il vous faut dedans.
        </motion.p>

        {/* CTA principal + secondaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <BookCallButton size="lg" className="w-full sm:w-auto">
            Réserver un appel (15 min)
          </BookCallButton>
          <DevisButton size="lg" className="w-full sm:w-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs font-medium text-zinc-500"
        >
          15 minutes, sans engagement.
        </motion.p>

        {/* Sélecteur de métier + maquette */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-10 max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
            Un aperçu par métier
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 p-1.5 bg-white/80 backdrop-blur-md border border-zinc-200/80 rounded-2xl w-fit mx-auto shadow-sm">
            {demos.map((d) => {
              const Icon = d.icon;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                    selectedId === d.id
                      ? 'bg-zinc-950 text-white shadow-md'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {d.metier}
                </button>
              );
            })}
          </div>

          {/* Fenêtre navigateur */}
          <div className="relative rounded-3xl border border-zinc-200/90 bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/80 border-b border-zinc-200/80 gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-zinc-200 text-[11px] font-mono text-zinc-500 max-w-xs w-full justify-center truncate">
                <Globe className="w-3 h-3 text-emerald-500 shrink-0" />
                votre-{active.id}.fr
              </div>
              <span className="hidden sm:block text-[11px] font-medium text-zinc-400 shrink-0">
                exemple de rendu
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className={`p-8 md:p-12 ${active.bg} text-white min-h-[340px] md:min-h-[400px] flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-2 z-10">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${active.accent}`} />
                  <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
                    {active.metier}
                  </span>
                </div>

                <div className="my-8 text-left space-y-4 max-w-xl z-10">
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {active.titre}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{active.accroche}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {active.briques.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/10 flex items-center gap-1"
                      >
                        <Layers className="w-3 h-3 text-indigo-400" /> {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 z-10 text-xs text-zinc-400">
                  <span>Votre métier n&rsquo;est pas listé ? On le fait aussi.</span>
                  <BookCallButton variant="ghostDark" size="sm" showIcon={false}>
                    En parler
                  </BookCallButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
