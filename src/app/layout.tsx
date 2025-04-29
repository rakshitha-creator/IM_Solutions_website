'use client';

import './globals.css';
import { ReactNode, useState } from 'react';
import DotOverlay from './components/DotOverlay';
import PageLayout from './components/PageLayout';
import Image from 'next/image';
import { DotOverlayContext } from '@/hooks/useDotOverlay'; // Import context

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <html lang="en">
      <body>
        <DotOverlayContext.Provider value={{ isOpen, open, close }}>
          <div className="site-logo">
            <Image
              src="/imsolutions.png"
              alt="Company Logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <DotOverlay isOpen={isOpen} onClose={close} />
          <PageLayout>
            {children}
          </PageLayout>
        </DotOverlayContext.Provider>
      </body>
    </html>
  );
}
