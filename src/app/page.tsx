"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "@/app/globals.css";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const words = ["RISK.", "DARE.", "VENTURE."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // Horizontal scroll behavior
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY > 0 ? window.innerWidth : -window.innerWidth,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",
      }}
    >
      {/* Section 1 - Home */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        style={{
          minWidth: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0",
          background: "#000",
          color: "#fff",
          scrollSnapAlign: "start",
          position: "relative",
        }}
      >
        <div className="content" style={{ marginLeft: "2rem", width: "100%" }}>
          <h1
            className="glitch-text"
            style={{
              fontSize: "4.8rem",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            WE SHALL <br />
            <span className="typewriter-text">{text}</span>
          </h1>

          {/* Tags and Right-Aligned Arrow */}
          <div
            style={{
              marginTop: "1.5rem",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            <div>
              <span>Creative</span> • <span>Web</span> •{" "}
              <span>Performance</span> • <span>Content</span>
            </div>

            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#8B0000",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                marginRight: "15rem",
              }}
              onClick={() => {
                const nextSection = sectionRefs.current[1];
                if (nextSection) {
                  nextSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start",
                  });
                }
              }}
            >
              <span style={{ color: "#fff", fontSize: "1.5rem" }}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - About */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        style={{
          minWidth: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#111",
          color: "#fff",
          padding: "2rem 4rem",
          scrollSnapAlign: "start",
        }}
      >
        <div className="left-section">
          <h1 style={{ fontSize: "3rem" }}>
            At Heart, We Are
            <br />
            Bridge Builders
          </h1>
          <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
            We are just a young (at heart) Digital Advertising Agency that loves
            to Break, Build & Bridge.
            <br />
            <br />
            We don’t simply sell a brand to its audience, we sell a connection.
          </p>
          <button
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Know more →
          </button>
        </div>
        <div className="right-section">
          <Image
            src="/creative_sec.webp"
            alt="Creative Section"
            width={400}
            height={400}
            style={{ borderRadius: "1rem", maxWidth: "400px", height: "auto" }}
            priority
          />
        </div>
      </section>

      {/* Section 3 - FirstPage */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        style={{
          minWidth: "100%",
          height: "100vh",
          backgroundColor: "#222",
          color: "#fff",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main className="firstpage-wrapper">
          {/* Left Section */}
          <div className="firstpage-left">
            <h1 className="main-heading">STORIES WE UNFOLD</h1>
            <p className="description">
              We craft compelling narratives that transform brands and captivate
              audiences. Our work blends creativity, performance, and strategy
              into immersive experiences.
            </p>
            <button className="showreel-button">WATCH SHOWREEL</button>
            <div className="arrow-circle">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* Right Section - Grid */}
          <div className="firstpage-right-grid">
            {["Creative", "Performance", "Website", "Content"].map((label) => {
              const route = `/${label.toLowerCase()}`;

              const description =
                label === "Creative"
                  ? "A picture is worth a thousand words. And the pictures our Creators can capture can portray the totality of your brand’s Image."
                  : label === "Performance"
                  ? "Reach where no man or company has reached before with specialised strategies and optimised analytics to target and reach your treasured audience wherever they are."
                  : label === "Website"
                  ? "Personalise your Digital Brand Home. Our website developers along with our designers and writers, work together in architecting the perfect digital home where your brand can be free to express itself."
                  : "Words have the power of their own and when placed carefully together, they come out with meaning. Our writers craft words carefully together to give your brand the perfect identity and message it needs to deliver to your audience.";

              return (
                <div className="grid-box" key={label}>
                  <div className="grid-content">
                    <span className="grid-label">{label}</span>
                    <p>{description}</p>

                    <Link href={route} className="arrow-link">
                      <div className="arrow-circle">
                        <ArrowRight size={16} color="#fff" />
                      </div>
                    </Link>
                  </div>
                  <img
                    src="/imsolutions.png"
                    alt={label}
                    className="grid-image"
                  />
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </div>
  );
}
