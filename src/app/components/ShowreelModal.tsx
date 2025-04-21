'use client';

import React, { useState } from 'react';
import '../styles/ShowreelModal.css';

export default function ShowreelModal() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔗 Your hardcoded video link here (YouTube embed or .mp4)
  const videoUrl = 'https://www.youtube.com/watch?v=2t1jSBg086o'; // example YouTube link

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="showreelButton" onClick={handleOpen}>
        Watch Showreel <span className="arrow">→</span>
      </button>

      {isOpen && (
        <div className="modalOverlay" onClick={handleClose}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={handleClose}>×</button>
            <div className="videoWrapper">
              <iframe
                src={videoUrl}
                title="Showreel"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
