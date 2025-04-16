'use client';

import { useState } from 'react';

const serviceData = {
  Creative: [
    { title: '1.1 Animation', description: 'Make your ideas come alive with our team of Animators who specialize in making your brand’s ideas move.' },
    { title: '1.2 Design', description: 'What you see is what you get — designs that sell, innovate, and speak your brand’s language.' },
    { title: '1.3 Editing', description: 'We help edit out what’s not needed and build your brand\'s presence over and over again.' },
    { title: '1.4 Illustration', description: 'We specialize in creating impactful Illustrations, Logos, and more that tell your brand\'s stories.' },
  ],
  Web: [
    { title: '2.1 Frontend', description: 'We craft beautiful and fast user interfaces that deliver an engaging user experience.' },
    { title: '2.2 Backend', description: 'Our backend developers ensure your applications are secure, fast, and scalable.' },
    { title: '2.3 Full Stack', description: 'Our full-stack engineers build seamless, end-to-end solutions tailored to your needs.' },
  ],
  Performance: [
    { title: '3.1 SEO', description: 'Boost your website visibility and attract more traffic through expert SEO strategies.' },
    { title: '3.2 Analytics', description: 'We measure everything and help you make informed decisions backed by data.' },
    { title: '3.3 Optimization', description: 'Speed, responsiveness, and conversion — we optimize your digital assets completely.' },
  ],
  Content: [
    { title: '4.1 Writing', description: 'Our copywriters create compelling stories that resonate with your audience.' },
    { title: '4.2 Blogging', description: 'Regular blogs to educate, inspire, and attract your ideal customer.' },
    { title: '4.3 Social Media', description: 'Content that performs on Instagram, Facebook, and every other platform.' },
  ],
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('Creative');

  return (
    <div className="services-container">
      {/* Sidebar */}
      <div className="services-sidebar">
        <div className="back">← Back to Home</div>

        <div className="sidebar-content">
          <h2>Services</h2>
          <ul className="menu">
            {Object.keys(serviceData).map((key, index) => (
              <li
                key={key}
                className={activeService === key ? 'active' : ''}
                onClick={() => setActiveService(key)}
              >
                {0${index + 1}. ${key}}
              </li>
            ))}
          </ul>
        </div>

        <p className="quote">
          Deep beneath, we are all storytellers waiting to tell your story to the world.
        </p>
      </div>

      {/* Content Area */}
      <div className="services-content">
        <div className="services-title">
          <span>{0${Object.keys(serviceData).indexOf(activeService) + 1}.}</span>
          <h1>{activeService}</h1>
          <p>
            {Explore our expert-level ${activeService.toLowerCase()} services tailored to enhance your brand presence and drive results.}
          </p>
        </div>

        <div className="service-cards">
          {serviceData[activeService].map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}