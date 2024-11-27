'use client';

import ProjectCard from '../../components/ProjectCard';
import MotionSection from '../../components/MotionSection';

const projects = [
  { 
    name: 'EduBud',
    description: 'An educational platform for students and teachers',
    link: 'https://github.com/mehmetcang/EduBud',
    image: '/EduBud.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 pt-4 flex flex-col"
    >
      <h1 className="font-bold mb-6 text-center" 
          style={{ fontSize: 'var(--font-size-heading)' }}>
        My Projects
      </h1>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </MotionSection>
  );
}
