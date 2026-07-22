'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton } from '@/components/CtaButtons';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Sparkles, MessageCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Avec quels corps de métier travaillez-vous ?',
    answer:
      'Tous les secteurs : artisans, commerçants, restaurants, professions libérales, cabinets de santé, services et entreprises. La méthode reste la même : véhiculer la confiance, mettre en valeur vos prestations et générer des contacts qualifiés.',
  },
  {
    question: 'Je ne suis pas à l’aise avec les outils digitaux.',
    answer:
      'C’est tout à fait normal et prévu. Nous gérons 100% du côté technique. Nous vous posons simplement des questions claires sur votre activité et vos goûts, puis vous n’avez plus qu’à valider les aperçus.',
  },
  {
    question: 'Combien de temps faut-il pour créer le site ?',
    answer:
      'Généralement entre 5 et 10 jours ouvrés selon la complexité et les fonctionnalités souhaitées. Un calendrier précis vous est partagé dès le premier échange.',
  },
  {
    question: 'Peut-on ajouter des fonctionnalités spécifiques (réservation, devis, paiement) ?',
    answer:
      'Absolument. Nous intégrons les modules de réservation (ex: Cal.com, Calendly), paiements sécurisés (Stripe), formulaires de devis personnalisés, galeries HD ou avis clients selon vos besoins.',
  },
  {
    question: 'Le site sera-t-il bien référencé sur Google ?',
    answer:
      'Oui, nous appliquons l’ensemble des standards du SEO moderne : structure HTML5 sémantique, balises optimisées, vitesse de chargement instantanée et optimisation pour le référencement local.',
  },
  {
    question: 'À qui appartient le site web ?',
    answer:
      'Le nom de domaine, le code source et l’ensemble des visuels et contenus vous appartiennent intégralement à 100%.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-white relative border-t border-zinc-200/60">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
              QUESTIONS FRÉQUENTES
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Foire Aux Questions.
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full border-t border-zinc-200">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-200 py-2">
                <AccordionTrigger className="text-base font-semibold text-zinc-950 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-500 leading-relaxed font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-2xl bg-zinc-950 text-white items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-950">
                  Une question spécifique non abordée ?
                </p>
                <p className="text-xs text-zinc-500 mt-0.5 font-normal">Posez-la nous directement au téléphone.</p>
              </div>
            </div>
            <BookCallButton size="sm" className="w-full sm:w-auto shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
