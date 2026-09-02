import React, { useState, useMemo } from 'react';
import { 
  Atom, 
  FileCode2, 
  Palette, 
  Layers, 
  RefreshCw, 
  Server, 
  Box, 
  Terminal, 
  Share2, 
  Cpu, 
  Database, 
  HardDrive, 
  Zap, 
  Code2, 
  Container, 
  Cloud, 
  GitBranch, 
  Boxes, 
  GitMerge, 
  CheckCircle2, 
  LayoutGrid,
  Search,
  Sparkles,
  Award
} from 'lucide-react';
import { Skill, SkillCategory } from '../types';
import { skillsData } from '../data/portfolioData';
import { Trans } from '@lingui/react/macro';
import { t } from '@lingui/core/macro';

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Atom,
  FileCode2,
  Palette,
  Layers,
  RefreshCw,
  Server,
  Box,
  Terminal,
  Share2,
  Cpu,
  Database,
  HardDrive,
  Zap,
  Code2,
  Container,
  Cloud,
  GitBranch,
  Boxes,
  GitMerge,
  CheckCircle2,
  LayoutGrid
};

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: t({
      id: "techstack.categories.all",
      comment: "Category filter option to show all technologies"
    })`All Technologies` },
    { id: 'frontend', label: t({
      id: "techstack.categories.frontend",
      comment: "Category filter option for Frontend technologies"
    })`Frontend` },
    { id: 'backend', label: t({
      id: "techstack.categories.backend",
      comment: "Category filter option for Backend technologies"
    })`Backend` },
    { id: 'database', label: t({
      id: "techstack.categories.database",
      comment: "Category filter option for Database & Cache technologies"
    })`Database & Cache` },
    { id: 'devops', label: t({
      id: "techstack.categories.devops",
      comment: "Category filter option for DevOps & Cloud technologies"
    })`DevOps & Cloud` },
    { id: 'tools', label: t({
      id: "techstack.categories.tools",
      comment: "Category filter option for Tools & Quality technologies"
    })`Tools & Quality` }
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.popularWith.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryColor = (cat: SkillCategory) => {
    switch (cat) {
      case 'frontend':
        return 'text-sky-400 border-sky-500/20 bg-sky-500/10';
      case 'backend':
        return 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10';
      case 'database':
        return 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10';
      case 'devops':
        return 'text-amber-400 border-amber-500/20 bg-amber-500/10';
      case 'tools':
        return 'text-purple-400 border-purple-500/20 bg-purple-500/10';
      default:
        return 'text-slate-400 border-slate-700 bg-slate-800';
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <Trans id="techstack.badge" comment="Badge label for technical repertoire section">
              Technical Repertoire
            </Trans>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <Trans id="techstack.title" comment="Main title for skills section">
              Skills, Frameworks & Infrastructure
            </Trans>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            <Trans id="techstack.subtitle" comment="Subtitle describing the skills section">
              A comprehensive overview of the modern tools, languages, and cloud systems I use daily.
            </Trans>
          </p>
        </div>

        {/* Filter Controls & Live Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-sm w-full md:w-auto">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  id={`skill-filter-${category.id}`}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t({
                id: "techstack.search.placeholder",
                comment: "Placeholder text for search input"
              })`Search technologies, libraries...`}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                aria-label={t({
                  id: "techstack.search.clear",
                  comment: "Aria label for clear search button"
                })`Clear search`}
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Tech Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            <Search className="w-8 h-8 mx-auto mb-3 text-slate-400 opacity-60" />
            <p className="text-base font-medium text-slate-300">
              <Trans id="techstack.noResults" comment="Message when no technologies match search">
                No technologies found matching your criteria.
              </Trans>
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline cursor-pointer"
            >
              <Trans id="techstack.resetFilters" comment="Button text to reset filters">
                Reset filters
              </Trans>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.iconName] || Code2;
              const catColor = getCategoryColor(skill.category);

              return (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-lg hover:shadow-black/20"
                >
                  <div>
                    {/* Card Top: Icon, Title & Category Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 ${catColor}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400 capitalize">
                            {skill.categoryLabel}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                        <Award className="w-3 h-3 text-amber-400" />
                        <Trans 
                          id="techstack.skill.experience" 
                          comment="Experience years badge for a skill, {years} is the number"
                          years={skill.experienceYears}
                        >
                          {skill.experienceYears}y exp
                        </Trans>
                      </div>
                    </div>

                    {/* Skill highlight description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {skill.highlight}
                    </p>
                  </div>

                  <div>
                    {/* Proficiency progress bar */}
                    <div className="space-y-1.5 mb-3.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">
                          <Trans id="techstack.skill.proficiency" comment="Label for proficiency level">
                            Proficiency
                          </Trans>
                        </span>
                        <span className="font-semibold text-slate-200">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>

                    {/* Ecosystem tags */}
                    <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        <Trans id="techstack.skill.usedWith" comment="Label for ecosystem tags">
                          Used with:
                        </Trans>
                      </span>
                      {skill.popularWith.map((lib) => (
                        <span
                          key={lib}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Total Skills Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <Trans 
              id="techstack.totalBadge" 
              comment="Total technologies badge, {count} is the number"
              count={skillsData.length}
            >
              Total of <strong>{skillsData.length}</strong> technologies actively maintained
            </Trans>
          </div>
        </div>

      </div>
    </section>
  );
};