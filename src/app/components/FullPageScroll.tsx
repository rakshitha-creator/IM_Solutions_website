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
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const maxIndex = 4; // 5 slides total (0 to 4)

  // Effect to handle hash changes and URL updates
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      const newIndex = sectionIndices[hash];
      if (newIndex !== undefined) {
        setIndex(newIndex);
      }
    };

    // Set initial index based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when index changes
  useEffect(() => {
    const hash = Object.entries(sectionIndices).find(([, idx]) => idx === index)?.[0] || '#home';
    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash);
    }
  }, [index]);
  

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
