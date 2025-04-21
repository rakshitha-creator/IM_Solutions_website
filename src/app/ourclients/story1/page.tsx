'use client';

import React from 'react';
import Link from 'next/link';
import '@/app/styles/stories.css';

const Story1 = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <Link href="/ourclients" className="back-link">
          ← Back to Our Clients
        </Link>
        
        <h1 className="story-title">Platform Preferences</h1>
        
        <div className="story-meta">
          <span>29 March 2024</span>
          <span>•</span>
          <span>Author: Creative Alex</span>
        </div>

        <div className="story-content">
          <p>
            The first thing you need to understand is that each platform, whether Facebook, Instagram,
            LinkedIn, or any other platform on social media, has its preferences and algorithms that might
            prefer one medium over the other. For instance, studies have shown that content in the form
            of an image organically shared on Instagram can reach 2x more people than that of the same
            share as a video or gif.
          </p>
          
          <p>
            Instagram prefers and has its algorithms designed to promote more image-driven content than 
            animated ones. This is because images are quicker to load, easier to process, and tend to 
            get higher engagement rates on the platform.
          </p>

          <h2>Key Takeaways</h2>
          <p>
            • Different platforms have different content preferences<br />
            • Instagram favors image content over videos and GIFs<br />
            • Consider the platform&apos;s algorithm when choosing your content format<br />
            • Test different formats to find what works best for your audience
          </p>

          <div className="next-link">
            <Link href="/ourclients/story2" className="text-red-500 hover:text-red-600 flex items-center gap-2">
              Next: Engagement Metrics →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story1;
