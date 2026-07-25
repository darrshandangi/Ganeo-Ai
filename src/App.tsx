import { useState, useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { OnboardingSection } from './components/sections/OnboardingSection';
import { Home, UserCheck } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'onboarding' | 'home'>('onboarding');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'home') {
      setCurrentView('home');
    }
  }, []);

  return (
    <main className="overflow-x-clip bg-[#0C0C0C] min-h-screen pt-20 pb-16">
      {/* Fixed View Switcher Navigation Pill */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] px-3 py-1.5 rounded-full bg-neutral-900/95 border border-amber-500/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-1.5 text-xs font-medium">
        <button
          onClick={() => setCurrentView('onboarding')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            currentView === 'onboarding'
              ? 'bg-amber-500 text-black font-semibold shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Client Onboarding</span>
        </button>

        <button
          onClick={() => setCurrentView('home')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            currentView === 'home'
              ? 'bg-amber-500 text-black font-semibold shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Main Homepage</span>
        </button>
      </div>

      {currentView === 'onboarding' ? (
        <OnboardingSection />
      ) : (
        <>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
        </>
      )}
    </main>
  );
}

export default App;


