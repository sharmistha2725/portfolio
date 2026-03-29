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
    const createParticles = () => {
      const particles = [];
      const colors = ['#4A86E8', '#34A853', '#FBBC05', '#EA4335'];
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Random size
        const size = Math.floor(Math.random() * 5) + 3;
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set styles
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        
        // Animation duration
        const animDuration = Math.random() * 15 + 10;
        particle.style.animation = `float ${animDuration}s ease-in-out infinite`;
        
        // Add particle to container
        particleRef.current.appendChild(particle);
        particles.push(particle);
      }
      
      return particles;
    };
    
    const particles = createParticles();
    
    return () => {
      typed.destroy();
      particles.forEach(particle => {
        particleRef.current?.removeChild(particle);
      });
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
        <p className="hero-description">
          Specializing in AI/ML solutions with cloud integration, transforming complex data into intelligent applications.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View Projects <FaArrowRight className="btn-icon" />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </div>
  );
};

export default Home;