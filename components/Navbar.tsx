'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-transparent sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Mehmetcan Gültekin
            </Link>
          </div>
          <div className="flex space-x-4" role="menu">
            {['/projects', '/cv', '/contact'].map((path) => (
              <Link
                key={path}
                href={path}
                className={`text-gray-800 hover:text-gray-600 transition duration-300 ${
                  pathname === path ? 'font-bold' : ''
                }`}
                role="menuitem"
                aria-current={pathname === path ? 'page' : undefined}
              >
                {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
