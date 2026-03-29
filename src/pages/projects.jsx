import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import './projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Project data - you can replace this with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "IntelligentAI Tutor",
      description: "Customize educational content based on how users learn best(VARK) and their current knowledge level.",
      image: "./tutor.jpg",
      technologies: ["LLM", "RAG", "Agent","React","Flask"],
      category: "AI",
      githubLink: "https://github.com/sharmistha2725/IntelligentAITutor",
      liveLink: null
    },
    {
      id: 2,
      title: "MedFundAI",
      description: "AI-driven crowdfunding platform designed to support critical patients in need of medical financial assistance.",
      image: "./cf.jpg",
      technologies: ["ML", "Bio-BERT", "Blockchain", "React"],
      category: "web",
      githubLink: "https://github.com/sharmistha2725/Hackindia-Spark-1-2025-Rendezvous",
      liveLink: null
    },
    {
      id: 3,
      title: "Legal Advisory Chatbot",
      description: "A chatbot customized for Indian start-ups, offering accurate and contextually relevant legal advice and compliance information.",
      image: "./legal.png",
      technologies: ["ML", "NLP", "Data Collection"],
      category: "backend",
      githubLink: "https://github.com/sharmistha2725/Legal-Advisory-Chatbot-for-Startups",
      liveLink: null
    },
    
    
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Render technology icon based on tech name
  const renderTechIcon = (tech) => {
    switch(tech) {
      case 'react':
      case 'react-native':
        return <FaReact title="React" />;
      case 'node':
      case 'express':
        return <FaNodeJs title="Node.js" />;
      case 'python':
      case 'pandas':
      case 'matplotlib':
        return <FaPython title="Python" />;
      case 'java':
        return <FaJava title="Java" />;
      default:
        return null;
    }
  };

  return (
    <div className={`projects-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="section-title">My Projects</h1>
      
      <div className="filter-container">
        {/* <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button> */}
        {/* <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
          onClick={() => setFilter('web')}
        >
          AI
        </button>
        <button 
          className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} 
          onClick={() => setFilter('backend')}
        >
          Backend
        </button>
        <button 
          className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} 
          onClick={() => setFilter('mobile')}
        >
          Mobile
        </button>
        <button 
          className={`filter-btn ${filter === 'data' ? 'active' : ''}`} 
          onClick={() => setFilter('data')}
        >
          Data
        </button> */}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View Code">
                    <FaGithub />
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-icon" title={tech}>
                    {renderTechIcon(tech)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;