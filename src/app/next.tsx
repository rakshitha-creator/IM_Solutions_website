'use client';
import Sidebar from './Sidebar';
import Header from './components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FirstPage() {
  const router = useRouter();

  const handleNavigate = () => {
    // Customize the next route if needed
    router.push('/');
  };

  return (
    <>
      <Sidebar />
      <Header />
      <main className="firstpage-container">
        <section className="firstpage-left">
          <h1>At Heart, We Are <br /> Bridge Builders</h1>
          <p>
            We are just a young (at heart) Digital Advertising Agency that loves to Break, Build & Bridge.<br />
            We don’t simply sell a brand to its audience, we sell a connection.
          </p>
          <button className="know-more-btn" onClick={handleNavigate}>
            Know more <span className="arrow">→</span>
          </button>
        </section>

        <section className="firstpage-right">
          <Image
            src="/lazy.jpg" // Change this to your actual image in public/
            alt="Developer at Work"
            layout="fill"
            objectFit="cover"
            className="image"
          />
        </section>
      </main>
    </>
  );
}
