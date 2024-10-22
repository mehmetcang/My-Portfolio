import React from 'react';
import Image from 'next/image';

const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
    </div>
  );
};

export default DynamicBackground;
