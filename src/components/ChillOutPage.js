import React from 'react';
import './ChillOutPage.css';
import rosiReddy from '../assets/rosi reddy.jpg';
import teaWorld from '../assets/tea world.jpg';
import teaTalks from '../assets/tea talks.jpg';
import chiaBunk from '../assets/chai bunk.jpg';

const ChillOutPage = () => {
  return (
    <div className="chillout-container">
      <h1>Best Chill Out Areas</h1>
      <div className="chillout-area">
        <img src={rosiReddy} alt="Rosi Reddy" className="chillout-image" />
        <div className="chillout-info">
          <h2>Rosi Reddy</h2>
          <p>A peaceful spot to relax and unwind with beautiful surroundings.</p>
        </div>
      </div>
      <div className="chillout-area">
        <img src={teaWorld} alt="Tea World" className="chillout-image" />
        <div className="chillout-info">
          <h2>Tea World</h2>
          <p>The perfect place for tea lovers, offering a variety of teas from around the world.</p>
        </div>
      </div>
      <div className="chillout-area">
        <img src={teaTalks} alt="Tea Talks" className="chillout-image" />
        <div className="chillout-info">
          <h2>Tea Talks</h2>
          <p>A cozy spot for tea enthusiasts to gather, chat, and enjoy their favorite brews.</p>
        </div>
      </div>
      <div className="chillout-area">
        <img src={chiaBunk} alt="Chia Bunk" className="chillout-image" />
        <div className="chillout-info">
          <h2>Chia Bunk</h2>
          <p>An inviting place to relax and enjoy some unique and healthy chia drinks.</p>
        </div>
      </div>
    </div>
  );
};

export default ChillOutPage;
