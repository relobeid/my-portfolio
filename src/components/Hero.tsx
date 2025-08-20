'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* No shooting stars */}

      {/* Learn more button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/about'}
          className="px-8 py-3 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-300 rounded-full hover:bg-orange-500/30 hover:text-orange-200 transition-all duration-300 font-medium"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Learn more about me
        </motion.button>
      </motion.div>

      {/* Main camping scene */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-center justify-center space-y-6 z-10"
      >
        {/* Camping illustration - smaller and more cozy */}
        <div className="relative">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/darkmode.png"
              alt="Ramez coding by the campfire"
              width={280}
              height={210}
              className="object-contain"
              priority
            />
          </motion.div>
          
          {/* Subtle campfire glow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-400/15 rounded-full blur-xl"></div>
        </div>

        {/* Title and description - smaller and more modest */}
        <div className="text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl font-medium text-white"
            style={{ 
              fontFamily: 'Georgia, serif',
              fontWeight: '500'
            }}
          >
            Hi, I'm Ramez
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-base md:text-lg text-gray-300 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Welcome to my portfolio!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 