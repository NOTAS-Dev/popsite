import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { Portfolio } from '@/components/sections/Portfolio';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { FooterCTA } from '@/components/sections/FooterCTA';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFD] text-zinc-950 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Floating Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Infinite Tech Marquee */}
      <TechMarquee />

      {/* Selected Works / Portfolio */}
      <Portfolio />

      {/* "Pourquoi Popsite" Bento Grid */}
      <BentoGrid />

      {/* Pricing & Services */}
      <Pricing />

      {/* Interactive Accordion FAQ */}
      <Faq />

      {/* Final Call To Action & Footer */}
      <FooterCTA />
    </main>
  );
}
