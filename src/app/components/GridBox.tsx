// components/GridBox.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GridBox({ label, image }: { label: string, image: string }) {
  return (
    <div className="grid-box">
      <div className="grid-content">
        <span className="grid-label">{label}</span>
        <p>Hover to reveal content</p>
      </div>
      <div className="grid-hover-image">
        <img src={`/assets/${image}`} alt={label} />
        <Link href="/target-page">
          <div className="arrow-overlay">
            <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
