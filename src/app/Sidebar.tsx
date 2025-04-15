'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* 🔺 Top Section – Logo only, moved down */}
      <div className="top" style={{ marginTop: '15px' }}>
        <Image src="/imsolutions.png" alt="Company Logo" width={50} height={50} />
      </div>

      {/* 🧭 Middle Section – Nav Items */}
      <div className="middle" style={{ marginTop: '-30px' }}>
        <Link href="/about">
          <span style={{ cursor: 'pointer' }}>ABOUT US</span>
        </Link>
        <span>SERVICES</span>
        <span>OUR CLIENTS</span>
        <span>CAREERS</span>
        <span>BLOG</span>
        <span>CONTACT</span>
      </div>
    </aside>
  );
}
