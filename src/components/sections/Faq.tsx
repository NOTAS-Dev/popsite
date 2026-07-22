'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'Combien de temps faut-il pour créer et livrer mon site web ?',
    answer:
      'Pour une Landing Page ou un site vitrine épuré, le délai moyen est de 5 à 7 jours ouvrés. Pour un site sur-mesure ou e-commerce complexe avec CMS, comptez 10 à 14 jours. Nous définissons un calendrier strict dès le premier appel.',
  },
  {
    question: 'Quelle est la différence entre Popsite et une agence web traditionnelle ?',
    answer:
      'Les agences traditionnelles utilisent souvent des templates WordPress lourds avec des dizaines de plugins obsolètes. Chez Popsite, nous développons sur-mesure avec Next.js 15 et Tailwind CSS. Résultat : un site 10x plus rapide (Score 100/100 Lighthouse), un SEO naturel exceptionnel et aucun bogue d’extension.',
  },
  {
    question: 'Comment fonctionnent les révisions illimitées ?',
    answer:
      'Votre satisfaction est notre priorité absolue. Nous vous présentons d’abord la maquette interactive. Vous pouvez demander autant de retouches (couleurs, typographies, disposition, contenus) que souhaité jusqu’à ce que le rendu final corresponde parfaitement à vos attentes.',
  },
  {
    question: 'Mon site sera-t-il optimisé pour le référencement Google (SEO) ?',
    answer:
      'Oui, absolument. Nous intégrons les meilleures pratiques SEO : balises HTML5 sémantiques, meta-données OpenGraph, génération automatique du sitemap.xml, compression d’images Next/Image et temps de chargement instantané indispensables pour le classement Google.',
  },
  {
    question: 'Qui est propriétaire du nom de domaine et du code du site ?',
    answer:
      'Vous êtes propriétaire à 100% du nom de domaine, des contenus et du code source. À la livraison finale, nous vous transférons la totalité du dépôt GitHub et la propriété du compte d’hébergement Vercel/Netlify sans aucun cadenas.',
  },
  {
    question: 'Proposez-vous une maintenance après le lancement ?',
    answer:
      'Chaque pack inclut 14 à 30 jours de support garanti post-lancement offert. Pour des évolutions régulières ou l’ajout de nouvelles pages au fil du temps, nous proposons des forfaits d’accompagnement flexibles sans engagement.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-[#FCFCFD] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            FOIRE AUX QUESTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
            Toutes vos réponses en toute transparence.
          </h2>
          <p className="text-zinc-600 text-base">
            Vous avez une question spécifique qui ne figure pas ici ? Discutons-en directement.
          </p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Support Pill */}
        <div className="text-center pt-4">
          <a
            href="mailto:contact@popsite.fr"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-indigo-600 bg-white border border-zinc-200/80 px-5 py-2.5 rounded-full shadow-2xs hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-indigo-500" />
            Une autre question ? Écrivez-nous à contact@popsite.fr
          </a>
        </div>
      </div>
    </section>
  );
}
