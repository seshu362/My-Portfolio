import React from 'react';

export default function ContactButton({
  text = "Contact Me",
  href = "#contact",
  onClick,
  type,
  disabled = false,
  className = ""
}) {
  if (type === 'submit' || type === 'button') {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`inline-flex items-center justify-center font-medium uppercase tracking-widest text-white transition-all duration-300 ${
          disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 active:scale-95 cursor-pointer'
        } rounded-full px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
          outline: '2px solid rgba(255, 255, 255, 0.9)',
          outlineOffset: '-3px',
        }}
      >
        <span>{text}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer rounded-full px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid rgba(255, 255, 255, 0.9)',
        outlineOffset: '-3px',
      }}
    >
      <span>{text}</span>
    </a>
  );
}
