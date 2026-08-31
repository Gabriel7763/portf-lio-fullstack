import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  BarChart3,
  Code2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-7 text-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Title and Category */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
              {project.categoryLabel}
            </span>
            {project.featured && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/40 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Featured
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Project Preview Image */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-video max-h-80 w-full group">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4 sm:p-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Full Narrative Description */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Product & System Overview</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Metrics Achieved Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            <span>Production Metrics & Impact</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Breakdown (4 Box Matrix) */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-semibold flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Architectural Breakdown</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                <span>Frontend Layer</span>
              </div>
              <p className="text-xs text-slate-300">{project.architecture.frontend}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <Server className="w-3.5 h-3.5" />
                <span>Backend & APIs</span>
              </div>
              <p className="text-xs text-slate-300">{project.architecture.backend}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold">
                <Database className="w-3.5 h-3.5" />
                <span>Database & Cache</span>
              </div>
              <p className="text-xs text-slate-300">{project.architecture.database}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                <Cloud className="w-3.5 h-3.5" />
                <span>DevOps & Infrastructure</span>
              </div>
              <p className="text-xs text-slate-300">{project.architecture.devops}</p>
            </div>
          </div>
        </div>

        {/* Technical Challenge & Implemented Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Technical Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <span>Visit Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
