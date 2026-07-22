'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Sparkles,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Maximize2,
  CheckCircle,
} from 'lucide-react';
import { BookingModal } from '@/components/sections/BookingModal';

interface Project {
  id: string;
  title: string;
  client: string;
  category: 'SaaS' | 'E-commerce' | 'Site Vitrine' | 'Landing Page';
  imageGradient: string;
  mockupContent: {
    heroText: string;
    subText: string;
    accentColor: string;
    statsText: string;
  };
  metric: string;
  duration: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Aura AI — Plateforme de Génération IA',
    client: 'Aura Labs Paris',
    category: 'SaaS',
    imageGradient: 'from-slate-950 via-indigo-950 to-purple-950',
    mockupContent: {
      heroText: 'L’intelligence artificielle au service de vos workflows.',
      subText: 'Automations complexes, API Next.js 15 & intégration OpenAI.',
      accentColor: 'from-indigo-500 to-purple-500',
      statsText: '+420% d’inscriptions en 30 jours',
    },
    metric: '+350% Conversions',
    duration: 'Livré en 9 jours',
    tags: ['Next.js', 'Tailwind', 'Stripe', 'Framer Motion'],
    description:
      'Conception d’un SaaS B2B ultra-épuré en Dark/Glassmorphic mode avec tunnel de paiement Stripe et dashboard client réactif.',
  },
  {
    id: 'proj-2',
    title: 'Maison Botanica — Cosmeceutique Bio',
    client: 'Maison Botanica',
    category: 'E-commerce',
    imageGradient: 'from-stone-900 via-emerald-950 to-zinc-900',
    mockupContent: {
      heroText: 'Soins naturels d’exception issus des Alpes françaises.',
      subText: 'Expérience d’achat immersive & panier instantané.',
      accentColor: 'from-emerald-400 to-teal-400',
      statsText: '1.8s Temps de chargement global',
    },
    metric: 'Score 100/100 Mobile',
    duration: 'Livré en 12 jours',
    tags: ['Headless E-commerce', 'Shopify API', 'Tailwind CSS'],
    description:
      'Boutique en ligne headless ultra-rapide axée sur la beauté naturelle, combinant visuels haute définition et checkout instantané.',
  },
  {
    id: 'proj-3',
    title: 'KRONOS — Cabinet d’Audit & Conseil',
    client: 'Kronos Partners',
    category: 'Site Vitrine',
    imageGradient: 'from-zinc-950 via-blue-950 to-slate-900',
    mockupContent: {
      heroText: 'Conseil stratégique pour entreprises du CAC 40.',
      subText: 'Architecture institutionnelle & prise de RDV directe.',
      accentColor: 'from-blue-500 to-indigo-500',
      statsText: '3.2m€ de contrats générés',
    },
    metric: 'x3 Demandes de devis',
    duration: 'Livré en 8 jours',
    tags: ['Next.js App Router', 'Sanity CMS', 'Calendly'],
    description:
      'Site vitrine haute couture pour cabinet de conseil financier avec intégration de CMS headless et prise de rendez-vous fluide.',
  },
  {
    id: 'proj-4',
    title: 'Velocity — Application de Micro-Mobilité',
    client: 'Velocity Mobility',
    category: 'Landing Page',
    imageGradient: 'from-slate-900 via-rose-950 to-zinc-950',
    mockupContent: {
      heroText: 'Réservez votre vélomoteur en 2 clics dans Paris.',
      subText: 'Page de lancement à très fort impact visuel & vidéo 3D.',
      accentColor: 'from-rose-500 to-amber-500',
      statsText: '14 000 précommandes',
    },
    metric: '22% Taux de clic CTA',
    duration: 'Livré en 5 jours',
    tags: ['Landing Page', 'Framer Motion', 'Micro-interactions'],
    description:
      'Landing page de pré-lancement à fort taux d’engagement avec animations au défilement et capture d’emails automatisée.',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['Tous', 'SaaS', 'E-commerce', 'Site Vitrine', 'Landing Page'];

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FCFCFD] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              RÉALISATIONS
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
              Projets récents &amp; explorations.
            </h2>
            <p className="text-zinc-600 text-base max-w-xl">
              Chaque projet est conçu sur-mesure pour allier esthétique d'avant-garde et conversion maximale.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-white border border-zinc-200/90 rounded-2xl shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid 2x2 */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200/80 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Mockup Preview Area */}
                <div
                  className={`relative p-6 md:p-8 bg-gradient-to-br ${project.imageGradient} text-white min-h-[260px] flex flex-col justify-between overflow-hidden cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Decorative Glass Lines */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                  {/* Top Bar inside mockup */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-zinc-300 uppercase px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                      {project.category}
                    </span>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-md">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.metric}
                    </span>
                  </div>

                  {/* Mockup Inner Body */}
                  <div className="my-6 space-y-2 z-10 group-hover:translate-y-[-2px] transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-300 line-clamp-2">
                      {project.mockupContent.heroText}
                    </p>
                  </div>

                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20">
                    <span className="bg-white text-zinc-950 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-indigo-600" />
                      Aperçu détaillé
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 space-y-4 bg-white">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                    <span className="font-semibold text-zinc-900">{project.client}</span>
                    <span className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3 h-3" /> {project.duration}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-zinc-600 bg-zinc-100/80 px-2.5 py-0.5 rounded-full border border-zinc-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-xs font-bold text-zinc-900 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                    >
                      Projet similaire <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 border border-zinc-200 shadow-2xl relative space-y-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100"
            >
              ✕
            </button>

            <div className="space-y-2">
              <Badge variant="purple">{selectedProject.category}</Badge>
              <h3 className="text-2xl font-bold text-zinc-950">{selectedProject.title}</h3>
              <p className="text-sm text-zinc-500">Client: {selectedProject.client}</p>
            </div>

            <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedProject.imageGradient} text-white space-y-3`}>
              <p className="text-base font-semibold">{selectedProject.mockupContent.heroText}</p>
              <p className="text-xs text-zinc-300">{selectedProject.mockupContent.subText}</p>
              <div className="pt-2 flex items-center gap-2">
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                  {selectedProject.mockupContent.statsText}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="rounded-full"
              >
                Fermer
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedProject(null);
                  setIsModalOpen(true);
                }}
                className="rounded-full"
              >
                Obtenir la même performance
              </Button>
            </div>
          </div>
        </div>
      )}

      <BookingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
