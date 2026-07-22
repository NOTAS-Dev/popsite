'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Sparkles,
  Calendar,
  Zap,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Layers,
} from 'lucide-react';
import { BookingModal } from '@/components/sections/BookingModal';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  delivery: string;
  features: string[];
  ctaText: string;
  gradientBorder?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 'landing',
    name: 'Landing Page & Vitrine',
    badge: 'Livraison Rapide',
    price: '1 490 €',
    period: 'paiement unique',
    description:
      'Parfait pour indépendants, consultants et startups qui veulent une présence web percutante et rentable rapidement.',
    delivery: 'Livré en 5 à 7 jours',
    features: [
      'Design 100% sur-mesure (Jusqu’à 3 sections / pages)',
      'Intégration Next.js 15 & Tailwind CSS v4',
      'Score 100/100 Lighthouse (Mobile & Desktop)',
      'Optimisation SEO & Balises OpenGraph',
      'Formulaire de contact & capture de leads',
      'Support & Révisions illimitées (14 jours)',
    ],
    ctaText: 'Démarrer ce projet',
  },
  {
    id: 'custom',
    name: 'Site Web Sur-Mesure & E-commerce',
    badge: '🔥 Le plus populaire',
    price: '2 490 €',
    period: 'paiement unique',
    description:
      'La solution complète pour entreprises et marques ambitieuses cherchant à dominer leur marché et maximiser leurs ventes.',
    popular: true,
    gradientBorder: true,
    delivery: 'Livré en 10 à 14 jours',
    features: [
      'Site multi-pages complet (Jusqu’à 8 pages)',
      'Headless E-commerce (Shopify/Stripe Integration)',
      'Animations Framer Motion & Micro-interactions',
      'Système CMS Headless (Sanity/Strapi)',
      'Module de réservation ou prise de RDV automatique',
      'Optimisation Core Web Vitals & SEO poussé',
      'Support prioritaire & Formation vidéo offerte',
    ],
    ctaText: 'Réserver ce pack',
  },
  {
    id: 'saas',
    name: 'Application Web & SaaS',
    badge: 'Projet Complexe',
    price: '4 990 €',
    period: 'ou sur devis',
    description:
      'Pour les plateformes SaaS, web-apps interactives et outils métiers nécessitant une architecture haut haut de gamme.',
    delivery: 'Sur devis (2 à 4 semaines)',
    features: [
      'Architecture Next.js App Router sur-mesure',
      'Base de données Supabase / PostgreSQL & Auth',
      'Dashboard administrateur & Client Portal',
      'Intégration Stripe Subscriptions / Recurring Payments',
      'API REST / GraphQL & Webhooks',
      'Tests de sécurité & Hébergement Vercel Enterprise',
      'Accompagnement technique continu (30 jours)',
    ],
    ctaText: 'Discuter du projet',
  },
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>('Site Web Sur-Mesure & E-commerce');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section id="tarifs" className="py-24 bg-white relative border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            OFFRES &amp; TARIFS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
            Des offres claires, sans coûts cachés.
          </h2>
          <p className="text-zinc-600 text-base md:text-lg">
            Investissez dans un actif web rentable et pérenne. Prix fixes, aucun frais mensuel récurrent imposé.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-zinc-950 text-white shadow-2xl scale-[1.03] border border-indigo-500/50'
                  : 'bg-white text-zinc-950 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-zinc-300'
              }`}
            >
              {/* Popular Glow Background */}
              {plan.popular && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-indigo-500/30 blur-2xl rounded-full pointer-events-none" />
              )}

              <div className="space-y-6">
                {/* Top Badge & Title */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      plan.popular
                        ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                        : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                    }`}
                  >
                    {plan.badge}
                  </span>
                  <span
                    className={`text-xs font-mono flex items-center gap-1 ${
                      plan.popular ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" /> {plan.delivery}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{plan.name}</h3>
                  <p className={`text-xs leading-relaxed ${plan.popular ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-zinc-200/20">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-xs ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-3 text-xs md:text-sm">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? 'text-indigo-400' : 'text-indigo-600'
                        }`}
                      />
                      <span className={plan.popular ? 'text-zinc-200' : 'text-zinc-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-auto">
                <Button
                  variant={plan.popular ? 'primary' : 'default'}
                  onClick={() => handleOpenPlan(plan.name)}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'shadow-lg shadow-indigo-500/30'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  {plan.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-2xl border border-zinc-200 shadow-2xs text-indigo-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-950">Garantie 100% Satisfait ou Révisé</h4>
              <p className="text-xs text-zinc-500">
                Paiement échelonné (50% au lancement, 50% après livraison finale).
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => handleOpenPlan('Demande personnalisée')}
            className="rounded-full text-xs font-semibold px-6"
          >
            Besoin d’une offre sur-mesure ?
          </Button>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        defaultPlan={selectedPlan}
      />
    </section>
  );
}
