'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from '../../Sidebar';

export default function BlogPost() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/#stories');
    setTimeout(() => {
      const storiesSection = document.getElementById('stories');
      if (storiesSection) {
        storiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <button 
          onClick={handleBack}
          className="back-button"
          aria-label="Back to Stories"
        >
          <ArrowLeft size={20} />
          <span>Back to Stories</span>
        </button>
        
        <div className="blog-content">
          <div className="blog-header">
            <span className="blog-tag">Latest</span>
            <h1>Upgrade your brand with these 5 social media tools</h1>
            <div className="blog-meta">
              <span>Published on May 14, 2024</span>
              <span>4 min read</span>
            </div>
          </div>

          <div className="blog-body">
            <section className="blog-section">
              <h2>Introduction</h2>
              <p>In today's digital age, having the right social media tools can make or break your brand's online presence. Here are five essential tools that will help elevate your social media game.</p>
            </section>

            <section className="blog-section">
              <h2>1. Buffer - Scheduling and Analytics</h2>
              <p>Buffer is a comprehensive social media management platform that offers:</p>
              <ul className="blog-list">
                <li>Advanced post scheduling across multiple platforms</li>
                <li>Detailed analytics and performance tracking</li>
                <li>Team collaboration features</li>
                <li>Content calendar management</li>
                <li>Engagement tracking and reporting</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>2. Canva - Visual Content Creation</h2>
              <p>Canva empowers brands to create stunning visual content with:</p>
              <ul className="blog-list">
                <li>Professional templates for all social platforms</li>
                <li>Brand kit and style guide integration</li>
                <li>Collaboration tools for teams</li>
                <li>Vast library of stock photos and elements</li>
                <li>Animation and video editing capabilities</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>3. Hootsuite - Social Listening</h2>
              <p>Hootsuite helps you stay on top of social conversations with:</p>
              <ul className="blog-list">
                <li>Real-time monitoring of brand mentions</li>
                <li>Competitor analysis tools</li>
                <li>Automated response systems</li>
                <li>Sentiment analysis</li>
                <li>Crisis management features</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>4. Later - Visual Planning</h2>
              <p>Later specializes in visual-first social media planning:</p>
              <ul className="blog-list">
                <li>Visual content calendar</li>
                <li>Instagram grid planning</li>
                <li>Story scheduling</li>
                <li>Hashtag suggestions</li>
                <li>Best time to post recommendations</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>5. Sprout Social - Analytics and Reporting</h2>
              <p>Sprout Social provides deep insights with:</p>
              <ul className="blog-list">
                <li>Comprehensive analytics dashboard</li>
                <li>Custom report generation</li>
                <li>Competitive analysis</li>
                <li>ROI tracking</li>
                <li>Audience growth metrics</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
} 