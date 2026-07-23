'use client';

import * as React from 'react';
import Link from 'next/link';
import { Calendar, FileText, ArrowUpRight } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { cn } from '@/lib/utils';
import { CAL_LINK, CAL_URL, DEVIS_LINK } from '@/config/site';

/**
 * Ouvre la réservation Cal.com en superposition sur la page.
 * On empêche la navigation immédiatement (avant tout await, sinon
 * preventDefault n'a plus d'effet), puis on ouvre la popup.
 * Si le widget est indisponible, on retombe sur l'ouverture de cal.com.
 */
function ouvrirReservation(e: React.MouseEvent<HTMLAnchorElement>) {
  // Cmd/Ctrl/Maj + clic : l'utilisateur veut volontairement un nouvel onglet
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;

  e.preventDefault();

  getCalApi({ namespace: 'popsite' })
    .then((cal) => {
      cal('modal', { calLink: CAL_LINK, config: { layout: 'month_view' } });
    })
    .catch(() => {
      window.open(CAL_URL, '_blank', 'noopener,noreferrer');
    });
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer';

const styles = {
  primary:
    'bg-zinc-950 text-white hover:bg-zinc-800 shadow-md shadow-zinc-950/10',
  outline:
    'bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 shadow-xs',
  light:
    'bg-white text-zinc-950 hover:bg-zinc-100 border border-zinc-200/80 shadow-xs font-semibold',
  ghostDark:
    'bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20',
};

const sizes = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm md:text-base px-7 py-3.5',
};

type Variant = keyof typeof styles;
type Size = keyof typeof sizes;

export function BookCallButton({
  children = 'Réserver un appel',
  variant = 'primary',
  size = 'md',
  className,
  showIcon = true,
}: {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={ouvrirReservation}
      className={cn(base, styles[variant], sizes[size], className)}
    >
      {showIcon && <Calendar className="w-4 h-4 shrink-0" />}
      {children}
    </a>
  );
}

export function DevisButton({
  children = 'Demander un devis',
  variant = 'outline',
  size = 'md',
  className,
  showIcon = true,
}: {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showIcon?: boolean;
}) {
  const classes = cn(base, styles[variant], sizes[size], 'group', className);
  const contenu = (
    <>
      {showIcon && <FileText className="w-4 h-4 shrink-0" />}
      {children}
      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  // Lien interne (/devis) : next/link. Lien externe (http) ou mailto : <a>.
  if (DEVIS_LINK.startsWith('/')) {
    return (
      <Link href={DEVIS_LINK} className={classes}>
        {contenu}
      </Link>
    );
  }

  const isExternal = DEVIS_LINK.startsWith('http');
  return (
    <a
      href={DEVIS_LINK}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={classes}
    >
      {contenu}
    </a>
  );
}
