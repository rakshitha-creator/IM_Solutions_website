'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/BlogPost.css';

export default function ContentMarketingBlog() {
  const router = useRouter();

  return (
    <div className="blog-post-container">
      {/* Back Button */}
      <div className="back-section">
        <button onClick={() => router.back()} className="back-button">
          <span>←</span> Back To Home
        </button>
      </div>

      {/* Blog Header */}
      <div className="blog-header">
        <div className="blog-tag">Blog</div>
        <h1 className="blog-title">What the future looks like for content marketing?</h1>
        <div className="blog-meta">
          <span className="blog-date">29 Sep 2021</span>
          <span className="blog-author">Author: Franco Alex</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">
        <div className="blog-scroll-container">
          {/* Page 1 */}
          <div className="blog-page">
            <div className="blog-text">
              <p>
                Content marketing has evolved significantly over the years, and its future looks more promising than ever.
                With the rapid advancement of technology and changing consumer behaviors, content marketing strategies
                are adapting to meet new challenges and opportunities.
              </p>

              <h2 className="blog-subtitle">The Rise of AI in Content Creation</h2>
              <p>
                Artificial Intelligence is revolutionizing how content is created and distributed. AI-powered tools
                are helping marketers generate personalized content at scale, analyze audience behavior, and optimize
                content for better engagement. This trend is expected to grow, making content creation more efficient
                and data-driven.
              </p>
            </div>
          </div>

          {/* Page 2 */}
          <div className="blog-page">
            <div className="blog-text">
              <h2 className="blog-subtitle">Interactive Content Takes Center Stage</h2>
              <p>
                The future of content marketing lies in interactive experiences. From quizzes and polls to
                augmented reality and virtual reality content, brands are finding new ways to engage their
                audience. Interactive content not only increases engagement but also provides valuable data
                about consumer preferences and behaviors.
              </p>

              <p>
                This shift towards interactive content is driven by the need for more engaging and memorable
                brand experiences. As technology continues to advance, we can expect to see even more innovative
                forms of interactive content emerging.
              </p>
            </div>
          </div>

          {/* Page 3 */}
          <div className="blog-page">
            <div className="blog-text">
              <h2 className="blog-subtitle">Personalization at Scale</h2>
              <p>
                The future of content marketing will be increasingly personalized. With the help of AI and
                machine learning, brands will be able to deliver highly relevant content to individual users
                based on their preferences, behaviors, and past interactions.
              </p>

              <p>
                This level of personalization will require sophisticated data analysis and content management
                systems. However, the payoff in terms of engagement and conversion rates makes it a worthwhile
                investment for forward-thinking brands.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Future Trends</h3>
            <p>
              Content marketing is evolving rapidly, with new technologies and consumer behaviors shaping
              its future. Understanding these trends is crucial for staying ahead in the digital landscape.
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Key Predictions</h3>
            <ul className="feature-list">
              <li>AI-driven content creation</li>
              <li>Interactive experiences</li>
              <li>Hyper-personalization</li>
              <li>Voice search optimization</li>
              <li>Video-first content strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 