import React from 'react';
import './loadingSpinner.css';

const LoadingSpinner = ({ theme }) => {
  return (
    <div className={`loading-container ${theme}`}>
      <div className="spinner">
        <div className="spinner-inner"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;