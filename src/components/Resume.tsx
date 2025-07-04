'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <section className="py-20 bg-gray-800 border-b-4 border-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">Resume</h2>
          <p className="text-gray-300 mb-12">
            Download my resume to learn more about my experience and qualifications
          </p>

          <motion.a
            href="/RamezElobeid_Resume.pdf"
            download="RamezElobeid_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 