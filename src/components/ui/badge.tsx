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
    'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 backdrop-blur-md';

  const variants = {
    default:
      'bg-indigo-50/80 text-indigo-700 border-indigo-200/70 shadow-sm shadow-indigo-100/50',
    outline:
      'bg-white/80 text-zinc-700 border-zinc-200/80 shadow-sm hover:border-zinc-300',
    purple:
      'bg-purple-50/80 text-purple-700 border-purple-200/70 shadow-sm shadow-purple-100/50',
    success:
      'bg-emerald-50/80 text-emerald-700 border-emerald-200/70 shadow-sm shadow-emerald-100/50',
    dark: 'bg-zinc-900/90 text-white border-white/10 shadow-md',
  };

  return (
    <div className={cn(base, variants[variant], className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
}
