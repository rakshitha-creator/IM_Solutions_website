'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/FullPageScroll.module.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services'; // ✅ Import Services
import OurClients from './Ourclients';
import Contact from './Contact';

// Map hashes to slide indices
const sectionIndices: { [key: string]: number } = {
  '#home': 0,
  '#about': 1,
  '#services': 2,
  '#clients': 3,
  '#contact': 4,
};

export default function FullPageSlider() {
  // Initialize state to 0 initially
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const hasInitializedFromHash = useRef(false); // Flag to run hash check only once
  const maxIndex = 4; // 5 slides total (0 to 4)

  // Effect to check hash and set index ONCE on mount (client-side)
  useEffect(() => {
    if (typeof window !== 'undefined' && !hasInitializedFromHash.current) {
      const hash = window.location.hash;
      const initialIndex = sectionIndices[hash];
      if (initialIndex !== undefined && initialIndex !== 0) { // Check if hash is valid and not default
        setIndex(initialIndex);
      }
      hasInitializedFromHash.current = true; // Mark as initialized
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling.current) return;
    isScrolling.current = true;
    let newIndex = index;
    if (e.deltaY > 0 && index < maxIndex) {
      newIndex = index + 1;
    } else if (e.deltaY < 0 && index > 0) {
      newIndex = index - 1;
    }
    if (newIndex !== index) {
      setIndex(newIndex);
      // Optionally update hash
      // const newHash = Object.keys(sectionIndices).find(key => sectionIndices[key] === newIndex);
      // if (newHash) window.history.pushState(null, '', newHash);
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  }, [index]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Effect to apply transform
  useEffect(() => {
    if (containerRef.current) {
      // Apply initial transform without transition ONLY if initializing from hash
      if (hasInitializedFromHash.current && containerRef.current.style.transition === '') {
        containerRef.current.style.transform = `translateX(-${index * 100}vw)`;
      }

      // Always enable transition and apply transform for subsequent changes or initial load to 0
      requestAnimationFrame(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.8s ease-in-out';
      containerRef.current.style.transform = `translateX(-${index * 100}vw)`;
        }
      });
    }
  }, [index]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider} ref={containerRef}>
        {/* Add data-section attributes if not already present for hash mapping */}
        <div className={styles.slide} data-section="home"><Home /></div>
        <div className={styles.slide} data-section="about"><Aboutus /></div>
        <div className={styles.slide} data-section="services"><Services /></div>
        <div className={styles.slide} data-section="clients"><OurClients /></div>
        <div className={styles.slide} data-section="contact"><Contact /></div>
      </div>
    </div>
  );
}
