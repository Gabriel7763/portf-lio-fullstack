import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Flame 
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'ai_cloud', label: 'AI & Cloud' }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-900/40">
      {/* Illumination */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Works & Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-tested architectures, SaaS platforms, and distributed systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`project-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-indigo-950/20"
            >
              <div>
                {/* Project Image & Quick Badges */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950/80 text-indigo-300 border border-indigo-900/40 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>

                    {project.featured && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-950/90 text-amber-300 border border-amber-800/60 backdrop-blur-md flex items-center gap-1 font-semibold">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlight Metric */}
                  {project.metrics.length > 0 && (
                    <div className="py-2 px-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{project.metrics[0]}</span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenDetails(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer py-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Architecture Deep Dive</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Source Code"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                    className="p-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-Depth Architectural Details */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      </div>
    </section>
  );
};
