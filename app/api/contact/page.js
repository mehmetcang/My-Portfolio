import Link from 'next/link';
import Image from 'next/image';
import MotionSection from '../../components/MotionSection';
import Motion from '../../components/Motion';
import { FaProjectDiagram } from 'react-icons/fa'; // Example icon import (optional)
import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';

const projects = [
  { 
    name: 'EduBud', 
    description: 'An educational platform for students and teachers', 
    link: 'https://github.com/mehmetcang/EduBud',
    image: '/EduBud.jpeg' // You'll need to add a screenshot image
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="p-8">
        <h1 className="font-bold mb-6 text-center" style={{ fontSize: 'var(--font-size-heading)' }}>My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
            >
              {project.image && (
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.name}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a  
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-gray-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export function CV() {
  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center">
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
