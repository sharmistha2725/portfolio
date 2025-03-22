import React, { useState, useEffect } from 'react';
import { FaAward, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import './certificates.css';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewCertificate, setViewCertificate] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Certificate data - replace with your actual certificates
  const certificatesData = [
    {
      id: 1,
      title: "Cloud Practitioner - CLF C02",
      organization: "AWS",
      date: "March 2024",
      category: "Cloud Computing",
      image: "./aws.png",
      credentialLink: "https://www.credly.com/badges/1183f6bf-bd6c-43e4-bd80-725c16ffe50a/public_url",
      skills: ["Compute", "Storage", "Management Tools"]
    },
    {
      id: 2,
      title: "AI Fundamentals - AI 900",
      organization: "Microsoft Azure",
      date: "August 2024",
      category: "AI/ML",
      image: "./ai.png",
      credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/SharmisthaS-7334/7EDE87C2B004D5F4?sharingId=DD97E01ED037F031",
      skills: ["AI Workloads", "Principles of ML on Azure", "Computer Vision", "Natural Language Processing (NLP)", "Generative AI"]
    },
    {
      id: 3,
      title: "Cloud computing",
      organization: "NPTEL",
      date: "October 2022",
      category: "Cloud Computing",
      image: "./Cloud computing.jpeg",
      credentialLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL22CS87S5446284610065519",
      skills: ["Servers", "Storage", "Networking", "Software", "Public Providers"]
    },
    {
      id: 4,
      title: "Software Engineering",
      organization: "NPTEL",
      date: "October 2024",
      category: "Software Engineering",
      image: "./SE.png",
      credentialLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS119S95250013204253357",
      skills: ["Life cycle model", "Requirements specification", "Design", "Testing"]
    },
    {
      id: 5,
      title: "Programming In Java",
      organization: "NPTEL",
      date: "April 2024",
      category: "Java",
      image: "./java.png",
      credentialLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS43S75340325530678466",
      skills: ["OOPS","Exception Handling","ODBC"]
    },
    {
      id: 6,
      title: "Operating System Fundamentals",
      organization: "NPTEL",
      date: "October 2023",
      category: "Operating System",
      image: "./os.png",
      credentialLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS123S9335399020338556",
      skills: ["Process management", "Processor management", "Memory management", "Storage management"]
    }
  ];

  // Define categories
  const categories = [
    { id: 'all', name: 'All Certificates' },
    { id: 'AWS', name: 'AWS' },
    { id: 'Azure', name: 'Azure' },
    { id: 'NPTEL', name: 'NPTEL' },
  ];

  // Filter certificates based on search and category
  const filteredCertificates = certificatesData.filter(certificate => {
    const matchesSearch = certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          certificate.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          certificate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Fix the category filtering
    const matchesCategory = 
      selectedCategory === 'all' || 
      (selectedCategory === 'AWS' && certificate.organization === 'AWS') ||
      (selectedCategory === 'Azure' && certificate.organization === 'Microsoft Azure') ||
      (selectedCategory === 'NPTEL' && certificate.organization === 'NPTEL');
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`certificates-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="section-title">Certifications</h1>
      
      <div className="certificates-header">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search certificates or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="certificates-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {filteredCertificates.length > 0 ? (
        <div className="certificates-grid">
          {filteredCertificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className="certificate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setViewCertificate(certificate)}
            >
              <div className="certificate-icon">
                <FaAward />
              </div>
              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <div className="certificate-info">
                  <p className="organization">{certificate.organization}</p>
                  <p className="date">{certificate.date}</p>
                </div>
                <div className="certificate-skills">
                  {certificate.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <a 
                  href={certificate.credentialLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                  <span>Verify</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No certificates found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}

      {viewCertificate && (
        <div className="certificate-modal-overlay" onClick={() => setViewCertificate(null)}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setViewCertificate(null)}>×</button>
            <div className="certificate-image">
              <img src={viewCertificate.image} alt={viewCertificate.title} />
            </div>
            <div className="certificate-details">
              <h2>{viewCertificate.title}</h2>
              <p className="organization">{viewCertificate.organization}</p>
              <p className="issue-date">Issued: {viewCertificate.date}</p>
              <div className="skills-container">
                <h4>Skills</h4>
                <div className="skills-list">
                  {viewCertificate.skills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              <a 
                href={viewCertificate.credentialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="credential-button"
              >
                <FaExternalLinkAlt />
                <span>Verify Credential</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;