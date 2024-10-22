'use client';

import React from 'react';
import Motion from './Motion';

interface MotionSectionProps {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  className?: string;
}

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
  className,
}) => {
  return (
    <Motion.section
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
    >
      {children}
    </Motion.section>
  );
};

export default MotionSection;
