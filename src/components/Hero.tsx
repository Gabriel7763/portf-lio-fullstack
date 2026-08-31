import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Code2, 
  Server, 
  Layers,
  FileText
} from 'lucide-react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
  onOpenProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenProjects,
  onOpenContact
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Senior Fullstack Engineer',
    'React & Next.js Architect',
    'Node.js & Cloud Developer',
    'Distributed Systems Specialist'
  ];

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
      } else {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const techBadges = [
    { name: 'React', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
    { name: 'Next.js 15', color: 'text-slate-200 border-slate-700 bg-slate-800/40' },
    { name: 'TypeScript', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
    { name: 'Node.js', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { name: 'NestJS', color: 'text-rose-400 border-rose-500/30 bg-rose-500/10' },
    { name: 'PostgreSQL', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' },
    { name: 'Docker', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { name: 'AWS Cloud', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { name: 'Tailwind CSS', color: 'text-teal-400 border-teal-500/30 bg-teal-500/10' },
    { name: 'Redis', color: 'text-red-400 border-red-500/30 bg-red-500/10' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -top-24 -left-20 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] top-1/2 -right-20" />
        <div className="absolute w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] bottom-0 left-1/3" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for new projects & opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <p className="text-slate-400 font-mono text-sm sm:text-base font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              
              {/* Dynamic typing role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-indigo-400">
                  <span className="text-slate-400 font-sans font-normal text-lg sm:text-xl mr-2">
                    I am a
                  </span>
                  <span>{displayedText}</span>
                  <span className="inline-block w-0.5 h-6 sm:h-7 bg-indigo-400 ml-1 animate-pulse align-middle" />
                </p>
              </div>
            </div>

            {/* Short Bio description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {profile.shortBio}
            </p>

            {/* Interactive Tech Stack Quick Pills */}
            <div className="pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-center lg:justify-start gap-2">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core Stack</span>
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techBadges.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-transform hover:scale-105 cursor-default ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2">
              <button
                id="hero-projects-btn"
                onClick={onOpenProjects}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer shadow-sm"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Get in Touch</span>
              </button>

              <a
                id="hero-resume-btn"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Career History</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-3 text-slate-400">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  title="Email"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card / Interactive Architecture Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Developer IDE/Card Mockup */}
              <div className="relative rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
                
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">developer.config.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>v2.4 LTS</span>
                  </div>
                </div>

                {/* Simulated Code Architecture Block */}
                <div className="font-mono text-xs space-y-2.5 leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-slate-800/70">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-indigo-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">'{profile.name}'</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">'Fullstack Specialist'</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">location:</span>{' '}
                      <span className="text-emerald-300">'{profile.location}'</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">frontend:</span> [
                      <span className="text-amber-300">'React'</span>,{' '}
                      <span className="text-amber-300">'Next.js'</span>,{' '}
                      <span className="text-amber-300">'TS'</span>,{' '}
                      <span className="text-amber-300">'Tailwind'</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">backend:</span> [
                      <span className="text-amber-300">'Node'</span>,{' '}
                      <span className="text-amber-300">'NestJS'</span>,{' '}
                      <span className="text-amber-300">'Postgres'</span>,{' '}
                      <span className="text-amber-300">'Docker'</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-cyan-300">'Ready for Impact 🚀'</span>
                    </div>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Floating Micro Highlights */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">APIs & Backend</p>
                      <p className="text-xs font-semibold text-slate-200">Resilient</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">UI / UX</p>
                      <p className="text-xs font-semibold text-slate-200">High Performance</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">
              +{profile.stats.yearsOfExperience}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Years of Experience
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
              +{profile.stats.projectsCompleted}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Projects Shipped
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              +{profile.stats.githubContributions}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Git Contributions
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
              {profile.stats.clientSatisfaction}%
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Client Satisfaction
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
