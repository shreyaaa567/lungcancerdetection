// src/pages/About.js
import React from 'react';
import './Abou.css';
import { FaHeartbeat, FaSmokingBan, FaShieldAlt, FaBirthdayCake, FaMicroscope, FaSyringe } from 'react-icons/fa';

const Abou = () => {
  const data = [
    {
      title: "Symptoms",
      icon: <FaHeartbeat />,
      content:
        "Lung cancer is often called a “silent killer” because its symptoms frequently appear only when the disease has advanced. Early signs may include a persistent cough that doesn’t go away, which is often mistaken for a cold or bronchitis. Coughing up blood or rust-colored sputum is a more serious symptom. Shortness of breath can occur even with minor physical activity, while persistent chest pain may become sharp or dull depending on the affected area. People may also experience hoarseness due to nerve involvement or wheezing from airway obstruction. Unexplained weight loss, fatigue, and loss of appetite are also common systemic signs. Frequent respiratory infections such as bronchitis or pneumonia that don’t respond to treatment can be a red flag. As the cancer spreads, it may cause bone pain, headaches, or neurological issues, indicating metastasis to other organs.",
      animation: "fade-right"
    },
    {
      title: "Risk Factors",
      icon: <FaSmokingBan />,
      content:
        "The number one risk factor for lung cancer is tobacco smoking, which is responsible for nearly 85% of cases. This includes both active and passive (secondhand) smoking. Carcinogens in cigarette smoke damage the lung tissues, leading to mutations that may result in cancer. However, non-smokers are not entirely safe. Exposure to radon gas (a naturally occurring radioactive gas), asbestos (used in construction and manufacturing), and other industrial pollutants such as arsenic and diesel exhaust can significantly increase risk. Air pollution, particularly in urban and industrial regions, has also been linked to lung cancer development. Genetic predisposition may make some individuals more susceptible, even without smoking or environmental exposure. A history of other lung diseases such as COPD or pulmonary fibrosis further raises the risk. Occupational exposures, especially in mining, welding, and construction, require special attention.",
      animation: "fade-left"
    },
    {
      title: "Prevention",
      icon: <FaShieldAlt />,
      content:
        "Prevention begins with smoking cessation. Avoiding any form of tobacco — cigarettes, cigars, hookah, or e-cigarettes — dramatically reduces lung cancer risk. People working in high-risk industries should use protective equipment to avoid inhaling carcinogens like asbestos or silica dust. Regular ventilation of homes and testing for radon gas can also be crucial preventive steps. Maintaining a healthy lifestyle with regular exercise and a balanced diet rich in antioxidants supports lung health and reduces cancer risk. Air purifiers may help those living in high-pollution areas. For individuals with a family history or known genetic predispositions, regular screenings or low-dose CT scans may be recommended. Preventing infections like HPV and tuberculosis through vaccination or early treatment may also be beneficial. Spreading awareness and enforcing clean air policies at home and in the workplace form the backbone of community-level prevention.",
      animation: "fade-right"
    },
    {
      title: "Common Age Group",
      icon: <FaBirthdayCake />,
      content:
        "Lung cancer predominantly affects older adults, with the majority of cases diagnosed in individuals over the age of 65. This is largely due to the cumulative exposure to risk factors such as smoking and environmental pollutants over many years. The average age at diagnosis is around 70. However, it's important to note that younger people, including those under 45, can also develop lung cancer, particularly if there is a strong genetic predisposition or early and intense exposure to carcinogens. Young adults diagnosed with lung cancer often present with more aggressive forms and may go undiagnosed for longer due to the misconception that the disease only affects older people. Increased awareness and routine check-ups can help identify symptoms earlier across all age groups, including younger, non-smoking individuals who are increasingly being diagnosed.",
      animation: "fade-left"
    },
    {
      title: "Types of Lung Cancer",
      icon: <FaMicroscope />,
      content:
        " Lung cancer is broadly classified into two main types: Non-Small Cell Lung Cancer (NSCLC) and Small Cell Lung Cancer (SCLC). NSCLC accounts for nearly 85% of cases and includes subtypes such as adenocarcinoma, squamous cell carcinoma, and large cell carcinoma. It tends to grow and spread more slowly, making early-stage treatment more effective. Adenocarcinoma is the most common subtype and is often found in non-smokers. SCLC, on the other hand, is more aggressive and fast-spreading, often detected only after it has metastasized. It is strongly associated with smoking and responds initially to chemotherapy and radiation, but relapse is common. Rare forms like carcinoid tumors or mesothelioma (linked to asbestos) may also affect the lungs. Identifying the type of lung cancer is crucial for determining treatment strategy and prognosis.",
      animation: "fade-right"
    },
    {
      title: "Treatment Options",
      icon: <FaSyringe />,
      content:
        "Treatment for lung cancer depends on the type, stage, and overall health of the patient. For early-stage NSCLC, surgical removal of the tumor may be sufficient. This is often followed by chemotherapy or radiation to eliminate remaining cancer cells. For advanced stages, targeted therapies that attack specific genetic mutations in cancer cells are increasingly used, especially in adenocarcinoma cases. Immunotherapy, which harnesses the body’s immune system to fight cancer, has shown promising results in both NSCLC and SCLC. Chemotherapy remains a staple treatment, especially in SCLC, though it comes with side effects like fatigue, nausea, and immune suppression. Radiation therapy can be used for local control or symptom relief. Palliative care focuses on improving quality of life and managing pain in terminal stages. Participation in clinical trials is also an option, offering access to emerging therapies and experimental drugs.",
      animation: "fade-left"
    }
  ];

  return (
    <div className="about-container">
      <h2 data-aos="fade-up">About Lung Cancer</h2>
      <div className="grid-container">
        {data.map((box, index) => (
          <div
            key={index}
            className="info-box"
            data-aos={box.animation}
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="icon">{box.icon}</div>
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abou;
