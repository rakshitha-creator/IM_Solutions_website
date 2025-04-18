'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import '@/app/globals.css';
import Sidebar from './Sidebar';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
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
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[0] = el;
          }}
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
            <h1 className="glitch-text" style={{ fontSize: '4.8rem', fontWeight: 'bold', textAlign: 'left' }}>
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
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[1] = el;
          }}
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
              We don't simply sell a brand to its audience, we sell a connection.
            </p>
            <Link href="/about" style={{
                marginTop: '2rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
              Know more →
            </Link>
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
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[2] = el;
          }}
          style={{
            minWidth: '100%',
            height: '100vh',
            backgroundColor: '#222',
            color: '#fff',
            scrollSnapAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 4rem',
          }}
        >
          <main className="firstpage-wrapper">
            <div className="firstpage-left">
              <h1 className="main-heading">STORIES WE UNFOLD</h1>
              <p className="description">
                We craft compelling narratives that transform brands and captivate audiences. Our work blends creativity, performance, and strategy into immersive experiences.
              </p>
              <button className="showreel-button">WATCH SHOWREEL</button>
            </div>

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
                        ? "A picture is worth a thousand words. And the pictures our Creators can capture can portray the totality of your brand's Image."
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
            </div>
          </main>
        </section>

        {/* Section 4 - Our Stories */}
        <section
          id="stories"
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[3] = el;
          }}
          style={{
            minWidth: "100%",
            height: "100vh",
            backgroundColor: "#111",
            color: "#fff",
            scrollSnapAlign: "start",
            padding: "0 4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "translateY(-5%)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Background Image Container */}
          <div style={{
            position: "absolute",
            top: 0,
            left: "0%",
            width: "30%",
            height: "100%",
            zIndex: 1,
            opacity: 0.4
          }}>
            <Image
              src="/backgroundimg.jpg"
              alt="Background"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </div>

          {/* Content Container with higher z-index */}
          <div style={{
            display: "flex",
            width: "100%",
            maxWidth: "900px",
            gap: "4rem",
            alignItems: "flex-start",
            justifyContent: "center",
            margin: "0 auto",
            position: "relative",
            zIndex: 2
          }}>
            {/* Left Column */}
            <div style={{ 
              flex: "0 1 300px",
              marginRight: "2rem",
              marginTop: "-1rem"
            }}>
              <h1 style={{ 
                fontSize: "3.5rem", 
                marginBottom: "0.75rem",
                fontWeight: "bold",
                lineHeight: "1",
                letterSpacing: "-0.02em"
              }}>
                Our<br />Stories
              </h1>
              <p style={{ 
                fontSize: "1rem",
                marginBottom: "1.5rem",
                color: "#fff",
                maxWidth: "300px",
                opacity: 0.9
              }}>
                Everyone has a story to tell. Here is ours.<br />
                Learn more about Digital Advertising. Learn more about Audento Digital.
              </p>
            </div>

            {/* Right Column */}
            <div style={{
              flex: "0 1 400px",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "-1rem"
            }}>
              {/* Story Card 1 */}
              <StoryCard
                tag="Latest"
                title="Images vs Video vs GIFs- Which Should I choose?"
                link="/blog/images-vs-video-gifs"
              />

              {/* Story Card 2 */}
              <StoryCard
                tag="Latest"
                title="Upgrade your brand with these 5 social media tools"
                link="/blog/social-media-tools"
              />

              {/* Story Card 3 */}
              <StoryCard
                tag="Latest"
                title="What the future looks like for content marketing?"
                link="/blog/content-marketing-future"
              />
            </div>
          </div>
        </section>

        {/* Section 5 - Contact */}
        <section
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[4] = el;
          }}
          style={{
            minWidth: "100%",
            height: "100vh",
            backgroundColor: "#111",
            color: "#fff",
            scrollSnapAlign: "start",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{
            display: "flex",
            width: "100%",
            maxWidth: "1400px",
            gap: "2rem",
            padding: "0 2rem"
          }}>
            {/* Left Column - Interested */}
            <div style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center"
            }}>
              <h1 style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                lineHeight: "1.1"
              }}>
                Interested?<br />
                Let's talk!
              </h1>
              <p style={{
                fontSize: "1rem",
                color: "#fff",
                opacity: 0.9,
                marginBottom: "2rem",
                maxWidth: "300px"
              }}>
                Just fill this simple form in and we will contact you promptly
                to discuss your project. Hate forms? Drop us a line at{" "}
                <a
                  href="mailto:connect@audentodigital.com"
                  style={{
                    color: "#e94e64",
                    textDecoration: "none"
                  }}
                >
                  connect@audentodigital.com
                </a>
              </p>
              <button style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                cursor: "pointer",
                padding: 0
              }}>
                
              </button>
            </div>

            {/* Middle Column - Form */}
            <div style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                marginBottom: "2rem",
                textAlign: "center"
              }}>
                <h2 style={{
                  color: "#e94e64",
                  marginBottom: "0.5rem",
                  fontSize: "1.5rem"
                }}>
                  Reach out to us
                </h2>
                <span style={{ color: "#888" }}>Say hi</span>
              </div>

              <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
                maxWidth: "400px"
              }}>
                <input
                  type="text"
                  placeholder="Name*"
                  className="form-input"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.75rem 0",
                    color: "#fff",
                    fontSize: "1rem",
                    width: "100%"
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Id*"
                  className="form-input"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.75rem 0",
                    color: "#fff",
                    fontSize: "1rem",
                    width: "100%"
                  }}
                />
                <input
                  type="tel"
                  placeholder="Mobile*"
                  className="form-input"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.75rem 0",
                    color: "#fff",
                    fontSize: "1rem",
                    width: "100%"
                  }}
                />
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="form-input"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.75rem 0",
                    color: "#fff",
                    fontSize: "1rem",
                    resize: "none",
                    width: "100%"
                  }}
                />
                <button
                  type="submit"
                  className="submit-button"
                  style={{
                    alignSelf: "flex-end",
                    background: "#e94e64",
                    border: "none",
                    padding: "0.75rem 2rem",
                    borderRadius: "2rem",
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem"
                  }}
                >
                  Submit <ArrowRight size={20} />
                </button>
              </form>
            </div>

            {/* Right Column - Services */}
            <div style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center"
            }}>
              <h3 style={{
                color: "#e94e64",
                marginBottom: "1.5rem",
                fontSize: "1.5rem"
              }}>
                I need *
              </h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%"
              }}>
                {/* First row - 4 buttons */}
                <div style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  justifyContent: "flex-start"
                }}>
                  {["Website", "App design", "Branding", "Logo design"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="service-button"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "2rem",
                        color: "#fff",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Second row - 3 buttons */}
                <div style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  justifyContent: "flex-start"
                }}>
                  {["Html / css coding", "Graphic design", "Illustrations"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="service-button"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "2rem",
                        color: "#fff",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Third row - 2 buttons */}
                <div style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  justifyContent: "flex-start"
                }}>
                  {["Website Design", "UI/UX Design"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="service-button"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "2rem",
                        color: "#fff",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Story Card Component
function StoryCard({ tag, title, link }: { tag: string; title: string; link: string }) {
  return (
    <Link href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 0",
        transition: "all 0.3s ease",
        cursor: "pointer",
        color: "#fff",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
      }}
      className="story-card-hover"
      >
        <div>
          <span style={{
            backgroundColor: "#8B0000",
            padding: "0.25rem 0.75rem",
            borderRadius: "1rem",
            fontSize: "0.875rem",
            marginBottom: "0.5rem",
            display: "inline-block",
            color: "#fff",
            fontWeight: "500"
          }}>
            {tag}
          </span>
          <h3 style={{
            fontSize: "1.125rem",
            marginTop: "0.5rem",
            fontWeight: "500",
            color: "#fff",
            opacity: 0.95
          }}>
            {title}
          </h3>
        </div>
        <div style={{
          width: "30px",
          height: "30px",
          backgroundColor: "#8B0000",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <ArrowRight size={15} color="#fff" />
        </div>
      </div>
    </Link>
  );
}