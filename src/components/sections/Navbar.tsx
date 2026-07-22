'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BookCallButton } from '@/components/CtaButtons';
import { navLinks } from '@/config/site';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-3xl rounded-full border border-black/5 bg-white/70 backdrop-blur-xl text-zinc-900 shadow-lg shadow-black/[0.03] transition-all duration-300 ${
            isScrolled ? 'py-2 px-5 shadow-black/[0.06]' : 'py-2.5 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo minimalist prestige */}
            <a
              href="#"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center text-white text-[10px] font-mono font-bold shadow-xs">
                P
              </div>
              <span className="text-sm font-bold tracking-tight text-zinc-950">
                POPSITE<span className="text-zinc-400">.</span>
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <BookCallButton
                variant="primary"
                size="sm"
                showIcon={false}
                className="bg-zinc-950 text-white font-semibold text-xs px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm"
              >
                Réserver un appel
              </BookCallButton>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-black/5 transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-40 md:hidden bg-white/95 border border-black/5 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl text-zinc-900 space-y-4 max-w-lg mx-auto"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-700 hover:text-zinc-950 py-2 px-3 rounded-xl hover:bg-zinc-100/80 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-zinc-100">
              <BookCallButton
                variant="primary"
                className="w-full text-xs py-2.5"
                showIcon={false}
              >
                Réserver un appel
              </BookCallButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
