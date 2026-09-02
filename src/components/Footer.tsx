import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { UserProfile } from '../types';
import { Trans } from '@lingui/react/macro';
import { t } from '@lingui/core/macro';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-mono text-base font-bold text-white">
              {profile.name} <span className="text-indigo-400">.dev</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              title={t({
                id: "footer.social.github",
                comment: "Tooltip for GitHub social media link in footer"
              })`GitHub`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              title={t({
                id: "footer.social.linkedin",
                comment: "Tooltip for LinkedIn social media link in footer"
              })`LinkedIn`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              title={t({
                id: "footer.social.email",
                comment: "Tooltip for email contact link in footer"
              })`Email`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            <Trans id="footer.backToTop" comment="Button text to scroll back to top of page">
              Back to top
            </Trans>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            <Trans 
              id="footer.copyright" 
              comment="Copyright notice in footer, {year} will be replaced with current year"
              year={new Date().getFullYear()}
            >
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </Trans>
          </p>
          <p className="flex items-center gap-1">
            <Trans 
              id="footer.techStack" 
              comment="Technologies used in the project, shown in footer"
            >
              Built with React 19, TypeScript & Tailwind CSS
            </Trans>
          </p>
        </div>

      </div>
    </footer>
  );
};