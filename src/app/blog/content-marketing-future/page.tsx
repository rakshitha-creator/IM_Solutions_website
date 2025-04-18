'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../Sidebar';

export default function BlogPost() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleBack = () => {
    router.push('/');
    setTimeout(() => {
      const storiesSection = document.getElementById('stories');
      if (storiesSection) {
        storiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = e.deltaY * 0.5; // Reduce scroll speed
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <Sidebar />
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100vh',
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        <div style={{ minWidth: '100%', height: '100%', position: 'relative' }}>
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
                <h1>What the future looks like for content marketing?</h1>
                <div className="blog-meta">
                  <span>Published on May 13, 2024</span>
                  <span>6 min read</span>
                </div>
              </div>
            </section>

            <section className="blog-section">
              <h2>The Evolution of Content Marketing</h2>
              <p>Content marketing is rapidly evolving with new technologies and changing consumer behaviors. Let's explore the key trends shaping its future.</p>
            </section>

            <section className="blog-section">
              <h2>AI-Powered Content Creation</h2>
              <p>Artificial Intelligence is revolutionizing content creation:</p>
              <ul className="blog-list">
                <li>Automated content generation and optimization</li>
                <li>Personalized content recommendations</li>
                <li>Advanced analytics and insights</li>
                <li>Smart content distribution</li>
                <li>AI-driven content strategy</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>Interactive and Immersive Content</h2>
              <p>The future of content is interactive and engaging:</p>
              <ul className="blog-list">
                <li>Augmented Reality (AR) experiences</li>
                <li>Virtual Reality (VR) content</li>
                <li>360-degree videos</li>
                <li>Interactive infographics</li>
                <li>Gamified content experiences</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>Voice and Visual Search Optimization</h2>
              <p>New search paradigms are changing content strategy:</p>
              <ul className="blog-list">
                <li>Voice search optimization</li>
                <li>Visual search capabilities</li>
                <li>Conversational content</li>
                <li>Multi-modal search optimization</li>
                <li>Context-aware content delivery</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>Hyper-Personalization</h2>
              <p>Content is becoming increasingly personalized:</p>
              <ul className="blog-list">
                <li>Dynamic content adaptation</li>
                <li>Real-time personalization</li>
                <li>Behavioral targeting</li>
                <li>Contextual content delivery</li>
                <li>Predictive content recommendations</li>
              </ul>
            </section>

            <section className="blog-section">
              <h2>Sustainability and Ethics</h2>
              <p>Future content marketing will prioritize:</p>
              <ul className="blog-list">
                <li>Sustainable content practices</li>
                <li>Ethical content creation</li>
                <li>Privacy-first approaches</li>
                <li>Transparent storytelling</li>
                <li>Social responsibility</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
} 