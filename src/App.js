import React from 'react';
import GradientBackground from './components/UI/GradientBackground';
import CustomCursor from './components/common/CustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import Skills from './components/Skills';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Education from './components/Education';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit overflow-x-clip selection:bg-[#B600A8]/30 selection:text-white">
      {/* Interactive Spring Magnetic Cursor */}
      <CustomCursor />

      {/* 3D Ambient Mesh Gradient Background (cursor-following) */}
      <GradientBackground />

      {/* Fixed Glassmorphic Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <section id="home">
          <HeroSection />
        </section>

        <MarqueeSection />

        <About />

        <ExperienceSection />

        <Skills />

        <ServicesSection />

        <ProjectsSection />

        <Education />

        <ContactSection />
      </main>

      {/* 3D Dark Footer */}
      <Footer />
    </div>
  );
}

export default App;  