'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { BookCallButton, DevisButton } from '@/components/CtaButtons';
import {
  Sparkles,
  Globe,
  Wrench,
  UtensilsCrossed,
  Scale,
  Store,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';

interface ShowcaseTab {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  url: string;
  tagline: string;
  title: string;
  description: string;
  theme: 'dark' | 'light';
  stats: { label: string; value: string }[];
  features: string[];
  ctaText: string;
}

const tabs: ShowcaseTab[] = [
  {
    id: 'artisan',
    label: 'Artisan & BTP',
    category: 'Savoir-Faire',
    icon: Wrench,
    url: 'atelier-renovation.fr',
    tagline: 'Artisan d’Art & Rénovation Prestige',
    title: 'De l’artisanat d’exception capturé en haute définition.',
    description: 'Galerie interactive avant/après, estimation instantanée en ligne et prise de rdv directe sur votre chantier.',
    theme: 'dark',
    stats: [
      { label: 'Demandes / mois', value: '45+' },
      { label: 'Note Google', value: '4.9/5' },
    ],
    features: ['Devis instantané', 'Galerie HD 4K', 'Zone d’intervention GPS'],
    ctaText: 'Demander une estimation',
  },
  {
    id: 'restaurant',
    label: 'Gastronomie',
    category: 'Restaurant & Bar',
    icon: UtensilsCrossed,
    url: 'maison-lumiere.fr',
    tagline: 'Maison Lumière — Table Étoilée',
    title: 'Une expérience culinaire immersive dès le premier clic.',
    description: 'Menu de saison interactif, réservation de table sans commission et carte des vins numérisée.',
    theme: 'dark',
    stats: [
      { label: 'Couverts / mois', value: '620+' },
      { label: 'Commissions', value: '0 €' },
    ],
    features: ['Réservation directe', 'Menu dynamique', 'Accès & Valet'],
    ctaText: 'Réserver une table',
  },
  {
    id: 'liberal',
    label: 'Profession Libérale',
    category: 'Avocats & Conseil',
    icon: Scale,
    url: 'cabinet-valmont.fr',
    tagline: 'Cabinet Valmont & Associés',
    title: 'Une empreinte institutionnelle, moderne et rassurante.',
    description: 'Présentation des pôles d’expertise, prise de contact sécurisée et publication d’articles d’actualité juridique.',
    theme: 'light',
    stats: [
      { label: 'Conversion lead', value: '+35%' },
      { label: 'Disponibilité', value: '24/7' },
    ],
    features: ['Prise de rendez-vous', 'Fiches avocats', 'Espace documentaire'],
    ctaText: 'Consulter le cabinet',
  },
  {
    id: 'commerce',
    label: 'Boutique Luxe',
    category: 'Commerce & Retail',
    icon: Store,
    url: 'maison-flore.fr',
    tagline: 'Boutique & Créations Florales',
    title: 'Un e-commerce fluide digne des grandes maisons.',
    description: 'Paiement Apple Pay / Stripe en 1-click, option Click & Collect et abonnements floraux récurrents.',
    theme: 'light',
    stats: [
      { label: 'Ventes en ligne', value: '+140%' },
      { label: 'Temps de charge', value: '0.4s' },
    ],
    features: ['Paiement Apple Pay', 'Click & Collect', 'Abonnement'],
    ctaText: 'Explorer le catalogue',
  },
];

export function Hero() {
  const [activeTabId, setActiveTabId] = useState<string>('artisan');
  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];

  // Mouse tilt effect state
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.03);
    setRotateY(x * 0.03);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white bg-grid-pattern">
      {/* Background Micro Iridescent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-zinc-200/40 via-zinc-100/30 to-zinc-300/20 blur-[130px] rounded-full pointer-events-none -z-10 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-8">
        {/* Badge supérieur */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="inline-flex items-center justify-center"
        >
          <div className="border border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md text-zinc-600 text-[11px] font-mono tracking-wider uppercase px-3.5 py-1 rounded-full shadow-2xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
            POPSITE — CRÉATION DE SITES SUR-MESURE
          </div>
        </motion.div>

        {/* H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] text-zinc-950 max-w-4xl mx-auto leading-[1.08]"
        >
          Quel que soit votre métier,{' '}
          <span className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-600 bg-clip-text text-transparent">
            on crée votre site d’exception.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
          className="text-zinc-500 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Artisans, commerçants, restaurateurs, professions libérales et entreprises. Des sites ultra-rapides, sur-mesure et pensés pour convertir.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <BookCallButton size="lg" className="w-full sm:w-auto bg-zinc-950 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-zinc-800 transition-all shadow-md shadow-zinc-950/10">
            Réserver un appel (15 min)
          </BookCallButton>
          <DevisButton size="lg" className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-800 font-medium text-sm px-7 py-3.5 rounded-full hover:bg-zinc-50 transition-all" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex items-center justify-center gap-4 text-xs text-zinc-400 font-medium pt-1"
        >
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-950" /> 15 minutes sans engagement
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-950" /> Propriétaire à 100%
          </span>
        </motion.div>

        {/* Showcase Hero 3D Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.3 }}
          className="pt-10 max-w-5xl mx-auto"
        >
          {/* iOS-Style Pill Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-1 p-1.5 bg-zinc-100/90 backdrop-blur-xl border border-black/5 rounded-full w-fit mx-auto shadow-xs mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                    isActive ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHeroTab"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/[0.04] -z-10"
                    />
                  )}
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 3D Tilt Mockup Card */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="perspective-1000 transition-transform duration-200 ease-out"
          >
            <motion.div
              animate={{ rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative rounded-3xl border border-black/[0.08] bg-white shadow-2xl shadow-zinc-950/10 overflow-hidden transform-gpu"
            >
              {/* Top Browser Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-50/90 border-b border-zinc-200/80 gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600 max-w-sm w-full justify-center shadow-2xs truncate">
                  <Globe className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                  https://www.{activeTab.url}
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  EN LIGNE
                </div>
              </div>

              {/* Mockup Canvas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 md:p-12 text-left min-h-[380px] md:min-h-[440px] flex flex-col justify-between relative overflow-hidden ${
                    activeTab.theme === 'dark'
                      ? 'bg-zinc-950 text-white'
                      : 'bg-zinc-50 text-zinc-950'
                  }`}
                >
                  {/* Micro Iridescent Background Accent */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none" />

                  {/* Header info */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                        {activeTab.category}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        {activeTab.tagline}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {activeTab.stats.map((s, idx) => (
                        <div key={idx} className="hidden sm:block text-right">
                          <p className="text-xs font-bold font-mono">{s.value}</p>
                          <p className="text-[10px] text-zinc-400">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="my-8 space-y-5 max-w-2xl z-10">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                      {activeTab.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed ${
                      activeTab.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {activeTab.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeTab.features.map((feat) => (
                        <div
                          key={feat}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border ${
                            activeTab.theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-zinc-200'
                              : 'bg-white border-zinc-200 text-zinc-800 shadow-2xs'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5 text-zinc-400" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer callout */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-current/10 z-10">
                    <span className="text-xs text-zinc-400 font-medium">
                      Site réalisé sur-mesure en 7 jours par Popsite.
                    </span>
                    <button className={`text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all ${
                      activeTab.theme === 'dark'
                        ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                        : 'bg-zinc-950 text-white hover:bg-zinc-800'
                    }`}>
                      {activeTab.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
