'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Contact.css';

export default function Contact() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        {/* Section 5 - Contact */}
        <section
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[4] = el;
          }}
          className="contact-section"
        >
          <div className="contact-container">
            {/* Left Column - Interested */}
            <div className="contact-left">
              <h1 className="contact-title">
                Interested?<br />
                Lets talk!
              </h1>
              <p className="contact-description">
                Just fill this simple form in and we will contact you promptly
                to discuss your project. Hate forms? Drop us a line at{" "}
                <a
                  href="mailto:connect@audentodigital.com"
                  className="contact-email"
                >
                  connect@audentodigital.com
                </a>
              </p>
              
            </div>

            {/* Middle Column - Form */}
            <div className="contact-middle">
              <div className="form-header">
                <h2 className="form-title">Reach out to us</h2>
                <span className="form-subtitle">Say hi</span>
              </div>

              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Name*"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email Id*"
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Mobile*"
                  className="form-input"
                />
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="form-input"
                />
                <button
                  type="submit"
                  className="submit-button"
                >
                  Submit <ArrowRight size={20} />
                </button>
              </form>
            </div>

            {/* Right Column - Services */}
            <div className="contact-right">
              <h3 className="services-title">I need *</h3>
              <div className="services-container">
                {/* First row - 4 buttons */}
                <div className="services-row">
                  {["Website", "App design", "Branding", "Logo design"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="service-button"
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Second row - 3 buttons */}
                <div className="services-row">
                  {["Html / css coding", "Graphic design", "Illustrations"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="service-button"
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Third row - 2 buttons */}
                <div className="services-row">
                  {["Website Design", "UI/UX Design"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="service-button"
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