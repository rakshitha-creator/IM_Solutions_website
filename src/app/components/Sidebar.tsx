'use client';

import '../styles/Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* 🔽 Navigation */}
      <div className="middle">
        <span tabIndex={0}>ABOUT US</span>
        <span tabIndex={0}>SERVICES</span>
        <span tabIndex={0}>BLOG</span>
        <span tabIndex={0}>CONTACT</span>
      </div>
    </aside>
  );
}
