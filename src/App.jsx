import React from 'react';
import Header from './components/Header.jsx';
import IntroSection from './components/sections/IntroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import EducationSection from './components/sections/EducationSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ExperienceSection from './components/sections/ExperienceSection.jsx';
import Footer from './components/Footer.jsx';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Analytics />
      <main className="pt-16">
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;