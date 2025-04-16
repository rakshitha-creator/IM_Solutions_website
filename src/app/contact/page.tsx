'use client';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';

export default function ContactPage() {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <main style={{ 
        marginLeft: '100px', 
        padding: '40px',
        minHeight: '100vh',
        backgroundColor: '#0d0b14',
        color: '#fff'
      }}>
        <div className="content">
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Get in touch with our team to discuss your next project.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button
              onClick={() => router.push('/projects')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e94e64',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Back to Projects
            </button>
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
          </div>
        </div>
      </main>
    </>
  );
} 