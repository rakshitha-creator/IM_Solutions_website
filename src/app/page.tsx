'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const words = ['RISK.', 'DARE.', 'VENTURE.'];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);

  // Horizontal scroll behavior
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        container.scrollBy({ left: -window.innerWidth });
      } else {
        container.scrollBy({ left: window.innerWidth });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        overflowX: 'scroll',
        overflowY: 'hidden',
      }}
    >
      {/* Home Section */}
      <section
        style={{
          minWidth: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0',
          background: '#000',
          color: '#fff',
        }}
      >
        <div className="content" style={{ marginLeft: '2rem' }}>
          <h1 className="glitch-text" style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            textAlign: 'left',
            marginLeft: '0',
            paddingLeft: '0'
          }}>
            WE SHALL <br />
            <span className="typewriter-text">{text}</span>
          </h1>
          <div className="tags" style={{ 
            marginTop: '1.5rem', 
            fontSize: '1.2rem', 
            textAlign: 'left',
            marginLeft: '0',
            paddingLeft: '0'
          }}>
            <span>Creative</span> • <span>Web</span> • <span>Performance</span> • <span>Content</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          minWidth: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#111',
          color: '#fff',
          padding: '2rem',
        }}
      >
        <div className="about-content">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Us</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            We are a team of digital innovators specializing in web, design, and performance.
            Our mission is to elevate your brand through creativity and strategy.
          </p>
        </div>
      </section>
    </div>
  );
}
