// src/components/EducationPage.js
import React, { useState } from 'react';
import './EducationPage.css';
import EducationDetailPage from './EducationDetailPage';

// Import all images with unique variable names
import sritImage from '../assets/srit.jpg';
import gautamImage from '../assets/gautam.jpeg';
import cbitImage from '../assets/cbit.jpeg';
import delhiImage from '../assets/delhi.png';
import deepthiImage from '../assets/deepthi.webp';
import abyasImage from '../assets/abyas.jpeg';
import pakshiImage from '../assets/PAKSHI.webp';
import seeVidyaImage from '../assets/SEE VIDYA.avif';
import saiImage from '../assets/sai.jpeg';
import skscImage from '../assets/SKSC.jpg';
import gowImage from '../assets/GOW.png';

const educationInstitutions = [
  { name: 'SRIT COLLEGE', image: sritImage, type: 'college' },
  { name: 'GAUTAM HIGH SCHOOL', image: gautamImage, type: 'school' },
  { name: 'CBIT COLLEGE', image: cbitImage, type: 'college' },
  { name: 'DELHI PUBLIC SCHOOL', image: delhiImage, type: 'school' },
  { name: 'DEEPTHI JUNIOR COLLEGE', image: deepthiImage, type: 'college' },
  { name: 'ABYAS JUNIOR COLLEGE', image: abyasImage, type: 'college' },
  { name: 'PAKSHI JUNIOR COLLEGE', image: pakshiImage, type: 'college' },
  { name: 'SEE VIDYA SCHOOL', image: seeVidyaImage, type: 'school' },
  { name: 'SAI JUNIOR COLLEGE', image: saiImage, type: 'college' },
  { name: 'SKSC SCHOOL', image: skscImage, type: 'school' },
  { name: 'GOW COLLEGE', image: gowImage, type: 'college' },
];

const EducationPage = ({ onBack }) => {
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const handleItemClick = (institution) => {
    setSelectedInstitution(institution);
  };

  const handleBack = () => {
    setSelectedInstitution(null);
  };

  if (selectedInstitution) {
    return <EducationDetailPage institution={selectedInstitution} onBack={handleBack} />;
  }

  return (
    <div className="education-page">
      <button className="back-button" onClick={onBack}>Back</button>
      <h1>Education Institutions in Proddutur</h1>
      <div className="education-list">
        {educationInstitutions.map((item, index) => (
          <div key={index} className="education-item" onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.name} className="education-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
