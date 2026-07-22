'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { BookingModal } from '@/components/sections/BookingModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Pourquoi Nous', href: '#pourquoi-nous' },
    { name: 'Services & Tarifs', href: '#tarifs' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none transition-all duration-300">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-zinc-950/90 backdrop-blur-xl border border-white/10 shadow-2xl py-2.5 px-4 md:px-6 text-white'
              : 'bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-xl py-3 px-5 md:px-7 text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-0.5">
                POPSITE<span className="text-indigo-400">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs md:text-sm font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="pill"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden text-xs font-semibold px-4 py-2"
              >
                <span className="relative z-10 flex items-center gap-1.5 text-zinc-950">
                  Démarrer un projet
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-30 md:hidden bg-zinc-950/95 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl text-white space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-white py-2 px-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <Button
                variant="pill"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full justify-center py-3 text-sm"
              >
                Démarrer un projet
                <ArrowUpRight className="w-4 h-4 text-indigo-600 ml-1" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
