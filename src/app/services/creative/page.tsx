'use client';

import React from 'react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import '../../styles/CreativePage.css';

const creativeItems = [
  {
    id: '1.1',
    title: 'Animation',
    description: "Make your ideas come alive with our team of Animators who specialise in making your brand's ideas move.",
  },
  {
    id: '1.2',
    title: 'Design',
    description: "What you see is what you get and what you get from our Designers are designs that sell, innovate and speak your brand's language.",
  },
  {
    id: '1.3',
    title: 'Editing',
    description: "Our team of professional Creators can help your brand edit out what isn't needed for your brand and help your brand overcome success over and over again.",
  },
  {
    id: '1.4',
    title: 'Illustration',
    description: "Our Creators also specialise in creating from scratch impactful Illustrations, Logos and more that tells your brand's stories more vibrantly.",
  },
  // Add more creative items if needed
];

// Dummy list for the left section - replace or integrate with actual data/component if needed
const services = [
  { name: 'Creative', number: '01.', path: '/services/creative' },
  { name: 'Web', number: '02.', path: '/services/web' }, // Update paths as needed
  { name: 'Performance', number: '03.', path: '/services/performance' },
  { name: 'Content', number: '04.', path: '/services/content' },
];

export default function CreativePage() {
  return (
    <div className="page-container-split">
      <Sidebar />
      <div className="content-area-split">
        {/* Static Left Section */}
        <div className="left-section-static creative-bg">
          <div className="left-section-content">
            <Link href="/#services" className="back-button-alt">
              &larr; Back To Services
            </Link>
            <h1 className="services-title-left">Services</h1>
            <ul className="service-items-left">
              {services.map((service) => (
                <li
                  key={service.name}
                  className={`service-item-left ${service.name === 'Creative' ? 'active' : ''}`}
                >
                  <span className="service-number-left">{service.number}</span> {service.name}
                </li>
              ))}
            </ul>
            <p className="description-left">
              Deep beneath, we are all storytellers waiting to tell your story to the world.
            </p>
          </div>
        </div>

        {/* Right Section - Now displays a grid of items */}
        <div className="right-section-dynamic">
          <div className="creative-header">
            <h1 className="section-title">Creative</h1>
          </div>

          {/* Container for the grid */}
          <div className="creative-items-grid">
            {/* Directly map and render each item as a box */}
            {creativeItems.map((item) => (
              <div key={item.id} className="creative-item-box">
                {/* Render the content of a single creative item */}
                <span className="item-id">{item.id}</span>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 