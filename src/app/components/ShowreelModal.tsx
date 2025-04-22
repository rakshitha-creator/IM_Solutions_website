'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/ShowreelModal.css';

export default function ShowreelModal() {
  const router = useRouter();

  const handleOpenVideo = () => {
    router.push('/showreel');
  };

  return (
    <button className="showreelButton" onClick={handleOpenVideo}>
        Watch Showreel <span className="arrow">→</span>
      </button>
  );
}