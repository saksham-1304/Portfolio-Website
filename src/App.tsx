import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Navigation from './components/Navigation';
import Scene3D from './components/Scene3D';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import OpenSourceSection from './components/sections/OpenSourceSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import LoadingScreen from './components/LoadingScreen';
import ScrollManager from './components/ScrollManager';

function App() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden bg-gray-900">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content Sections */}
      <div className="relative z-10">
        <ScrollManager>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <AchievementsSection />
          <ExperienceSection />
          <OpenSourceSection />
          <TestimonialsSection />
          <ContactSection />
        </ScrollManager>
      </div>

      {/* Loading Screen */}
      <Suspense fallback={<LoadingScreen />}>
        <div />
      </Suspense>
    </div>
  );
}

export default App;