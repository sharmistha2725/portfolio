import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Typed from 'typed.js';
import './home.css';

const Home = () => {
  const typedRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    // Typing animation
    const typed = new Typed(typedRef.current, {
      strings: [
        'AI/ML Engineer',
        'Software Developer',
        'MLOps Engineer'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    // Particle animation
    const particles = [];
    const colors = ['#4A86E8', '#34A853', '#FBBC05', '#EA4335'];

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;

      const size = Math.floor(Math.random() * 5) + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;

      if (particleRef.current) {
        particleRef.current.appendChild(particle);
        particles.push(particle);
      }
    }

    return () => {
      typed.destroy();
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div className="home-container">
      <div className="particles-container" ref={particleRef}></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Sharmistha Sivakumar</span>
        </h1>

        <h2 className="hero-subtitle">
          <span ref={typedRef}></span>
        </h2>

        <Link to="/projects" className="btn">
          View Projects <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Home;