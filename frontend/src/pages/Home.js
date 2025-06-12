// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" >
      <div className="home-content">
        <h1>Lung Cancer Detection</h1>
        <p>
          Welcome to our AI-powered Lung Cancer Detection platform. This tool uses state-of-the-art
          Convolutional Neural Networks (CNNs) to analyze CT scan images and detect signs of lung cancer.
        </p>
        <a href="/test" className="home-button">Start Test</a>
      </div>
    </div>
  );
};

export default Home;
