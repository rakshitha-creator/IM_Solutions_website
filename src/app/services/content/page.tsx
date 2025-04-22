'use client';

import '../../styles/Creative.css';
import Link from 'next/link';

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
  // ...you can add more items here
];

export default function CreativePage() {
  return (
    <div className="creative-container">
      <aside className="sidebar">
        <h2>Services</h2>
        <ul>
          <li className="active">01. Creative</li>
          <li>02. Web</li>
          <li>03. Performance</li>
          <li>04. Content</li>
        </ul>
      </aside>

      <main className="creative-content">
        <section className="intro">
          <h3>01. <span className="title-highlight">Creative</span></h3>
          <p>
            A picture is worth a thousand words. And the pictures our <strong>Creators</strong> can capture
            can portray the totality of your brand’s <strong>image</strong>.
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
      </main>
    </div>
  );
}
