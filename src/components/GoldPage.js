// src/components/GoldPage.js
import React from 'react';
import './GoldPage.css'; // Import the CSS file for GoldPage
import goldImage from '../assets/gold.jpeg'; // Correct import path

const GoldPage = () => {
  return (
    <div className="gold-page">
      <img src={goldImage} alt="Gold" className="gold-image" />
      <div className="gold-text-container">
        <p className="gold-text">
          Proddutur, located in Kadapa district, Andhra Pradesh, is a prominent center for gold trading, renowned for its bustling market and extensive gold-related businesses. The town has a long-standing tradition of gold trading, with a variety of establishments ranging from traditional jewelry shops to modern trading firms. This diversity caters to a broad spectrum of customers, offering everything from intricate gold ornaments to investment-grade bars and coins.
          <br /><br />
          The gold trade in Proddutur is a major contributor to the local economy, providing numerous employment opportunities and supporting ancillary businesses such as goldsmithing and refining. Many families in Proddutur are involved in the gold industry, reflecting a deep-rooted heritage that spans generations. The town’s strategic location enhances its role as a key trading hub, attracting both local and regional traders.
          <br /><br />
          Proddutur’s gold market is known for competitive pricing and a high level of customer service, which has helped build a strong reputation for reliability and trustworthiness. The town’s infrastructure supports its gold trade with efficient logistics and transportation networks, ensuring smooth operations and timely deliveries.
          <br /><br />
          Overall, Proddutur's success in the gold trade has bolstered its economic profile, drawing investment and contributing to its status as a significant player in the gold industry of Andhra Pradesh.
        </p>
      </div>
    </div>
  );
};

export default GoldPage;
