'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function Contact() {
  return (
    <motion.div 
      className="min-h-screen flex items-start justify-center p-8 pt-16"
      initial="hidden"
      animate="visible"
      variants={contactVariants}
    >
      <motion.div 
        className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full"
        variants={contactVariants}
      >
        <h1 className="font-semibold mb-6 text-center text-gray-800" 
            style={{ fontSize: 'var(--font-size-heading)' }}>
          Contact Me
        </h1>
        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaEnvelope className="text-2xl text-gray-600" />
            <div>
              <h2 className="text-xl font-medium mb-1 text-gray-800">Email</h2>
              <a href="mailto:gultekin55mhmt@gmail.com" className="text-gray-700 hover:text-blue-600 transition duration-300">
                gultekin55mhmt@gmail.com
              </a>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaLinkedin className="text-2xl text-gray-600" />
            <div>
              <h2 className="text-xl font-medium mb-1 text-gray-800">LinkedIn</h2>
              <Link 
                href="https://www.linkedin.com/in/mehmetcangultekin/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Mehmetcan Gültekin
              </Link>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaGithub className="text-2xl text-gray-600" />
            <div>
              <h2 className="text-xl font-medium mb-1 text-gray-800">GitHub</h2>
              <Link 
                href="https://github.com/mehmetcang" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                mehmetcang
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
