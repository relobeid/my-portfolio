'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SkillItem from './SkillItem';

const About = () => {
  const interests = [
    {
      title: "Software Development",
      description: "Passionate about creating efficient and elegant solutions through code",
      icon: "/icons/code.svg",
      bgColor: "bg-blue-900/30",
      iconClass: "object-contain",
      animation: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay: 0.2 }
      }
    },
    {
      title: "Soccer",
      description: "Love playing and watching soccer, especially Premier League",
      icon: "/icons/soccer.svg",
      bgColor: "bg-green-900/30",
      iconClass: "object-contain invert",
      animation: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay: 0.4 }
      }
    },
    {
      title: "Gaming",
      description: "Enjoy strategic games and game development",
      icon: "/icons/gaming.svg",
      bgColor: "bg-purple-900/30",
      iconClass: "object-contain invert",
      animation: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay: 0.6 }
      }
    }
  ];

  const skills = [
    { name: "Python", icon: "/icons/tech/python.svg", bgColor: "bg-blue-800/30" },
    { name: "JavaScript", icon: "/icons/tech/javascript.svg", bgColor: "bg-yellow-700/30" },
    { name: "TypeScript", icon: "/icons/tech/typescript.svg", bgColor: "bg-blue-700/30" },
    { name: "React", icon: "/icons/tech/react.svg", bgColor: "bg-cyan-800/30" },
    { name: "Node.js", icon: "/icons/tech/nodejs.svg", bgColor: "bg-green-800/30" },
    { name: "Next.js", icon: "/icons/tech/nextjs.svg", bgColor: "bg-gray-800/30", iconClass: "invert" },
    { name: "Express", icon: "/icons/tech/express.svg", bgColor: "bg-gray-700/30" },
    { name: "MongoDB", icon: "/icons/tech/mongodb.svg", bgColor: "bg-green-700/30" },
    { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg", bgColor: "bg-blue-600/30" },
    { name: "Docker", icon: "/icons/tech/docker.svg", bgColor: "bg-blue-500/30" },
    { name: "AWS", icon: "/icons/tech/aws.svg", bgColor: "bg-orange-700/30", iconClass: "invert brightness-200" },
    { name: "Git", icon: "/icons/tech/git.svg", bgColor: "bg-red-700/30" }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className={`p-6 rounded-lg ${interest.bgColor} backdrop-blur-sm`}
              initial={interest.animation.initial}
              animate={interest.animation.animate}
              transition={interest.animation.transition}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-8 h-8 mr-3">
                  <Image
                    src={interest.icon}
                    alt={interest.title}
                    fill
                    className={interest.iconClass}
                    sizes="32px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
              </div>
              <p className="text-gray-300">{interest.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              bgColor={skill.bgColor}
              iconClass={skill.iconClass}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 