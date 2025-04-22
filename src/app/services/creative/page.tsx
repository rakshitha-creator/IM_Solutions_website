// This is the page that will be dynamically imported
'use client';

import { useEffect, useState } from 'react';
import '../../styles/Creative.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const services = [
  {
    title: '1.1 Animation',
    description: 'Make your ideas come alive with our team of Animators who specialise in making your brand’s ideas move.',
    slug: 'animation',
    image: '/creative.jpg',
  },
  {
    title: '1.2 Design',
    description: "Our expert Designers shape your brand's visual identity — UI, UX, branding, and everything in between.",
    slug: 'design',
    image: '/creative.jpg',
  },
  {
    title: '1.3 Editing',
    description: 'Our team of professional Creators can help your brand edit out what isn’t needed.',
    slug: 'editing',
    image: '/creative.jpg',
  },
  {
    title: '1.4 Illustration',
    description: 'Our Creators specialise in impactful Illustrations, Logos and more.',
    slug: 'illustration',
    image: '/creative.jpg',
  },
  {
    title: '1.5 Photography',
    description: 'Capture your product in the best setting with our world-class photography team.',
    slug: 'photography',
    image: '/images/photography-sample.png',
  },
  {
    title: '1.6 Videography',
    description: 'From explainers to emotional ads, our videographers encapsulate your brand’s message.',
    slug: 'videography',
    image: '/images/videography-sample.png',
  },
];

const CreativePage = () => {
  const [isClient, setIsClient] = useState(false);  // Track client-side rendering
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure the router logic is only applied after mounting
  }, []);

  // Don't render until client-side
  if (!isClient) return null;

  const currentPath = router.pathname;

  return (
    <div className="creative-container">
      <aside className="sidebar">
        <h2>Services</h2>
        <ul>
          <li className={currentPath === '/creative' ? 'active' : ''}>01. Creative</li>
          <li className={currentPath === '/web' ? 'active' : ''}>02. Web</li>
          <li className={currentPath === '/performance' ? 'active' : ''}>03. Performance</li>
          <li className={currentPath === '/content' ? 'active' : ''}>04. Content</li>
        </ul>
      </aside>

      <main className="creative-content">
        <section className="intro">
          <h3>01. <span className="title-highlight">Creative</span></h3>
          <p>
            A picture is worth a thousand words. And the pictures our <strong>Creators</strong> can capture can portray the totality of your brand’s <strong>image</strong>.
          </p>
        </section>

        <div className="creative-grid">
          {services.map((service, idx) => (
            <div className="creative-card" key={idx}>
              <div className="text-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
              <div className="image-overlay">
                <img src={service.image} alt={service.title} />
                <Link href={`/creative/${service.slug}`}>
                  <button className="hover-btn">→</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <footer className="footer-text">
          Deep beneath, we are all storytellers waiting to tell your story to the world
        </footer>

        {/* Back Button */}
        <div className="back-wrapper">
          <button
            className="backButton"
            onClick={() => {
              // Navigate back to services page using Next.js router
              router.push('/#services');
            }}
          >
            ← Back to Services
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreativePage;
