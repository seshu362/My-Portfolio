// src/components/UI/AnimatedText.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Text = styled(motion.div)`
  display: inline-block;
  
  span {
    display: inline-block;
  }
`;

function AnimatedText({ text, delay = 0, ...props }) {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <Text
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: '0.5rem' }}
        >
          {word}
        </motion.span>
      ))}
    </Text>
  );
}

export default AnimatedText;