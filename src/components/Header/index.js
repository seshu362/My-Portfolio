import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import './index.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navbar only when scrolled down past hero top (scrollY > 80px)
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-5 sm:px-8 md:px-12 ${
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'opacity-0 -translate-y-full pointer-events-none py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl sm:text-2xl font-black uppercase tracking-wider text-white hover:text-purple-300 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#B600A8] to-[#4763FF] flex items-center justify-center text-xs font-mono font-bold text-white shadow-md">
            GS
          </span>
          <span className="tracking-tight">G SESHU</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/75 hover:text-white transition-colors relative py-1 group"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B600A8] to-[#4763FF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Resume Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Resume_Updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 hover:scale-105"
          >
            <FileText size={13} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#121212] border-b border-white/10 px-6 py-6 mt-3 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] hover:text-purple-300 py-1 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/Resume_Updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white"
                >
                  <FileText size={14} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;