'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import { useState } from 'react';

// Animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  disabled: { opacity: 0.5 }
};

export default function CV() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Download logic here
      const response = await fetch('/cv.pdf');
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'MehmetcanGultekin-CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

    } catch (err) {
      setError('Failed to download CV. Please try again.');
      console.error('Download failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen p-8 flex flex-col items-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="font-bold mb-6 text-center"
        style={{ fontSize: 'var(--font-size-heading)' }}
      >
        My CV
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="w-full max-w-md"
      >
        <div className="flex flex-col space-y-4">
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link 
              href="/cv.pdf"
              className="bg-white bg-opacity-30 backdrop-blur-md text-gray-800 hover:bg-opacity-50 
                       transition-all duration-300 flex items-center justify-center w-full py-3 px-6 rounded-lg"
              aria-label="View CV in browser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye className="mr-3" aria-hidden="true" />
              <span>View CV</span>
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="bg-white bg-opacity-30 backdrop-blur-md text-gray-800 hover:bg-opacity-50 
                       transition-all duration-300 flex items-center justify-center w-full py-3 px-6 
                       rounded-lg disabled:opacity-50"
              aria-label="Download CV file"
            >
              <FaFileDownload className="mr-3" aria-hidden="true" />
              <span>{isLoading ? 'Downloading...' : 'Download CV'}</span>
            </button>
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center mt-2"
              role="alert"
            >
              {error}
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
