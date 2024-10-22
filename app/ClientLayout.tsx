'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}

