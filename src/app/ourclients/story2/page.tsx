'use client';

import React from 'react';
import Link from 'next/link';
import '@/app/styles/stories.css';

const Story2 = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <Link href="/ourclients/story1" className="back-link">
          ← Back to Previous Story
        </Link>
        
        <h1 className="story-title">Engagement Metrics</h1>
        
        <div className="story-meta">
          <span>29 March 2024</span>
          <span>•</span>
          <span>Author: Creative Alex</span>
        </div>

        <div className="story-content">
          <p>
            When it comes to engagement, different formats perform differently across platforms.
            On Instagram, static images tend to get higher engagement rates in terms of likes and comments.
            However, videos often lead to longer view times and better retention rates.
          </p>
          
          <p>
            GIFs, sitting between these two formats, can capture attention quickly while being more 
            lightweight than full videos. They&apos;re particularly effective for demonstrating quick 
            processes or reactions, making them ideal for certain types of content.
          </p>

          <h2>Key Metrics to Consider</h2>
          <p>
            • Engagement rate (likes, comments, shares)<br />
            • View duration and retention<br />
            • Click-through rates<br />
            • Conversion rates from each format
          </p>

          <div className="next-link">
            <Link href="/ourclients/story3" className="text-red-500 hover:text-red-600 flex items-center gap-2">
              Next: Content Purpose →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story2;
