'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceData {
  Creative: ServiceItem[];
  Web: ServiceItem[];
  Performance: ServiceItem[];
  Content: ServiceItem[];
}

// Mock data for services
const serviceData: ServiceData = {
  Creative: [
    { title: '1.1 Animation', description: 'Make your ideas come alive...' },
    { title: '1.2 Design', description: 'What you see is what you get...' },
  ],
  Web: [
    { title: '2.1 Frontend', description: 'We craft beautiful interfaces...' },
  ],
  Performance: [
    { title: '3.1 SEO', description: 'Boost your website visibility...' },
  ],
  Content: [
    { title: '4.1 Writing', description: 'Our copywriters create compelling stories...' },
  ],
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<keyof ServiceData>('Creative');
  const router = useRouter();

  // Handle redirection
  const handleRedirect = (serviceName: keyof ServiceData) => {
    router.push(`/services_redirect/${serviceName}`);
  };

  return (
    <div className="services-container">
      <div className="services-sidebar">
        <div>
          <div className="back">← Back to Home</div>

          <div className="sidebar-content">
            <h2>Services</h2>
            <ul className="menu">
              {Object.keys(serviceData).map((key, index) => (
                <li
                  key={key}
                  className={activeService === key ? 'active' : ''}
                  onClick={() => {
                    setActiveService(key as keyof ServiceData);
                    handleRedirect(key as keyof ServiceData);
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
          {serviceData[activeService].map((item: ServiceItem, i: number) => (
            <div key={i}>
              <h3 className="service-title">{item.title}</h3>
              <div className="service-card">
                <div className="description-text">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
