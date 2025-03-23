import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaTag, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';
import './articles.css';

const Articles = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Load bookmarked articles from localStorage if available
    const savedBookmarks = localStorage.getItem('bookmarkedArticles');
    if (savedBookmarks) {
      setBookmarkedArticles(JSON.parse(savedBookmarks));
    }
    return () => setIsVisible(false);
  }, []);

  // Article data - replace with your actual articles
  const articlesData = [
    {
      id: 1,
      title: "Introduction to S3",
      summary: "Explore how AWS S3 functions and features document storage",
      image: "./s3.png",
      date: "April 16, 2024",
      readTime: "3 min read",
      category: "AWS",
      link: "https://www.linkedin.com/pulse/introduction-amazon-s3-sharmistha-sivakumar-acidc"
    },
    {
      id: 2,
      title: "Static website hosting using S3",
      summary: "Host your personal static website using AWS S3",
      image: "./web.png",
      date: "April 17, 2024",
      readTime: "2 min read",
      category: "Website Hosting",
      link: "https://www.linkedin.com/pulse/static-website-hosting-using-s3-sharmistha-sivakumar-lfoac"
    },
    {
      id: 3,
      title: "AWS IAM: A Comprehensive Guide to Identity and Access Management",
      summary: "Learn the key principles and best practices of using IAM roles and users with AWS",
      image: "./IAM.jpeg",
      date: "April 19, 2024",
      readTime: "3 min read",
      category: "AWS",
      link: "https://www.linkedin.com/pulse/demystifying-aws-iam-comprehensive-guide-identity-access-sivakumar-kjojc"
    },
    {
      id: 4,
      title: "AWS HealthImaging: The Future of Medical Image Management",
      summary: "Learn about AWS Healthimaging services",
      image: "./HI.jpeg",
      date: "June 2, 2024",
      readTime: "4 min read",
      category: "ML",
      link: "https://www.linkedin.com/pulse/aws-healthimaging-future-medical-image-management-sivakumar-wl4xc"
    },
    {
        id: 5,
        title: "AWS Well-Architected Framework",
        summary: "The AWS Well-Architected Framework helps you understand trade-offs for decisions you make while building workloads on AWS",
        image: "./waf.png",
        date: "June 8, 2024",
        readTime: "4 min read",
        category: "AWS",
        link: "https://www.linkedin.com/pulse/aws-well-architected-framework-sharmistha-sivakumar-x53dc"
      }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(articlesData.map(article => article.category))];

  // Filter articles based on selected category
  const filteredArticles = activeCategory === 'all'
    ? articlesData
    : articlesData.filter(article => article.category === activeCategory);

  // Toggle bookmark for an article
  const toggleBookmark = (id) => {
    let newBookmarks;
    if (bookmarkedArticles.includes(id)) {
      newBookmarks = bookmarkedArticles.filter(articleId => articleId !== id);
    } else {
      newBookmarks = [...bookmarkedArticles, id];
    }
    setBookmarkedArticles(newBookmarks);
    localStorage.setItem('bookmarkedArticles', JSON.stringify(newBookmarks));
  };

  return (
    <div className={`articles-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="section-title">My Articles</h1>
      
      <div className="filter-container">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'all' ? 'All Articles' : category}
          </button>
        ))}
      </div>
      
      <div className="featured-article">
        {filteredArticles.length > 0 && (
          <div className="featured-article-card">
            <div className="featured-image">
              <img src={filteredArticles[0].image} alt={filteredArticles[0].title} />
              <div className="featured-category">{filteredArticles[0].category}</div>
            </div>
            <div className="featured-content">
              <h2>{filteredArticles[0].title}</h2>
              <p className="featured-summary">{filteredArticles[0].summary}</p>
              <div className="article-meta">
                <span><FaCalendarAlt /> {filteredArticles[0].date}</span>
                <span><FaEye /> {filteredArticles[0].views} views</span>
                <span>{filteredArticles[0].readTime}</span>
              </div>
              <div className="featured-actions">
                <a href={filteredArticles[0].link} className="read-more-btn">Read Full Article</a>
                <button 
                  className={`bookmark-btn ${bookmarkedArticles.includes(filteredArticles[0].id) ? 'bookmarked' : ''}`}
                  onClick={() => toggleBookmark(filteredArticles[0].id)}
                >
                  <FaBookmark />
                </button>
                <button className="share-btn">
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="articles-grid">
        {filteredArticles.slice(1).map((article, index) => (
          <div
            key={article.id}
            className="article-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="article-image">
              <img src={article.image} alt={article.title} />
              <div className="article-category">{article.category}</div>
            </div>
            <div className="article-info">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <div className="article-meta">
                <span><FaCalendarAlt /> {article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="article-actions">
                <a href={article.link} className="read-btn">Read Article</a>
                <button 
                  className={`bookmark-btn-small ${bookmarkedArticles.includes(article.id) ? 'bookmarked' : ''}`}
                  onClick={() => toggleBookmark(article.id)}
                >
                  <FaBookmark />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;