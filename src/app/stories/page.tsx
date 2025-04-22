'use client';

import React from 'react';
import Link from 'next/link';
import '../../styles/Stories.css';

const services = [
  {
    title: 'Creative',
    description: 'A picture is worth a thousand words. And the pictures our designers can capture can portray the totality of your brand\'s image.',
    link: '/services/creative'
  },
  {
    title: 'Performance',
    description: 'Reach where no man or company has reached before with specialised strategies and optimised data to target and reach your treasured audience wherever they are.',
    link: '/services/performance'
  },
  {
    title: 'Website',
    description: 'Where can one visit to become personal with your brand? Yes, your brand home. Our Website developers along with our designers and writers work together in architecting th...',
    link: '/services/website'
  },
  {
    title: 'Content',
    description: 'Words have power of their own and when placed carefully together they come out with meaning. Our writers craft words carefully together to give your brand the perfect...',
    link: '/services/content'
  }
];

export default function Stories() {
  return (
    <div className="stories-container">
      {/* Left Section */}
      <div className="stories-left">
        <h1 className="stories-title">
          Stories We<br />Unfold
        </h1>
        <p className="stories-description">
          Deep beneath, we are all storytellers waiting to tell your story to the world.
        </p>
        <button className="watch-showreel">
          Watch Showreel
          <span className="arrow-icon">→</span>
        </button>
      </div>

      {/* Right Section - Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <Link href={service.link} key={index} className="service-card">
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Social Links */}
      <div className="social-links">
        <Link href="https://twitter.com" className="social-link">Tw</Link>
        <Link href="https://facebook.com" className="social-link">Fb</Link>
        <Link href="https://instagram.com" className="social-link">In</Link>
        <Link href="https://behance.net" className="social-link">Be</Link>
        <Link href="https://instagram.com" className="social-link">Ig</Link>
      </div>

      {/* Estimate Project Button */}
      <button className="estimate-project">
        Estimate Project
      </button>

      {/* Menu Toggle */}
      <button className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
} 