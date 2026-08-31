import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowUpRight, UserCog } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  profile: UserProfile;
  onOpenCustomize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCustomize
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFirstName = () => {
    const parts = profile.name.trim().split(' ');
    return parts.length > 0 ? parts[0] : 'Dev';
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="group flex items-center gap-2.5 text-slate-100 font-mono text-lg font-bold tracking-tight hover:text-indigo-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm shadow-indigo-500/20">
            <Code2 className="w-4 h-4" />
          </div>
          <span>
            <span className="text-indigo-400">&lt;</span>
            <span className="text-slate-100 group-hover:text-indigo-300 transition-colors">
              {getFirstName()}
            </span>
            <span className="text-slate-400 text-sm font-normal">.dev</span>
            <span className="text-indigo-400">/&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-indigo-600 shadow-sm shadow-indigo-600/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Customize Profile modal */}
          <button
            id="nav-customize-btn"
            onClick={onOpenCustomize}
            title="Customize Profile"
            className="p-2 text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-slate-700 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            <UserCog className="w-4 h-4" />
          </button>

          {/* Hire Me CTA */}
          <button
            id="nav-hire-btn"
            onClick={() => scrollTo('contact')}
            className="group flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 rounded-xl shadow-sm shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-customize-header-btn"
            onClick={onOpenCustomize}
            aria-label="Customize Profile"
            className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-white"
          >
            <UserCog className="w-4 h-4" />
          </button>

          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-indigo-600'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              id="mobile-customize-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomize();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
            >
              <UserCog className="w-4 h-4 text-indigo-400" />
              <span>Customize Profile</span>
            </button>

            <button
              id="mobile-hire-cta"
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
