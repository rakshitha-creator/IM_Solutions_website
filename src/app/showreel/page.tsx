'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/Showreel.css';

export default function ShowreelPage() {
  const router = useRouter();
  const videoId = 'r_58PklF3Mg';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const handleClose = () => {
    // Navigate back to the main page which contains the full page scroll
    router.push('/');
    // After a short delay, scroll to the Services section
    setTimeout(() => {
      const servicesSection = document.querySelector('[data-section="services"]');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="showreel-page">
      <div className="video-container">
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <iframe
          src={embedUrl}
          title="Showreel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}