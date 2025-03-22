import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Sharmistha Sivakumar</h3>
            <p>AI/ML Engineer</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>Email: <a href="mailto:sharmisthasivakumar@gmail.com">sharmisthasivakumar@gmail.com</a></p>
              <p>Based in: Chennai, TN</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Sharmistha Sivakumar. All rights reserved.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sharmistha-s/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sharmistha2725" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:sharmisthasivakumar" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;