// src/components/UI/ParticleBackground.js
import React from 'react';
import ParticlesBg from 'particles-bg';
import styled from 'styled-components';

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function ParticleBackground() {
  return (
    <ParticleContainer>
      <ParticlesBg 
        type="cobweb" 
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0
        }}
        color={["#7928ca", "#4763ff", "#ff0080"]}
        num={100}
      />
    </ParticleContainer>
  );
}

export default ParticleBackground;