import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizeModal } from './components/CustomizeModal';
import { UserProfile } from './types';
import { initialProfile } from './data/portfolioData';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('portfolio_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProfile;
      }
    }
    return initialProfile;
  });

  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  const handleSaveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem('portfolio_user_profile', JSON.stringify(newProfile));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          profile={profile}
          onOpenProjects={() => scrollToSection('projects')}
          onOpenContact={() => scrollToSection('contact')}
        />

        <About
          profile={profile}
        />

        <TechStack />

        <Projects />

        <Experience />

        <Contact
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
      />

      {/* Customize Profile Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />
    </div>
  );
}
