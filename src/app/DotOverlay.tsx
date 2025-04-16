'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DotOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDots, setShowDots] = useState(true);
  const dots = Array.from({ length: 9 });

  const handleOpen = () => {
    setIsOpen(true);
    setShowDots(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShowDots(true);
    }, 800);
  };

  return (
    <>
      {/* 9 Dots Button */}
      {showDots && (
        <div
          onClick={handleOpen}
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            width: 30,
            height: 30,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: 2,
            cursor: 'pointer',
            zIndex: 50,
          }}
        >
          {dots.map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                backgroundColor: i === 2 ? 'rgb(109, 3, 23)' : 'white',
                borderRadius: i === 2 ? '50%' : '0%',
              }}
            />
          ))}
        </div>
      )}

      {/* Overlay Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* RED SLIDE */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.36, ease: 'easeInOut' }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                background: '#e94e64',
                zIndex: 40,
              }}
            />

            {/* BLACK OVERLAY */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ delay: 0.3, duration: 0.35, ease: 'easeInOut' }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                background: '#0d0b14',
                zIndex: 45,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              {/* Custom Close Button */}
              <div
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: 60,
                  right: 20,
                  width: 24,
                  height: 24,
                  cursor: 'pointer',
                  zIndex: 100,
                }}
              >
                {/* / line - white */}
                <div
                  style={{
                    position: 'absolute',
                    width: 24,
                    height: 2,
                    backgroundColor: '#ffffff',
                    transform: 'rotate(45deg)',
                    top: '50%',
                    left: '0',
                    transformOrigin: 'center',
                  }}
                />
                {/* \ line - rgb(230, 32, 74) */}
                <div
                  style={{
                    position: 'absolute',
                    width: 24,
                    height: 2,
                    backgroundColor: 'rgb(230, 32, 74)',
                    transform: 'rotate(-45deg)',
                    top: '50%',
                    left: '0',
                    transformOrigin: 'center',
                  }}
                />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Overlay Content</h2>
                <p>Anything you want here — navigation, CTA, etc.</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
