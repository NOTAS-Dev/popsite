'use client';

import * as React from 'react';
import { Calendar, FileText, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CAL_LINK, CAL_URL, DEVIS_LINK } from '@/config/site';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer';

const styles = {
  primary:
    'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5',
  outline:
    'bg-white/80 backdrop-blur-md border border-zinc-200/90 text-zinc-900 hover:bg-white hover:border-zinc-300 shadow-sm hover:shadow-md hover:-translate-y-0.5',
  light:
    'bg-white text-zinc-950 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 border border-zinc-200/60',
  ghostDark:
    'bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5',
};

const sizes = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm md:text-base px-7 py-3.5',
};

type Variant = keyof typeof styles;
type Size = keyof typeof sizes;

/**
 * CTA « Réserver un appel ».
 * Ouvre la popup Cal.com si le widget est chargé (voir CalProvider),
 * sinon le lien ouvre simplement cal.com dans un nouvel onglet.
 */
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
      data-cal-namespace="popsite"
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={cn(base, styles[variant], sizes[size], className)}
    >
      {showIcon && <Calendar className="w-4 h-4 shrink-0" />}
      {children}
    </a>
  );
}

/** CTA secondaire « Demander un devis » — lien configurable via DEVIS_LINK. */
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
  const isExternal = DEVIS_LINK.startsWith('http');

  return (
    <a
      href={DEVIS_LINK}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, styles[variant], sizes[size], 'group', className)}
    >
      {showIcon && <FileText className="w-4 h-4 shrink-0" />}
      {children}
      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
