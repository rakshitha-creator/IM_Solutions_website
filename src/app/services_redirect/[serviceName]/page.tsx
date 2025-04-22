'use client';

import { useRouter, usePathname } from 'next/navigation'; // Use navigation hooks
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import '../../styles/ServiceRedirectPage.css'; // Path to new CSS file

// Define structure for service details
interface ServiceDetail {
  title: string;
  description: string;
  image: string;
}

// Mock data structure matching your example
const allServiceData: { [key: string]: ServiceDetail[] } = {
  creative: [
    { title: '1.1 Animation', description: 'Make your ideas come alive with our team of Animators who specialise in making your brand\'s ideas move.', image: '/creative.jpg' },
    { title: '1.2 Design', description: 'What you see is what you get and what you get from our Designers are designs that sell, innovate and speak your brand\'s language.', image: '/design.jpg' },
    { title: '1.3 Editing', description: 'Our team of professional Creators can help your brand edit out what isn\'t needed for your brand and help your brand overcome success over and over again.', image: '/editing.jpg' },
    { title: '1.5 Photography', description: 'Capture your product in the best setting. Our world-class photography team constantly adapts to new challenges and creates new standards in their field.', image: '/photography.jpg' },
    { title: '1.4 Illustration', description: 'Our Creators also specialise in creating from scratch impactful Illustrations, Logos and more that tells your brand\'s stories more vibrantly.', image: '/illustration.jpg' },
    { title: '1.6 Videography', description: 'From clear explainers to heart-wrenching ads, our team of videographers perfectly encapsulate your brand\'s message. Scripting to Final Render, we do it all.', image: '/videography.jpg' },
  ],
  web: [
    { title: '2.1 Frontend', description: 'We craft beautiful interfaces...', image: '/web_frontend.jpg' },
    { title: '2.2 Backend', description: 'Robust and scalable solutions...', image: '/web_backend.jpg' },
  ],
  performance: [
    { title: '3.1 SEO', description: 'Boost your website visibility...', image: '/perf_seo.jpg' },
    { title: '3.2 SEM', description: 'Targeted advertising campaigns...', image: '/perf_sem.jpg' },
  ],
  content: [
    { title: '4.1 Writing', description: 'Our copywriters create compelling stories...', image: '/content_writing.jpg' },
    { title: '4.2 Strategy', description: 'Plan your content for maximum impact...', image: '/content_strategy.jpg' },
  ],
};

// Helper function to capitalize
function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Revert type for params
export default function ServiceRedirectPage({ params }: { params: { serviceName: string } }) {
  // Use direct access, rely on useEffect below to sync state
  const currentServiceName = params.serviceName.toLowerCase(); 
  
  const router = useRouter();
  const pathname = usePathname();
  const serviceDetails = allServiceData[currentServiceName] || [];

  const [activeSidebarItem, setActiveSidebarItem] = useState(capitalize(currentServiceName));

  // Update active item if the route parameter changes
  useEffect(() => {
      setActiveSidebarItem(capitalize(currentServiceName));
  }, [currentServiceName]); // Dependency array ensures this runs when param changes

  const handleSidebarClick = (serviceKey: string) => {
    const newPath = `/services_redirect/${serviceKey.toLowerCase()}`;
    if (newPath !== pathname) {
      router.push(newPath);
    }
  };

  const goBackToGrid = () => {
    router.push('/#services');
  };

  const serviceIndex = Object.keys(allServiceData).findIndex(key => key === currentServiceName) + 1;
  const serviceNumber = `${String(serviceIndex).padStart(2, '0')}.`;

  return (
    <div className="service-redirect-container">
      {/* Sidebar Section */}
      <div className="service-redirect-sidebar">
        <div>
          {/* Use Link for internal navigation */}
          
          <button onClick={goBackToGrid} className="back-button">
             &larr; Back 
          </button>

          <div className="sidebar-content">
            <h2>Services</h2>
            <ul className="menu">
              {Object.keys(allServiceData).map((key, index) => (
                <li
                  key={key}
                  className={activeSidebarItem === capitalize(key) ? 'active' : ''}
                  onClick={() => handleSidebarClick(key)}
                >
                  {`${String(index + 1).padStart(2, '0')}. ${capitalize(key)}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="quote">
          Deep beneath, we are all storytellers waiting to tell your story to the world.
        </p>
      </div>

      {/* Content Section */}
      <div className="service-redirect-content">
        <div className="service-title-header">
          <span>{serviceNumber}</span>
          <h1>{capitalize(currentServiceName)}</h1>
          <p>
            {`Explore our expert-level ${currentServiceName} services tailored to enhance your brand presence and drive results.`}
          </p>
        </div>

        {/* Container for Horizontal Scroll */}
        <div className="service-cards-scroll">
          {serviceDetails.map((item, i) => {
            const itemNumber = item.title.split(' ')[0];
            return (
              // Use service-card-item for the individual box
              <div 
                key={i} 
                className="service-card-item"
              >
                <div className="card-content-wrapper">
                  <span className="item-number-display">{itemNumber}</span>
                  <h3 className="service-card-title"> 
                    {item.title.substring(itemNumber.length).trim()}
                  </h3>
                  <div className="description-text">
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Hover Elements */}
                <div className="hover-background">
                  {/* Background image applied via CSS */}
                </div>
                <img src="/arrow.svg" alt="Arrow" className="hover-arrow" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 