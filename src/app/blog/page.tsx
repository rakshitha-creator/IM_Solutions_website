'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar';

export default function BlogsPage() {
  const router = useRouter();

  const blogPosts = [
    {
      tag: "Latest",
      title: "Images vs Video vs GIFs - Which Should I choose?",
      link: "/blog/images-vs-video-gifs",
      date: "May 15, 2024",
      readTime: "5 min read"
    },
    {
      tag: "Latest",
      title: "Upgrade your brand with these 5 social media tools",
      link: "/blog/social-media-tools",
      date: "May 14, 2024",
      readTime: "4 min read"
    },
    {
      tag: "Latest",
      title: "What the future looks like for content marketing?",
      link: "/blog/content-marketing-future",
      date: "May 13, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <button 
          onClick={() => router.back()}
          className="back-button"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        
        <div className="blogs-content">
          <h1 className="blogs-title">Our Stories</h1>
          <p className="blogs-subtitle">Discover insights about digital marketing, branding, and more.</p>
          
          <div className="blogs-grid">
            {blogPosts.map((post, index) => (
              <Link href={post.link} key={index} className="blog-card">
                <div className="blog-card-content">
                  <span className="blog-tag">{post.tag}</span>
                  <h2>{post.title}</h2>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="blog-card-arrow">
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 