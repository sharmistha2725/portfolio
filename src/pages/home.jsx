import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Typed from 'typed.js';
import './home.css';

const Home = () => {
  const typedRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
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

    const createParticles = () => {
      const particles = []; // ✅ FIXED

      const colors = ['#4A86E8', '#34A853', '#FBBC05', '#EA4335'];

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;

        if (particleRef.current) {
          particleRef.current.appendChild(particle);
        }

        particles.push(particle);
      }

      return particles;
    };

    const particles = createParticles();

    return () => {
      typed.destroy();

      particles.forEach(p => {
        particleRef.current?.removeChild(p);
      });
    };
  }, []);

  return (
    <div className="home-container">
      <div ref={particleRef}></div>

      <h1>
        Hi, I'm <span>Sharmistha Sivakumar</span>
      </h1>

      <h2>
        <span ref={typedRef}></span>
      </h2>

      <Link to="/projects">
        View Projects <FaArrowRight />
      </Link>
    </div>
  );
};

export default Home;