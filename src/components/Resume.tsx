'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <section className="py-20 bg-gray-900">
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
            href="/resume.pdf" // You'll need to add your resume PDF to the public folder
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </motion.a>

          {/* Preview section */}
          <div className="mt-16 bg-gray-800 p-8 rounded-lg text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Overview</h3>
            
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-medium">Your University Name</p>
                    <p className="text-gray-400">Your Degree • Graduation Year</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Experience</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-medium">Most Recent Position</p>
                    <p className="text-gray-400">Company Name • Duration</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>Key achievement or responsibility</li>
                      <li>Another key achievement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Python",
                    "AWS",
                    "Docker",
                    "Git"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 