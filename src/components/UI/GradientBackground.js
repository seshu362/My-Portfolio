// src/components/UI/GradientBackground.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GradientContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(40deg, #121212, #1a1a1a);
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
    transition: 0.3s ease-out;
  }
  
  &::before {
    background: var(--primary-color);
    top: 30%;
    left: 20%;
  }
  
  &::after {
    background: var(--secondary-color);
    bottom: 20%;
    right: 15%;
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
      const offsetFactor = 25;
      
      // Get the ::before and ::after elements
      const container = containerRef.current;
      
      // Move the gradient elements
      container.style.setProperty('--before-x', `${moveX / offsetFactor}px`);
      container.style.setProperty('--before-y', `${moveY / offsetFactor}px`);
      container.style.setProperty('--after-x', `${-moveX / offsetFactor}px`);
      container.style.setProperty('--after-y', `${-moveY / offsetFactor}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <GradientContainer ref={containerRef} />;
}

export default GradientBackground;