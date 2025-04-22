'use client';

import Image from 'next/image';
import { useDotOverlay } from '../layout';

export default function MenuIcon() {
  const { open } = useDotOverlay();

  return (
    <div className="site-menu" onClick={open}>
      <Image
        src="/menu.svg"
        alt="Menu"
        width={30}
        height={30}
        priority
      />
    </div>
  );
} 