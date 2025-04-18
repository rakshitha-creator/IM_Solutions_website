'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar';

export default function AboutUs() {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <button 
          onClick={() => router.back()}
          className="back-button"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        
        <div className="about-content">
          <h1 className="glitch-text" style={{ fontSize: '1.5rem' }}>What we do</h1>
          
          <div className="about-sections">
            <div className="about-section-item">
              <h2 style={{ fontSize: '1rem' }}>We Break</h2>
              <p style={{ fontSize: '0.8rem' }}>away the noise and build your Brand from the core. We just love breaking stuff down to the quintessential core to bring forward the core messaging needed for your brand.</p>
            </div>

            <div className="about-section-item">
              <h2 style={{ fontSize: '1rem' }}>We Build</h2>
              <p style={{ fontSize: '0.8rem' }}>simple, strong and innovative bridges. Building bridges is something else we love architecting. We find new, innovative & powerful ways to bridge our clients to their customers.</p>
            </div>

            <div className="about-section-item">
              <h2 style={{ fontSize: '1rem' }}>We Bridge</h2>
              <p style={{ fontSize: '0.8rem' }}>an everlasting communication between our client and their customer. We don't stop there, we make sure the bridges are complete and tested thoroughly for timeless communication between our client and customer so that they may find an everlasting friendship along the way.</p>
            </div>
          </div>

          <div className="social-links">
            <Link href="https://twitter.com" className="social-link">Tw</Link>
            <Link href="https://facebook.com" className="social-link">Fb</Link>
            <Link href="https://instagram.com" className="social-link">In</Link>
            <Link href="https://behance.net" className="social-link">Be</Link>
            <Link href="https://instagram.com" className="social-link">Ig</Link>
          </div>
        </div>
      </div>
    </>
  );
} 