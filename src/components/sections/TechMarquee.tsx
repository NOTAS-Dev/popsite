'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, Layers, Sparkles, Terminal, Code2, Server, Database, Lock } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const techItems: TechItem[] = [
  { name: 'Next.js 15 (App Router)', category: 'Framework React', icon: <Terminal className="w-4 h-4 text-zinc-800" /> },
  { name: 'Tailwind CSS v4', category: 'Styling engine', icon: <Code2 className="w-4 h-4 text-cyan-600" /> },
  { name: 'Framer Motion', category: 'Micro-animations', icon: <Sparkles className="w-4 h-4 text-purple-600" /> },
  { name: 'TypeScript Strict', category: 'Type Safety', icon: <ShieldCheck className="w-4 h-4 text-blue-600" /> },
  { name: 'Vercel Edge Network', category: 'CDN mondial', icon: <Server className="w-4 h-4 text-zinc-900" /> },
  { name: 'Supabase / PostgreSQL', category: 'Database & Auth', icon: <Database className="w-4 h-4 text-emerald-600" /> },
  { name: 'Stripe Payments', category: 'E-commerce infra', icon: <Lock className="w-4 h-4 text-indigo-600" /> },
  { name: 'Lighthouse 100/100', category: 'Performance Web', icon: <Zap className="w-4 h-4 text-amber-500" /> },
];

export function TechMarquee() {
  return (
    <section className="py-12 bg-white border-y border-zinc-200/80 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          — Infrastructures web modernes &amp; haute performance —
        </p>
      </div>

      {/* Marquee Wrapper with Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Ticker */}
        <div className="animate-marquee flex items-center gap-4">
          {[...techItems, ...techItems, ...techItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 backdrop-blur-md shrink-0 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-left">
                <span className="text-xs md:text-sm font-bold text-zinc-900 block leading-tight group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium block">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
