'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Wuduh",
      description: "Wuduh makes web content easier to read by adjusting the text to your level—so you never go 'What the?!' again!",
      technologies: ["JavaScript", "Vite", "OpenAI API", "Chrome API", "AWS Lambda", "Supabase"],
      image: "/wuduh_logo.png",
      github: "https://github.com/yourusername/wuduh",
      live: "https://wuduh.com"
    },
    {
      title: "ShowSync",
      description: "ShowSync is the next evolution of media discovery and social engagement. Think Discord meets IMDB meets Rotten Tomatoes — an AI-powered platform that transforms how people discover, discuss, and experience movies, TV shows, and books together.",
      technologies: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "TMDb API", "Open Library API"],
      image: "/showsync_logo.png",
      github: "https://github.com/relobeid/showsync",
      live: "#"
    },
    {
      title: "Unity Game Development Portfolio",
      description: "A comprehensive Unity-based game development portfolio demonstrating advanced software engineering principles, modern C# programming practices, and professional game development workflows. Features multiple game prototypes with clean architecture, performance optimization, and industry-standard practices. Highlights: vehicle physics, object pooling, procedural generation, and cross-platform builds.",
      technologies: ["Unity 2022.3 LTS", "C# 10.0", "URP", "Git LFS", "CI/CD"],
      image: "/unity_logo.png",
      github: "https://github.com/relobeid/Unity-Create-With-Code",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gray-600 relative flex items-center justify-center">
                {project.image && (
                  <img src={project.image} alt={project.title} className="max-h-32 object-contain mx-auto" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.title === 'Wuduh' ? (
                    <>
                      <button
                        disabled
                        className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full opacity-60 cursor-not-allowed"
                      >
                        Private
                      </button>
                      <button
                        disabled
                        className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full opacity-60 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </>
                  ) : project.title === 'ShowSync' ? (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        GitHub
                      </a>
                    </>
                  ) : project.title === 'Unity Game Development Portfolio' ? (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        GitHub
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 