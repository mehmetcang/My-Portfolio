'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent text-gray-800 p-8"
    >
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Mehmetcan Gültekin. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/mehmetcangultekin/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            LinkedIn
          </Link>
          <Link href="https://github.com/mehmetcang" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            GitHub
          </Link>
          <Link href="mailto:gultekin55mhmt@gmail.com" className="text-gray-800 hover:text-gray-600 transition duration-300">
            Email
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
