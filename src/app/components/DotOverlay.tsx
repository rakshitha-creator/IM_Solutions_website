'use client';

import { useEffect, useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import '../styles/DotOverlay.css';

interface DotOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DotOverlay({ isOpen, onClose }: DotOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey as any);
    return () => window.removeEventListener('keydown', onKey as any);
  }, [onClose]);

  const menuItems = [
    { number: '01', text: 'Home' },
    { number: '02', text: 'About' },
    { number: '03', text: 'Services' },
    { number: '04', text: 'Get in touch' },
  ];

  const serviceSubItems = ['Creative', 'Web', 'Performance', 'Content'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="dotOverlay-red"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.36, ease: 'easeInOut' }}
          />

          <motion.div
            className="dotOverlay-black"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ delay: 0.3, duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="dotOverlay-logo">
              <Image
                src="/imsolutions.png"
                alt="Logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="dotOverlay-menuTitle">MENU</div>

            <div className="dotOverlay-menuNav">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className="dotOverlay-menuItem"
                  onMouseEnter={() => setHoveredItem(item.text)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="dotOverlay-menuNumber">{item.number}</span>
                  <span className="dotOverlay-menuText">{item.text}</span>

                  {item.text === 'Services' && hoveredItem === 'Services' && (
                    <div className="dotOverlay-submenu">
                      {serviceSubItems.map((sub, index) => (
                        <span key={index} className="dotOverlay-submenuItem">
                          {sub}
                          {index < serviceSubItems.length - 1 && (
                            <span className="dotOverlay-submenuSlash"> / </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="dotOverlay-closeBtn" onClick={onClose}>
              <div className="dotOverlay-closeLine" style={{ transform: 'rotate(45deg)' }} />
              <div className="dotOverlay-closeLine" style={{ transform: 'rotate(-45deg)' }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
