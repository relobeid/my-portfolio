'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Ramez
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Software Engineer & Tech Enthusiast</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero; 