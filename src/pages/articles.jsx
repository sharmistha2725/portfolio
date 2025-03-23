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
      title: "Understanding RAG Systems in Modern AI Applications",
      summary: "Explore how Retrieval Augmented Generation is transforming AI applications and enabling more reliable, context-aware responses.",
      image: "./rag-article.jpg",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "AI",
      views: 1248,
      link: "/articles/understanding-rag"
    },
    {
      id: 2,
      title: "The Future of React: What's Coming in 2025",
      summary: "A deep dive into upcoming React features and how they will change the way we build web applications.",
      image: "./react-future.jpg",
      date: "February 28, 2025",
      readTime: "12 min read",
      category: "Web Development",
      views: 2357,
      link: "/articles/future-of-react"
    },
    {
      id: 3,
      title: "Building Ethical AI Systems: A Practical Guide",
      summary: "Learn the key principles and practices for developing AI systems that are fair, transparent, and beneficial for all users.",
      image: "./ethical-ai.jpg",
      date: "January 10, 2025",
      readTime: "15 min read",
      category: "AI",
      views: 3012,
      link: "/articles/ethical-ai-guide"
    },
    {
      id: 4,
      title: "Blockchain in Healthcare: Beyond the Hype",
      summary: "Examining real-world applications of blockchain technology in healthcare systems and patient data management.",
      image: "./blockchain-health.jpg",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Blockchain",
      views: 1879,
      link: "/articles/blockchain-healthcare"
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