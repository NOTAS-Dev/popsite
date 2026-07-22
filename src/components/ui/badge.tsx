'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'purple' | 'success' | 'dark';
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = 'default',
  icon,
  children,
  ...props
}: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full border transition-all duration-300 backdrop-blur-md';

  const variants = {
    default:
      'bg-zinc-50/80 text-zinc-600 border-zinc-200/80 shadow-xs hover:border-zinc-300',
    outline:
      'bg-white/80 text-zinc-700 border-zinc-200/80 shadow-xs hover:border-zinc-300',
    purple:
      'bg-zinc-50/90 text-zinc-700 border-zinc-200/90 shadow-2xl',
    success:
      'bg-emerald-50/80 text-emerald-800 border-emerald-200/70 shadow-xs',
    dark: 'bg-zinc-950 text-zinc-200 border-zinc-800 shadow-md',
  };

  return (
    <div className={cn(base, variants[variant], className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
}
