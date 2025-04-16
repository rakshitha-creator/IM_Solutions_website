'use client';

import { useState } from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from 'react-icons/fa';

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const socials = [
    { name: 'Tw', icon: <FaTwitter />, id: 'twitter' },
    { name: 'Fb', icon: <FaFacebookF />, id: 'facebook' },
    { name: 'In', icon: <FaLinkedinIn />, id: 'linkedin' },
    { name: 'Be', icon: <FaBehance />, id: 'behance' },
    { name: 'Ig', icon: <FaInstagram />, id: 'instagram' },
  ];

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
      {/* Left: Social Icons with Slide-in Animation */}
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
              {/* Label */}
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

              {/* Icon */}
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', marginRight: 'rem' }}>
      <button
          style={{
            padding: '0.46rem 1rem',
            background: '#e94e64',
            border: 'none',
            borderRadius: '20px',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Estimate Project
        </button>
      </div>
    </header>
  );
}
