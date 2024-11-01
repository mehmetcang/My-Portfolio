import "./globals.css";
import DynamicBackground from "../components/DynamicBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicBackground />
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
