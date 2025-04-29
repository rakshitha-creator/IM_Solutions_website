'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/BlogPost.css';

export default function BlogPost() {
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
        <h1 className="blog-title">Images vs Video vs GIFs - Which Should I Choose?</h1>
        <div className="blog-meta">
          <span className="blog-date">29 Sep 2021</span>
          <span className="blog-author">Author: Franco Alex</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">
        <div className="blog-text">
          <p>
            A lot of work goes into making an image, video, or Gif, right? And you like to see your work
            bring out results. But which performs better? Wouldn&apos;t you want to save your time, energy,
            and money on putting out content on a medium that would give you the best performance?
            We&apos;re here to help you with just that!
          </p>

          <p>
            The first thing you got to understand is that each platform, whether Facebook, Instagram,
            LinkedIn, or any other platform on social media, has its preferences and algorithms that might
            prefer one medium over the other. For instance, <span className="highlight">studies</span> have shown that content in the form
            of an image organically shared on Instagram can reach 2x more people than that of the same
            share as a video or gif. Instagram prefers and has its algorithms designed to promote more
            image-driven content than animated ones.
          </p>

          <p>
            But the same can&apos;t be said in the case of Facebook. Though both Facebook and Instagram are
            under the same company, their algorithms prefer one content medium over another. Images
            perform much better on Instagram, whereas Facebook is video-heavy. That being the case, the
            right kind of high engagement content can bust through any algorithm.
          </p>
        </div>

        {/* Sidebar Content */}
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Stories</h3>
            <p>
              Now that we&apos;ve understood that each platform has its own preferences, let&apos;s
              move to the second criterion, whether we can determine which medium performs better when
              it comes to videos, images, or GIFs, but we have found that the more engaging the
              pictures, the better it performed regardless of the medium.
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Posts</h3>
            <p>
              In Instagram, we have come to understand that images perform much better than
              the other Gifs and videos as you need to be more creative with your content.
              On Facebook though, research has shown us that when it comes to reach
              and engagement, a clear win for the video content. According to the
              Facebook team, &quot;shorter videos get more completed views.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
