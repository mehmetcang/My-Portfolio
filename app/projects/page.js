'use client';

import Image from 'next/image';
import MotionSection from '../../components/MotionSection';
import Motion from '../../components/Motion';


const projects = [
  { 
    name: 'EduBud', 
    description: 'An educational platform for students and teachers', 
    link: 'https://github.com/mehmetcang/EduBud',
    image: '/EduBud.jpeg' 
  },
];

export default function Projects() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen p-8 pt-4 flex flex-col">
        <h1 className="font-bold mb-6 text-center" style={{ fontSize: 'var(--font-size-heading)' }}>My Projects</h1>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
