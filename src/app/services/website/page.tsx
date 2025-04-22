'use client';
import Link from 'next/link';
import '../../styles/Web.css';
import { useRouter } from 'next/navigation';

export default function WebPage() {
  const router = useRouter();
  return (
    <div className="serviceDetailPage">
      <div className="serviceImage webImage" />
      <div className="serviceContent">
        <h1>Website</h1>
        <p>
          Your brand home is where connection happens. Our developers, designers, and writers
          collaborate to architect seamless, engaging web experiences.
        </p>
        <Link href="/#service">
        <button className="backButton">
          ← Back to Services
        </button>
        </Link>
      </div>
    </div>
  );
}
