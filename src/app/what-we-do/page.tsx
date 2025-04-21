'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../styles/what-we-do.css';

export default function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <div className="what-we-do-content">
        <div className="content-left">
          <Link href="/" className="back-button">
            <span className="back-arrow">←</span>
            Back
          </Link>
          
          <h1 className="title">What we do</h1>
          
          <div className="services-list">
            <div className="service-item">
              <h2>We Break</h2>
              <p>away the noise and build your Brand from the core. We just love breaking stuff down to the quintessential core to bring forward the core messaging needed for your brand.</p>
            </div>

            <div className="service-item">
              <h2>We Build</h2>
              <p>simple, strong and innovative bridges. Building bridges is something else we love architecting. We find new, innovative & powerful ways to bridge our clients to their customers.</p>
            </div>

            <div className="service-item">
              <h2>We Bridge</h2>
              <p>an everlasting communication between our client and their customer. We don't stop there, we make sure the bridges are complete and tested thoroughly for timeless communication between our client and customer so that they may find an everlasting friendship along the way.</p>
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="image-container">
            <Image
              src="/imege.png"
              alt="Team Collaboration"
              width={600}
              height={600}
              className="team-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 