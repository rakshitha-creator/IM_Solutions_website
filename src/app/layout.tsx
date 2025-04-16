'use client';

import './globals.css';
import Sidebar from './Sidebar'; // adjust path if needed
import Header from './components/Header';   // adjust path if needed
import DotOverlay from './DotOverlay'; // 👈 New import for 9-dot overlay

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0d0b14', color: 'white' }}>
        <Sidebar />
        <Header />
        <DotOverlay /> {/* 👈 Add this right after Header */}
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}
