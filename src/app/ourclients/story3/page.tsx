'use client';

import React from 'react';
import Link from 'next/link';
import '@/app/styles/stories.css';

const Story3 = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <Link href="/ourclients/story2" className="back-link">
          ← Back to Previous Story
        </Link>
        
        <h1 className="story-title">Content Purpose</h1>
        
        <div className="story-meta">
          <span>29 March 2024</span>
          <span>•</span>
          <span>Author: Creative Alex</span>
        </div>

        <div className="story-content">
          <p>
            Your choice between images, videos, and GIFs should align with your content&apos;s purpose.
            Each format has its strengths and ideal use cases that can help you achieve your 
            communication goals more effectively.
          </p>
          
          <h2>When to Use Each Format</h2>
          <p>
            <strong>Images are best for:</strong><br />
            • Showcasing products<br />
            • Sharing quotes or text-based content<br />
            • Creating immediate visual impact<br />
            • Brand photography
          </p>

          <p>
            <strong>Videos are ideal for:</strong><br />
            • Demonstrating processes<br />
            • Telling longer stories<br />
            • Creating emotional connections<br />
            • In-depth tutorials
          </p>

          <p>
            <strong>GIFs work best for:</strong><br />
            • Quick demonstrations<br />
            • Reactions and emotions<br />
            • Adding humor to content<br />
            • Showing before/after comparisons
          </p>

          <div className="next-link">
            <Link href="/ourclients" className="text-red-500 hover:text-red-600 flex items-center gap-2">
              Back to Our Clients →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story3;
