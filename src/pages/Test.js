// src/pages/Test.js
import React, { useState } from 'react';
import './Test.css';
import axios from 'axios';


const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // ✅ Accept only JPG, JPEG, PNG
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    } else {
      alert('Only JPG, JPEG, or PNG files are allowed.');
      e.target.value = null;
    }
  };

  const handleSubmit = async () => {
  if (!selectedFile || loading) return;

  setLoading(true);
  const formData = new FormData();
  formData.append('file', selectedFile);

  try {
    const res = await axios.post('http://localhost:5000/predict', formData);
    setResult(res.data.result);
  } catch (err) {
    console.error(err);
    setResult('Error occurred while predicting.');
  }

  setLoading(false);
};

  return (
    <div className="test-container">
      <h2 data-aos="fade-up">Lung Cancer Test</h2>
      <p data-aos="fade-up">Upload a CT scan image (JPG, JPEG, or PNG) to check if it is cancerous.</p>

      <div className="upload-section" data-aos="zoom-in">
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
        <button onClick={handleSubmit} disabled={loading || !selectedFile}>
          {loading ? 'Processing...' : 'Submit Image'}
        </button>
      </div>

      {preview && (
        <div className="preview-section" data-aos="fade-up">
          <h4>Selected Image:</h4>
          <img src={preview} alt="Preview" className="image-preview" />
        </div>
      )}

      {result && (
        <div className="result-section" data-aos="fade-up">
          <h3>Prediction Result:</h3>
          <p className={result.toLowerCase().includes('cancer') ? 'cancerous' : 'non-cancerous'}>
            {result}
          </p>
        </div>
      )}
    </div>
  );
};

export default Test;
