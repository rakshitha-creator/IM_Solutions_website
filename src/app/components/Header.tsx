'use client';
import '../styles/Header.css';
import { useState, useRef } from 'react';
import { useDotOverlay } from '../layout';
import Image from 'next/image';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from 'react-icons/fa';

export default function Header() {
  const { open } = useDotOverlay();
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

  const getDirection = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): string => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle >= -45 && angle < 45) return 'right';
    if (angle >= 45 && angle < 135) return 'bottom';
    if (angle >= -135 && angle < -45) return 'top';
    return 'left';
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const dir = getDirection(e);
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.style.transition = 'none';
      overlay.style.transform = 'scale(1)';
      switch (dir) {
        case 'top':
          overlay.style.top = '-100%';
          overlay.style.left = '0';
          break;
        case 'bottom':
          overlay.style.top = '100%';
          overlay.style.left = '0';
          break;
        case 'left':
          overlay.style.left = '-100%';
          overlay.style.top = '0';
          break;
        case 'right':
          overlay.style.left = '100%';
          overlay.style.top = '0';
          break;
      }

      requestAnimationFrame(() => {
        if (overlay) {
          overlay.style.transition = 'all 0.4s ease';
          overlay.style.top = '0';
          overlay.style.left = '0';
        }
      });
    }
  };

  const handleMouseLeave = () => {
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.style.transition = 'all 0.4s ease';
      overlay.style.transform = 'scale(0)';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        {socials.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            className="social-item"
          >
            <div
              style={{
                transform: hovered === s.id ? 'translateY(-2rem)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
              className="social-stack"
            >
              <span className="social-label">{s.name}</span>
              <span className="social-icon">{s.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="header-right">
        <button
          ref={buttonRef}
          className="estimate-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Estimate Project
          <span ref={overlayRef} className="button-overlay"></span>
        </button>
        <button className="menu-button" onClick={open}>
          <Image
            src="/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            style={{ objectFit: 'contain' }}
          />
        </button>
      </div>
    </header>
  );
}
