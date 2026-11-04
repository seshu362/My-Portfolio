import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from './UI/GlassmorphicCard';
import FadeIn from './common/FadeIn';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Zap,
  ShieldCheck,
  Database,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Globe2,
  ExternalLink
} from 'lucide-react';

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState(0);

  // Quantitative Impact Metrics from Resume
  const impactMetrics = [
    {
      value: '10+',
      label: 'Production Apps',
      sub: 'Engineered & Deployed',
      icon: <Layers className="text-[#38BDF8]" size={20} />,
      color: 'from-[#38BDF8]/20 to-transparent',
      borderColor: 'border-[#38BDF8]/30',
    },
    {
      value: '40%+',
      label: 'Performance Boost',
      sub: 'TanStack State Caching',
      icon: <TrendingUp className="text-[#34D399]" size={20} />,
      color: 'from-[#34D399]/20 to-transparent',
      borderColor: 'border-[#34D399]/30',
    },
    {
      value: '15+',
      label: 'Global Facilities',
      sub: 'Pharma Portals Scaled',
      icon: <Globe2 className="text-[#A855F7]" size={20} />,
      color: 'from-[#A855F7]/20 to-transparent',
      borderColor: 'border-[#A855F7]/30',
    },
    {
      value: '100%',
      label: 'Responsiveness',
      sub: 'Mobile & Cross-Browser',
      icon: <ShieldCheck className="text-[#F472B6]" size={20} />,
      color: 'from-[#F472B6]/20 to-transparent',
      borderColor: 'border-[#F472B6]/30',
    },
  ];

  // Technical Pillars matching Resume
  const engineeringPillars = [
    {
      id: 0,
      title: 'Frontend Architecture & State',
      icon: <Cpu size={18} />,
      badge: 'Client Performance',
      summary:
        'Architecting modern, responsive single-page applications and corporate enterprise portals with sub-second page transitions.',
      bullets: [
        'Designed and engineered 10+ production-grade responsive web apps using React.js, Vite, Tailwind CSS, and Bootstrap.',
        'Architected client-side asynchronous server state management using TanStack React Query, React Hooks, and Context API, eliminating duplicate API calls and improving rendering speed by over 40%.',
        'Implemented modular Radix UI (shadcn) accessible components, custom themes, and interactive animations with Framer Motion.',
        'Ensured 100% cross-browser consistency and mobile responsiveness across smartphones, tablets, and ultra-wide desktop displays.',
      ],
      techTags: ['React.js', 'Vite', 'TanStack Query', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    },
    {
      id: 1,
      title: 'Backend Microservices & Security',
      icon: <ShieldCheck size={18} />,
      badge: 'Zero-Vulnerability Security',
      summary:
        'Developing modular, secure backend microservices following clean MVC architecture, centralized error handling, and robust authentication.',
      bullets: [
        'Developed modular Node.js and Express.js RESTful APIs featuring custom middlewares, rate limiting, and centralized error handling.',
        'Engineered end-to-end token authentication with JWT, bcrypt password hashing, and HTTP-only cookie session protection to prevent CSRF and XSS attacks.',
        'Structured protected administrative route guards and role-based access control (RBAC) across client web applications.',
        'Implemented strict schema validations for RFQs and technical service inquiries using Zod and React Hook Form.',
      ],
      techTags: ['Node.js', 'Express.js', 'JWT Auth', 'Bcrypt', 'HTTP-only Cookies', 'RESTful APIs'],
    },
    {
      id: 2,
      title: 'Database Architecture & Schemas',
      icon: <Database size={18} />,
      badge: 'Relational & NoSQL',
      summary:
        'Modeling normalized relational and document database collections with automated migrations and reliable CRUD operations.',
      bullets: [
        'Modeled normalized relational schemas across MySQL and SQLite3 with strict foreign key constraints and indexed queries.',
        'Architected flexible NoSQL document stores in MongoDB for rapid prototyping and nested hierarchical data.',
        'Authored automated database migration workflows, data seeding scripts, and optimized query execution.',
        'Maintained dual-database support across local development and production cloud deployment instances.',
      ],
      techTags: ['MongoDB', 'MySQL', 'SQLite3', 'Schema Design', 'Data Normalization', 'Automated Seeding'],
    },
    {
      id: 3,
      title: 'Enterprise Integrations & 3D Web',
      icon: <Sparkles size={18} />,
      badge: 'Advanced Client Features',
      summary:
        'Integrating cutting-edge third-party services, geospatial visualization, spreadsheet data parsing, and WebGL 3D scenes.',
      bullets: [
        'Crafted dynamic data visualizations and financial charts using Recharts, D3-Geo, and TopoJSON global market maps.',
        'Integrated payment gateways (Stripe) and automated email dispatch workflows using Nodemailer and EmailJS.',
        'Implemented client-side Excel spreadsheet processing via SheetJS (xlsx) and dynamic PDF generation using jsPDF and html2canvas.',
        'Integrated interactive 3D WebGL scenes using Three.js for immersive client brand engagement and gamified quiz modules.',
      ],
      techTags: ['Three.js (3D)', 'D3-Geo', 'Recharts', 'Stripe', 'Nodemailer', 'SheetJS', 'jsPDF'],
    },
  ];

  // Client Deliveries
  const clientDeployments = [
    { name: 'Viyash Scientific Ltd.', url: 'https://viyash.com/', desc: 'Pharma CDMO Portal' },
    { name: 'Femme Circle', url: 'https://femmecircle.in/', desc: 'Full-Stack Wellness' },
    { name: 'ClapKartel', url: 'https://clapkartel.com/', desc: 'Media & Talent Network' },
    { name: 'TechVest Global', url: 'https://techvestglobal.com/', desc: 'FinTech & D3-Geo Maps' },
    { name: 'Sudha Analyticals', url: 'https://sudhaanalyticals.com/', desc: 'Lab Equipment Catalog' },
    { name: 'The Studio Kara', url: 'https://thestudiokara.com/', desc: 'Luxury Architecture' },
    { name: 'Healveda India', url: 'https://healvedaindia.com/', desc: 'Stacked Healthcare UI' },
    { name: 'Lavanya & Shankar', url: 'https://lavanyaandshankar.com/', desc: 'Architects Studio' },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] select-none border-t border-white/5 overflow-hidden"
      ref={ref}
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#7928CA]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#4763FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-purple-300 font-mono font-medium">
                Professional Engineering Trajectory
              </span>
            </div>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[11vw] sm:text-[9vw] md:text-[6.5rem]">
              WORK EXPERIENCE
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto font-light mt-3 leading-relaxed">
              Architecting production-grade MERN stack applications, robust microservices, and interactive client systems in a fast-paced enterprise environment.
            </p>
          </div>
        </FadeIn>

        {/* Quantitative Impact Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {impactMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl bg-[#121214] border ${metric.borderColor} shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:border-white/40 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white group-hover:scale-105 transition-transform">
                  {metric.value}
                </span>
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {metric.icon}
                </div>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white mb-0.5">
                  {metric.label}
                </h4>
                <p className="text-xs text-[#D7E2EA]/60 font-light">
                  {metric.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Primary Role Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <GlassmorphicCard className="p-6 sm:p-10 md:p-12 border border-white/15 hover:border-purple-500/40 transition-colors">
            {/* Top Company Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/40 text-purple-300">
                    Full-Time Production Role
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Enterprise Position
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
                  MERN Stack Developer
                </h3>
                <div className="flex items-center gap-2 text-base sm:text-lg text-[#BBCCD7] font-medium mt-1.5">
                  <Building2 size={20} className="text-purple-400 flex-shrink-0" />
                  <span>Parivartan Software &amp; Multimedia Pvt. Ltd.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-3 sm:gap-6 lg:gap-2 text-sm text-[#D7E2EA]/75">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <Calendar size={16} className="text-purple-400" />
                  <span className="font-mono font-semibold text-white">October 2025 – Present</span>
                  <span className="text-xs text-purple-300 font-mono">(1+ Years)</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <MapPin size={16} className="text-purple-400" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Interactive Engineering Pillars: Tabs & Content */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h4 className="text-sm font-bold uppercase tracking-widest text-purple-300 flex items-center gap-2">
                  <Zap size={16} className="text-purple-400" />
                  Core Engineering Pillars &amp; Responsibilities
                </h4>
                <span className="text-xs font-mono text-[#D7E2EA]/50">
                  Click tabs to explore technical architecture
                </span>
              </div>

              {/* Tab Navigation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
                {engineeringPillars.map((pillar) => {
                  const isActive = activeTab === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActiveTab(pillar.id)}
                      data-cursor="EXP"
                      className={`flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                        isActive
                          ? 'bg-purple-950/40 border-purple-500/60 text-white shadow-[0_0_20px_rgba(182,0,168,0.25)]'
                          : 'bg-white/[0.02] border-white/5 text-[#D7E2EA]/60 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div
                        className={`p-1.5 rounded-lg ${
                          isActive ? 'bg-purple-500 text-white' : 'bg-white/5 text-purple-300'
                        }`}
                      >
                        {pillar.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-tight truncate">
                        {pillar.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Animated Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#141416]/80 border border-white/10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                        {engineeringPillars[activeTab].badge}
                      </span>
                      <h5 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mt-0.5">
                        {engineeringPillars[activeTab].title}
                      </h5>
                    </div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {engineeringPillars[activeTab].techTags.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#D7E2EA]/85 font-light leading-relaxed mb-6">
                    {engineeringPillars[activeTab].summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {engineeringPillars[activeTab].bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors"
                      >
                        <CheckCircle2 size={17} className="text-purple-400 mt-1 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enterprise Client Deployments Strip */}
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/60">
                  Real Client Portals &amp; Production Environments Handled:
                </span>
                <span className="text-[11px] font-mono text-purple-400">
                  8+ Verified Live Deployments
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {clientDeployments.map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VISIT"
                    className="group p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                        {client.name}
                      </span>
                      <ExternalLink size={12} className="text-white/40 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                    </div>
                    <span className="text-[11px] text-[#D7E2EA]/50 font-light truncate">
                      {client.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
}
