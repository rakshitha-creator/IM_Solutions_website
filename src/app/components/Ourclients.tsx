'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import next/image
import '../styles/Ourclients.css';

const Ourclients = () => {
  return (
    <div className="ourClientsContainer">
      <div className="ourClientsContent">
        {/* LEFT IMAGE */}
        <div className="ourClientsImage">
          <Image 
            src="/creative_sec.webp" 
            alt="Creative Section" 
            width={500} 
            height={500} 
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="ourClientsRightSection">
          <div className="ourClientsHeading">
            <h1>
              <span>Our stories</span>
            </h1>
            <p>
              Everyone has a story to tell. Here is ours.
              <br />
              Learn more about Digital Advertising.
              <br />
              Learn more about Audento Digital.
            </p>
          </div>

          <div className="ourClientsRightCards">
            <div className="storyCard">
              <div className="tag">Latest</div>
              <div className="cardText">Images vs Video vs GIFs – Which Should I choose?</div>
              <Link href="/blog/images-vs-video">
                <div className="arrowCircle">
                  <Image 
                    src="/arrow.svg" 
                    alt="arrow" 
                    width={24} 
                    height={24}
                  />
                </div>
              </Link>
            </div>

            <div className="storyCard">
              <div className="tag">Latest</div>
              <div className="cardText">Upgrade your brand with these 5 social media tools</div>
              <Link href="/blog/social-media-tools">
                <div className="arrowCircle">
                  <Image 
                    src="/arrow.svg" 
                    alt="arrow" 
                    width={24} 
                    height={24}
                  />
                </div>
              </Link>
            </div>

            <div className="storyCard">
              <div className="tag">Latest</div>
              <div className="cardText">What the future looks like for content marketing?</div>
              <Link href="/blog/content-marketing">
                <div className="arrowCircle">
                  <Image 
                    src="/arrow.svg" 
                    alt="arrow" 
                    width={24} 
                    height={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
