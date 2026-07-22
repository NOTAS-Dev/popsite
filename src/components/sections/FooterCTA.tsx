'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Calendar, ArrowUpRight, Heart, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';
import { BookingModal } from '@/components/sections/BookingModal';

export function FooterCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="relative bg-zinc-950 text-white pt-20 pb-12 overflow-hidden">
      {/* Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[16vw] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap z-0">
        POPSITE
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl p-8 md:p-14 text-center space-y-6 overflow-hidden shadow-2xl"
        >
          {/* Subtle Grid overlay inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <Badge variant="dark" icon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}>
            PRÊT À FAIRE DÉCOLLER VOTRE ACTIVITÉ ?
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Racontez-nous votre prochain projet.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Réservez un appel de 15 minutes pour recevoir un diagnostic gratuit et votre devis personnalisé sous 24h.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="pill"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2 text-zinc-950">
                <Calendar className="w-4 h-4 text-indigo-600" />
                Réserver un appel (15 min)
                <ArrowUpRight className="w-4 h-4 text-indigo-600" />
              </span>
            </Button>
          </div>

          <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5 pt-2 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Sans engagement • Devis gratuit sous 24h
          </p>
        </motion.div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 text-xs text-zinc-400">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
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
            <p className="text-zinc-400 leading-relaxed">
              L'agence web nouvelle génération qui crée des sites sur-mesure, ultra-rapides et taillés pour convertir.
            </p>
            <div className="flex items-center gap-3 text-zinc-400 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> Paris, France</span>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="#pourquoi-nous" className="hover:text-white transition-colors">Pourquoi Popsite</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Services &amp; Tarifs</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-zinc-400">Landing Pages Haute Conversion</span></li>
              <li><span className="text-zinc-400">Sites Vitrines Sur-Mesure</span></li>
              <li><span className="text-zinc-400">E-Commerce Headless</span></li>
              <li><span className="text-zinc-400">Applications Web Next.js</span></li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact &amp; Réseaux</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@popsite.fr" className="hover:text-white transition-colors flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-indigo-400" /> contact@popsite.fr</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
              <li><a href="https://github.com/NOTAS-Dev/popsite" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Popsite Studio. Tous droits réservés. `popsite.fr`</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> &amp; Next.js 15 par Popsite Studio
          </p>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </footer>
  );
}
