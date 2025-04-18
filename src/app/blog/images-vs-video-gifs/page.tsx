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
          <section className="blog-section">
            <div className="blog-header">
              <span className="blog-tag">Latest</span>
              <h1>Images vs Video vs GIFs - Which Should I choose?</h1>
              <div className="blog-meta">
                <span>Published on May 15, 2024</span>
                <span>5 min read</span>
              </div>
            </div>
          </section>

          <section className="blog-section">
            <h2>The Power of Visual Content</h2>
            <p>In today's digital landscape, visual content is king. But with so many options available, choosing the right format can be challenging. Let's break down the strengths and ideal use cases for each format.</p>
          </section>

          <section className="blog-section">
            <h2>Static Images</h2>
            <p>Static images remain a cornerstone of digital content because they:</p>
            <ul className="blog-list">
              <li>Load quickly and consume less bandwidth</li>
              <li>Are easily shareable across all platforms</li>
              <li>Work well for infographics and detailed information</li>
              <li>Can be optimized for SEO more effectively</li>
              <li>Are cost-effective to produce</li>
            </ul>
            <p>Best for: Product photos, infographics, charts, and simple explanations.</p>
          </section>

          <section className="blog-section">
            <h2>Video Content</h2>
            <p>Videos offer the most comprehensive way to tell a story:</p>
            <ul className="blog-list">
              <li>Highest engagement rates across social platforms</li>
              <li>Perfect for complex demonstrations</li>
              <li>Creates stronger emotional connections</li>
              <li>Ideal for long-form content</li>
              <li>Great for educational content</li>
            </ul>
            <p>Best for: Tutorials, brand stories, product demonstrations, and emotional narratives.</p>
          </section>

          <section className="blog-section">
            <h2>GIFs</h2>
            <p>GIFs bridge the gap between images and videos:</p>
            <ul className="blog-list">
              <li>Perfect for short, looping demonstrations</li>
              <li>Lighter than videos but more dynamic than images</li>
              <li>Great for showing quick before/after comparisons</li>
              <li>Highly shareable and popular on social media</li>
              <li>Can add personality to your content</li>
            </ul>
            <p>Best for: Quick demonstrations, reactions, and adding humor to content.</p>
          </section>

          <section className="blog-section">
            <h2>Making the Right Choice</h2>
            <p>Consider these factors when choosing your visual format:</p>
            <ul className="blog-list">
              <li>Your platform and its technical limitations</li>
              <li>Your target audience's preferences</li>
              <li>Your message complexity</li>
              <li>Your budget and resources</li>
              <li>Your timeline and production capabilities</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
} 