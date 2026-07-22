'use client';

import * as React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton, DevisButton } from '@/components/CtaButtons';
import { Logo } from '@/components/Logo';
import { Sparkles, Heart, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig, navLinks, CAL_URL } from '@/config/site';

export function FooterCTA() {
  return (
    <footer className="relative bg-zinc-950 text-white pt-20 pb-12 overflow-hidden">
      {/* Subtle watermark background typography */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[15vw] font-bold text-white/[0.02] tracking-tighter uppercase whitespace-nowrap z-0">
        POPSITE
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        {/* Final CTA Block */}
        <Reveal>
          <div
            id="reserver"
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-2xl space-y-8"
          >
            <div className="relative z-10 text-center space-y-5 max-w-2xl mx-auto">
              <div className="flex justify-center">
                <Badge variant="dark" icon={<Sparkles className="w-3.5 h-3.5 text-zinc-300" />}>
                  RÉSERVER UN APPEL
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Discutons de votre projet en 15 minutes.
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                Analyse de vos besoins et conseils personnalisés sans aucun engagement.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-300" /> 15 minutes
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Gratuit & Sans engagement
                </span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <BookCallButton variant="light" size="lg" className="w-full sm:w-auto">
                Réserver un appel (15 min)
              </BookCallButton>
              <DevisButton variant="ghostDark" size="lg" className="w-full sm:w-auto" />
            </div>
          </div>
        </Reveal>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 text-xs text-zinc-400">
          <div className="space-y-4">
            <Link href="/" aria-label="Popsite — accueil" className="flex items-center gap-2">
              <Logo variant="dark" size={28} />
            </Link>
            <p className="leading-relaxed">Création de sites web sur-mesure pour tous les métiers.</p>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {siteConfig.location}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2">
              <li>Sites vitrines d’exception</li>
              <li>Réservation &amp; paiement Stripe</li>
              <li>SEO &amp; référencement local</li>
              <li>Galeries &amp; devis en ligne</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" /> {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Réserver un appel
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <BookCallButton variant="light" size="sm" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Popsite. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3 h-3 text-zinc-400 fill-zinc-400" /> par Popsite Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
