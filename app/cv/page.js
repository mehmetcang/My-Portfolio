'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';

export default function CV() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold mb-6 text-center"
        style={{ fontSize: 'var(--font-size-heading)' }}
      >
        My CV
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/cv.pdf" className="bg-white bg-opacity-30 backdrop-blur-md text-gray-800 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center w-full py-2 px-4 rounded-lg">
              <FaEye className="mr-2" />
              View CV
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/cv.pdf" download className="bg-white bg-opacity-30 backdrop-blur-md text-gray-800 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center w-full py-2 px-4 rounded-lg">
              <FaFileDownload className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
