'use client';

import '../styles/Services.css';
import { useRouter } from 'next/navigation';
import ShowreelModal from '../components/ShowreelModal';
import Image from 'next/image';

export default function ServicesPage() {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(`/services/${path.toLowerCase()}`);
  };

  return (
    <div className="container">
      <div className="content">
        {/* Left Section with heading and text */}
        <div className="leftSection">
          <div className="leftContent">
            <h1 className="heading">Stories We Unfold</h1>
            <p className="description">
              Deep beneath, we are all storytellers waiting to tell your story to the world.
            </p>

            {/* Showreel Button with Modal */}
            <ShowreelModal />
          </div>
        </div>

        {/* Right Section - Clickable Cards */}
        <div className="gridSection">
          {/* Cards now call handleRedirect with 'creative', 'performance', etc. */}
          {/* Ensure the keys match the data structure in the redirect page */}
          <div className="card hoverCard" onClick={() => handleRedirect('creative')}>
            <h2>Creative</h2>
            <p>
              A picture is worth a thousand words. And the pictures our designers can capture
              can portray the totality of your brands image.
            </p>
            <div className="hoverImage">
              <Image src="/creative.jpg" alt="Creative Hover" width={500} height={300}/>
              <Image
              width={500} height={300}
                src="/arrow.svg"
                alt="Arrow"
                className="hoverArrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect('creative');
                }}
              />
            </div>
          </div>

          <div className="card hoverCard" onClick={() => handleRedirect('performance')}>
            <h2>Performance</h2>
            <p>
              Reach where no man or company has reached before with specialised strategies
              and optimised data to target and reach your treasured audience wherever they are.
            </p>
            <div className="hoverImage">
              <Image src="/performance.jpg" alt="Performance Hover" width={500} height={300}/>
              <Image
                src="/arrow.svg"
                alt="Arrow"
                className="hoverArrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect('performance');
                }}
                width={500} height={300}
              />
            </div>
          </div>

          <div className="card hoverCard" onClick={() => handleRedirect('web')}>
            <h2>Web</h2>
            <p>
              Where can one visit to become personal with your brand? Yes, your brand home. Our
              Website developers along with our designers and writers work together in
              architecting th...
            </p>
            <div className="hoverImage">
              <Image src="/performance.jpg" alt="Website Hover" width={500} height={300}/>
              <Image
                src="/arrow.svg"
                alt="Arrow"
                className="hoverArrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect('web');
                }}
                width={500} height={300}
              />
            </div>
          </div>

          <div className="card hoverCard" onClick={() => handleRedirect('content')}>
            <h2>Content</h2>
            <p>
              Words have power of their own and when placed carefully together they come out with
              meaning. Our writers craft words carefully together to give your brand the perfect...
            </p>
            <div className="hoverImage">
              <Image src="/performance.jpg" alt="Content Hover" width={500} height={300}/>
              <Image
                src="/arrow.svg"
                alt="Arrow"
                className="hoverArrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect('content');
                }}
                width={500} height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
