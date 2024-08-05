import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import '../App.css';  // Adjust the path according to your structure
import './places.css'; // Importing the new CSS file for PlacesPage
import gandikotaImage from '../assets/kota.jpg'; // Importing the image

const PlacesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      
      <div className="place-details">
        <img src={gandikotaImage} alt="Gandikota" className="place-image" />
        <div className="place-info">
          <h3>Gandikota</h3>
          <p>Gandikota, located in the Kadapa district of Andhra Pradesh, is often referred to as the "Grand Canyon of India." This small village is renowned for its stunning gorge formed by the Pennar River, creating breathtaking views that attract tourists and photographers alike. The gorge is flanked by the rugged, rocky terrain that offers a dramatic landscape, making it a paradise for nature lovers and adventure enthusiasts.</p>
          <p>The historical Gandikota Fort, built in the 13th century by the Kakatiya dynasty, adds to the village's charm. This fort stands as a testament to the region's rich history and architectural prowess, featuring massive stone walls, ancient temples, and a granary. Among the notable structures within the fort are the Madhavaraya Temple, known for its intricate carvings, and the Jama Masjid, which highlights the blend of Hindu and Islamic architectural styles.</p>
          <p>Apart from its natural beauty and historical significance, Gandikota also offers opportunities for various outdoor activities. Visitors can indulge in trekking, camping, and kayaking in the nearby Pennar River. The serene ambiance of the village, combined with its panoramic views and historical landmarks, makes Gandikota a must-visit destination for those exploring Andhra Pradesh.</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PlacesPage;
