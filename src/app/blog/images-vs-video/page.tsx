'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/blog.css';

export default function BlogPost() {
  return (
    <div className="blog-post-container">
      <Link href="/stories" className="back-button">
        <Image
          src="/arrow-left.svg"
          alt="Back"
          width={20}
          height={20}
        />
        Back To Home
      </Link>

      <div className="blog-header">
        <span className="blog-category">Blog</span>
        <h1 className="blog-title">Images vs Video vs GIFs - Which Should I choose?</h1>
        <div className="blog-meta">
          <span className="blog-date">29 Sep 2021</span>
          <span className="blog-author">Author: Franco Alex</span>
        </div>
      </div>

      <div className="blog-content">
        <p className="blog-paragraph">
          A lot of work goes into making an image, video, or Gif, right? And you like to see your work 
          bring out results. But which performs better? Wouldn't you want to save your time, energy, 
          and money on putting out content on a medium that would give you the best performance? 
          We're here to help you with just that!
        </p>

        <p className="blog-paragraph">
          The first thing you get to understand is that each platform, whether Facebook, Instagram, 
          linked.in, or any other platform on social media, has its preferences and algorithms that might 
          prefer one medium over the other. For instance, <span className="highlight">studies</span> have shown that content in the form 
          of an image organically shared on Instagram can reach 2x more people than that of the same 
          share as a video or gif. Instagram prefers and has its algorithms designed to promote more 
          image-driven content than animated ones.
        </p>

        <h2 className="blog-subtitle">Stories</h2>
        <p className="blog-paragraph">
          Now that we've understood that each platform gives a different take on the matter, we can 
          move to the second criterion, whether to publish the content as posts or stories. It's still unclear 
          which medium performs better when published on platforms as stories- whether it be in 
          videos, images, or GIFs, but we have found that it does lean greater towards the side of the 
          pictures. Another insight we were able to find was that the less your story looked branded, the 
          better it performed regardless of the medium used.
        </p>

        <h2 className="blog-subtitle">Posts</h2>
        <p className="blog-paragraph">
          In Instagram, we have come to understand that we can't differentiate the performance of one 
          from the other GIFs and videos as you need to publish both as videos.
        </p>

        <p className="blog-paragraph">
          On Facebook though, research has shown us that videos perform better as it drives more views 
          and engagement, a clear win for the video content. But still, the question arises- Gifs or 
          Videos? Who better to answer than the Facebook platform themselves. According to the 
          Facebook team, "shorter videos get more complete views." And the more complete views you 
          get, the higher your chances are of your content performing better.
        </p>
      </div>
    </div>
  );
} 