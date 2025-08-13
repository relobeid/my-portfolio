'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "FeaturePulse",
      description:
        "Stripe for ML monitoring: real-time feature observability and drift detection. Ingests 100+ features/sec via Go API, streams with Kafka + Flink, stores 100M+ data points in ClickHouse & AWS S3, and deploys on EC2. React dashboard.",
      technologies: [
        "React",
        "Go",
        "Kafka",
        "Flink",
        "ClickHouse",
        "AWS S3",
        "EC2",
        "Docker",
      ],
      image: "/FEATUREPULSE copy.png",
      github: "https://github.com/relobeid/FeaturePulse",
      live: "https://featurepulse1.vercel.app/",
    },
    {
      title: "Wuduh",
      description: "Wuduh makes web content easier to read by adjusting the text to your level—so you never go 'What the?!' again!",
      technologies: ["JavaScript", "Vite", "OpenAI API", "Chrome API", "AWS Lambda", "Supabase"],
      image: "/wuduh_logo.png",
      github: undefined,
      live: "https://wuduh.vercel.app/",
    },
    {
      title: "ShowSync",
      description: "ShowSync is the next evolution of media discovery and social engagement. Think Discord meets IMDB meets Rotten Tomatoes — an AI-powered platform that transforms how people discover, discuss, and experience movies, TV shows, and books together.",
      technologies: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "TMDb API", "Open Library API"],
      image: "/showsync_logo.png",
      github: "https://github.com/relobeid/showsync",
      live: "https://showsynced.vercel.app/",
    },
    {
      title: "Unity Game Development Portfolio",
      description: "A comprehensive Unity-based game development portfolio demonstrating advanced software engineering principles, modern C# programming practices, and professional game development workflows. Features multiple game prototypes with clean architecture, performance optimization, and industry-standard practices. Highlights: vehicle physics, object pooling, procedural generation, and cross-platform builds.",
      technologies: ["Unity 2022.3 LTS", "C# 10.0", "URP", "Git LFS", "CI/CD"],
      image: "/unity_logo.png",
      github: "https://github.com/relobeid/Unity-Create-With-Code",
      live: "https://relobeid.github.io/unity/"
    },
    {
      title: "Shellfish Pollution Prediction",
      description:
        "As a full stack developer, I built a real-time pollution prediction platform for the Portuguese Institute for Sea and Atmosphere, integrating 100GB+ of environmental data and delivering interactive geospatial visualizations for researchers.",
      technologies: [
        "FastAPI",
        "PostgreSQL",
        "React",
        "Mapbox",
        "Copernicus API",
        "Python",
        "Agile",
      ],
      image: "/shellfish.png",
      github: "https://github.com/relobeid/shellfish-pollution-prediction",
      live: "https://shellfish-pollution-prediction.pages.dev/",
    },
  ];

  // Pagination: show N cards per view (responsive), with arrows to change pages
  const getCardsPerPage = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width >= 1024) return 3; // lg and up
    if (width >= 768) return 2; // md
    return 1; // sm
  };

  const [cardsPerPage, setCardsPerPage] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    // Initialize and update cards per page on resize
    const update = () => setCardsPerPage(getCardsPerPage());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(projects.length / cardsPerPage)),
    [projects.length, cardsPerPage]
  );

  // Ensure current page stays in range when cardsPerPage changes
  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const startIndex = currentPage * cardsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + cardsPerPage);

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

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
        
        <p className="text-center text-sm text-gray-400 -mt-8 mb-6">Some project backends may be temporarily down.</p>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            disabled={currentPage === 0}
            className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-900/70 hover:bg-gray-900/90 text-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            disabled={currentPage >= totalPages - 1}
            className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-900/70 hover:bg-gray-900/90 text-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ›
          </button>

          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
          >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg w-full"
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
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 py-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-700/20 text-blue-300 rounded-full text-sm whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full opacity-60 cursor-not-allowed"
                    >
                      Private
                    </button>
                  )}
                  {project.live && (
                                          <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        Website
                      </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
          <div className="mt-6 text-center text-gray-400 text-xs">
            Page {currentPage + 1} of {totalPages}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 