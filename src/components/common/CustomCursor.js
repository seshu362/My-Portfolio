import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, .interactive-card');
      if (target) {
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
          setCursorVariant('badge');
        } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
          setCursorText('');
          setCursorVariant('hover');
        } else {
          setCursorText('');
          setCursorVariant('hover');
        }
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(255, 255, 255, 0.35)',
      borderWidth: 1,
      scale: 1,
    },
    hover: {
      width: 52,
      height: 52,
      backgroundColor: 'rgba(182, 0, 168, 0.15)',
      borderColor: 'rgba(182, 0, 168, 0.6)',
      borderWidth: 1.5,
      scale: 1.15,
    },
    badge: {
      width: 84,
      height: 84,
      backgroundColor: 'rgba(118, 33, 176, 0.85)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: 1.5,
      scale: 1.05,
    },
  };

  return (
    <>
      {/* Outer Spring Glow Disc */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center text-center backdrop-blur-[2px] shadow-[0_0_25px_rgba(182,0,168,0.4)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-black uppercase tracking-wider text-white select-none px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#ffffff]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}

