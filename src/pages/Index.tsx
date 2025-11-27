import { useState } from 'react';
import Hero from '@/components/Hero';
import Generator from '@/components/Generator';
import Examples from '@/components/Examples';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero onGetStarted={() => scrollToSection('generator')} />
        </section>
        
        <section id="generator" className="py-20">
          <Generator />
        </section>
        
        <section id="examples" className="py-20">
          <Examples />
        </section>
        
        <section id="blog" className="py-20">
          <Blog />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;