import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GradientContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: transparent;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.28;
    transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
    pointer-events: none;
  }
  
  &::before {
    background: radial-gradient(circle, #B600A8 0%, rgba(182, 0, 168, 0) 70%);
    top: 25%;
    left: 15%;
    transform: translate(var(--before-x, 0px), var(--before-y, 0px));
  }
  
  &::after {
    background: radial-gradient(circle, #4763FF 0%, rgba(71, 99, 255, 0) 70%);
    bottom: 20%;
    right: 15%;
    transform: translate(var(--after-x, 0px), var(--after-y, 0px));
  }
`;

function GradientBackground() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offsetFactor = 20;
      
      const container = containerRef.current;
      container.style.setProperty('--before-x', `${moveX / offsetFactor}px`);
      container.style.setProperty('--before-y', `${moveY / offsetFactor}px`);
      container.style.setProperty('--after-x', `${-moveX / offsetFactor}px`);
      container.style.setProperty('--after-y', `${-moveY / offsetFactor}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <GradientContainer ref={containerRef} aria-hidden="true" />;
}

export default GradientBackground;