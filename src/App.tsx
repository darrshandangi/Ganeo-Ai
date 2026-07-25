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
    <main className="overflow-x-clip bg-[#0C0C0C]">
      {/* View Switcher Header Bar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl shadow-2xl flex items-center gap-2 text-xs font-medium">
        <button
          onClick={() => setCurrentView('onboarding')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            currentView === 'onboarding'
              ? 'bg-purple-600 text-white shadow-md'
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
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Main Homepage</span>
        </button>
      </header>

      {currentView === 'onboarding' ? (
        <div className="pt-8">
          <OnboardingSection />
        </div>
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

