'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Define the navigation paths in order
    const paths = ['/', '/next', '/about', '/services', '/clients', '/careers', '/blog', '/contact'];
    const currentIndex = paths.indexOf(pathname);
    
    // Calculate progress based on current path
    if (currentIndex !== -1) {
      const progressPercentage = (currentIndex / (paths.length - 1)) * 100;
      setProgress(progressPercentage);
    }
  }, [pathname]);

  return (
    <aside className="sidebar">
      {/* 🔺 Top Section – Logo only, moved down */}
      <div className="top" style={{ marginTop: '15px' }}>
        <Image src="/logo.png" alt="Company Logo" width={50} height={50} />
      </div>

      {/* 🧭 Middle Section – Rotated nav items */}
      <div className="middle" style={{ marginTop: '-30px' }}>
        <span>ABOUT US</span>
        <span>SERVICES</span>
        <span>OUR CLIENTS</span>
        <span>CAREERS</span>
        <span>BLOG</span>
        <span>CONTACT</span>
      </div>

      {/* 🚀 Navigation Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: '80px',
          width: '4px',
          height: '100vh',
          backgroundColor: '#1a1a1a',
          zIndex: 99,
        }}
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: '100%',
            backgroundColor: '#e94e64',
          }}
        />
      </div>
    </aside>
  );
}
