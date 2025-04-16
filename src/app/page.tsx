// page.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GridBox from './components/GridBox';
import Sidebar from './components/Sidebar';

export default function Page() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (container) {
        container.scrollLeft += e.deltaY;
      }
    };

    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Sidebar />
      <div className="scroll-wrapper">
        <div className="horizontal-scroll" ref={scrollRef}>
          <section className="scroll-section" style={{ 
            minWidth: '100vw', 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '40px',
            backgroundColor: '#0d0b14',
            color: '#fff'
          }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Our Creative Space</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Scroll horizontally to explore our work</p>
            <button
              onClick={() => router.push('/about')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e94e64',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Explore More →
            </button>
          </section>
          <section className="scroll-section" style={{ minWidth: '100vw', height: '100vh' }}>
            <GridBox label="Creative" image="public/logo.png" />
          </section>
          <section className="scroll-section" style={{ minWidth: '100vw', height: '100vh' }}>
            <GridBox label="Performance" image="public/logo.png" />
          </section>
        </div>
      </div>
    </>
  );
}
