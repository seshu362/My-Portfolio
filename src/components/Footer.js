import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-white/5 py-10 px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-black tracking-tight text-white text-lg uppercase">
            G SESHU
          </span>
          <span className="text-xs text-[#D7E2EA]/50 font-light mt-0.5">
            Full Stack Developer &amp; 3D Web Creator • Hyderabad, India
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-[#D7E2EA]/60">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-[#D7E2EA]/40">
        © {new Date().getFullYear()} G Seshu. Designed &amp; Crafted with React, Framer Motion &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
