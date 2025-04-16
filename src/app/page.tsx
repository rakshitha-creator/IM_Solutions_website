'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './styles/portfolio.css';
import './styles/stories.css';
import './styles/contact.css';
import './styles/home.css';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const words = ['RISK.', 'DARE.', 'VENTURE.'];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);

  // Horizontal scroll behavior
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        container.scrollBy({ left: -window.innerWidth });
      } else {
        container.scrollBy({ left: window.innerWidth });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const stories = [
    {
      title: "Images vs Video vs GIFs- Which Should I choose?",
      isLatest: true
    },
    {
      title: "Upgrade your brand with these 5 social media tools",
      isLatest: true
    },
    {
      title: "What the future looks like for content marketing?",
      isLatest: true
    }
  ];

  return (
    <div ref={scrollRef} className="home-container">
      {/* Home Section */}
      <section className="home-section">
        <div className="home-content">
          <h1 className="glitch-text">
            WE SHALL <br />
            <span className="typewriter-text">{text}</span>
          </h1>
          <div className="tags">
            <span>Creative</span> • <span>Web</span> • <span>Performance</span> • <span>Content</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a team of digital innovators specializing in web, design, and performance.
            Our mission is to elevate your brand through creativity and strategy.
          </p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="stories-section">
        {/* Background Image */}
        <div className="stories-background" />

        {/* Dark Gradient Overlay */}
        <div className="stories-overlay" />

        <div className="stories-container">
          {/* Left Column - Title and Description */}
          <div className="stories-left-column">
            <h1 className="stories-title">
              Our Stories
            </h1>
            
            <p className="stories-description">
              Everyone has a story to tell. Here is ours.
              Learn more about Digital Advertising. Learn
              more about Audento Digital.
            </p>
          </div>

          {/* Right Column - Stories List */}
          <div className="stories-right-column">
            {stories.map((story, index) => (
              <div
                key={index}
                className="story-card"
              >
                <div className="story-content">
                  {story.isLatest && (
                    <span className="story-latest-tag">
                      Latest
                    </span>
                  )}
                  <h3 className="story-title">
                    {story.title}
                  </h3>
                </div>
                <div className="story-arrow">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-left">
          <h2 className="contact-heading">
            Interested?<br />
            Let's talk!
          </h2>
          <p className="contact-subtext">
            Just fill this simple form in and we will contact you promptly
            to discuss your project. Hate forms? Drop us a line at
          </p>
          <a href="mailto:connect@audentodigital.com" className="contact-email">
            connect@audentodigital.com
          </a>
        </div>

        <div className="contact-middle">
          <div className="contact-form-header">
            <h2 className="form-tab">Reach out to us</h2>
          </div>

          <form className="contact-form">
            <input
              type="text"
              className="form-input"
              placeholder="Name*"
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Email id*"
              required
            />
            <input
              type="tel"
              className="form-input"
              placeholder="Mobile*"
              required
            />
            <textarea
              className="form-input"
              placeholder="Message*"
              rows={4}
              required
            />
          </form>
        </div>

        <div className="contact-right">
          <div className="services-section">
            <h2 className="services-title">I need</h2>
            <div className="services-grid">
              <div className="services-row">
                <div className="service-tag">Website</div>
                <div className="service-tag">App design</div>
                <div className="service-tag">Branding</div>
              </div>
              <div className="services-row">
                <div className="service-tag">Logo design</div>
                <div className="service-tag">HTML/CSS</div>
                <div className="service-tag">Graphics</div>
              </div>
              <div className="services-row">
                <div className="service-tag">Web Design</div>
                <div className="service-tag">UI/UX</div>
                <div className="service-tag">Illustrations</div>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
