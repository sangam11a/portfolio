import { Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import PublicationsSection from './components/PublicationsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-900">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-5">
          <div className="absolute inset-0 border border-accent-cyan/20 rounded-full" />
          <div className="absolute inset-0 border-t border-accent-cyan rounded-full animate-spin" />
          <div className="absolute inset-2 border border-accent-indigo/20 rounded-full" />
          <div className="absolute inset-2 border-t border-accent-indigo rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        </div>
        <p className="text-slate-500 text-xs font-mono tracking-wider">Initializing systems...</p>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="min-h-screen bg-deep-900 text-slate-200 overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <div className="glow-line" />
        <AboutSection />
        <div className="glow-line" />
        <ExperienceSection />
        <div className="glow-line" />
        <SkillsSection />
        <div className="glow-line" />
        <PublicationsSection />
        <div className="glow-line" />
        <EducationSection />
        <div className="glow-line" />
        <ContactSection />
        <Footer />
      </div>
    </Suspense>
  );
}
