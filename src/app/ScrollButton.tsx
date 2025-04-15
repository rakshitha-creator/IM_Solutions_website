'use client';

import { useState } from 'react';

export default function ScrollButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollRight = () => {
    window.scrollTo({
      left: document.documentElement.scrollWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: 'calc(6.5rem + 20px)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      zIndex: 1000,
    }}>
      <span style={{
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
        opacity: isHovered ? 1 : 0.8,
        transition: 'all 0.3s ease',
      }}>
        Scroll
      </span>
      <button
        onClick={handleScrollRight}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: isHovered ? '#800020' : '#e94e64',
          border: 'none',
          color: '#fff',
          fontSize: '28px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
      >
        →
      </button>
    </div>
  );
} 