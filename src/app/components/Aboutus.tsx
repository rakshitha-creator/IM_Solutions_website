'use client';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar'; // ✅ Correct path
import styles from '@/app/styles/Aboutus.module.css';

export default function Aboutus() {
  return (
    <section className={styles.aboutSection}>
      {/* ✅ Sidebar visible on the left */}
      <Sidebar />

      <div className={styles.leftSection}>
        <h1>At Heart, We Are<br />Bridge Builders</h1>
        <p>
          We are just a young (at heart) Digital Advertising Agency that loves to Break, Build & Bridge.<br /><br />
          We don't simply sell a brand to its audience, we sell a connection.
        </p>
        <Link href="/what-we-do" className={styles.knowMoreBtn}>
          Know more 
        </Link>
      </div>

      <div className={styles.rightSection}>
        <Image
          src="/creative_sec.webp"
          alt="Creative Section"
          width={400}
          height={400}
          className={styles.aboutImage}
          priority
        />
      </div>
    </section>
  );
}
