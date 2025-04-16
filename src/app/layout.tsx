'use client';

import { useEffect } from 'react';
import './globals.css';
import Sidebar from './Sidebar'; // adjust path if needed
import Header from './Header';   // adjust path if needed
import DotOverlay from './DotOverlay'; // 👈 New import for 9-dot overlay

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Global horizontal scroll effect
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // Check if the primary scroll direction is vertical
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        // Prevent the default vertical scrolling behavior
        event.preventDefault();

        // Scroll the window horizontally
        // event.deltaY positive: scrolling down -> scroll right (+)
        // event.deltaY negative: scrolling up   -> scroll left (-)
        // Adjust the multiplier (e.g., 1.5) to change sensitivity
        window.scrollBy({ left: event.deltaY * 1.5, behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0d0b14', color: 'white' }}>
        <Header />
        <DotOverlay /> {/* 👈 Add this right after Header */}
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}