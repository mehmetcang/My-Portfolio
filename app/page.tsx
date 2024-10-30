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
      className="min-h-screen flex flex-col items-center pt-16"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Motion.p variants={item} className="text-base mb-8 max-w-3xl text-center">
        I am a computer engineer graduated from Beykent University. I am continuing a double major program in Electrical and Electronics Engineering and will graduate from my second major in 2025.
        The areas of interest related to my fields of study are Embedded system design, Robotics and Automation, Hardware Integration with Artificial Intelligence and Machine Learning.
      </Motion.p>
      {/* Other sections */}
    </Motion.div>
  );
}
