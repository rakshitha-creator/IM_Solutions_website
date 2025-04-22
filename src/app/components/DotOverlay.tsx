'use client';

import React, { useEffect, useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDotOverlay } from '../layout';
import '../styles/DotOverlay.css';

interface DotOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  id: number;
  text: string;
  path: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  id: number;
  text: string;
  path: string;
}

export default function DotOverlay({ isOpen }: DotOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const router = useRouter();
  const { close } = useDotOverlay();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey as any);
    return () => window.removeEventListener('keydown', onKey as any);
  }, [close]);

  const handleNavigation = (path: string) => {
    close();
    if (path.startsWith('/#')) {
      // For section navigation
      const hash = path.substring(1); // Remove the leading '/'
      window.location.hash = hash;
    } else {
      // For regular page navigation
      router.push(path);
    }
  };

  const menuItems: MenuItem[] = [
    { id: 1, text: "Home", path: '/#home' },
    { id: 2, text: "About", path: '/#about' },
    {
      id: 3,
      text: "Services",
      path: '/#services',
      submenu: [
        { id: 31, text: "Creative", path: '/services_redirect/creative' },
        { id: 32, text: "Web", path: '/services_redirect/web' },
        { id: 33, text: "Performance", path: '/services_redirect/performance' },
        { id: 34, text: "Content", path: '/services_redirect/content' },
      ],
    },
    { id: 4, text: "Our clients", path: '/#clients' },
    { id: 5, text: "Get in touch", path: '/#contact' },
  ];

  const serviceSubItems = ['Creative', 'Web', 'Performance', 'Content'];

  // Reset hovered item when overlay closes
  useEffect(() => {
    if (!isOpen) {
      setHoveredItem(null);
    }
  }, [isOpen]);

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
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="dotOverlay-menuItem"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="dotOverlay-menuNumber">{item.id}</span>
                  {item.submenu ? (
                    <div className="dotOverlay-menuTextWrapper">
                      <div 
                        onClick={() => handleNavigation(item.path)}
                        className="dotOverlay-menuText"
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                      >
                        {item.text}
                      </div>
                      {hoveredItem === item.id && (
                    <div className="dotOverlay-submenu">
                          {item.submenu.map((subItem) => (
                            <div
                              key={subItem.id}
                              onClick={() => handleNavigation(subItem.path)}
                              className="dotOverlay-submenuItem"
                              style={{ textDecoration: 'none', cursor: 'pointer' }}
                            >
                              {subItem.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      onClick={() => handleNavigation(item.path)}
                      className="dotOverlay-menuTextWrapper"
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <span className="dotOverlay-menuText">{item.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="dotOverlay-closeBtn" onClick={close}>
              <div className="dotOverlay-closeLine" style={{ transform: 'rotate(45deg)' }} />
              <div className="dotOverlay-closeLine" style={{ transform: 'rotate(-45deg)' }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
