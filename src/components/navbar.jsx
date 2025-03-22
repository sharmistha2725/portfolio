import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import './navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Sharmistha Sivakumar</span>
        </Link>

        <div className="navbar-icons">
          <a href="https://www.linkedin.com/in/sharmistha-sivakumar/" target="_blank" rel="noopener noreferrer" className="navbar-social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sharmistha2725" target="_blank" rel="noopener noreferrer" className="navbar-social-icon">
            <FaGithub />
          </a>
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-social-icon">
            <FaFileAlt />
          </a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-burger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'}>Skills & Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/certificates" className={location.pathname === '/certificates' ? 'nav-link active' : 'nav-link'}>Certificates</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;