'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MotionSection from '../components/MotionSection';
import Motion from '../components/Motion';
import dynamic from 'next/dynamic';

const DynamicProjectCard = dynamic(() => import('../components/ProjectCard'), {
  loading: () => <p>Loading...</p>,
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const mainProjects = [
    {
      name: 'EduBud',
      description: 'An educational platform for students and teachers',
      link: 'https://github.com/mehmetcang/EduBud',
      image: '/EduBud.jpeg',
    },
    // Add more projects as needed
  ];

  return (
    <Motion.div 
      className="min-h-screen flex flex-col justify-center items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Motion.h1 variants={item} className="text-4xl font-bold mb-4">Welcome to My Portfolio</Motion.h1>
      <Motion.p variants={item} className="text-xl mb-8">I'm Mehmetcan Gültekin, a Full-Stack Developer</Motion.p>
      {/* Other sections */}

      {/* New Presentation Section */}
      
    </Motion.div>
  );
}
