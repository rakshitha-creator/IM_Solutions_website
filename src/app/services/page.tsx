'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

// Mock data for services
const serviceData = {
  Creative: [
    { title: '1.1 Animation', description: 'Make your ideas come alive...', image: 'logo.png' },
    { title: '1.2 Design', description: 'What you see is what you get...', image: 'logo.png' },
  ],
  Web: [
    { title: '2.1 Frontend', description: 'We craft beautiful interfaces...', image: 'logo.png' },
  ],
  Performance: [
    { title: '3.1 SEO', description: 'Boost your website visibility...', image: 'logo.png' },
  ],
  Content: [
    { title: '4.1 Writing', description: 'Our copywriters create compelling stories...', image: 'logo.png' },
  ],
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('Creative');
  const router = useRouter();

  // Handle redirection
  const handleRedirect = (serviceName: string) => {
    router.push(`/services_redirect/${serviceName}`);
  };

  return (
    <div className="services-container">
      <div className="services-sidebar">
        <div>
          <img src="/logo.png" alt="Logo" className="logo" style={{ width: '120px', marginBottom: '2rem' }} />
          <div className="back">← Back to Home</div>

          <div className="sidebar-content">
            <h2>Services</h2>
            <ul className="menu">
              {Object.keys(serviceData).map((key, index) => (
                <li
                  key={key}
                  className={activeService === key ? 'active' : ''}
                  onClick={() => {
                    setActiveService(key);
                    handleRedirect(key);  // Redirect on click
                  }}
                >
                  {`${index + 1}. ${key}`}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="quote">
          Deep beneath, we are all storytellers waiting to tell your story to the world.
        </p>
      </div>

      <div className="services-content">
        <div className="services-title">
          <span>{`${Object.keys(serviceData).indexOf(activeService) + 1}.`}</span>
          <h1>{activeService}</h1>
          <p>
            {`Explore our expert-level ${activeService.toLowerCase()} services tailored to enhance your brand presence and drive results.`}
          </p>
        </div>

        <div className="service-cards">
          {serviceData[activeService].map((item, i) => (
            <div key={i}>
              <h3 className="service-title">{item.title}</h3>
              <div className="service-card">
                <div className="description-text">
                  <p>{item.description}</p>
                </div>
                <div className="image-hover-box">
                  <img src={item.image} alt="Hover" className="hover-image" />
                  <img src="/arrow-icon.png" alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
