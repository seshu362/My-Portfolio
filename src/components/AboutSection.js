import React from 'react';
import FadeIn from './common/FadeIn';
import AnimatedText from './common/AnimatedText';
import ContactButton from './common/ContactButton';

export default function AboutSection() {
  const aboutBio =
    "I am a passionate Full Stack & MERN Developer focused on architecting responsive SPAs, scalable backend microservices, and immersive interactive web experiences. With hands-on engineering across enterprise healthcare, media, fintech, and pharmaceutical platforms, I truly love turning ambitious ideas into seamless, high-performance digital products. Let's build something extraordinary together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Floating Elements in Corners */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10 animate-float-slow">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon"
            className="w-[110px] sm:w-[150px] md:w-[200px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] pointer-events-none z-10 animate-float-reverse">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape"
            className="w-[90px] sm:w-[130px] md:w-[170px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10 animate-float-reverse">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego"
            className="w-[110px] sm:w-[150px] md:w-[200px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] pointer-events-none z-10 animate-float-slow">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Graphic"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center z-20 max-w-4xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-12 md:mb-14"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Character-by-character scroll text */}
        <div className="max-w-[640px] px-2 mb-12 sm:mb-16 md:mb-20">
          <AnimatedText
            text={aboutBio}
            className="font-medium leading-relaxed text-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.35} y={20}>
          <ContactButton text="Get In Touch" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
