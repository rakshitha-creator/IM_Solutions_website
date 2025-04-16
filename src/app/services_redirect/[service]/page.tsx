'use client';

import { log } from 'console';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Mock data for services (can be replaced with API data)
const serviceData = {
  creative: [
    { title: '1.1 Animation', description: 'Make your ideas come alive...', image: 'logo.png' },
    { title: '1.2 Design', description: 'What you see is what you get...', image: 'logo.png' },
  ],
  web: [
    { title: '2.1 Frontend', description: 'We craft beautiful interfaces...', image: 'logo.png' },
  ],
  performance: [
    { title: '3.1 SEO', description: 'Boost your website visibility...', image: 'logo.png' },
  ],
  content: [
    { title: '4.1 Writing', description: 'Our copywriters create compelling stories...', image: 'logo.png' },
  ],
};

export default function ServiceRedirectPage() {
  const router = useRouter();
  const { service } = router.query; // Get dynamic `service` parameter from URL
  console.log(serviceData,"serviceData");

  const [serviceDetails, setServiceDetails] = useState<any[]>([]);

  // Fetch service data based on the dynamic `service` value
  useEffect(() => {
    if (service) {
        
      setServiceDetails(serviceData[service as string] || []);
    }
  }, [service]);



  return (
    <div>
      <h1>{service}</h1>
      {serviceDetails.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
