import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Character({ char, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

function Word({ word, progress, range }) {
  const characters = word.split('');
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="inline-block whitespace-nowrap mr-[0.28em]">
      {characters.map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character key={i} char={char} progress={progress} range={[start, end]} />
        );
      })}
    </span>
  );
}

export default function AnimatedText({ text, className = '' }) {
  const elementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.85', 'end 0.3'],
  });

  const words = text.split(' ');

  return (
    <p ref={elementRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}
