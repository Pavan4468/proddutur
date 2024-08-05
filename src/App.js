// App.js
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import pdtrImage1 from './assets/tttt.jpeg';
import pdtrImage2 from './assets/pdtr.jpg';
import pdtrImage3 from './assets/sss.jpeg';
import foodIcon from './assets/food.avif';
import placesIcon from './assets/pla.png';
import educationIcon from './assets/education.webp';
import chillIcon from './assets/chill.jpg';
import roboImage from './assets/robo.jpg';
import FoodPage from './components/FoodPage';
import PlacesPage from './components/PlacesPage';
import EducationPage from './components/EducationPage';
import FoodDetailPage from './components/FoodDetailPage';
import ChillOutPage from './components/ChillOutPage';
import Header from './components/Header';
import instagramIcon from './assets/instagram.png';
import youtubeIcon from './assets/youtube.png';
import facebookIcon from './assets/communication.png';
import GoldPage from './components/GoldPage';


const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const startXRef = useRef(0);
  const navigate = useNavigate();

  const images = [
    { src: pdtrImage1, name: 'tttt.jpeg' },
    { src: pdtrImage2, name: 'pdtr.jpg' },
    { src: pdtrImage3, name: 'sss.jpeg' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startXRef.current - endX;

    if (diffX > 50) {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    } else if (diffX < -50) {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    }
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      {showIntro ? (
        <div className="intro">
          <img src={roboImage} alt="Robo" className="intro-image" />
        </div>
      ) : (
        <>
          <Header />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="image-carousel">
                      <div className="image-container">
                        <button className="nav-button left" onClick={handlePrevious}>‹</button>
                        <img
                          src={images[currentImageIndex].src}
                          alt={`Proddutur ${currentImageIndex + 1}`}
                          className="main-image"
                          onTouchStart={handleTouchStart}
                          onTouchEnd={handleTouchEnd}
                        />
                        <button className="nav-button right" onClick={handleNext}>›</button>
                      </div>
                      <p className="image-index">
                        {currentImageIndex + 1} of {images.length}
                      </p>
                    </div>
                    <div className="icons-container">
                      <div className="icon" onClick={() => navigate('/places')}>
                        <img src={placesIcon} alt="Places" className="icon-image" />
                        <p>Places</p>
                      </div>
                      <div className="icon" onClick={() => navigate('/food')}>
                        <img src={foodIcon} alt="Food" className="icon-image" />
                        <p>Food</p>
                      </div>
                      <div className="icon" onClick={() => navigate('/education')}>
                        <img src={educationIcon} alt="Education" className="icon-image" />
                        <p>Education</p>
                      </div>
                      <div className="icon" onClick={() => navigate('/chill')}>
                        <img src={chillIcon} alt="Chill" className="icon-image" />
                        <p>Chill</p>
                      </div>
                    </div>
                    <div className="gold-page-container">
                      <GoldPage />
                    </div>
                  </>
                }
              />
              <Route path="/food" element={<FoodPage onBack={handleBack} />} />
              <Route path="/places" element={<PlacesPage onBack={handleBack} />} />
              <Route path="/education" element={<EducationPage onBack={handleBack} />} />
              <Route path="/chill" element={<ChillOutPage onBack={handleBack} />} />
              <Route path="/food/:id" element={<FoodDetailPage onBack={handleBack} />} />
              <Route path="/gold" element={<GoldPage onBack={handleBack} />} />
            </Routes>
          </div>
          <footer className="footer">
            <p>Thank You for visiting!</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/mana_proddutur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://youtube.com/@yakheen_vlogs?si=1ra3swgBzjJ3qubt" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" />
              </a>
              <a href="https://facebook.com/groups/492702630933652/" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
