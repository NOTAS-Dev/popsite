'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Sparkles,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  Code2,
  Layout,
  Gauge,
  Sliders,
  ShieldCheck,
  Smartphone,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function BentoGrid() {
  // Card 1 state: Wireframe vs Final Design
  const [designMode, setDesignMode] = useState<'design' | 'wireframe'>('design');

  // Card 2 state: Lighthouse score counter animation
  const [score, setScore] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setScore((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(timer);
  }, []);

  // Card 3 state: Revision toggle switch
  const [revisionStatus, setRevisionStatus] = useState<
    'idle' | 'pending' | 'completed'
  >('idle');

  const handleRevisionToggle = () => {
    if (revisionStatus === 'idle') {
      setRevisionStatus('pending');
      setTimeout(() => {
        setRevisionStatus('completed');
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
        });
      }, 1200);
    } else {
      setRevisionStatus('idle');
    }
  };

  return (
    <section id="pourquoi-nous" className="py-24 bg-grid-pattern relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            L’AVANTAGE POPSITE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
            Conçu pour surpasser vos attentes à tous les niveaux.
          </h2>
          <p className="text-zinc-600 text-base md:text-lg">
            Nous avons supprimé les lourdeurs des agences traditionnelles pour créer un processus ultra-agile et orienté résultats.
          </p>
        </div>

        {/* Bento Grid Layout (4-5 Asymmetric Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Clarité & Design (Grande carte Col-Span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden glass-card-hover"
          >
            <div className="space-y-3 z-10">
              <div className="flex items-center justify-between">
                <Badge variant="default" icon={<Layout className="w-3.5 h-3.5" />}>
                  Clarté &amp; Direction Artistique
                </Badge>

                {/* Interactive Toggle Wireframe / Design */}
                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200 text-xs font-semibold">
                  <button
                    onClick={() => setDesignMode('wireframe')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      designMode === 'wireframe'
                        ? 'bg-white text-zinc-950 shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Wireframe
                  </button>
                  <button
                    onClick={() => setDesignMode('design')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      designMode === 'design'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Design High-End ✨
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-zinc-950">
                Du croquis fonctionnel à la perfection pixel près.
              </h3>
              <p className="text-sm text-zinc-600 max-w-lg leading-relaxed">
                Aucun template générique. Votre interface est dessinée sur-mesure pour capter l’attention immédiate de vos visiteurs dès les premières secondes.
              </p>
            </div>

            {/* Mock UI Canvas */}
            <div className="mt-8 p-6 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 transition-all duration-300">
              {designMode === 'design' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-wider opacity-80 block font-mono">
                        POPSITE STUDIO UI
                      </span>
                      <p className="text-sm font-bold">
                        Interface Épurée &amp; Micro-animations HSL
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center shadow-2xs">
                      <span className="text-[10px] text-zinc-400 block font-mono">RETENTION</span>
                      <span className="text-sm font-bold text-indigo-600">+85%</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center shadow-2xs">
                      <span className="text-[10px] text-zinc-400 block font-mono">UI FIDELITY</span>
                      <span className="text-sm font-bold text-purple-600">100% Pixel Perfect</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-zinc-200 text-center shadow-2xs">
                      <span className="text-[10px] text-zinc-400 block font-mono">RESPONSIVE</span>
                      <span className="text-sm font-bold text-emerald-600">4K &amp; Mobile</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 font-mono text-xs opacity-75">
                  <div className="h-8 border-2 border-dashed border-zinc-300 rounded-lg flex items-center justify-center text-zinc-400">
                    [ HEADER / LOGO + NAV CAPSULE ]
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 border-2 border-dashed border-zinc-300 rounded-lg flex items-center justify-center text-zinc-400">
                      [ H1 TITLE + CTA ]
                    </div>
                    <div className="h-16 border-2 border-dashed border-zinc-300 rounded-lg flex items-center justify-center text-zinc-400">
                      [ HERO SHOWCASE ]
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Card 2: Vitesse & SEO (Score Lighthouse 100/100) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between glass-card-hover bg-gradient-to-b from-white via-emerald-50/20 to-white"
          >
            <div className="space-y-3">
              <Badge variant="success" icon={<Gauge className="w-3.5 h-3.5" />}>
                Vitesse &amp; SEO
              </Badge>
              <h3 className="text-xl font-bold text-zinc-950">
                Score Lighthouse 100/100 Garanti
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Google adore la vitesse. Nos sites se chargent en moins de 0.5 seconde et occupent les premières positions de recherche.
              </p>
            </div>

            {/* Interactive Animated Gauge Counter */}
            <div className="my-6 p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-md text-center space-y-3">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-28 h-28 transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="#E2E8F0"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="#10B981"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={289}
                    strokeDashoffset={289 - (289 * score) / 100}
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-emerald-600 font-mono">
                    {score}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                    PERFORMANCE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 pt-2 text-[10px] font-semibold text-zinc-600">
                <span className="bg-emerald-50 p-1 rounded-md text-emerald-700">SEO 100</span>
                <span className="bg-emerald-50 p-1 rounded-md text-emerald-700">A11y 100</span>
                <span className="bg-emerald-50 p-1 rounded-md text-emerald-700">Best 100</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Révisions Illimitées & Agilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between glass-card-hover"
          >
            <div className="space-y-3">
              <Badge variant="purple" icon={<RefreshCw className="w-3.5 h-3.5" />}>
                Sérénité Totale
              </Badge>
              <h3 className="text-xl font-bold text-zinc-950">
                Révisions illimitées jusqu'à satisfaction
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Vous gardez le contrôle. Demandez autant d'ajustements que nécessaire avant et après la mise en ligne.
              </p>
            </div>

            {/* Interactive Toggle Switch Component */}
            <div className="my-6 p-5 rounded-2xl bg-zinc-900 text-white space-y-4 shadow-lg">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-300">Demander une retouche UI</span>
                <button
                  onClick={handleRevisionToggle}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                    revisionStatus !== 'idle' ? 'bg-emerald-500' : 'bg-zinc-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                      revisionStatus !== 'idle' ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-white/10 text-xs space-y-1">
                {revisionStatus === 'idle' && (
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" /> Cliquez sur le toggle pour simuler.
                  </span>
                )}
                {revisionStatus === 'pending' && (
                  <span className="text-amber-400 flex items-center gap-1.5 animate-pulse font-semibold">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Retouche en cours par Popsite...
                  </span>
                )}
                {revisionStatus === 'completed' && (
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Validée et mise en ligne sous 3h !
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Prêt à convertir (Grande carte Col-Span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between glass-card-hover bg-gradient-to-br from-white via-indigo-50/20 to-white"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="default" icon={<TrendingUp className="w-3.5 h-3.5 text-indigo-600" />}>
                  Conversion Boost
                </Badge>
                <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  +350% de leads en moyenne
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">
                Chaque bouton et section est pensé pour déclencher l'action.
              </h3>
              <p className="text-sm text-zinc-600 max-w-xl leading-relaxed">
                Copywriting incitatif, hiérarchie visuelle irréprochable et tunnels de conversion sans aucune friction pour maximiser votre ROI.
              </p>
            </div>

            {/* Growth Stat Comparison */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-100/80 border border-zinc-200/80">
                <span className="text-xs text-zinc-500 font-semibold block">Site Standard / WordPress</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-zinc-400">1.2%</span>
                  <span className="text-xs text-zinc-400">taux de conversion</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2">Chargement lent, rebond élevé.</p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-950 text-white border border-indigo-800 shadow-md">
                <span className="text-xs text-indigo-300 font-semibold block flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-400" /> Architecture Popsite
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-white">4.8%</span>
                  <span className="text-xs text-emerald-400 font-bold">+300% de croissance</span>
                </div>
                <p className="text-[11px] text-zinc-300 mt-2">Ultra-rapide, tunnel fluide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
