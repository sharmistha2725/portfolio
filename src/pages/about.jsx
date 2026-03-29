import React, { useEffect } from 'react';
import { FaCloudversify, FaRobot, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import './about.css';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-container">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-content">
        <div className="about-image-container fade-in-section">
          <div className="about-image-frame">
            <div className="about-image">
              {/* Replace with your actual image */}
              <img src="./photo.jpg" alt="Sharmistha S" />
            </div>
          </div>
        </div>
        
        <div className="about-text fade-in-section">
          <h2 className="about-greeting">Hello, I'm Sharmistha!</h2>
          <p className="about-description">
            I'm an AI/ML Engineer with a passion for cloud computing and building intelligent systems. 
            Currently pursuing my Bachelor of Engineering in Computer Science at St. Joseph's College of Engineering in Chennai 
            with a CGPA of 8.53.
          </p>
          <p className="about-description">
            My expertise lies in developing AI-powered solutions that leverage Natural Language Processing, 
            Machine Learning models, and cloud platforms like AWS and Azure. I'm particularly interested in building 
            applications that solve real-world problems using the latest technologies in artificial intelligence.
          </p>
          <p className="about-description">
            I've worked on projects ranging from legal advisory chatbots to medical crowdfunding platforms, 
            always focusing on creating systems that are not only technically sound but also provide meaningful value to users.
          </p>
          
          <div className="about-focus-areas">
            <h3 className="focus-title">Areas of Focus</h3>
            <div className="focus-items">
              <div className="focus-item">
                <div className="focus-icon">
                  <FaRobot />
                </div>
                <h4>Artificial Intelligence</h4>
                <p>Building intelligent systems that learn and adapt</p>
              </div>
              
              <div className="focus-item">
                <div className="focus-icon">
                  <FaCloudversify />
                </div>
                <h4>Cloud Computing</h4>
                <p>Leveraging AWS and Azure for scalable solutions</p>
              </div>
              
              <div className="focus-item">
                <div className="focus-icon">
                  <FaDatabase />
                </div>
                <h4>Machine Learning</h4>
                <p>Creating models that extract insights from data</p>
              </div>
              
              <div className="focus-item">
                <div className="focus-icon">
                  <FaLaptopCode />
                </div>
                <h4>NLP</h4>
                <p>Developing systems that understand human language</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;