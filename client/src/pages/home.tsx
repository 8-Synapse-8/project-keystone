// EMERGENCY VERSION - Complete rewrite with debugging
import React, { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const SparkLogo: React.FC = () => {
  const particleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainer.current;
    if (!container) return;
    container.innerHTML = "";
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-cosmic-purple opacity-0";
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 80 + 20;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);
      particle.style.animation = `particle-burst 3s ease-out infinite`;
      particle.style.animationDelay = `${Math.random() * 3}s`;

      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] mx-auto mb-6">
      <svg
        className="absolute top-0 left-0 w-full h-full animate-[rotateSpark_20s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="strandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 20 50 C 40 20, 60 20, 80 50"
          stroke="url(#strandGradient)"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
          transform="rotate(45 50 50)"
        />
        <path
          d="M 50 20 C 80 40, 80 60, 50 80"
          stroke="url(#strandGradient)"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
          transform="rotate(45 50 50)"
        />
      </svg>
      <div ref={particleContainer} className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

const Home: React.FC = () => {
  const [, setLocation] = useLocation();

  // Debug function
  const handleClick = () => {
    console.log("BUTTON CLICKED!");
    try {
      setLocation("/story");
    } catch (error) {
      console.error("Routing error:", error);
      window.location.href = "/story";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8" style={{
      backgroundColor: '#0a0a1a',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15), transparent 50%), radial-gradient(circle at 80% 90%, rgba(139, 92, 246, 0.15), transparent 50%)'
    }}>
      {/* Header */}
      <header className="mb-8">
        <SparkLogo />
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white tracking-wider uppercase">
          Project Keystone
        </h1>
        <p className="text-indigo-300 mt-2 text-lg">A Synapse Comics Narrative</p>
      </header>

      {/* Main Content */}
      <main className="rounded-2xl p-8 max-w-3xl w-full mx-auto" style={{
        background: 'rgba(17, 24, 39, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 className="font-orbitron text-2xl font-bold text-purple-300 mb-4">
          The game was rigged. We're building a new one.
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Project Keystone is not just a story. It is a <b>Social Strand Narrative</b>—a living, breathing
          universe built on a single principle: <b>connection</b>. Our story follows the crew of the starship{" "}
          <i>Wanderer</i> as they uncover a galaxy-altering truth and become fugitives, carrying a message
          that could save everyone but costs them everything.
        </p>
        
        <div className="border-t border-purple-400/20 pt-6 mb-8">
          <h3 className="font-orbitron text-xl font-bold text-indigo-300 mb-2">Your Choices Shape the Canon</h3>
          <p className="text-gray-400 mb-6">
            Through an interactive experience, your choices will have permanent consequences on the official
            story. You are not just a reader; you are a Porter, a builder, a part of the network. The Spark
            of Connection is not in any one character. It's in all of us.
          </p>
        </div>

        {/* EMERGENCY BUTTON - Multiple versions for debugging */}
        <div className="text-center space-y-4">
          {/* Version 1: Simple button with inline styles */}
          <button
            onClick={handleClick}
            style={{
              padding: '16px 32px',
              fontSize: '20px',
              fontFamily: 'Orbitron, monospace',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'block',
              margin: '0 auto',
              minHeight: '60px',
              minWidth: '200px'
            }}
          >
            Enter the Narrative (Button)
          </button>

          {/* Version 2: Simple link */}
          <a 
            href="/story"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              fontSize: '20px',
              fontFamily: 'Orbitron, monospace',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              minHeight: '60px',
              minWidth: '200px'
            }}
          >
            Enter the Narrative (Link)
          </a>

          {/* Version 3: Debug text */}
          <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>
            DEBUG: If you can see this text but no buttons above, there's a CSS or rendering issue.
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-purple-400/50 text-sm text-center">
        <p>&copy; 2025 Synapse Comics. All Rights Reserved.</p>
        <p>The signal is live. The gateway is opening.</p>
      </footer>

      {/* Inline styles for animations */}
      <style>
        {`
        @keyframes rotateSpark {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes particle-burst {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(1.2) translate(var(--x), var(--y));
            opacity: 0;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Home;