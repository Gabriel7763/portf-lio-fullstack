import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Building2
} from 'lucide-react';
import { experiencesData, educationData, testimonialsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Trajectory
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering leadership, software development, and academic background.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-2xl">
            <button
              id="exp-work-tab"
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              id="exp-edu-tab"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Work Experience Timeline */}
        {activeTab === 'work' && (
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical timeline spine */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 sm:-translate-x-1/2" />

            <div className="space-y-12">
              {experiencesData.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={exp.id}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8 pl-12 sm:pl-0`}
                  >
                    {/* Node circle on timeline */}
                    <div className="absolute left-2.5 sm:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-slate-950 sm:-translate-x-1/2 z-10 shadow-sm shadow-indigo-500" />

                    {/* Content Box */}
                    <div className="w-full sm:w-1/2">
                      <div
                        className={`p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl space-y-4 ${
                          isEven ? 'sm:mr-6' : 'sm:ml-6'
                        }`}
                      >
                        {/* Header: Company & Period */}
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/40 font-medium">
                              {exp.period}
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              {exp.type}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white pt-1">
                            {exp.role}
                          </h3>

                          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
                            <span className="text-indigo-400 flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" />
                              {exp.company}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* General role description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-2 pt-2 border-t border-slate-800/60">
                          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                            Key Accomplishments
                          </p>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack pills */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Education & Certifications Tab */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                    {edu.period}
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {edu.field}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      {edu.degree} — {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-indigo-400" />
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials / Endorsements Carousel / Grid */}
        <div className="mt-24 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-amber-400 bg-amber-950/60 border border-amber-800/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommendations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Colleagues & Leaders Say
            </h3>
            <p className="text-slate-400 text-sm">
              Endorsements on technical craftsmanship, delivery reliability, and architectural vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-md"
              >
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{test.content}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-800/60">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {test.role} • {test.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
