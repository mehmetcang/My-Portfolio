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
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md z-0"></div>
      <div className="relative z-10">
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
        <div className="p-6">
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
