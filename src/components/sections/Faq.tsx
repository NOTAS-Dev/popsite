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
    question: 'Vous travaillez avec quels métiers ?',
    answer:
      'Tous. Artisans, commerçants, restaurateurs, professions libérales, santé, associations, entreprises de services. Les besoins sont les mêmes partout : être trouvé, inspirer confiance, être contacté. On adapte le reste.',
  },
  {
    question: 'Je n’y connais rien en informatique.',
    answer:
      'C’est le cas de la plupart de nos clients. Rien à installer, rien à configurer. On vous pose des questions simples, on gère la technique, on vous montre le résultat.',
  },
  {
    question: 'Combien de temps ça prend ?',
    answer:
      'Ça dépend du projet : un site vitrine n’a rien à voir avec une boutique en ligne. On vous donne un délai ferme après le premier appel.',
  },
  {
    question: 'Je peux avoir une fonctionnalité particulière ?',
    answer:
      'Presque toujours oui : rendez-vous, paiement, espace client, galerie, devis, réservation, newsletter, multilingue. Décrivez-nous l’idée. Et si ce n’est pas réalisable, on vous le dit franchement.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer:
      'On met en place les bonnes fondations : structure propre, balises renseignées, chargement rapide, référencement local. Le résultat dépend aussi de votre concurrence et prend du temps — personne de sérieux ne vous garantira la première place.',
  },
  {
    question: 'Qui est propriétaire du site ?',
    answer:
      'Vous. Domaine, contenus et site vous appartiennent. Aucun abonnement obligatoire pour continuer à l’utiliser.',
  },
  {
    question: 'Et après la mise en ligne ?',
    answer:
      'On reste joignables. Correction, horaires, photos, nouvelle page : vous nous écrivez directement.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-[#FCFCFD] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
        <Reveal className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              QUESTIONS FRÉQUENTES
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
            Les questions qu&rsquo;on nous pose le plus.
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-2xl bg-indigo-50 border border-indigo-100 items-center justify-center text-indigo-600">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-950">
                  Votre question n&rsquo;est pas là ?
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">Posez-la au téléphone.</p>
              </div>
            </div>
            <BookCallButton size="sm" className="w-full sm:w-auto shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
