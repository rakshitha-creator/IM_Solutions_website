'use client';

import Link from 'next/link';
import '../styles/Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* 🔽 Navigation */}
      <div className="middle">
        <Link href="/about">
          <span tabIndex={0}>ABOUT US</span>
        </Link>
        <Link href="/Services">
          <span tabIndex={0}>SERVICES</span>
        </Link>
        <Link href="/Ourclients">
          <span tabIndex={0}>OUR CLIENTS</span>
        </Link>
        <Link href="/Contact">
          <span tabIndex={0}>CONTACT</span>
        </Link>
      </div>
    </aside>
  );
}
