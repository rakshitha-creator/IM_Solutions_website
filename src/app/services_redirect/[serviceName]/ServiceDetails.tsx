// src/app/services_redirect/[serviceName]/ServiceDetails.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface ServiceDetail {
  title: string;
  description: string;
  image: string;
}

const allServiceData: { [key: string]: ServiceDetail[] } = {
  creative: [
    { title: '1.1 Animation', description: 'Professional animation services for your brand.', image: '/creative.jpg' },
    { title: '1.2 Design', description: 'High-quality design services to create a stunning brand identity.', image: '/design.jpg' },
  ],
  web: [
    { title: '2.1 Frontend', description: 'Frontend web development services for modern, responsive websites.', image: '/web_frontend.jpg' },
    { title: '2.2 Backend', description: 'Robust backend development for scalable web applications.', image: '/web_backend.jpg' },
  ],
};

const ServiceDetails: React.FC<{ serviceName: string }> = ({ serviceName }) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(serviceName);
  const router = useRouter();

  useEffect(() => {
    setActiveSidebarItem(serviceName);
  }, [serviceName]);

  const serviceDetails = allServiceData[serviceName] || [];

  const handleSidebarClick = (serviceKey: string) => {
    router.push(`/services_redirect/${serviceKey.toLowerCase()}`);
  };

  const goBackToGrid = () => {
    router.push('/#services');
  };

  return (
    <div className="service-redirect-container">
      <div className="service-redirect-sidebar">
        <div>
          <button onClick={goBackToGrid} className="back-button">
            &larr; Back
          </button>

          <div className="sidebar-content">
            <h2>Services</h2>
            <ul className="menu">
              {Object.keys(allServiceData).map((key, index) => (
                <li
                  key={key}
                  className={activeSidebarItem === key ? 'active' : ''}
                  onClick={() => handleSidebarClick(key)}
                >
                  {`${String(index + 1).padStart(2, '0')}. ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="quote">
          Deep beneath, we are all storytellers waiting to tell your story to the world.
        </p>
      </div>

      <div className="service-redirect-content">
        <div className="service-title-header">
          <span>{`0${Object.keys(allServiceData).indexOf(serviceName) + 1}.`}</span>
          <h1>{serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}</h1>
          <p>
            {`Explore our expert-level ${serviceName} services tailored to enhance your brand presence and drive results.`}
          </p>
        </div>

        <div className="service-cards-scroll">
          {serviceDetails.map((item, i) => {
            const itemNumber = item.title.split(' ')[0];
            return (
              <div key={i} className="service-card-item">
                <div className="card-content-wrapper">
                  <span className="item-number-display">{itemNumber}</span>
                  <h3 className="service-card-title">{item.title.substring(itemNumber.length).trim()}</h3>
                  <div className="description-text">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="hover-background"></div>
                <Image src="/arrow.svg" alt="Arrow" className="hover-arrow" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
