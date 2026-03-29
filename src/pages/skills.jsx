import React, { useEffect, useState } from 'react';
import { FaBrain, FaCloud, FaCode, FaDatabase, FaTools, FaChartBar } from 'react-icons/fa';
import './skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  useEffect(() => {
    // Animation for skill bars
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = `${value}%`;
      });
    };
    
    // Intersection observer for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('skill-progress-bar')) {
            animateSkillBars();
          } else {
            entry.target.classList.add('animate');
          }
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [activeTab]);

  return (
    <div className="skills-container">
      <h1 className="section-title">Skills & Experience</h1>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button 
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'skills' ? (
          <div className="skills-content">
            <div className="skills-categories">
              <div className="skill-category animate-on-scroll">
                <div className="category-icon">
                  <FaBrain />
                </div>
                <h3>AI & Machine Learning</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Natural Language Processing</span>
                      <span>90%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="90"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>BERT & Transformer Models</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>LLMs & RAG</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="80"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category animate-on-scroll">
                <div className="category-icon">
                  <FaCloud />
                </div>
                <h3>Cloud Computing</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>AWS Services</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Azure AI Services</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Cloud Infrastructure</span>
                      <span>75%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="75"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category animate-on-scroll">
                <div className="category-icon">
                  <FaCode />
                </div>
                <h3>Programming</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Python</span>
                      <span>95%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="95"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Java</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>C</span>
                      <span>75%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="75"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category animate-on-scroll">
                <div className="category-icon">
                  <FaDatabase />
                </div>
                <h3>Databases</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>SQL (MySQL)</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Firebase</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="80"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category animate-on-scroll">
                <div className="category-icon">
                  <FaTools />
                </div>
                <h3>Tools & Frameworks</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>LangChain</span>
                      <span>90%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="90"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>LangSmith</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Git</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="80"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Streamlit</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="85"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category animate-on-scroll">
                <div className="category-icon">
                  <FaChartBar />
                </div>
                <h3>Data Science</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Pandas</span>
                      <span>90%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="90"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Sentiment Analysis</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="85"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span>Text Classification</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" data-value="80"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="experience-content">
            <div className="timeline">
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Jan 2025</div>
                <div className="timeline-content">
                  <h3>STEP Intern</h3>
                  <h4>CDW</h4>
                  <p>
                    Working with Traditional Machine Learning models, Transformer Architecture and tools like LangChain and LangSmith.
                    Gained hands-on experience in natural language processing tasks, RNN, LSTM, LLM, RAG, and Agents.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-dot"></div>
                <div className="timeline-date">June - July 2024</div>
                <div className="timeline-content">
                    <br></br>
                  <h3>AI/ML Research Intern</h3>
                  <h4>Anna University</h4>
                  <p>
                    Developed in-depth understanding of ML models and tools used in education.
                    Gained hands-on experience in natural language processing (NLP) tasks, sentiment analysis, and text classification using models like BERT and TF-IDF.
                  </p>
                </div>
              </div>
              
              {/* <div className="timeline-item animate-on-scroll">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - Present</div>
                <div className="timeline-content">
                  <h3>Bachelor of Engineering</h3>
                  <h4>St. Joseph's College of Engineering</h4>
                  <p>
                    Pursuing a Bachelor's degree in Computer Science and Engineering with a CGPA of 8.53.
                    Focusing on artificial intelligence, machine learning, and cloud computing.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;