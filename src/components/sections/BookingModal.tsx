'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar, Sparkles, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPlan?: string;
}

export function BookingModal({
  isOpen,
  onOpenChange,
  defaultPlan = 'Landing Page',
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(defaultPlan);
  const [budget, setBudget] = useState('2 000€ - 5 000€');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#3b82f6'],
      });
    }, 800);
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-6 md:p-8 bg-white border border-zinc-200/90 shadow-2xl rounded-3xl">
        {!isSubmitted ? (
          <>
            <DialogHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
                  Appel découverte offert (15 min)
                </Badge>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-zinc-950">
                Propulsez votre projet avec Popsite
              </DialogTitle>
              <DialogDescription className="text-zinc-600 text-sm">
                Obtenez une analyse personnalisée et un devis sous 24h avec un expert frontend.
              </DialogDescription>
            </DialogHeader>

            {/* Stepper Progress */}
            <div className="flex items-center gap-2 my-2">
              <div
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  step >= 1 ? 'bg-indigo-600' : 'bg-zinc-100'
                }`}
              />
              <div
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  step >= 2 ? 'bg-indigo-600' : 'bg-zinc-100'
                }`}
              />
            </div>

            {step === 1 ? (
              <div className="space-y-4 py-2">
                <div>
                  <label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider mb-2 block">
                    1. Type de projet
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      'Landing Page',
                      'Site Vitrine Sur-Mesure',
                      'E-Commerce Haute Performance',
                      'App Web / SaaS',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-2xl border text-left text-xs md:text-sm font-medium transition-all duration-200 ${
                          projectType === type
                            ? 'border-indigo-600 bg-indigo-50/60 text-indigo-950 font-semibold shadow-sm'
                            : 'border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100 text-zinc-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider mb-2 block">
                    2. Budget estimé
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['< 1 500 €', '1 500 € - 3 500 €', '3 500 € +'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                          budget === b
                            ? 'border-indigo-600 bg-indigo-600 text-white font-semibold shadow-sm'
                            : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <Button
                    onClick={() => setStep(2)}
                    className="w-full bg-zinc-900 text-white py-3 rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    Continuer vers vos coordonnées
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 py-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 mb-1 block">
                      Nom complet *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Alexandre Dupont"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 mb-1 block">
                      Email professionnel *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@entreprise.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 mb-1 block">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 mb-1 block">
                      Projet sélectionné
                    </label>
                    <div className="px-3.5 py-2.5 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-xl">
                      {projectType} ({budget})
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 mb-1 block">
                    Avez-vous des précisions ou un délai cible ?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Refonte complète, livraison souhaitée sous 2 semaines."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-full transition-all"
                  >
                    Retour
                  </button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full hover:opacity-95 shadow-md shadow-indigo-500/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" /> Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" /> Réserver mon créneau
                      </span>
                    )}
                  </Button>
                </div>

                <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Vos informations restent 100% confidentielles.
                </p>
              </form>
            )}
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-950">Demande bien reçue !</h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                Merci <span className="font-semibold text-zinc-900">{name || 'cher client'}</span>. Notre équipe va analyser vos besoins pour le projet <span className="font-semibold text-indigo-600">{projectType}</span> et vous recontacter à <span className="font-semibold text-zinc-900">{email}</span> sous moins de 24 heures.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-2xl text-xs text-zinc-500 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Un lien Google Meet vous a également été réservé en avant-première.</span>
            </div>
            <Button
              onClick={resetForm}
              className="bg-zinc-900 text-white rounded-full px-8 py-2.5 mt-2"
            >
              Fermer la fenêtre
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
