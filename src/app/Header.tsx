"use client";

import { useState, useRef } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLSpanElement>(null);

  const socials = [
    { name: "TW", icon: <FaTwitter />, id: "twitter" },
    { name: "FB", icon: <FaFacebookF />, id: "facebook" },
    { name: "IN", icon: <FaLinkedinIn />, id: "linkedin" },
    { name: "BE", icon: <FaBehance />, id: "behance" },
    { name: "IG", icon: <FaInstagram />, id: "instagram" },
  ];

  const getDirection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): string => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle >= -45 && angle < 45) return "right";
    if (angle >= 45 && angle < 135) return "bottom";
    if (angle >= -135 && angle < -45) return "top";
    return "left";
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const dir = getDirection(e);
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.style.transition = "none";
      switch (dir) {
        case "top":
          overlay.style.top = "-100%";
          overlay.style.left = "0";
          break;
        case "bottom":
          overlay.style.top = "100%";
          overlay.style.left = "0";
          break;
        case "left":
          overlay.style.left = "-100%";
          overlay.style.top = "0";
          break;
        case "right":
          overlay.style.left = "100%";
          overlay.style.top = "0";
          break;
      }

      requestAnimationFrame(() => {
        overlay.style.transition = "all 0.4s ease";
        overlay.style.top = "0";
        overlay.style.left = "0";
      });
    }
  };

  const handleMouseLeave = () => {
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.style.transition = "all 0.4s ease";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.transform = "scale(0)";
    }
  };

  return (
    <header className="header-main">
      {/* Left: Social Icons */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {socials.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            className="body-header"
          >
            <div
              style={{
                transform:
                  hovered === s.id ? "translateY(-2rem)" : "translateY(0)",
              }}
              className="section-header"
            >
              <span className="header-span">{s.name}</span>
              <span className="header-span-2">{s.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Estimate Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginRight: "6.5rem",
        }}
      >
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="header-button"
        >
          <span className="fs-size-12">Estimate Project</span>

          {/* Animated Overlay */}
          <span ref={overlayRef} className="header-button-span"></span>
        </button>
      </div>
    </header>
  );
}
