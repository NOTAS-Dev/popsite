'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Calendar,
  Eye,
  CheckCircle2,
  TrendingUp,
  Zap,
  Globe,
  ArrowRight,
  Shield,
  Layers,
} from 'lucide-react';
import { BookingModal } from '@/components/sections/BookingModal';

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  speed: string;
  gradient: string;
  bgMockup: string;
  features: string[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'saas',
    title: 'NovaAI — SaaS B2B Automation',
    category: 'SaaS Platform',
    metric: '+340% Conversions',
    speed: '99/100 Mobile',
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    bgMockup: 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900',
    features: ['Dark glass UI', 'Stripe checkout ready', 'Micro-animations'],
  },
  {
    id: 'luxe',
    title: 'Maison Éthérée — Haute Horlogerie',
    category: 'Luxe E-Commerce',
    metric: '2.4s Temps de chargement',
    speed: '100/100 Desktop',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    bgMockup: 'bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900',
    features: ['Minimaliste 3D preview', 'Paiement Apple Pay', 'Multilingue i18n'],
  },
  {
    id: 'agency',
    title: 'Vortex — Agence IA & Growth',
    category: 'Site Vitrine & Lead Gen',
    metric: '18% Taux de conversion',
    speed: '98/100 Mobile',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-500',
    bgMockup: 'bg-gradient-to-br from-zinc-900 via-teal-950 to-zinc-900',
    features: ['Module de réservation calendly', 'SEO local #1', 'Design iridescent'],
  },
  {
    id: 'finance',
    title: 'Aura Capital — Private Banking',
    category: 'Finance & Fintech',
    metric: '+4.8m€ de leads générés',
    speed: '100/100 Core Web Vitals',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    bgMockup: 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900',
    features: ['Sécurité certifiée RGPD', 'Animations SVG interactives', 'Support 24/7'],
  },
];

export function Hero() {
  const [selectedId, setSelectedId] = useState<string>('saas');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeItem = showcaseItems.find((item) => item.id === selectedId) || showcaseItems[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-orange-400/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-8">
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center"
        >
          <Badge variant="purple" className="py-1.5 px-4 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse mr-1" />
            Sites Web Haute Performance &amp; Conversion
          </Badge>
        </motion.div>

        {/* H1 Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 max-w-4xl mx-auto leading-[1.08]"
        >
          Des sites web d’exception conçus pour{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            propulser votre activité.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Nous créons des expériences web modernes, ultra-rapides et taillées pour convertir vos visiteurs en clients fidèles.
        </motion.p>

        {/* Double CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 text-sm font-semibold rounded-full px-7 py-3.5"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-200" />
              Réserver un appel (15 min)
            </span>
          </Button>

          <a href="#portfolio" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-7 py-3.5 text-sm font-semibold border-zinc-200/90 hover:bg-zinc-50"
            >
              <Eye className="w-4 h-4 text-zinc-500 mr-2" />
              Voir nos projets
            </Button>
          </a>
        </motion.div>

        {/* Social Proof Trust Micro-Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs font-medium text-zinc-500"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Livré en 7 à 14 jours
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" /> 100/100 Score Lighthouse
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-indigo-500" /> Révisions illimitées
          </span>
        </motion.div>

        {/* Interactive Hero Showcase Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-10 max-w-5xl mx-auto"
        >
          {/* Showcase Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 p-1.5 bg-white/80 backdrop-blur-md border border-zinc-200/80 rounded-2xl w-fit mx-auto shadow-sm">
            {showcaseItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                  selectedId === item.id
                    ? 'bg-zinc-950 text-white shadow-md'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Browser Window Mockup */}
          <div className="relative rounded-3xl border border-zinc-200/90 bg-white shadow-2xl overflow-hidden glass-card">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/80 border-b border-zinc-200/80">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-zinc-200 text-[11px] font-mono text-zinc-500 shadow-inner max-w-xs w-full justify-center">
                <Globe className="w-3 h-3 text-emerald-500" />
                https://{activeItem.id}.popsite-demo.fr
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                <Zap className="w-3 h-3" /> {activeItem.speed}
              </div>
            </div>

            {/* Mockup Canvas */}
            <div className={`p-8 md:p-12 ${activeItem.bgMockup} text-white min-h-[380px] md:min-h-[440px] flex flex-col justify-between relative overflow-hidden transition-all duration-500`}>
              {/* Background Geometric Accents */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Showcase Top Bar inside mockup */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeItem.gradient}`} />
                  <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
                    {activeItem.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {activeItem.metric}
                </div>
              </div>

              {/* Showcase Main Hero inside mockup */}
              <div className="my-8 text-left space-y-4 max-w-xl z-10">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/10 inline-block">
                  Projet Végétal &amp; Digital
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {activeItem.title}
                </h3>
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                  Design épuré, animations fluides Framer Motion et architecture Next.js optimisée pour un taux de conversion maximal.
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeItem.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/10 flex items-center gap-1"
                    >
                      <Layers className="w-3 h-3 text-indigo-400" /> {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Showcase Bottom Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 z-10 text-xs text-zinc-400">
                <span>⚡ Chargement instantané en 0.4s</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1.5 text-white font-semibold hover:text-indigo-300 transition-colors"
                >
                  Obtenir un site similaire <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
