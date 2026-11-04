import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import LiveProjectButton from './common/LiveProjectButton';
import LaptopFrame from './common/LaptopFrame';
import FadeIn from './common/FadeIn';
import { ExternalLink, Building2, Code2, Sparkles, Filter, Layers, X, Eye, Laptop } from 'lucide-react';

const GithubIcon = ({ size = 13, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

// Flagship Enterprise Sticky Cards with Laptop Mockup View
const flagshipProjects = [
  {
    id: 1,
    num: '01',
    name: 'Viyash Scientific Ltd.',
    category: 'Enterprise Client • Pharmaceutical & CDMO',
    liveUrl: 'https://viyash.com/',
    description:
      'Corporate portal for an international pharmaceutical enterprise operating 15+ manufacturing facilities across 150+ countries. Features dynamic therapeutic category filtering across API & Finished Dosage Formulations (FDF), global facility mapping, and high-performance React architecture.',
    tech: ['React.js', 'Webpack', 'Tailwind CSS', 'REST APIs', 'SVG Maps'],
    image: '/ImagesWebsite/viyash.png',
  },
  {
    id: 2,
    num: '02',
    name: 'Femme Circle',
    category: 'Full-Stack MERN • Wellness & Community',
    liveUrl: 'https://femmecircle.in/',
    description:
      'Full-stack lifestyle & wellness platform featuring custom Node.js/Express backend APIs, dual-database architecture (MySQL & SQLite), secure cookie-based JWT authentication, a multi-step wellness quiz module, and interactive Three.js 3D elements.',
    tech: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'SQLite', 'Three.js', 'JWT', 'Nodemailer'],
    image: '/ImagesWebsite/femmecircle.png',
  },
  {
    id: 3,
    num: '03',
    name: 'ClapKartel',
    category: 'Media Network • Entertainment & Casting',
    liveUrl: 'https://clapkartel.com/',
    description:
      'Expansive 40+ component casting portal connecting artists, directors, and recruiters. Includes search directories, casting call listings, video reels viewer, Firebase real-time user state, and OTP phone authentication.',
    tech: ['React 19', 'React Router v7', 'Firebase', 'Framer Motion', 'Lucide Icons', 'Puppeteer'],
    image: '/ImagesWebsite/clapkartel.png',
  },
  {
    id: 4,
    num: '04',
    name: 'The Studio Kara',
    category: 'Luxury Architecture • Interior Studio',
    liveUrl: 'https://thestudiokara.com/',
    description:
      'Luxury interior architecture & design studio website featuring animated splash screen, curated editorial furniture collections, concept showcase, and responsive smooth motion design.',
    tech: ['React 19', 'React Router v7', 'Modern CSS', 'Framer Motion'],
    image: '/ImagesWebsite/thestudiokara.png',
  },
];

// Complete Directory of All Projects
const allProjectsDirectory = [
  // --- COMPANY & CLIENT PROJECTS (11) ---
  {
    id: 'c1',
    type: 'company',
    title: 'Viyash Scientific Ltd.',
    company: 'Parivartan Software',
    badge: 'Enterprise Production',
    desc: 'International pharmaceutical & CDMO corporate portal with therapeutic filtering across API/FDF product catalogs.',
    tech: ['React.js', 'Webpack', 'Tailwind CSS', 'REST APIs'],
    image: '/ImagesWebsite/viyash.png',
    liveUrl: 'https://viyash.com/',
  },
  {
    id: 'c2',
    type: 'company',
    title: 'Femme Circle',
    company: 'Parivartan Software',
    badge: 'Full Stack MERN',
    desc: 'Full-stack women wellness & lifestyle platform with Node.js, Express, MySQL/SQLite, Three.js 3D, and JWT auth.',
    tech: ['Node.js', 'Express', 'MySQL', 'SQLite', 'Three.js', 'JWT'],
    image: '/ImagesWebsite/femmecircle.png',
    liveUrl: 'https://femmecircle.in/',
  },
  {
    id: 'c3',
    type: 'company',
    title: 'ClapKartel',
    company: 'Parivartan Software',
    badge: 'Media & Casting',
    desc: 'Cinema & media talent ecosystem with 40+ components, video reels, Firebase, audition notices, and user messaging.',
    tech: ['React 19', 'React Router v7', 'Firebase', 'Framer Motion'],
    image: '/ImagesWebsite/clapkartel.png',
    liveUrl: 'https://clapkartel.com/',
  },
  {
    id: 'c4',
    type: 'company',
    title: 'The Studio Kara',
    company: 'Parivartan Software',
    badge: 'Luxury Architecture',
    desc: 'Luxury interior architecture & design studio website featuring animated splash screen and curated editorial portfolios.',
    tech: ['React 19', 'React Router v7', 'Custom CSS', 'Animations'],
    image: '/ImagesWebsite/thestudiokara.png',
    liveUrl: 'https://thestudiokara.com/',
  },
  {
    id: 'c5',
    type: 'company',
    title: 'B5 Corporation',
    company: 'Parivartan Software',
    badge: 'Corporate Portal',
    desc: 'Multi-vertical corporate portal featuring knowledge centre, insights reader, careers board, and hash-based routing.',
    tech: ['React 19', 'Single Page Application', 'Knowledge Hub'],
    image: '/ImagesWebsite/b5crops.png',
    liveUrl: 'https://test.whysocial.in/',
  },
  {
    id: 'c6',
    type: 'company',
    title: 'Legala Group',
    company: 'Parivartan Software',
    badge: 'Enterprise Group',
    desc: 'Diversified corporate enterprise portal showcasing multiple business divisions, company news, and careers.',
    tech: ['HTML5', 'Modern CSS', 'Mobile Navigation JS'],
    image: '/ImagesWebsite/legala.png',
    liveUrl: 'https://legala.in/',
  },
  {
    id: 'c7',
    type: 'company',
    title: 'TechVest Global',
    company: 'Parivartan Software',
    badge: 'FinTech Platform',
    desc: 'Financial advisory platform with D3-Geo global mapping, SheetJS Excel parsing, Recharts, and Google reCAPTCHA.',
    tech: ['React.js', 'D3-Geo', 'TopoJSON', 'Recharts', 'SheetJS'],
    image: '/ImagesWebsite/techvest.png',
    liveUrl: 'https://techvestglobal.com/',
  },
  {
    id: 'c8',
    type: 'company',
    title: 'Sudha Analyticals',
    company: 'Parivartan Software',
    badge: 'Scientific & Lab Equipment',
    desc: 'Laboratory furniture & scientific instrumentation product catalog with RFQ validation using React Hook Form + Zod.',
    tech: ['React.js', 'Tailwind CSS', 'Radix UI', 'Recharts', 'Zod'],
    image: '/ImagesWebsite/sudhaanalyticals.png',
    liveUrl: 'https://www.sudhaanalyticals.com/',
  },
  {
    id: 'c9',
    type: 'company',
    title: 'Healveda India',
    company: 'Parivartan Software',
    badge: 'Healthcare & Wellness',
    desc: 'Healthcare and Ayurvedic wellness product portal featuring stacked-cards UI and informative health blog.',
    tech: ['React 19', 'React Router v7', 'Stacked Cards UI'],
    image: '/ImagesWebsite/healveda.png',
    liveUrl: 'https://www.healvedaindia.com/',
  },
  {
    id: 'c10',
    type: 'company',
    title: 'Lavanya & Shankar',
    company: 'Parivartan Software',
    badge: 'Architecture Firm',
    desc: 'Architectural design firm website with interactive project case studies, scope of work, and Framer Motion transitions.',
    tech: ['React 19', 'Framer Motion', 'React Router v7'],
    image: '/ImagesWebsite/lavanyaandshankar.png',
    liveUrl: 'https://lavanyaandshankar.com/',
  },
  {
    id: 'c11',
    type: 'company',
    title: 'C Temples Portal',
    company: 'Parivartan Software',
    badge: 'Heritage & Pilgrimage Portal',
    desc: 'Interactive spiritual heritage portal detailing sacred temples across India, daily Panchangam, ritual bookings, and video journeys.',
    tech: ['HTML5', 'Modern CSS', 'JavaScript', 'Responsive UI'],
    image: '/project-previews/ctemple-hero.jpg',
    liveUrl: 'https://wireframeconsulting.whysocial.in/',
  },

  // --- PERSONAL & PRACTICE PROJECTS (9) ---
  {
    id: 'p1',
    type: 'practice',
    title: 'Loan Management System',
    company: 'Personal Project',
    badge: 'Full Stack App',
    desc: 'This Loan Management System provides a platform for users to apply for loans, verifiers to verify applications, and administrators to manage the overall system with JWT authentication.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'SQLite', 'JWT'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748284567/Screenshot_2025-05-27_000544_qop06c.png',
    liveUrl: 'https://seshu-creditsea-loan-management.netlify.app/login',
    githubUrl: 'https://github.com/seshu362/CreditSea-Loan-Manager-frontend',
  },
  {
    id: 'p2',
    type: 'practice',
    title: 'JobStation – Job Listing Platform',
    company: 'Personal Project',
    badge: 'Career Portal',
    desc: 'A full-stack Job Listing Platform, allowing users to browse, post, bookmark jobs, and manage personal dashboards with authentication and SQLite persistence.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'SQLite', 'JWT'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278490/Screenshot_2025-05-26_222401_oue348.png',
    liveUrl: 'https://seshu-job-listing-platform.netlify.app/',
    githubUrl: 'https://github.com/seshu362/Mark-Anthony-JobStation',
  },
  {
    id: 'p3',
    type: 'practice',
    title: 'Tasty Kitchens (Swiggy/Zomato Clone)',
    company: 'NxtWave Project',
    badge: 'E-Commerce / Food',
    desc: 'An intuitive Online Food Ordering Platform similar to Swiggy/Zomato, enabling users to explore restaurants, manage food items in cart, and navigate payment options.',
    tech: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React Slick'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278791/Screenshot_2025-05-26_222823_xrdccl.png',
    liveUrl: 'https://seshutastykchn.ccbp.tech/',
    githubUrl: 'https://github.com/seshu362/Tasty-Kitchens',
  },
  {
    id: 'p4',
    type: 'practice',
    title: 'NXT WATCH (YouTube Clone)',
    company: 'NxtWave Project',
    badge: 'Media Streaming',
    desc: 'A YouTube-inspired application where users can access various video categories such as Trending, Gaming, and Saved videos, and search for specific content.',
    tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'REST API', 'JWT Token'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278794/Screenshot_2025-05-26_222901_jw9qyv.png',
    liveUrl: 'https://seshunxtwatch.ccbp.tech/login',
    githubUrl: 'https://github.com/seshu362/Nxt-Watch',
  },
  {
    id: 'p5',
    type: 'practice',
    title: 'NXT ASSESS App',
    company: 'NxtWave Project',
    badge: 'Exam Platform',
    desc: 'An online exam platform enabling users to log in, view assessments, attempt quizzes, and review results with a dynamic and responsive interface.',
    tech: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278793/Screenshot_2025-05-26_222921_v7hgd9.png',
    liveUrl: 'https://seshunxtaccess.ccbp.tech/login',
    githubUrl: 'https://github.com/seshu362/Nxt-Assess-App',
  },
  {
    id: 'p6',
    type: 'practice',
    title: 'Spotify Clone',
    company: 'Personal Project',
    badge: 'Audio Player',
    desc: 'A Spotify-inspired music streaming platform with search functionality, full music controls, and dynamic background gradients that adjust to the cover image.',
    tech: ['React JS', 'JavaScript', 'CSS', 'REST API', 'Local Storage'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748278794/Screenshot_2025-05-26_222937_k1sjot.png',
    liveUrl: 'https://seshusamesp.ccbp.tech/',
    githubUrl: 'https://github.com/seshu362/SeshuSameSpace',
  },
  {
    id: 'p7',
    type: 'practice',
    title: 'Tanishq Diamonds - Luxury Jewelry',
    company: 'Assignment Project',
    badge: 'Luxury Showcase',
    desc: 'An elegant jewelry showcase website featuring premium diamond collections, interactive galleries, video testimonials, and immersive user experience.',
    tech: ['React JS', 'JavaScript', 'CSS', 'React Icons', 'Interactive UI'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748316456/Screenshot_2025-05-27_085019_fxhuy0.png',
    liveUrl: 'https://seshu-tanishq-assignment.netlify.app/',
    githubUrl: 'https://github.com/seshu362/TANISHQ-Project/',
  },
  {
    id: 'p8',
    type: 'practice',
    title: 'React Lykke Travel Website',
    company: 'Assignment Project',
    badge: 'Travel Booking',
    desc: 'A modern and responsive travel website built with React allowing users to explore popular destinations, customize trips, and get in touch with travel experts.',
    tech: ['React JS', 'JavaScript', 'CSS', 'React Router', 'Fetch API'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748316613/Screenshot_2025-05-27_090004_zyml71.png',
    liveUrl: 'https://seshu-lykke-travels.netlify.app/',
    githubUrl: 'https://github.com/seshu362/Lykke-travel-Assignment',
  },
  {
    id: 'p9',
    type: 'practice',
    title: 'PropVista - Real Estate Platform',
    company: 'Personal Project',
    badge: 'Real Estate',
    desc: 'A comprehensive real estate platform showcasing properties in Gurgaon with interactive locality exploration and trending residential projects.',
    tech: ['React JS', 'JavaScript', 'CSS', 'Component Architecture', 'Carousels'],
    image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/f_auto,q_auto,w_800,c_limit/v1748317383/Screenshot_2025-05-27_090728_owtzol.png',
    liveUrl: 'https://seshuacredge.netlify.app/',
    githubUrl: 'https://github.com/seshu362/Seshu-Acredge/',
  },
];

// Sticky Card Component with Laptop System Screen Mockup
function StickyCard({ project, index, totalCards, onOpenModal }) {
  const containerRef = useRef(null);

  // Progressive scroll entrance
  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const entryY = useTransform(entryProgress, [0, 1], [35, 0]);
  const entryOpacity = useTransform(entryProgress, [0, 0.4, 1], [0.4, 0.85, 1]);

  // Stacking scale and dimming as user scrolls past
  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(exitProgress, [0, 1], [1, targetScale]);
  const brightness = useTransform(exitProgress, [0, 1], [1, 0.88]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        minHeight: '82vh',
        marginBottom: index === totalCards - 1 ? '40px' : '0',
      }}
    >
      <div
        className="sticky w-full flex items-center justify-center"
        style={{
          top: `clamp(75px, calc(72px + ${index * 24}px), 145px)`,
          zIndex: 10 + index,
        }}
      >
        <motion.div
          style={{
            scale,
            filter: useTransform(brightness, (b) => `brightness(${b})`),
            y: entryY,
            opacity: entryOpacity,
          }}
          className="w-full max-w-5xl bg-[#121214] border-2 border-[#D7E2EA]/50 hover:border-purple-500/70 rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between transition-all duration-300"
        >
          {/* Card Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <span
                className="font-black text-[#D7E2EA] leading-none"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
              >
                {project.num}
              </span>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-purple-300 font-mono font-medium block">
                  {project.category}
                </span>
                <h3
                  className="font-bold uppercase tracking-tight text-white leading-tight cursor-pointer hover:text-purple-300 transition-colors"
                  style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.85rem)' }}
                  onClick={() => onOpenModal(project)}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenModal(project)}
                data-cursor="EXPAND"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 text-[#D7E2EA] font-medium uppercase tracking-wider px-3.5 py-2 text-xs hover:bg-white/15 hover:text-white transition-all hover:scale-105"
              >
                <Eye size={13} />
                <span>Quick View</span>
              </button>
              <LiveProjectButton href={project.liveUrl} label="Live Website" />
            </div>
          </div>

          {/* 2-Column Split: Details on Left, Realistic Laptop System Frame on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Description & Tech Chips */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                {project.description}
              </p>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D7E2EA]/50 block mb-2 font-semibold">
                  Key Technologies &amp; Architecture:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High-End Responsive Laptop System Screen Frame */}
            <div className="lg:col-span-7 flex justify-center">
              <LaptopFrame
                image={project.image}
                alt={`${project.name} live system interface`}
                url={project.liveUrl}
                title={project.name}
                onExpand={() => onOpenModal(project)}
                className="max-w-[560px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const filteredDirectory = allProjectsDirectory.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.type === activeFilter;
  });

  const handleOpenModal = (proj) => {
    const modalData = {
      title: proj.title || proj.name,
      badge: proj.badge || proj.category,
      company: proj.company || 'Enterprise Production',
      desc: proj.desc || proj.description,
      tech: proj.tech || [],
      image: proj.image,
      liveUrl: proj.liveUrl,
      githubUrl: proj.githubUrl,
    };
    setSelectedModalProject(modalData);
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 pt-20 sm:pt-28 md:pt-36 pb-24 px-5 sm:px-8 md:px-12 select-none border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={35}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs uppercase tracking-widest text-purple-300 font-mono font-medium px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 mb-4 inline-block">
              Interactive Showcase &amp; Live Systems
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
            >
              PROJECTS
            </h2>
            <p className="text-[#D7E2EA]/70 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Scroll down to watch the flagship client productions reveal inside responsive laptop screen frames, or explore the categorized directory below.
            </p>
          </div>
        </FadeIn>

        {/* 1. Sticky Stacking Cards Showcase with Laptop Screen Frames */}
        <div className="mb-28 sm:mb-36">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles size={18} className="text-purple-400" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]">
              Flagship Productions (Scroll To Reveal Each Card)
            </h3>
          </div>

          <div className="flex flex-col">
            {flagshipProjects.map((project, index) => (
              <StickyCard
                key={project.id}
                project={project}
                index={index}
                totalCards={flagshipProjects.length}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>

        {/* 2. Distinct Filtered Directory: Company vs Practice */}
        <div id="all-projects-catalog" className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-purple-400" />
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  All Projects Directory ({allProjectsDirectory.length})
                </h3>
              </div>
              <p className="text-sm text-[#D7E2EA]/60 font-light mt-1">
                Clearly categorized into Company &amp; Client Projects (11) and Personal Practice Projects (9).
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 bg-[#141416] p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setActiveFilter('all')}
                data-cursor="FILTER"
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-purple-900/30'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                <Layers size={14} />
                <span>All Projects ({allProjectsDirectory.length})</span>
              </button>

              <button
                onClick={() => setActiveFilter('company')}
                data-cursor="FILTER"
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'company'
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-purple-900/30'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                <Building2 size={14} />
                <span>Company (11)</span>
              </button>

              <button
                onClick={() => setActiveFilter('practice')}
                data-cursor="FILTER"
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'practice'
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-purple-900/30'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                <Code2 size={14} />
                <span>Practice (9)</span>
              </button>
            </div>
          </div>

          {/* Directory Grid with Responsive System Mockup Frames */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDirectory.map((item, idx) => (
              <FadeIn key={item.id} delay={(idx % 6) * 0.08} y={20}>
                <div
                  onClick={() => handleOpenModal(item)}
                  data-cursor="VIEW"
                  className="h-full bg-[#121214] border border-white/10 hover:border-purple-500/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] group cursor-pointer"
                >
                  <div>
                    {/* System Window Header & Thumbnail Preview */}
                    <div className="w-full bg-[#18181C] border-b border-white/10 px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF5F56] inline-block"></span>
                        <span className="w-2 h-2 rounded-full bg-[#FFBD2E] inline-block"></span>
                        <span className="w-2 h-2 rounded-full bg-[#27C93F] inline-block"></span>
                      </div>
                      <span className="text-[10px] font-mono text-[#D7E2EA]/50 truncate max-w-[160px]">
                        {item.liveUrl ? item.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'preview.local'}
                      </span>
                      <Laptop size={12} className="text-[#D7E2EA]/40" />
                    </div>

                    {item.image && (
                      <div className="w-full h-48 bg-[#09090B] overflow-hidden relative flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-semibold text-white uppercase tracking-wider backdrop-blur-[1px]">
                          <Eye size={14} />
                          <span>Quick View</span>
                        </div>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                            item.type === 'company'
                              ? 'bg-purple-950/40 border-purple-500/40 text-purple-300'
                              : 'bg-blue-950/40 border-blue-500/40 text-blue-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[#D7E2EA]/50">
                          {item.company}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed line-clamp-3 mb-4">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tech.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#D7E2EA]/80 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.tech.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-[#D7E2EA]/50">
                            +{item.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="px-5 py-3 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <span className="text-xs font-medium text-purple-400 group-hover:text-purple-300 flex items-center gap-1">
                      <span>Explore Project</span>
                      <ExternalLink size={12} />
                    </span>
                    {item.githubUrl && (
                      <span className="text-[#D7E2EA]/50 hover:text-white transition-colors" title="GitHub Repository">
                        <GithubIcon size={14} />
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Interactive Quick View Modal with Full Laptop Mockup */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141416] border border-white/20 rounded-[28px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10 text-white"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold block mb-1">
                    {selectedModalProject.badge} • {selectedModalProject.company}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                    {selectedModalProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModalProject(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all"
                  aria-label="Close Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Laptop Screen Frame in Modal */}
              {selectedModalProject.image && (
                <div className="mb-6 flex justify-center">
                  <LaptopFrame
                    image={selectedModalProject.image}
                    alt={selectedModalProject.title}
                    url={selectedModalProject.liveUrl}
                    title={selectedModalProject.title}
                    className="max-w-2xl"
                  />
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/50 mb-2 font-semibold">
                  Project Overview &amp; Responsibilities:
                </h4>
                <p className="text-sm text-[#D7E2EA]/90 font-light leading-relaxed">
                  {selectedModalProject.desc}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/50 mb-2 font-semibold">
                  Technologies Utilized:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                {selectedModalProject.liveUrl && (
                  <a
                    href={selectedModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:brightness-110 text-white transition-all shadow-md"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {selectedModalProject.githubUrl && (
                  <a
                    href={selectedModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all"
                  >
                    <GithubIcon size={14} />
                    <span>View GitHub Repo</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedModalProject(null)}
                  className="ml-auto px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/60 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
