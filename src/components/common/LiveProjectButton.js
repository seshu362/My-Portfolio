import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function LiveProjectButton({ href, label = "Live Project", className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/15 hover:border-white hover:text-white px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm ${className}`}
    >
      <span>{label}</span>
      <ExternalLink size={15} />
    </a>
  );
}
