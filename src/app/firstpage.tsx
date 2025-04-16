'use client';
import Header from './Header';
import Image from 'next/image';
import creativeImage from '../../../public/creative_sec.webp';

export default function FirstPage() {
  return (
    <>
      <Header />
      <main className="firstpage-container">
        <div className="left-section">
          <h1>At Heart, We Are<br />Bridge Builders</h1>
          <p>
            We are just a young (at heart) Digital Advertising Agency that loves to<br />
            Break, Build & Bridge.<br /><br />
            We don’t simply sell a brand to its audience, we sell a connection.
          </p>
          <button className="know-more-btn">
            Know more →
          </button>
        </div>
        <div className="right-section">
          <Image
            src={creativeImage}
            alt="Creative Section"
            className="right-image"
            priority
          />
        </div>
      </main>
    </>
  );
}