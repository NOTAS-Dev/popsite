'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Logo Popsite.
 *
 * La marque est dans `public/logo.png` (PNG transparent, 512x512).
 * Si le fichier venait à manquer, un repli « P » s'affiche automatiquement.
 *
 * `variant="dark"` = à utiliser sur fond sombre (le footer) : la marque
 * monochrome noire est inversée en blanc.
 */
export function Logo({
  variant = 'light',
  size = 24,
  showWordmark = true,
  className,
}: {
  variant?: 'light' | 'dark';
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  const [erreur, setErreur] = useState(false);
  const surFondSombre = variant === 'dark';

  return (
    <span className={cn('flex items-center gap-2', className)}>
      {!erreur ? (
        <Image
          src="/logo.png"
          alt="Popsite"
          width={size}
          height={size}
          priority
          className={cn('object-contain', surFondSombre && 'invert')}
          style={{ width: size, height: size }}
          onError={() => setErreur(true)}
        />
      ) : (
        /* Repli si public/logo.png est introuvable */
        <span
          className={cn(
            'rounded-full flex items-center justify-center font-mono font-bold shrink-0',
            surFondSombre ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
          )}
          style={{ width: size, height: size, fontSize: size * 0.42 }}
        >
          P
        </span>
      )}

      {showWordmark && (
        <span
          className={cn(
            'font-bold tracking-tight',
            surFondSombre ? 'text-white' : 'text-zinc-950'
          )}
          style={{ fontSize: size * 0.58 }}
        >
          POPSITE
          <span className={surFondSombre ? 'text-zinc-500' : 'text-zinc-400'}>.</span>
        </span>
      )}
    </span>
  );
}
