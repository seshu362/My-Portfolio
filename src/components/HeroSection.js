import React from 'react';
import { motion } from 'framer-motion';
import Magnet from './common/Magnet';
import ContactButton from './common/ContactButton';
import { FileText } from 'lucide-react';

export default function HeroSection() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '/Resume_Updated.pdf' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. First Hero Navbar (Visible Initially at Top of Page) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0 }}
        className="w-full flex justify-between items-center px-6 md:px-12 pt-6 md:pt-8 z-30"
      >
        <div className="flex justify-between items-center w-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.label === 'Resume' ? '_blank' : undefined}
              rel={item.label === 'Resume' ? 'noopener noreferrer' : undefined}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-[1.35rem] transition-opacity duration-200 hover:opacity-70 flex items-center gap-1.5"
            >
              {item.label === 'Resume' && <FileText size={16} className="inline opacity-80" />}
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* 2. Giant Hero Heading - Elevated so 'SESHU' is 100% visible and unblocked */}
      <div className="w-full overflow-hidden text-center z-10 px-4 mt-1 sm:mt-2 md:mt-3">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[14.5vw] w-full select-none"
        >
          HI, I&apos;M SESHU
        </motion.h1>
      </div>

      {/* 3. Hero Center 3D Avatar - Grounded at bottom, sitting below the text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 pointer-events-auto"
      >
        <Magnet padding={120} strength={2.5}>
          <img
            src="/avatar-seshu-3d.png"
            alt="Seshu 3D Avatar"
            className="w-[220px] sm:w-[300px] md:w-[370px] lg:w-[420px] max-h-[48vh] sm:max-h-[52vh] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
            draggable="false"
          />
        </Magnet>
      </motion.div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-[170px] sm:max-w-[240px] md:max-w-[320px]"
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.35rem)' }}
          >
            A FULL STACK DEVELOPER DRIVEN BY CRAFTING STRIKING, SCALABLE &amp; 3D WEB EXPERIENCES
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <ContactButton text="Contact Me" href="#contact" />
        </motion.div>
      </div>
    </section>
  );
}
