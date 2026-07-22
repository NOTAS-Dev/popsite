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
import { faqItems } from '@/config/faq';



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
