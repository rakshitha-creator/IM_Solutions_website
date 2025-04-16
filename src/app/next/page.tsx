'use client';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function NextPage() {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <Header />
      <main className="main-container">
        <div className="content">
          <h1>Next Page</h1>
          <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
            <button
              onClick={() => router.push('/')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e94e64',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push('/about')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e94e64',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              About
            </button>
          </div>
        </div>
      </main>
    </>
  );
} 