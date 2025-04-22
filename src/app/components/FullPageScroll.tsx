'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/FullPageScroll.module.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services'; // ✅ Import Services
import OurClients from './Ourclients';
import Contact from './Contact';
import EmptyPage from './EmptyPage';

// Map hashes to slide indices
const sectionIndices: { [key: string]: number } = {
  '#home': 0,
  '#about': 1,
  '#services': 2,
  '#clients': 3,
  '#contact': 4,
  '#empty': 5,
};

const maxIndex = 5; // Updated to include EmptyPage

export default function FullPageSlider() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling.current) return;

    if (e.deltaY > 0 && index < maxIndex) {
      isScrolling.current = true;
      setIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && index > 0) {
      isScrolling.current = true;
      setIndex(prev => prev - 1);
    }
  }, [index]);

  useEffect(() => {
    const resetScroll = setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
    return () => clearTimeout(resetScroll);
  }, [index]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.8s ease-in-out';
      containerRef.current.style.transform = `translateX(-${index * 100}vw)`;
    }
  }, [index]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider} ref={containerRef}>
        <div className={styles.slide}><Home /></div>
        <div className={styles.slide}><Aboutus /></div>
        <div className={styles.slide}><Services /></div>
        <div className={styles.slide}><OurClients /></div>
        <div className={styles.slide}><Contact /></div>
        <div className={styles.slide}><EmptyPage /></div>
      </div>
    </div>
  );
}
