'use client';

import '../styles/Sidebar.css';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  const handleAboutUsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/about');
  };

  return (
    <aside className="sidebar">
      {/* 🔽 Navigation */}
      <div className="middle">
        <span 
          tabIndex={0} 
          onClick={handleAboutUsClick}
          style={{ cursor: 'pointer' }}
        >
          ABOUT US
        </span>
        <span tabIndex={0}>SERVICES</span>
        <span tabIndex={0}>BLOG</span>
        <span tabIndex={0}>CONTACT</span>
      </div>
    </aside>
  );
}
