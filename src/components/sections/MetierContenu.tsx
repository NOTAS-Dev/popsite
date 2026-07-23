'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton, DevisButton } from '@/components/CtaButtons';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { metiers, getMetier } from '@/config/metiers';

/**
 * Corps d'une page métier. Le SEO (title, canonical, JSON-LD) est géré par la
 * route serveur ; ici on ne s'occupe que du contenu affiché et des animations.
 *
 * On reçoit le `slug` (une simple chaîne) plutôt que l'objet métier complet :
 * ce dernier contient `icon`, une fonction non sérialisable à la frontière
 * serveur → client. La donnée est résolue ici via l'import direct du module.
 */
export function MetierContenu({ slug }: { slug: string }) {
  const metier = getMetier(slug);
  if (!metier) return null;

  const autresMetiers = metiers.filter((m) => m.slug !== metier.slug);

  return (
    <>
      {/* Hero de la page métier */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-white bg-grid-pattern">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-zinc-200/40 via-zinc-100/30 to-zinc-300/20 blur-[130px] rounded-full pointer-events-none -z-10 opacity-70" />

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d’Ariane" className="flex justify-center">
            <ol className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <li>
                <Link href="/" className="hover:text-zinc-950 transition-colors">
                  Accueil
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-300" aria-hidden />
              <li className="text-zinc-950" aria-current="page">
                Site internet {metier.metier}
              </li>
            </ol>
          </nav>

          <Reveal y={16} className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
              Popsite — Sites pour {metier.label.toLowerCase()}s
            </Badge>
          </Reveal>

          <Reveal y={20} delay={0.05}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-zinc-950 leading-[1.08]">
              {metier.h1}
            </h1>
          </Reveal>

          <Reveal y={20} delay={0.1}>
            <p className="text-zinc-500 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
              {metier.accroche}
            </p>
          </Reveal>

          <Reveal y={20} delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <BookCallButton size="lg">Réserver un appel (15 min)</BookCallButton>
              <DevisButton size="lg" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-500 text-base leading-relaxed max-w-2xl mx-auto pt-4">
              {metier.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi un site quand on est <métier> */}
      <section className="py-20 md:py-24 bg-[#FCFCFD] border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          <Reveal className="max-w-2xl space-y-3">
            <Badge variant="default">Pourquoi un site</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Ce qu’un site apporte à votre activité de {metier.metier}.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metier.arguments.map((arg, i) => (
              <Reveal key={arg.titre} delay={i * 0.08}>
                <div className="h-full glass-card glass-card-hover rounded-3xl p-6 md:p-7 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/10">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">{arg.titre}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">{arg.texte}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités clés adaptées au métier */}
      <section className="py-20 md:py-24 bg-white border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          <Reveal className="max-w-2xl space-y-3">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
              Sur votre site
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Les fonctionnalités qui comptent pour un {metier.metier}.
            </h2>
            <p className="text-zinc-500 text-base font-normal">
              On adapte chaque site à votre réalité. Voici ce qu’on met le plus souvent en place.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metier.fonctionnalites.map((f, i) => (
              <Reveal key={f.titre} delay={i * 0.06}>
                <div className="h-full flex items-start gap-4 rounded-3xl border border-zinc-200/80 bg-white shadow-2xs p-6">
                  <div className="w-9 h-9 shrink-0 rounded-2xl bg-zinc-100 text-zinc-950 flex items-center justify-center border border-zinc-200/70">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-zinc-950 tracking-tight">{f.titre}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal">{f.texte}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ propre au métier */}
      <section className="py-20 md:py-24 bg-[#FCFCFD] border-t border-zinc-200/60">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
          <Reveal className="text-center space-y-4">
            <div className="flex justify-center">
              <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-950" />}>
                Questions fréquentes
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Vous êtes {metier.metier} et vous vous demandez…
            </h2>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="w-full border-t border-zinc-200">
              {metier.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-200 py-2">
                  <AccordionTrigger className="text-base font-semibold text-zinc-950 hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-zinc-500 leading-relaxed font-normal">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Maillage interne : autres métiers */}
      <section className="py-20 md:py-24 bg-white border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <Reveal className="max-w-2xl space-y-3">
            <Badge variant="default">Autres métiers</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Popsite conçoit aussi des sites pour…
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {autresMetiers.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.slug} delay={i * 0.05}>
                  <Link
                    href={`/creation-site-${m.slug}`}
                    className="group h-full flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white shadow-2xs hover:shadow-md hover:border-zinc-400 transition-all duration-300 p-4"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-zinc-100 text-zinc-950 flex items-center justify-center border border-zinc-200/70 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 group-hover:text-zinc-950 flex-1">
                      Site pour {m.label.toLowerCase()}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
