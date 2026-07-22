'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton, DevisButton } from '@/components/CtaButtons';
import {
  Sparkles,
  Globe2,
  Plug,
  Search,
  FileText,
  Images,
  Wand2,
  MessageSquare,
} from 'lucide-react';

const services = [
  {
    icon: Globe2,
    titre: 'Sites vitrines & sur-mesure',
    texte: 'Une page simple ou un site d’agence complet. Tous les métiers, sans exception.',
    tags: ['Site vitrine', 'Multi-pages', 'Landing page'],
  },
  {
    icon: Plug,
    titre: 'N’importe quelle intégration',
    texte: 'Rendez-vous, paiement Stripe, formulaires, avis Google, cartes. Si l’outil existe, on le branche.',
    tags: ['Cal.com', 'Paiement Stripe', 'Formulaires', 'Google Maps'],
  },
  {
    icon: Search,
    titre: 'Référencement SEO & GEO',
    texte: 'Être trouvé premier sur Google dans votre ville et votre secteur d’activité.',
    tags: ['SEO', 'SEO local', 'Fiche Google My Business'],
  },
  {
    icon: FileText,
    titre: 'Demandes de devis intégrées',
    texte: 'Un bouton de contact haut de gamme relié à votre boîte mail. Vos prospects écrivent en un clic.',
    tags: ['Formulaire', 'Mail direct', 'Suivi des leads'],
  },
  {
    icon: Images,
    titre: 'Galeries & visuels HD',
    texte: 'Chantiers, plats, produits, locaux. Photos optimisées, vitesse de chargement instantanée.',
    tags: ['Galerie HD', 'Avant / après', 'Carrousel 3D'],
  },
  {
    icon: Wand2,
    titre: 'Animations & design soigné',
    texte: 'Les détails et micro-interactions qui font qu’un site paraît d’exception dès la première seconde.',
    tags: ['Framer Motion', 'Responsive', 'Sur-mesure'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative border-t border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
              EXPERTISE & SERVICES
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Tout ce dont votre site a besoin.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg font-normal">
            Vous décrivez votre projet, nous concevons l’intégralité de la technique et du design.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.titre} delay={i * 0.06}>
                <div className="group h-full glass-card glass-card-hover rounded-3xl p-6 md:p-7 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/10 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-950 tracking-tight">{s.titre}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal">{s.texte}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-zinc-600 bg-zinc-100/80 px-2.5 py-0.5 rounded-full border border-zinc-200/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Demande particulière */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
            <div className="relative z-10 flex items-start gap-4">
              <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-2xl bg-white/10 border border-white/15 items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Une demande spécifique ?
                </h3>
                <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
                  Décrivez-nous votre projet au téléphone. Nous vous conseillerons les meilleures options.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <BookCallButton variant="light" className="w-full sm:w-auto" />
              <DevisButton variant="ghostDark" className="w-full sm:w-auto" showIcon={false} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
