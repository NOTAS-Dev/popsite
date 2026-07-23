'use client';

import * as React from 'react';
import { useState } from 'react';
import { Send, CheckCircle2, Phone } from 'lucide-react';
import { metiers } from '@/config/metiers';
import { siteConfig } from '@/config/site';

/**
 * Formulaire de demande de devis.
 *
 * ENVOI — état actuel : à la soumission, on compose un e-mail pré-rempli
 * (mailto) vers contact@popsite.fr. Ce choix est volontaire : il fonctionne
 * partout, sans backend, sans clé d'API ni service tiers à configurer.
 *
 * POUR BRANCHER UN VRAI BACKEND plus tard (envoi silencieux, sans ouvrir le
 * client mail) : remplacer le corps de `handleSubmit` par un appel à une
 * Server Action ou à un service de formulaire. NE PAS réutiliser le Resend
 * d'un autre projet — Popsite doit avoir sa propre configuration d'envoi.
 * Tout le reste (champs, validation, états) est déjà en place.
 */

const delais = [
  'Dès que possible',
  'Sous 1 mois',
  'Sous 3 mois',
  'Pas de date précise',
];

const champInput =
  'w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-2xs transition-colors focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950/10';
const champLabel = 'block text-sm font-semibold text-zinc-800 mb-1.5';

export function DevisForm() {
  const [envoye, setEnvoye] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const nom = String(data.get('nom') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const telephone = String(data.get('telephone') ?? '').trim();
    const activite = String(data.get('activite') ?? '').trim();
    const delai = String(data.get('delai') ?? '').trim();
    const projet = String(data.get('projet') ?? '').trim();

    const sujet = `Demande de devis — ${activite || 'site web'} — ${nom}`;
    const corps = [
      `Nom : ${nom}`,
      `E-mail : ${email}`,
      telephone ? `Téléphone : ${telephone}` : null,
      `Activité : ${activite}`,
      `Délai souhaité : ${delai}`,
      '',
      'Projet :',
      projet,
    ]
      .filter((l) => l !== null)
      .join('\n');

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      sujet
    )}&body=${encodeURIComponent(corps)}`;

    // Ouvre le client mail de l'utilisateur avec le message pré-rempli.
    window.location.href = mailto;
    setEnvoye(true);
  }

  if (envoye) {
    return (
      <div className="rounded-3xl border border-emerald-200/70 bg-emerald-50/60 p-8 md:p-10 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-zinc-950">Votre message est prêt à partir.</h2>
        <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
          Votre logiciel de messagerie vient de s’ouvrir avec votre demande pré-remplie. Il ne vous
          reste qu’à l’envoyer. Rien ne s’est ouvert ? Écrivez-nous directement à{' '}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-zinc-950 underline">
            {siteConfig.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setEnvoye(false)}
          className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 underline"
        >
          Remplir une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-200/80 bg-white shadow-sm p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className={champLabel}>
            Nom <span className="text-zinc-400">*</span>
          </label>
          <input id="nom" name="nom" type="text" required autoComplete="name" className={champInput} placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="email" className={champLabel}>
            E-mail <span className="text-zinc-400">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={champInput} placeholder="vous@exemple.fr" />
        </div>
        <div>
          <label htmlFor="telephone" className={champLabel}>
            Téléphone
          </label>
          <input id="telephone" name="telephone" type="tel" autoComplete="tel" className={champInput} placeholder="06 12 34 56 78" />
        </div>
        <div>
          <label htmlFor="activite" className={champLabel}>
            Votre activité <span className="text-zinc-400">*</span>
          </label>
          <select id="activite" name="activite" required defaultValue="" className={champInput}>
            <option value="" disabled>
              Choisissez…
            </option>
            {metiers.map((m) => (
              <option key={m.slug} value={m.label}>
                {m.label}
              </option>
            ))}
            <option value="Autre activité">Autre activité</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="delai" className={champLabel}>
          Délai souhaité <span className="text-zinc-400">*</span>
        </label>
        <select id="delai" name="delai" required defaultValue={delais[0]} className={champInput}>
          {delais.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="projet" className={champLabel}>
          Votre projet <span className="text-zinc-400">*</span>
        </label>
        <textarea
          id="projet"
          name="projet"
          required
          rows={5}
          className={`${champInput} resize-y`}
          placeholder="Décrivez votre besoin : type de site, fonctionnalités souhaitées (devis en ligne, réservation, galerie…), ce que vous avez déjà (logo, photos, nom de domaine)…"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
        <p className="text-xs text-zinc-400 order-2 sm:order-1">
          <span className="text-zinc-400">*</span> Champs obligatoires. Vos informations ne servent
          qu’à vous recontacter.
        </p>
        <button
          type="submit"
          className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white font-medium text-sm px-7 py-3 hover:bg-zinc-800 transition-all shadow-md shadow-zinc-950/10 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
        >
          <Send className="w-4 h-4" />
          Envoyer ma demande
        </button>
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
        <Phone className="w-3.5 h-3.5 text-zinc-400" />
        Vous préférez en parler de vive voix ? Réservez un appel de 15 minutes depuis le bouton en
        haut de page.
      </div>
    </form>
  );
}
