'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../styles/BlogPost.css';

export default function SocialMediaToolsBlog() {
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
        <h1 className="blog-title">Upgrade your brand with this 5 social media tools</h1>
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
                Whether for your own self-marketing or a brand you work for, almost everyone has realized the
                potential benefits of promoting a brand on social media. And to help your brand perform
                better and with ease, social media marketing tools are brought into the market and used to
                push your brand towards marketing success.
              </p>

              <h2 className="blog-subtitle">Why do we need Social media tools?</h2>
              <p>
                Let's say we take up an hour to complete a task on social media, using a tool designed to help
                you save time and get the work done in probably half the time. In an age when time is
                considered money, having social media tools to help you get more organized and save time,
                money, and energy into promoting your brand's awareness is key to creating and sustaining a
                successful brand.
              </p>
            </div>
          </div>

          {/* Page 2 */}
          <div className="blog-page">
            <div className="blog-text">
              <h2 className="blog-subtitle">1. Sendible</h2>
              <p>
                We all know the tedious task of having to manage all your social media content in our hands. 
                Still, when it comes to managing multiple social media platforms, all the firework can be 
                overwhelming. Sendible is a tool that helps your brand integrate with multiple platforms.
              </p>

              <p>
                You can save time, energy, and your creative juices by using this social media tool designed for 
                digital marketing agencies. It gives you complete access to all your preferred social media 
                platforms, including WordPress and medium. It even has Canva which is a huge plus point 
                out there!
              </p>
            </div>
          </div>

          {/* Page 3 */}
          <div className="blog-page">
            <div className="blog-text">
              <h2 className="blog-subtitle">2. Hootsuite</h2>
              <p>
                Another great tool for managing multiple social media accounts is Hootsuite. It allows you to
                schedule posts, track mentions, analyze social media traffic, and manage multiple team members
                from one dashboard.
              </p>

              <p>
                Perfect for businesses of all sizes, Hootsuite helps streamline your
                social media management process. Its comprehensive analytics and reporting features make it
                easier to track your social media performance and make data-driven decisions.
              </p>
            </div>
          </div>

          {/* Page 4 */}
          <div className="blog-page">
            <div className="blog-text">
              <h2 className="blog-subtitle">3. Buffer</h2>
              <p>
                Buffer is known for its user-friendly interface and powerful scheduling capabilities. It helps
                you plan your content calendar, analyze post performance, and engage with your audience
                effectively.
              </p>

              <p>
                The platform also offers great insights into the best times to post for maximum
                engagement. With its intuitive design and robust features, Buffer makes social media
                management a breeze for both individuals and teams.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Tools Overview</h3>
            <p>
              The best social media tools will help your brand stay organized and efficient. We've
              compiled a list of the most used social media management tools that can transform your
              social media strategy.
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Key Features</h3>
            <ul className="feature-list">
              <li>Multi-platform management</li>
              <li>Content scheduling</li>
              <li>Analytics and reporting</li>
              <li>Team collaboration</li>
              <li>Social media monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 