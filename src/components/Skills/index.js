import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeIn from '../common/FadeIn';
import {
  Cpu,
  Server,
  Database,
  ShieldCheck,
  Sparkles,
  Terminal,
  CheckCircle
} from 'lucide-react';
import './index.css';

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bentoCategories = [
    {
      id: 'frontend',
      title: 'Frontend Engineering & Architecture',
      icon: <Cpu className="text-[#38BDF8]" size={22} />,
      badge: 'Core Specialization',
      colSpan: 'lg:col-span-7',
      accentColor: 'from-[#38BDF8]/20 via-[#6366F1]/10 to-transparent',
      borderColor: 'border-[#38BDF8]/30 hover:border-[#38BDF8]/70',
      description:
        'Architecting high-speed single-page applications (SPAs) and corporate portals with sub-second page transitions, responsive layouts, and fluid motion design.',
      skills: [
        { name: 'React.js', level: 'Expert', tag: 'UI Library' },
        { name: 'Vite', level: 'Advanced', tag: 'Build Tool' },
        { name: 'Tailwind CSS', level: 'Expert', tag: 'Styling' },
        { name: 'JavaScript (ES6+)', level: 'Expert', tag: 'Language' },
        { name: 'TanStack React Query', level: 'Advanced', tag: 'Server State' },
        { name: 'Radix UI (shadcn)', level: 'Advanced', tag: 'Accessible UI' },
        { name: 'Bootstrap', level: 'Advanced', tag: 'CSS Framework' },
        { name: 'HTML5 & Modern CSS3', level: 'Expert', tag: 'Core Web' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Microservices & APIs',
      icon: <Server className="text-[#A855F7]" size={22} />,
      badge: 'Scalable Systems',
      colSpan: 'lg:col-span-5',
      accentColor: 'from-[#A855F7]/20 via-[#B600A8]/10 to-transparent',
      borderColor: 'border-[#A855F7]/30 hover:border-[#A855F7]/70',
      description:
        'Building modular, secure RESTful microservices following clean MVC architecture, centralized error handling, and robust routing.',
      skills: [
        { name: 'Node.js', level: 'Expert', tag: 'Runtime' },
        { name: 'Express.js', level: 'Expert', tag: 'Framework' },
        { name: 'RESTful API Design', level: 'Expert', tag: 'Architecture' },
        { name: 'Custom Middleware', level: 'Advanced', tag: 'Pipelining' },
        { name: 'MVC Architecture', level: 'Expert', tag: 'Pattern' },
        { name: 'Python (Basics/Scripts)', level: 'Intermediate', tag: 'Language' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Schema Normalization',
      icon: <Database className="text-[#34D399]" size={22} />,
      badge: 'Relational & NoSQL',
      colSpan: 'lg:col-span-4',
      accentColor: 'from-[#34D399]/20 via-[#10B981]/10 to-transparent',
      borderColor: 'border-[#34D399]/30 hover:border-[#34D399]/70',
      description:
        'Designing normalized schemas, relational keys, automated data migrations, and high-performance CRUD queries.',
      skills: [
        { name: 'MongoDB', level: 'Advanced', tag: 'NoSQL' },
        { name: 'MySQL', level: 'Advanced', tag: 'Relational SQL' },
        { name: 'SQLite3', level: 'Advanced', tag: 'Embedded SQL' },
        { name: 'Schema Normalization', level: 'Expert', tag: 'Design' },
        { name: 'Data Seeding Scripts', level: 'Advanced', tag: 'Automation' },
        { name: 'Query Optimization', level: 'Advanced', tag: 'Indexing' },
      ],
    },
    {
      id: 'security',
      title: 'Authentication & System Security',
      icon: <ShieldCheck className="text-[#F43F5E]" size={22} />,
      badge: 'Production Security',
      colSpan: 'lg:col-span-4',
      accentColor: 'from-[#F43F5E]/20 via-[#FB7185]/10 to-transparent',
      borderColor: 'border-[#F43F5E]/30 hover:border-[#F43F5E]/70',
      description:
        'Implementing end-to-end token authentication, cryptographic hashing, and protected route guards to eliminate vulnerabilities.',
      skills: [
        { name: 'JWT (JSON Web Tokens)', level: 'Expert', tag: 'Auth Tokens' },
        { name: 'Bcrypt Hashing', level: 'Expert', tag: 'Cryptography' },
        { name: 'HTTP-only Cookies', level: 'Advanced', tag: 'Session Guard' },
        { name: 'Protected Route Guards', level: 'Expert', tag: 'Routing' },
        { name: 'Role-Based Access (RBAC)', level: 'Advanced', tag: 'Authorization' },
        { name: 'CSRF & XSS Mitigation', level: 'Advanced', tag: 'Security' },
      ],
    },
    {
      id: 'creative',
      title: '3D Web, Geolocation & Visual Analytics',
      icon: <Sparkles className="text-[#FBBF24]" size={22} />,
      badge: 'Interactive Experiences',
      colSpan: 'lg:col-span-4',
      accentColor: 'from-[#FBBF24]/20 via-[#F59E0B]/10 to-transparent',
      borderColor: 'border-[#FBBF24]/30 hover:border-[#FBBF24]/70',
      description:
        'Merging 3D WebGL scenes, interactive GIS maps, spreadsheet processing, and real-time analytical dashboards.',
      skills: [
        { name: 'Three.js (3D WebGL)', level: 'Advanced', tag: '3D Canvas' },
        { name: 'Framer Motion', level: 'Expert', tag: 'Kinetic UI' },
        { name: 'D3-Geo & TopoJSON', level: 'Advanced', tag: 'Global Maps' },
        { name: 'Leaflet Maps', level: 'Advanced', tag: 'GIS' },
        { name: 'Recharts', level: 'Expert', tag: 'Data Viz' },
        { name: 'SheetJS (xlsx) & jsPDF', level: 'Advanced', tag: 'File I/O' },
      ],
    },
    {
      id: 'devtools',
      title: 'DevOps, Tooling & Cloud Platforms',
      icon: <Terminal className="text-[#EC4899]" size={22} />,
      badge: 'Ecosystem & CI/CD',
      colSpan: 'lg:col-span-12',
      accentColor: 'from-[#EC4899]/15 via-[#8B5CF6]/10 to-transparent',
      borderColor: 'border-[#EC4899]/30 hover:border-[#EC4899]/70',
      description:
        'Full development lifecycle tools ensuring rigorous version control, API testing, automated builds, and cloud deployments.',
      skills: [
        { name: 'Git & GitHub', level: 'Expert', tag: 'Version Control' },
        { name: 'Postman', level: 'Expert', tag: 'API Testing' },
        { name: 'Webpack & Babel', level: 'Advanced', tag: 'Bundlers' },
        { name: 'Vercel & Netlify', level: 'Expert', tag: 'Cloud Deployments' },
        { name: 'Firebase', level: 'Advanced', tag: 'Realtime Backend' },
        { name: 'Stripe API', level: 'Advanced', tag: 'Payment Gateway' },
        { name: 'Nodemailer / EmailJS', level: 'Expert', tag: 'Email Services' },
        { name: 'Linux / CLI Workflow', level: 'Advanced', tag: 'Environment' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] select-none border-t border-white/5 overflow-hidden"
      ref={ref}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-purple-300 font-mono font-medium px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 mb-4 inline-block">
              Technical Competencies &amp; Mastery
            </span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[11vw] sm:text-[9vw] md:text-[6.5rem]">
              TECHNICAL ARSENAL
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto font-light mt-3 leading-relaxed">
              Comprehensive full-stack engineering proficiency spanning client-side architecture, secure microservices, normalized databases, and interactive 3D web visualizations.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {bentoCategories.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`${card.colSpan} relative rounded-3xl bg-[#121214] border ${card.borderColor} p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(118,33,176,0.25)] transition-all duration-300`}
            >
              {/* Subtle top inner gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.accentColor} opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-300/80 block">
                        {card.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all group/item"
                    >
                      <CheckCircle size={12} className="text-purple-400 group-hover/item:text-purple-300" />
                      <span className="text-xs font-semibold text-white tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#D7E2EA]/40 ml-1">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
