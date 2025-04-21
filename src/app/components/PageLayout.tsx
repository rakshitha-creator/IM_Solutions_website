'use client';

import { ReactNode } from 'react';
import MenuIcon from './MenuIcon';
import { usePathname } from 'next/navigation';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const pathname = usePathname();
  
  // Don't show MenuIcon on services page
  const showMenuIcon = !pathname.startsWith('/services');

  return (
    <>
      {showMenuIcon && <MenuIcon />}
      {children}
    </>
  );
}