import React, { useEffect, useRef, useState } from 'react';

// Real Company & Client Work
const row1Projects = [
  {
    title: 'Viyash Scientific Ltd.',
    category: 'Enterprise Pharmaceutical',
    src: '/ImagesWebsite/viyash.png',
  },
  {
    title: 'Femme Circle Platform',
    category: 'Full-Stack Wellness MERN',
    src: '/project-previews/femme-preview.png',
  },
  {
    title: 'ClapKartel Casting Network',
    category: 'Media & Cinema Portal',
    src: '/ImagesWebsite/clapkartel.png',
  },
  {
    title: 'The Studio Kara',
    category: 'Luxury Architecture',
    src: '/ImagesWebsite/thestudiokara.png',
  },
  {
    title: 'B5 Corporation Portal',
    category: 'Enterprise Corporate Hub',
    src: '/ImagesWebsite/b5crops.png',
  },
  {
    title: 'Legala Group',
    category: 'Multi-Division Enterprise',
    src: '/ImagesWebsite/legala.png',
  },
  {
    title: 'TechVest Global',
    category: 'FinTech & Global Advisory',
    src: '/ImagesWebsite/techvest.png',
  },
  {
    title: 'Sudha Analyticals',
    category: 'Scientific Instrumentation',
    src: '/ImagesWebsite/sudhaanalyticals.png',
  },
  {
    title: 'Healveda India',
    category: 'Ayurveda & Wellness Portal',
    src: '/ImagesWebsite/healveda.png',
  },
  {
    title: 'Lavanya & Shankar',
    category: 'Architectural Design Firm',
    src: '/ImagesWebsite/lavanyaandshankar.png',
  },
  {
    title: 'C Temples Portal',
    category: 'Cultural Heritage Platform',
    src: '/project-previews/ctemple-hero.jpg',
  },
];

// Real Personal & Practice Projects
const row2Projects = [
  {
    title: 'CreditSea Loan Management',
    category: 'Full-Stack MERN App',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748284567/Screenshot_2025-05-27_000544_qop06c.png',
  },
  {
    title: 'JobStation Platform',
    category: 'Career & Jobs Portal',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278490/Screenshot_2025-05-26_222401_oue348.png',
  },
  {
    title: 'Tasty Kitchens',
    category: 'Food Ordering Platform',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278791/Screenshot_2025-05-26_222823_xrdccl.png',
  },
  {
    title: 'NXT WATCH',
    category: 'Video Streaming Platform',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278794/Screenshot_2025-05-26_222901_jw9qyv.png',
  },
  {
    title: 'NXT ASSESS App',
    category: 'Online Assessment Platform',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278793/Screenshot_2025-05-26_222921_v7hgd9.png',
  },
  {
    title: 'Spotify Clone',
    category: 'Audio Streaming UI',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278794/Screenshot_2025-05-26_222937_k1sjot.png',
  },
  {
    title: 'Tanishq Diamonds',
    category: 'Luxury Jewelry Showcase',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748316456/Screenshot_2025-05-27_085019_fxhuy0.png',
  },
  {
    title: 'React Lykke Travels',
    category: 'Travel Booking Portal',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748316613/Screenshot_2025-05-27_090004_zyml71.png',
  },
  {
    title: 'PropVista Platform',
    category: 'Real Estate Platform',
    src: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748317383/Screenshot_2025-05-27_090728_owtzol.png',
  },
  {
    title: 'Femme Circle Wellness App',
    category: 'Interactive 3D Health',
    src: '/project-previews/femme-preview.png',
  },
  {
    title: 'ClapKartel Auditions UI',
    category: 'Talent Directory',
    src: '/project-previews/clapkartel-app.png',
  },
];

export default function MarqueeSection() {
  const sectionRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const tripledRow1 = [...row1Projects, ...row1Projects, ...row1Projects];
  const tripledRow2 = [...row2Projects, ...row2Projects, ...row2Projects];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-14 overflow-hidden select-none border-b border-white/5"
    >
      {/* Section Label */}
      <div className="text-center mb-10 px-4">
        <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium px-4 py-1.5 rounded-full border border-[#D7E2EA]/10 inline-block">
          Production Visual Showcase &bull; 20+ Delivered Applications
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 - Company Projects (Moves Right) */}
        <div
          className="flex gap-4 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${scrollOffset - 300}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] h-[190px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl group"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] sm:text-xs font-mono text-purple-300 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Practice & Full Stack Projects (Moves Left) */}
        <div
          className="flex gap-4 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${-(scrollOffset - 300)}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] h-[190px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl group"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] sm:text-xs font-mono text-blue-300 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
