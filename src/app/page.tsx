'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Hero from '@/components/Hero';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-8">
              {['home', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(section);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
