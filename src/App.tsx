import { useState, useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { OnboardingSection } from './components/sections/OnboardingSection';

function App() {
  const [currentView, setCurrentView] = useState<'onboarding' | 'home'>('onboarding');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'home') {
      setCurrentView('home');
    }
  }, []);

  return (
    <main className="overflow-x-clip bg-[#0A0A0A] min-h-screen">
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



