'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden relative"
    >
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
      />
      <div className="p-6 relative z-10">
        <h3 className="font-semibold mb-2 text-gray-800" style={{ fontSize: 'var(--font-size-subheading)' }}>{project.name}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <Link
          href={project.link}
          className="text-gray-800 hover:text-gray-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </Link>
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="#ffffff" fillOpacity="0.3" d="M0,0L48,5.3C96,11,192,21,288,26.7C384,32,480,32,576,26.7C672,21,768,11,864,16C960,21,1056,43,1152,48C1248,53,1344,43,1392,37.3L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
      </svg>
    </motion.div>
  );
};

export default ProjectCard;
