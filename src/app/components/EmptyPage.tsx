import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmptyPage = () => {
  const portfolioItems = [
    {
      title: 'Fanplay',
      description: 'An IoT brand that helps fans cheer for their favourite sports teams and sports stars.',
      logo: '/fanplay-logo.png'
    },
    {
      title: 'Nippon Toyota',
      description: 'Nippon Toyota - the most successful Toyota dealership in India.',
      logo: '/nippon-toyota-logo.png'
    },
    {
      title: 'Zen Mobility',
      description: 'ZEN Mobility stands for Zero Emission New Mobility. A mobility solution with zero impact on the environment.',
      logo: '/zen-mobility-logo.png'
    }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      padding: '0 5%',
      color: '#ffffff',
      position: 'relative'
    }}>
      {/* Left Section */}
      <div style={{
        flex: '0 0 30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '2rem'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '2rem'
        }}>
          Portfolio
        </h1>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '1rem',
          color: '#999'
        }}>
          We are what we do and what we do-<br />
          We Advertise.
        </p>
        <p style={{
          fontSize: '1rem',
          marginBottom: '2rem',
          color: '#999'
        }}>
          "Dont tell, show" has been our motto from Day 1<br />
          which is why we'd rather let our work speak for<br />
          us. Come, have a look!
        </p>
        <button style={{
          background: '#e94e64',
          color: 'white',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          width: 'fit-content'
        }}>
          View all works
          <span>→</span>
        </button>
      </div>

      {/* Right Section - Portfolio Grid */}
      <div style={{
        flex: '1',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        padding: '4rem 0',
        alignItems: 'center'
      }}>
        {portfolioItems.map((item, index) => (
          <div key={index} style={{
            background: '#111',
            borderRadius: '8px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            minHeight: '300px'
          }}>
            <div style={{
              width: '150px',
              height: '150px',
              position: 'relative'
            }}>
              <Image
                src={item.logo}
                alt={item.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#999',
              textAlign: 'center'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default EmptyPage; 