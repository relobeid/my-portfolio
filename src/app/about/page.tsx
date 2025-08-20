'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaArrowLeft, FaUniversity, FaBuilding } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image';
import SkillsCarousel from '@/components/SkillsCarousel';



const projects = [
  {
    title: "FeaturePulse",
    description: "ML model monitoring is complex and requires significant infrastructure setup, preventing many teams from tracking their models effectively. Built a 'Stripe for ML monitoring' that provides simple APIs and dashboards for developers to quickly monitor their model data without infrastructure headaches. Used Go for high-throughput data ingestion, Kafka for real-time streaming, and ClickHouse for fast time-series analysis, enabling teams to focus on their models instead of monitoring infrastructure.",
    live: "https://featurepulse1.vercel.app/",
    image: "/featurepulse_example.png",
    logo: "/FEATUREPULSE copy.png",
    skills: ["React", "Go", "Kafka", "Flink", "ClickHouse", "AWS S3", "EC2", "Docker"]
  },
  {
    title: "Wuduh",
    description: "Traditional language learning tools force users to allocate dedicated study time and stagnate at fixed levels, making improvement feel like a chore. Created an AI-powered browser extension that seamlessly integrates into users' daily web browsing, automatically adapting content complexity as they improve. As users naturally read and learn online, Wuduh learns their progress and grows with them, eliminating the need for additional study time while providing continuous, personalized language development.",
    github: "https://github.com/wuduh",
    live: "https://wuduh.vercel.app/",
    image: "/wuduh_examples.png",
    logo: "/wuduh_logo.png",
    skills: ["Vite", "OpenAI API", "Chrome API", "AWS Lambda", "Supabase", "LangChain", "LangGraph"]
  },
  {
    title: "ShowSync",
    description: "Many people love movies, TV shows, and books but have no one to discuss them with, leading to media loneliness and missed opportunities for deeper appreciation. Built an AI-driven platform that operates like traditional book clubs, automatically generating communities based on shared preferences and creating spaces for meaningful discussions. Used collaborative filtering algorithms to connect people who would never find each other otherwise, giving them the book club experience they've been missing without requiring existing social connections.",
    github: "https://github.com/relobeid/showsync",
    live: "https://showsynced.vercel.app/",
    image: "/showsync_example.png",
    skills: ["Next.js", "Spring Boot", "PostgreSQL", "Redis", "Docker", "TMDb API", "Open Library API"]
  },
  {
    title: "Unity Game Development Portfolio",
    description: "Game development portfolios often lack depth and don't showcase real technical skills beyond basic tutorials. Created a comprehensive portfolio demonstrating advanced Unity development through multiple game genres with optimized performance. Used C# for modular game systems, Unity's profiling tools for optimization, and implemented best practices in game architecture to show professional development capabilities.",
    github: "https://github.com/relobeid/Unity-Create-With-Code",
    live: "https://relobeid.github.io/unity/",
    image: "/unity_example.png",
    skills: ["Unity", "C#", "Game Development", "OOP", "Performance Optimization"]
  },
  {
    title: "Shellfish Pollution Prediction",
    description: "Shellfish contamination costs Portugal's aquaculture industry over €50 million annually, with farmers forced to close operations after contamination is detected. Built a predictive platform that monitors water quality and forecasts contamination events before they occur. Used FastAPI for real-time data processing, PostgreSQL with PostGIS for geospatial analysis, and integrated satellite data to give farmers proactive insights instead of reactive closures.",
    live: "https://shellfish-pollution-prediction.pages.dev/",
    image: "/shellfish_example.png",
    skills: ["FastAPI", "PostgreSQL", "PostGIS", "Mapbox", "Python", "Async", "Geospatial"]
  }
];

export default function AboutPage() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setContactStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setContactStatus('error');
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeft size={14} />
            <span className="text-sm">Back to home</span>
          </Link>
        </motion.div>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <a href="https://www.linkedin.com/in/relobeid/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800 transition-colors relative after:content-[''] after:absolute after:left-[-0.2em] after:right-[-0.2em] after:bottom-0 after:h-[1px] after:bg-blue-600 after:origin-bottom after:transition-transform after:duration-[125ms] after:ease-in-out hover:after:transform hover:after:scale-y-[20] hover:after:z-[-1] hover:text-white hover:z-[1] relative">
              LinkedIn
            </a>
            <a href="https://github.com/relobeid" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-gray-900 transition-colors relative after:content-[''] after:absolute after:left-[-0.2em] after:right-[-0.2em] after:bottom-0 after:h-[1px] after:bg-gray-700 after:origin-bottom after:transition-transform after:duration-[125ms] after:ease-in-out hover:after:transform hover:after:scale-y-[20] hover:after:z-[-1] hover:text-white hover:z-[1] relative">
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-8 border-t border-gray-400 pt-4"
        >
          {projects.map((project, index) => (
            <div key={index} className="pb-4">
              <div 
                className="flex items-center justify-between cursor-pointer py-2 hover:bg-gray-100/50 rounded-lg px-2 transition-colors"
                onClick={() => toggleProject(index)}
              >
                <div className="flex items-center space-x-3">
                  {(project.title === "Wuduh" || project.title === "FeaturePulse") && project.logo && (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                  <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  {expandedProjects.has(index) && (
                    <div className="flex space-x-2">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  )}
                  {expandedProjects.has(index) ? (
                    <FaChevronUp className="text-gray-400" size={14} />
                  ) : (
                    <FaChevronDown className="text-gray-400" size={14} />
                  )}
                </div>
              </div>
              
              {expandedProjects.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 pl-2"
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-amber-100 text-gray-800 text-xs rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.image && (
                    <div className="mt-4">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 border-t border-gray-400 pt-4"
        >
          <SkillsCarousel />
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 border-t border-gray-400 pt-4"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Experience</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <FaUniversity className="text-blue-600" size={18} />
                <span className="text-gray-700">Salisbury University</span>
              </div>
              <span className="text-gray-500 text-sm">Student</span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <FaBuilding className="text-green-600" size={18} />
                <span className="text-gray-700">Salisbury University / IPMA / Nova Lisbon</span>
              </div>
              <span className="text-gray-500 text-sm">Developer</span>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-400 pt-4"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-8" style={{ fontFamily: 'Georgia, serif' }}>Get in touch</h2>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-gray-900"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none text-gray-900"
              />
            </div>
            
            <button
              type="submit"
              disabled={contactStatus === 'sending'}
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {contactStatus === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            
            {contactStatus === 'success' && (
              <p className="text-green-600 text-sm">Message sent successfully!</p>
            )}
            {contactStatus === 'error' && (
              <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
        
      </div>
    </main>
  );
}
