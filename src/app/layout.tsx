'use client';

import './globals.css';
import { ReactNode, createContext, useContext, useState } from 'react';
import DotOverlay from './components/DotOverlay'; // update path as needed

const DotOverlayContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useDotOverlay() {
  return useContext(DotOverlayContext);
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <html lang="en">
      <body>
        <DotOverlayContext.Provider value={{ isOpen, open, close }}>
          <DotOverlay isOpen={isOpen} onClose={close} />
          {children}
        </DotOverlayContext.Provider>
      </body>
    </html>
  );
}
