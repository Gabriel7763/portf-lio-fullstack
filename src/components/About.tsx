import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { UserProfile } from '../types';
import { Trans } from '@lingui/react/macro';
import { t } from '@lingui/core/macro';

interface AboutProps {
  profile: UserProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      icon: Code2,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      title: t({
        id: "about.pillars.frontend.title",
        comment: "Title for Modern Frontend engineering pillar"
      })`Modern Frontend`,
      desc: t({
        id: "about.pillars.frontend.description",
        comment: "Description of Modern Frontend expertise including React, Next.js, TypeScript and Design Systems"
      })`Deep mastery of React, Next.js 15, TypeScript, state management, and accessible Design Systems.`
    },
    {
      icon: Server,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      title: t({
        id: "about.pillars.backend.title",
        comment: "Title for Resilient Backend engineering pillar"
      })`Resilient Backend`,
      desc: t({
        id: "about.pillars.backend.description",
        comment: "Description of Backend expertise including REST/GraphQL APIs, microservices, Node.js, NestJS, Go and Python"
      })`Robust REST/GraphQL APIs and microservices in Node.js, NestJS, Go, and Python built for scale.`
    },
    {
      icon: Database,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      title: t({
        id: "about.pillars.databases.title",
        comment: "Title for Databases & Caching engineering pillar"
      })`Databases & Caching`,
      desc: t({
        id: "about.pillars.databases.description",
        comment: "Description of Database expertise including PostgreSQL, MongoDB, and Redis caching"
      })`Advanced relational modeling (PostgreSQL), NoSQL (MongoDB), and high-throughput Redis caching.`
    },
    {
      icon: Cloud,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      title: t({
        id: "about.pillars.cloud.title",
        comment: "Title for Cloud & DevOps engineering pillar"
      })`Cloud & DevOps`,
      desc: t({
        id: "about.pillars.cloud.description",
        comment: "Description of Cloud expertise including Docker, Kubernetes, AWS, and CI/CD pipelines"
      })`Containerization with Docker, Kubernetes, AWS cloud architectures, and automated CI/CD pipelines.`
    }
  ];

  const strengths = [
    t({
      id: "about.strengths.cleanCode",
      comment: "Engineering strength about Clean Code and SOLID principles"
    })`Clean Code, SOLID & Scalable Design Patterns`,
    t({
      id: "about.strengths.testing",
      comment: "Engineering strength about Automated Testing"
    })`Automated Testing (Unit, Integration & E2E)`,
    t({
      id: "about.strengths.microservices",
      comment: "Engineering strength about Event-Driven Microservices"
    })`Event-Driven Microservices & Queues`,
    t({
      id: "about.strengths.performance",
      comment: "Engineering strength about Core Web Vitals and Frontend Performance"
    })`Core Web Vitals & Frontend Performance 95+`,
    t({
      id: "about.strengths.security",
      comment: "Engineering strength about Security-First mindset"
    })`Security-First Mindset (OWASP & PCI-DSS)`,
    t({
      id: "about.strengths.leadership",
      comment: "Engineering strength about Technical Leadership and Mentorship"
    })`Technical Leadership & Cross-Functional Team Mentorship`
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <Trans id="about.badge" comment="Badge label for engineering pillars section">
              Engineering Pillars
            </Trans>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <Trans id="about.title" comment="Main title for About Me section">
              About Me & Engineering Focus
            </Trans>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {profile.subtitle}
          </p>
        </div>

        {/* Top Grid: Bio Narrative & Visual Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Text Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {profile.fullBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Principles / Strengths */}
            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <Trans id="about.strengths.title" comment="Title for Core Engineering Standards section">
                  Core Engineering Standards
                </Trans>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Showcase Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-200">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <Trans id="about.strengths.jsonLabel" comment="Label for core strengths JSON file display">
                    core_strengths.json
                  </Trans>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                  <Trans id="about.strengths.productionReady" comment="Production Ready badge">
                    Production Ready
                  </Trans>
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <Trans id="about.skills.architecture.label" comment="Label for Software Architecture skill">
                    Software Architecture
                  </Trans>
                  <span className="text-indigo-300">
                    <Trans id="about.skills.architecture.value" comment="Value for Software Architecture skill">
                      Clean Arch / DDD
                    </Trans>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-[95%]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <Trans id="about.skills.frontendPerformance.label" comment="Label for Frontend Performance skill">
                    Frontend Performance
                  </Trans>
                  <span className="text-sky-300">
                    <Trans id="about.skills.frontendPerformance.value" comment="Value for Frontend Performance skill">
                      Core Web Vitals 95+
                    </Trans>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full w-[98%]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <Trans id="about.skills.backendResilience.label" comment="Label for Backend Resilience skill">
                    Backend Resilience
                  </Trans>
                  <span className="text-emerald-300">
                    <Trans id="about.skills.backendResilience.value" comment="Value for Backend Resilience skill">
                      High Throughput
                    </Trans>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <Trans id="about.skills.cloud.label" comment="Label for Cloud & Containerization skill">
                    Cloud & Containerization
                  </Trans>
                  <span className="text-amber-300">
                    <Trans id="about.skills.cloud.value" comment="Value for Cloud & Containerization skill">
                      Docker & K8s
                    </Trans>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[88%]" />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <Trans id="about.strengths.zeroTechDebt" comment="Zero Tech Debt Mindset label">
                    Zero Tech Debt Mindset
                  </Trans>
                </span>
                <span className="font-mono text-indigo-400 font-medium">
                  <Trans id="about.strengths.typeSafe" comment="Type-safe badge">
                    100% Type-Safe
                  </Trans>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 group shadow-lg shadow-black/10"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 transition-transform group-hover:scale-110 ${pillar.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};