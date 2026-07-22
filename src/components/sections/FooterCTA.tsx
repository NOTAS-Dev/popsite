'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { BookCallButton, DevisButton } from '@/components/CtaButtons';
import { Sparkles, Heart, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig, navLinks, CAL_URL } from '@/config/site';

export function FooterCTA() {
  return (
    <footer className="relative bg-zinc-950 text-white pt-20 pb-12 overflow-hidden">
      {/* Filigrane typographique */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[16vw] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap z-0">
        POPSITE
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        {/* Bloc CTA final */}
        <Reveal>
          <div
            id="reserver"
            className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl p-6 md:p-10 overflow-hidden shadow-2xl space-y-8"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 text-center space-y-5 max-w-2xl mx-auto">
              <div className="flex justify-center">
                <Badge variant="dark" icon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}>
                  RÉSERVER UN APPEL
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Parlons de votre site pendant 15 minutes.
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                On écoute votre besoin, on vous dit concrètement ce qu&rsquo;on peut faire.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" /> 15 minutes
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Sans engagement
                </span>
              </div>
            </div>

            {/* CTA principal : ouvre la popup Cal.com */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <BookCallButton variant="light" size="lg" className="w-full sm:w-auto">
                Réserver un appel (15 min)
              </BookCallButton>
              <DevisButton variant="ghostDark" size="lg" className="w-full sm:w-auto" />
            </div>
          </div>
        </Reveal>

        {/* Colonnes du pied de page */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 text-xs text-zinc-400">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </div>
              </div>
              <span className="text-base font-black tracking-tight text-white">
                POPSITE<span className="text-indigo-400">.</span>
              </span>
            </a>
            <p className="leading-relaxed">Sites web sur-mesure, tous métiers.</p>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {siteConfig.location}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h3>
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2">
              <li>Sites vitrines sur-mesure</li>
              <li>Réservation &amp; paiement en ligne</li>
              <li>Référencement SEO &amp; local</li>
              <li>Galeries &amp; demandes de devis</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" /> {siteConfig.email}
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
            Conçu avec <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> par Popsite
          </p>
        </div>
      </div>
    </footer>
  );
}
