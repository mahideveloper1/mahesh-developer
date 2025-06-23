'use client'
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Blogs from './components/Blog';
import Projects from './components/Projects';
import Resume from './components/Resume';

// Define the section type
type Section = 'about' | 'skills' | 'experience' | 'projects' | 'services' | 'resume' | 'contact' | 'blogs';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 flex items-center justify-center">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Component that uses useSearchParams - must be wrapped in Suspense
const PageContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<Section>('about');

  // Get section from URL params
  useEffect(() => {
    const section = searchParams.get('section') as Section;
    const validSections: Section[] = ['about', 'skills', 'experience', 'projects', 'services', 'resume', 'contact', 'blogs'];
    
    if (section && validSections.includes(section)) {
      setActiveSection(section);
    } else {
      setActiveSection('about');
    }
  }, [searchParams]);

  // Function to change section
  const changeSection = (section: Section): void => {
    setActiveSection(section);
    router.push(`?section=${section}`, { scroll: false });
  };

  // Function to render the active section
  const renderActiveSection = (): React.ReactElement => {
    switch (activeSection) {
      case 'about':
        return <Home />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience/>;
        
      case 'projects':
        return <Projects/>
      case 'services':
        return (
          <div className="min-h-screen bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 flex items-center justify-center">
            <div className="text-white text-2xl">Services Section - Coming Soon</div>
          </div>
        );
      case 'resume':
        return <Resume/>
      case 'contact':
        return <Contact/>
      case 'blogs':
        return <Blogs/>
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Sidebar Component - Pass changeSection function */}
      <Sidebar activeSection={activeSection} changeSection={changeSection} />
      
      {/* Main Content Area */}
      <main className="lg:ml-64">
        {renderActiveSection()}
      </main>
    </div>
  );
};

// Main Page component with Suspense wrapper
const Page: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PageContent />
    </Suspense>
  );
};

export default Page;