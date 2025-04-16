'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function DotOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDots, setShowDots] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSubmenuIndex, setHoveredSubmenuIndex] = useState<number | null>(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
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

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleSubmenuClick = (item: string) => {
    // Handle click on submenu items
    console.log(`Clicked on ${item}`);
    // Add your navigation logic here
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const menuItems = [
    { number: "01", text: "Home" },
    { number: "02", text: "About" },
    { number: "03", text: "Services" },
    { number: "04", text: "Get in touch" }
  ];

  const submenuItems = [
    "CREATIVE",
    "WEB",
    "PERFORMANCE",
    "CONTENT"
  ];

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
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#e94e64',
                zIndex: 9999,
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
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#0d0b14',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                color: 'white',
                overflow: 'hidden'
              }}
            >
              {/* Logo */}
              <div style={{
                position: 'fixed',
                top: '2rem',
                left: '2rem',
                width: '100px',
                height: '100px',
                zIndex: 10001
              }}>
                <Image
                  src="/download.jpeg"
                  alt="Logo"
                  width={100}
                  height={100}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Menu */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                position: 'absolute',
                top: '50%',
                left: '20rem',
                transform: 'translateY(-50%)'
              }}>
                <div style={{ 
                  position: 'absolute',
                  left: '-15rem',
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'left center',
                  color: '#e94e64',
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  top: '50%',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase'
                }}>
                  MENU
                </div>
                {menuItems.map((item, index) => (
                  <div
                    key={`nav-item-${index}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      if (index === 2) setShowSubmenu(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      if (index === 2) setShowSubmenu(false);
                    }}
                  >
                    <motion.span
                      style={{ 
                        color: '#e94e64',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        marginLeft: '2px',
                        marginBottom: '0.2rem',
                        fontFamily: "'Helvetica Neue', sans-serif"
                      }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.7
                      }}
                    >
                      {item.number}
                    </motion.span>
                    <motion.span
                      style={{
                        fontSize: '2.2rem',
                        fontWeight: '700',
                        letterSpacing: '-0.02em',
                        lineHeight: '1',
                        fontFamily: "'Helvetica Neue', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      animate={{
                        color: hoveredIndex === index || index === 3 ? '#e94e64' : '#ffffff'
                      }}
                    >
                      {item.text}
                    </motion.span>

                    {/* Services Submenu */}
                    {index === 2 && showSubmenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                          position: 'absolute',
                          left: '100%',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          marginLeft: '0.2rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: '0.2rem',
                          padding: '0.2rem',
                          background: 'rgba(13, 11, 20, 0.5)',
                          borderRadius: '4px',
                          zIndex: 10001,
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={() => {
                          setShowSubmenu(true);
                          setHoveredIndex(2);
                        }}
                        onMouseLeave={() => {
                          setShowSubmenu(false);
                          setHoveredIndex(null);
                        }}
                      >
                        {submenuItems.map((subItem, subIndex) => (
                          <div 
                            key={subIndex} 
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center',
                              cursor: 'pointer',
                              padding: '0.1rem 0.2rem'
                            }}
                            onMouseEnter={() => setHoveredSubmenuIndex(subIndex)}
                            onMouseLeave={() => setHoveredSubmenuIndex(null)}
                            onClick={() => handleSubmenuClick(subItem)}
                          >
                            <motion.span
                              style={{
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                color: '#ffffff',
                                opacity: 0.7,
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap'
                              }}
                              animate={{
                                color: hoveredSubmenuIndex === subIndex ? '#e94e64' : '#ffffff',
                                opacity: hoveredSubmenuIndex === subIndex ? 1 : 0.7,
                                x: hoveredSubmenuIndex === subIndex ? 5 : 0
                              }}
                            >
                              {subItem}
                            </motion.span>
                            {subIndex < submenuItems.length - 1 && (
                              <span style={{ 
                                color: '#e94e64', 
                                fontSize: '1.1rem',
                                marginLeft: '0.2rem',
                                marginRight: '0.2rem'
                              }}>/</span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <motion.div
                onClick={handleClose}
                style={{
                  position: 'fixed',
                  top: 60,
                  right: 20,
                  width: 24,
                  height: 24,
                  cursor: 'pointer',
                  zIndex: 1000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {/* First line (\) */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: 2,
                      backgroundColor: 'rgb(230, 32, 74)',
                      transform: 'rotate(45deg)',
                      transformOrigin: 'center'
                    }}
                  />
                  {/* Second line (/) */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: 2,
                      backgroundColor: '#ffffff',
                      transform: 'rotate(-45deg)',
                      transformOrigin: 'center'
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'fixed',
                  bottom: '2rem',
                  right: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  alignItems: 'flex-end',
                  zIndex: 100
                }}
              >
                <motion.div 
                  style={{ 
                    display: 'flex', 
                    gap: '1.5rem',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    fontFamily: "'Helvetica Neue', sans-serif",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  {['TW', 'FB', 'IG', 'IN'].map((icon, index) => (
                    <motion.span
                      key={index}
                      style={{ 
                        cursor: 'pointer',
                        opacity: 0.7,
                        color: '#ffffff',
                        transition: 'color 0.3s ease'
                      }}
                      whileHover={{ 
                        color: '#e94e64',
                        scale: 1.1,
                        opacity: 1
                      }}
                    >
                      {icon}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}