import { CalProvider } from '@/components/CalProvider';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { MetiersMarquee } from '@/components/sections/MetiersMarquee';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Faq } from '@/components/sections/Faq';
import { FooterCTA } from '@/components/sections/FooterCTA';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFD] text-zinc-950 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Initialise le widget Cal.com pour tous les CTA de la page */}
      <CalProvider />

      <Navbar />

      {/* 1. Accroche + CTA principaux */}
      <Hero />

      {/* Bandeau des métiers */}
      <MetiersMarquee />

      {/* 2. Ce qu'on sait faire */}
      <Services />

      {/* 3. Nos réalisations (4 emplacements image) */}
      <Portfolio />

      {/* 4. Pourquoi Popsite */}
      <BentoGrid />

      {/* 5. Questions fréquentes */}
      <Faq />

      {/* 6. CTA final Cal.com + pied de page */}
      <FooterCTA />
    </main>
  );
}
