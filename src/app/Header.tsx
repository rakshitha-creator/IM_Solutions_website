'use client';

import { useState, useRef } from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from 'react-icons/fa';
import ScrollButton from './ScrollButton';

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLSpanElement>(null);

  const socials = [
    { name: 'Tw', icon: <FaTwitter />, id: 'twitter' },
    { name: 'Fb', icon: <FaFacebookF />, id: 'facebook' },
    { name: 'In', icon: <FaLinkedinIn />, id: 'linkedin' },
    { name: 'Be', icon: <FaBehance />, id: 'behance' },
    { name: 'Ig', icon: <FaInstagram />, id: 'instagram' },
  ];

  const getDirection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): string => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle >= -45 && angle < 45) return 'right';
    if (angle >= 45 && angle < 135) return 'bottom';
    if (angle >= -135 && angle < -45) return 'top';
    return 'left';
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const overlay = overlayRef.current;
    
    if (overlay) {
      // Position the overlay at the mouse point
      overlay.style.top = `${y}px`;
      overlay.style.left = `${x}px`;
      overlay.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
  };

  const handleMouseLeave = () => {
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.style.transform = 'translate(-50%, -50%) scale(0)';
    }
  };

  const handleScrollLeft = () => {
    window.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header
      style={{
        position: 'absolute',
        top: 20,
        left: 100,
        right: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      {/* Left: Social Icons */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {socials.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              width: '2rem',
              height: '2rem',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.4s ease',
                transform:
                  hovered === s.id ? 'translateY(-2rem)' : 'translateY(0)',
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  color: '#aaa',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {s.name}
              </span>
              <span
                style={{
                  fontSize: '1.2rem',
                  color: '#e94e64',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {s.icon}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Estimate Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginRight: '6.5rem' }}>
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            padding: '0.5rem 1.2rem',
            background: '#e94e64',
            border: 'none',
            borderRadius: '20px',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: 1,
          }}
        >
          Estimate Project
          <span
            ref={overlayRef}
            style={{
              position: 'absolute',
              width: '300%',
              height: '300%',
              background: '#800020',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0)',
              borderRadius: '50%',
              zIndex: -1,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: 'none',
            }}
          ></span>
        </button>
      </div>
    </header>
  );
}