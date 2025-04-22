'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/FullPageScroll.module.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import OurClients from './Ourclients';
import Contact from './Contact';

export default function FullPageSlider() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const sections = ['#home', '#about', '#service', '#clients', '#contact'];
  const maxIndex = sections.length - 1;

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
  }, [index, maxIndex]);

  // ✅ Scroll reset timer
  useEffect(() => {
    const resetScroll = setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
    return () => clearTimeout(resetScroll);
  }, [index]);

  // ✅ Handle mouse wheel
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // ✅ Update transform & URL hash on index change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.8s ease-in-out';
      containerRef.current.style.transform = `translateX(-${index * 100}vw)`;
    }
    window.history.replaceState(null, '', sections[index]);
  }, [index]);

  // ✅ On initial load and hash change
  useEffect(() => {
    const setIndexFromHash = () => {
      const hash = window.location.hash;
      const hashIndex = sections.indexOf(hash);
      if (hashIndex !== -1) {
        setIndex(hashIndex);
      }
    };

    // Run once on load
    setIndexFromHash();

    // Listen to hash changes
    window.addEventListener('hashchange', setIndexFromHash);
    return () => window.removeEventListener('hashchange', setIndexFromHash);
  }, []);
  
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider} ref={containerRef}>
        <div className={styles.slide} id="home"><Home /></div>
        <div className={styles.slide} id="about"><Aboutus /></div>
        <div className={styles.slide} id="service"><Services /></div>
        <div className={styles.slide} id="clients"><OurClients /></div>
        <div className={styles.slide} id="contact"><Contact /></div>
      </div>
    </div>
  );
}
