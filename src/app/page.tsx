'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import '@/app/globals.css';
<<<<<<< Updated upstream
=======
import Sidebar from './Sidebar';
>>>>>>> Stashed changes

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const words = ['RISK.', 'DARE.', 'VENTURE.'];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollBy({ left: e.deltaY > 0 ? window.innerWidth : -window.innerWidth, behavior: 'smooth' });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
    
    <Sidebar />
   
    <div
      ref={scrollRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
      }}
    >
      {/* Section 1 */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        style={{
          minWidth: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0',
          background: '#000',
          color: '#fff',
          scrollSnapAlign: 'start',
          position: 'relative',
        }}
      >
        <div className="content" style={{ marginLeft: '2rem', width: '100%' }}>
<<<<<<< Updated upstream
          <h1
            className="glitch-text"
            style={{
              fontSize: '4.8rem',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
=======
          <h1 className="glitch-text" style={{ fontSize: '4.8rem', fontWeight: 'bold', textAlign: 'left' }}>
>>>>>>> Stashed changes
            WE SHALL <br />
            <span className="typewriter-text">{text}</span>
          </h1>

          <div
            style={{
              marginTop: '1.5rem',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '95%',
            }}
          >
            <div>
              <span>Creative</span> • <span>Web</span> • <span>Performance</span> • <span>Content</span>
            </div>

            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#8B0000',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginRight: '15rem',
              }}
              onClick={() => {
                const nextSection = sectionRefs.current[1];
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                }
              }}
            >
              <span style={{ color: '#fff', fontSize: '1.5rem' }}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        style={{
          minWidth: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#111',
          color: '#fff',
          padding: '2rem 4rem',
          scrollSnapAlign: 'start',
        }}
      >
        <div className="left-section">
          <h1 style={{ fontSize: '3rem' }}>At Heart, We Are<br />Bridge Builders</h1>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
            We are just a young (at heart) Digital Advertising Agency that loves to Break, Build & Bridge.<br /><br />
            We don’t simply sell a brand to its audience, we sell a connection.
          </p>
          <button
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Know more →
          </button>
        </div>
        <div className="right-section">
          <Image
            src="/creative_sec.webp"
            alt="Creative Section"
            width={400}
            height={400}
            style={{ borderRadius: '1rem', maxWidth: '400px', height: 'auto' }}
            priority
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        style={{
          minWidth: '100%',
          height: '100vh',
          backgroundColor: '#222',
          color: '#fff',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
<<<<<<< Updated upstream
=======
          padding: '2rem 4rem',
>>>>>>> Stashed changes
        }}
      >
        <main className="firstpage-wrapper">
          <div className="firstpage-left">
            <h1 className="main-heading">STORIES WE UNFOLD</h1>
            <p className="description">
              We craft compelling narratives that transform brands and captivate audiences. Our work blends creativity, performance, and strategy into immersive experiences.
            </p>
            <button className="showreel-button">WATCH SHOWREEL</button>
            <div className="arrow-circle">
              <ArrowRight size={20} />
            </div>
          </div>

<<<<<<< Updated upstream
          {/* Right Section - Grid */}
          <div className="firstpage-right-grid">
          {['Creative', 'Performance', 'Website', 'Content'].map((label) => {
  const route = `/${label.toLowerCase()}`;

  const description =
    label === 'Creative'
      ? 'A picture is worth a thousand words. And the pictures our Creators can capture can portray the totality of your brand’s Image.'
      : label === 'Performance'
      ? 'Reach where no man or company has reached before with specialised strategies and optimised analytics to target and reach your treasured audience wherever they are.'
      : label === 'Website'
      ? 'Personalise your Digital Brand Home. Our website developers along with our designers and writers, work together in architecting the perfect digital home where your brand can be free to express itself.'
      : 'Words have the power of their own and when placed carefully together, they come out with meaning. Our writers craft words carefully together to give your brand the perfect identity and message it needs to deliver to your audience.';

  return (
    <div className="grid-box" key={label}>
      <div className="grid-content">
        <span className="grid-label">{label}</span>
        <p>{description}</p>

        <Link href={route} className="arrow-link">
          <div className="arrow-circle">
            <ArrowRight size={16} color="#fff" />
          </div>
        </Link>
      </div>
      <img src="/imsolutions.png" alt={label} className="grid-image" />
    </div>
  );
})}


=======
          <div className="firstpage-right-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {['Creative', 'Performance', 'Website', 'Content'].map((label) => (
              <div
                key={label}
                className="grid-box"
                style={{
                  position: 'relative',
                  border: '1px solid #444',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  padding: '2rem',
                  backgroundColor: '#333',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const content = e.currentTarget.querySelector('.content-wrapper') as HTMLElement;
                  const heading = e.currentTarget.querySelector('.heading-wrapper') as HTMLElement;
                  const image = e.currentTarget.querySelector('.image-wrapper') as HTMLElement;
                  const arrow = e.currentTarget.querySelector('.arrow-wrapper') as HTMLElement;
                  if (content && heading && image && arrow) {
                    content.style.opacity = '0';
                    heading.style.opacity = '0';
                    image.style.opacity = '1';
                    arrow.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  const content = e.currentTarget.querySelector('.content-wrapper') as HTMLElement;
                  const heading = e.currentTarget.querySelector('.heading-wrapper') as HTMLElement;
                  const image = e.currentTarget.querySelector('.image-wrapper') as HTMLElement;
                  const arrow = e.currentTarget.querySelector('.arrow-wrapper') as HTMLElement;
                  if (content && heading && image && arrow) {
                    content.style.opacity = '1';
                    heading.style.opacity = '1';
                    image.style.opacity = '0';
                    arrow.style.opacity = '0';
                  }
                }}
              >
                <h3
                  className="heading-wrapper"
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '2rem',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    zIndex: 1,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  {label}
                </h3>

                <div className="content-wrapper" style={{ opacity: 1, paddingTop: '2rem', transition: 'opacity 0.5s ease-in-out' }}>
                  <p style={{ fontSize: '16px', color: '#ccc', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>
                    {label === 'Creative'
                      ? 'A picture is worth a thousand words. And the pictures our Creators can capture can portray the totality of your brand’s Image.'
                      : label === 'Performance'
                      ? 'Reach where no man or company has reached before with specialised strategies and optimised analytics to target and reach your treasured audience wherever they are.'
                      : label === 'Website'
                      ? 'Personalise your Digital Brand Home. Our website developers along with our designers and writers, work together in architecting the perfect digital home where your brand can be free to express itself.'
                      : 'Words have the power of their own and when placed carefully together, they come out with meaning. Our writers craft words carefully together to give your brand the perfect identity and message it needs to deliver to your audience.'}
                  </p>
                </div>

                <div className="image-wrapper" style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', top: 0, left: 0, width: '100%' }}>
                  <img src="/imsolutions.png" alt={label} style={{ maxWidth: '80%', borderRadius: '0.5rem' }} />
                </div>

                {/* ✅ LINK for Arrow with Slug */}
                <Link href={`/services_redirect#${label.toLowerCase()}`} passHref>
                  <div
                    className="arrow-wrapper"
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#8B0000',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      zIndex: 1,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: '1.5rem' }}>→</span>
                  </div>
                </Link>
              </div>
            ))}
>>>>>>> Stashed changes
          </div>
        </main>
      </section>
      
    </div>
<<<<<<< Updated upstream

=======
    </>
>>>>>>> Stashed changes
  );

}