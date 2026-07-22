'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
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
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full border border-white/10 backdrop-blur-xl text-white transition-all duration-300 ${
            isScrolled
              ? 'bg-zinc-950/90 shadow-2xl py-2.5 px-4 md:px-6'
              : 'bg-zinc-900/90 shadow-xl py-3 px-5 md:px-7'
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                POPSITE<span className="text-indigo-400">.</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <BookCallButton variant="light" size="sm" showIcon={false}>
                Réserver un appel
              </BookCallButton>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-30 md:hidden bg-zinc-950/95 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl text-white space-y-4"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-white py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-white/10">
              <BookCallButton
                variant="light"
                className="w-full"
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
