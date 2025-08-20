'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGo,
  SiCplusplus,
  SiDjango,
  SiRedis,
} from 'react-icons/si';
import { 
  FaJava,
  FaAws,
  FaCloud
} from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'React', icon: <SiReact />, color: '#61dafb' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'Git', icon: <SiGit />, color: '#f05032' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'Go', icon: <SiGo />, color: '#00add8' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
  { name: 'Django', icon: <SiDjango />, color: '#092e20' },
  { name: 'GCP', icon: <FaCloud />, color: '#4285f4' },
  { name: 'Redis', icon: <SiRedis />, color: '#dc382d' },
];

const SkillsCarousel = () => {
  const [mounted, setMounted] = useState(false);

  // Create multiple copies for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  // Add CSS animation keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .animate-scroll {
        animation: scroll 30s linear infinite;
      }
      
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Skills
        </h2>
        <div className="border-l-2 border-r-2 border-gray-300 rounded-tl-md rounded-br-md py-3 h-16 flex items-center justify-center">
          <div className="text-gray-500">Loading skills...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 
          className="text-lg font-bold text-gray-800 mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Skills
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Main carousel container */}
        <div className="border-l-2 border-r-2 border-gray-300 rounded-tl-md rounded-br-md overflow-hidden relative py-3">
          <div className="relative flex items-center">
            <div
              className="flex items-center gap-8 md:gap-10 animate-scroll"
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center justify-center min-w-fit hover:opacity-90 transition-opacity duration-200"
                >
                  <div
                    className="text-3xl md:text-4xl text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade masks for smooth edges */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-[#F5F5DC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-[#F5F5DC] to-transparent z-10 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsCarousel;
