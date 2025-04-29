'use client';

import { useState, useEffect } from 'react';
import MenuIcon from './MenuIcon';
import ScrollIndicator from './ScrollIndicator';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../styles/Home.css';

export default function Home() {
  const router = useRouter();
  const words: string[] = ['DARE', 'VENTURE', 'RISK']; // Fixed the type
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 50 : 120;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(prev => prev + currentWord.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]); // Added words to the dependency array

  const handleNavigation = (path: string) => {
    setIsSliding(true);
    setTimeout(() => {
      router.push(path);
    }, 500);
  };

  return (
    <>
      {/* Logo top‑left */}
     

      {/* Menu icon top‑right */}
      <MenuIcon />

      {/* <Header /> */}
      <ScrollIndicator />

      <main className={`home-section ${isSliding ? 'slide-out' : ''}`}>
        <div className="home-content">
          <h1 className="glitch-text">WE SHALL</h1>
          <h2 className="glitch-type-text" data-text={text}>
            <span className="typing-word">{text}</span>
          </h2>

          <div className="categories">
            <span onClick={() => handleNavigation('/services_redirect/creative')}>Creative</span>
            <span className="dot">•</span>
            <span onClick={() => handleNavigation('/services_redirect/web')}>Web</span>
            <span className="dot">•</span>
            <span onClick={() => handleNavigation('/services_redirect/performance')}>Performance</span>
            <span className="dot">•</span>
            <span onClick={() => handleNavigation('/services_redirect/content')}>Content</span>
          </div>

          <div className="circle-arrow" onClick={() => handleNavigation('/aboutus')}>
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
            />
          </div>
        </div>
      </main>
    </>
  );
}




