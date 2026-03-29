// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Home from './pages/home';
// import About from './pages/about';
// import Skills from './pages/skills';
// import Projects from './pages/projects';
// import Certificates from './pages/certificates';
// import Contact from './pages/contact';
// import Footer from './components/footer';
// import articles from './articles';
// import './App.css';

// function App() {
//   const [theme, setTheme] = useState('light');
  
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//   };
  
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setTheme('dark');
//     }
    
//     document.body.setAttribute('data-theme', theme);
//   }, [theme]);

//   return (
//     <div className="app" data-theme={theme}>
//       <Navbar theme={theme} toggleTheme={toggleTheme} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/certificates" element={<Certificates />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Certificates from './pages/certificates';
import Contact from './pages/contact';
import Footer from './components/footer';
import Articles from './pages/articles';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// If you want to use lazy loading, uncomment these and comment out the direct imports above
// import { lazy } from 'react';
// const Home = lazy(() => import('./pages/home'));
// const About = lazy(() => import('./pages/about'));
// const Skills = lazy(() => import('./pages/skills'));
// const Projects = lazy(() => import('./pages/projects'));
// const Certificates = lazy(() => import('./pages/certificates'));
// const Contact = lazy(() => import('./pages/contact'));
// const Articles = lazy(() => import('./pages/articles'));

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Handle initial loading and theme setup
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    document.body.setAttribute('data-theme', theme);
    
    // Simulate loading for a smoother transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [theme]);
  
  // Add page transition animation whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.add('page-enter');
      setTimeout(() => {
        mainContent.classList.remove('page-enter');
      }, 500);
    }
  }, [location.pathname]);
  
  if (isLoading) {
    return <LoadingSpinner theme={theme} />;
  }
  
  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <main className="main-content">
        <Suspense fallback={<LoadingSpinner theme={theme} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<Articles/>} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

// Simple 404 page
const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
    <a href="/" className="back-home-btn">Back to Home</a>
  </div>
);

export default App;