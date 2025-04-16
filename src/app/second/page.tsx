'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import '@/app/globals.css'; // Or wherever your global styles are defined

export default function FirstPage() {
  return (
    <main className="firstpage-wrapper">
      {/* Left Section */}
      <div className="firstpage-left">
        <h1 className="main-heading">STORIES WE UNFOLD</h1>
        <p className="description">
          We craft compelling narratives that transform brands and captivate audiences. Our work blends
          creativity, performance, and strategy into immersive experiences.
        </p>
        <button className="showreel-button">WATCH SHOWREEL</button>
        <div className="arrow-circle">
          <ArrowRight size={20} />
        </div>
        <Link href="/" style={{ marginTop: '2rem', display: 'inline-block', color: '#0070f3' }}>
          ← Back to Home
        </Link>
      </div>

      {/* Right Section - Grid */}
      <div className="firstpage-right-grid">
        <div className="grid-box">
          <span className="grid-label">Creative</span>
          <p>
            A picture is worth a thousand words. And the pictures our Creators can capture can portray the totality of your brand’s Image.
          </p>
        </div>
        <div className="grid-box">
          <span className="grid-label">Performance</span>
          <p>
            Reach where no man or company has reached before with specialised strategies and optimised analytics to target and reach your treasured audience wherever they are.
          </p>
        </div>
        <div className="grid-box">
          <span className="grid-label">Website</span>
          <p>
            Personalise your Digital Brand Home. Our website developers along with our designers and writers,
            work together in architecting the perfect digital home where your brand can be free to express itself.
          </p>
        </div>
        <div className="grid-box">
          <span className="grid-label">Content</span>
          <p>
            Words have the power of their own and when placed carefully together, they come out with meaning.
            Our writers craft words carefully together to give your brand the perfect identity and message it needs to deliver to your audience.
          </p>
        </div>
      </div>
    </main>
  );
}
