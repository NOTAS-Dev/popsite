'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'secondary' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer';

    const variants = {
      default:
        'bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:shadow-lg hover:shadow-zinc-900/10',
      primary:
        'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white hover:opacity-95 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35',
      outline:
        'bg-white/80 backdrop-blur-md border border-zinc-200/90 text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm',
      secondary:
        'bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 border border-zinc-200/50',
      ghost: 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80',
      pill: 'bg-white text-zinc-950 font-semibold shadow-md hover:shadow-xl hover:bg-zinc-50 border border-zinc-200/80 transition-all duration-300',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 h-8 gap-1.5',
      md: 'text-sm px-5 py-2.5 h-11 gap-2',
      lg: 'text-base px-7 py-3.5 h-13 gap-2.5',
      icon: 'h-10 w-10 p-0 rounded-full',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
