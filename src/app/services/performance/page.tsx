'use client';
import Link from 'next/link';
import '../../styles/Performance.css';
import { useRouter } from 'next/navigation';

export default function PerformancePage() {
  const router = useRouter();
  return (
    <div className="serviceDetailPage">
      <div className="serviceImage performanceImage" />
      <div className="serviceContent">
        <h1>Performance</h1>
        <p>
          Reach where no man or company has reached before with specialized strategies and 
          optimized data to target and reach your treasured audience.
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
