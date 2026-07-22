'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

/**
 * Initialise une seule fois le widget Cal.com pour toute la page.
 * Tous les boutons portant `data-cal-link` ouvrent ensuite la popup de réservation.
 */
export function CalProvider() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'popsite' });
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#4f46e5' },
          dark: { 'cal-brand': '#818cf8' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })().catch(() => {
      // Le widget n'a pas pu charger : les CTA restent des liens vers cal.com.
    });
  }, []);

  return null;
}
