// src/pages/Project.js
import React from 'react';
import './Project.css';
import { FaDownload, FaChartLine, FaMicroscope } from 'react-icons/fa';
import accuracyChart from './charts/accuracy.png';
import lossChart from './charts/loss.png';


const Project = () => {
  return (
    <div className="projectbody">
      <div className="project-jive-container">
        <h1>🫁 Lung Cancer Detection </h1>

        <section className="overview box">
          <h2><FaMicroscope /> Model Overview</h2>
          <p>
            This deep learning model uses <strong>Convolutional Neural Networks (CNN)</strong> to detect lung cancer from chest CT scan images.
            Trained on a categorized dataset using <strong>TensorFlow</strong> and <strong>Keras</strong>, it classifies images into <strong>Normal</strong> and <strong>Cancerous</strong> types like Adenocarcinoma, Large Cell Carcinoma, etc.
          </p>
        </section>

        <section className="training-details box">
          <h2>⚙️ Training Details</h2>
          <ul>
            <li>📐 Image size: 224 x 224 pixels</li>
            <li>🧠 Model type: Sequential CNN</li>
            <li>⚙️ Optimizer: Adam</li>
            <li>❌ Loss: Categorical Crossentropy</li>
            <li>⏱️ Epochs: 10</li>
          </ul>
        </section>

        <section className="accuracy-metrics">
          <div className="accuracy-box">
            <FaChartLine size={24} />
            <h3>Test Accuracy</h3>
            <p>~97.5%</p>
          </div>
          <div className="accuracy-box">
            <FaChartLine size={24} />
            <h3>Validation Accuracy</h3>
            <p>~96.2%</p>
          </div>
        </section>
        
        

        <section className="charts">

          <h2>📊 Model Performance</h2>
          <div className="charts-box">
              <img src={accuracyChart} alt="Accuracy Chart" />
              <img src={lossChart} alt="Loss Chart" />
          </div>
          

        </section>

        <section className="downloads box">
          <h2><FaDownload /> Download Test Images</h2>
          <p>Click below to download sample CT scan images to test the model locally:</p>
          <div className="image-grid">
            {[...Array(20)].map((_, index) => (
              <a
                key={index}
                href={`/test-images/image${index + 1}.png`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="image-link"
              >
                <img src={`/test-images/image${index + 1}.png`} alt={`Test ${index + 1}`} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
