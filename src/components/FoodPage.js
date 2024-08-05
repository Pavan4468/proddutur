import React from 'react';
import { Link } from 'react-router-dom';
import './foodpage.css'; // Make sure this matches the actual CSS file name

// Import images
import teaImage from '../assets/tea.avif';
import rayuduImage from '../assets/rayudu.jpg';
import biryaniImage from '../assets/and.avif';
import hotelAImage from '../assets/cheenu.jpg';
import hotelBImage from '../assets/kfc.webp';
import hotelCImage from '../assets/cool.avif';
import hotelDImage from '../assets/kri.avif';
import hotelEImage from '../assets/peopledine.avif';
import hotelFImage from '../assets/rebbucket.jpg';
import hotelGImage from '../assets/kovvur.avif';
import hotelHImage from '../assets/hyderabab chef.jpeg';
import hotelIImage from '../assets/green bucket.jpeg';
import hotelJImage from '../assets/paradise rest.jpg';
import hotelKImage from '../assets/crc.jpg';
import hotelLImage from '../assets/hydrabai biriyani house.avif';
import hotelMImage from '../assets/priya.jpg';
import hotelNImage from '../assets/kelvin.avif';
import hotelOImage from '../assets/ibaco.png';
import hotelPImage from '../assets/iceberg.jpeg';
import hotelQImage from '../assets/pizza hut.jpg';
import hotelRImage from '../assets/myuri.jpg';
import hotelSImage from '../assets/spot cafe.png';
import hotelTImage from '../assets/dark purple.jpeg';
import hotelUImage from '../assets/jail.avif';
import hotelVImage from '../assets/sagar.jpg';
import hotelWImage from '../assets/nirmala.jpg';
import hotelXImage from '../assets/kake coffe.jpg';
import hotelYImage from '../assets/hungry  bird.avif';
import hotelZImage from '../assets/AMALPURAM.jpg';
import hotelAAImage from '../assets/BEKAREY.jpg';
import hotelABImage from '../assets/SNAK CITY.jpg';
import hotelACImage from '../assets/GHOST PIZZA.jpeg';
import hotelADImage from '../assets/CAPTAL.avif';
import hotelAEImage from '../assets/MUMBAIL KULFI.jpg';
import hotelAFImage from '../assets/rayudu.avif';
import hotelAGImage from '../assets/Mahesh.webp';

const foodItems = [
  { id: 1, name: 'Rayudu Tea', image: teaImage },
  { id: 2, name: 'Rayudu Dosa', image: rayuduImage },
  { id: 3, name: 'Andhra Spice Biryani', image: biryaniImage },
  { id: 4, name: 'Chennur Biryani', image: hotelAImage },
  { id: 5, name: 'KFC', image: hotelBImage },
  { id: 6, name: 'Cool Court', image: hotelCImage },
  { id: 7, name: 'Kritunga Restaurant Proddatur', image: hotelDImage },
  { id: 8, name: 'Peoples Dine Multiple Cuisine', image: hotelEImage },
  { id: 9, name: 'Red Bucket Biriyani', image: hotelFImage },
  { id: 10, name: 'Kovvur Grand', image: hotelGImage },
  { id: 11, name: 'Hyderabad Chefs', image: hotelHImage },
  { id: 12, name: 'Green Bucket Biriyani', image: hotelIImage },
  { id: 13, name: 'Paradise Restaurant', image: hotelJImage },
  { id: 14, name: 'CRC Restaurant', image: hotelKImage },
  { id: 15, name: 'Hyderabadi Biriyani House', image: hotelLImage },
  { id: 16, name: 'Priya Ice Cream & Fast Foods', image: hotelMImage },
  { id: 17, name: 'Kelvin Scale-Natural Ice Cream', image: hotelNImage },
  { id: 18, name: 'Ibaco', image: hotelOImage },
  { id: 19, name: 'Iceberge Organic Ice Creams', image: hotelPImage },
  { id: 20, name: 'Pizza Hut', image: hotelQImage },
  { id: 21, name: 'Mayuri Bakery', image: hotelRImage },
  { id: 22, name: 'The Spot Cafe', image: hotelSImage },
  { id: 23, name: 'Dark Purple', image: hotelTImage },
  { id: 24, name: 'Jail Food Multicuisine', image: hotelUImage },
  { id: 25, name: 'Sagar Fast Food', image: hotelVImage },
  { id: 26, name: 'Nirmala South and North India', image: hotelWImage },
  { id: 27, name: 'KaKe And Koffe', image: hotelXImage },
  { id: 28, name: 'Mr HungryBirdCafe', image: hotelYImage },
  { id: 29, name: 'Alpaharam', image: hotelZImage },
  { id: 30, name: 'Nirmala Bakery And Food', image: hotelAAImage },
  { id: 31, name: 'Snak City', image: hotelABImage },
  { id: 32, name: 'Ghost Pizza', image: hotelACImage },
  { id: 33, name: 'Capital Multi Chicken Hub', image: hotelADImage },
  { id: 34, name: 'Mumbai Kulfi Proddutur', image: hotelAEImage },
  { id: 35, name: 'Rayudu Gobi Center', image: hotelAFImage },
  { id: 36, name: 'Mahesh Gobi Center', image: hotelAGImage },
];

const FoodPage = ({ onBack }) => {
  return (
    <div className="food-page">
      <button className="back-button" onClick={onBack}>Back</button>
      <h1>Famous Food in Proddutur</h1>
      <div className="food-list">
        {foodItems.map((item) => (
          <Link key={item.id} to={`/food/${item.id}`} className="food-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
