import React from 'react';
import { useParams } from 'react-router-dom';
import './fooddetailpage.css';

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

const foodDetails = [
  { id: 1, name: 'Rayudu Tea', image: teaImage, address: '123 Tea St', menu: 'Tea, Snacks', description: 'A cozy tea shop offering a variety of teas and snacks. Enjoy a relaxing ambiance with light refreshments.', mapLink: 'https://g.co/kgs/7KDrpVD' },
  { id: 2, name: 'Rayudu Dosa', image: rayuduImage, address: '456 Dosa Rd', menu: 'Dosa, Idli', description: 'Famous for its crispy dosas and soft idlis. A must-visit for South Indian cuisine lovers.', mapLink: 'https://g.co/kgs/QXWCN39' },
  { id: 3, name: 'Andhra Spice Biryani', image: biryaniImage, address: '789 Biryani Ave', menu: 'Biryani, Kebabs', description: 'Authentic Andhra biryani with a variety of kebabs. Spicy and flavorful dishes await you.', mapLink: 'https://g.co/kgs/RTbYXxV' },
  { id: 4, name: 'Chennur Biryani', image: biryaniImage, address: '101 Biryani Blvd', menu: 'Biryani, Chicken', description: 'Delicious biryani and chicken dishes. Perfect for biryani enthusiasts.', mapLink: 'https://g.co/kgs/jt4BeC4' },
  { id: 5, name: 'KFC', image: hotelBImage, address: '111 Fastfood St', menu: 'Chicken, Burgers', description: 'Famous fast-food chain offering crispy chicken and juicy burgers.', mapLink: 'https://g.co/kgs/9C4RfZ3' },
  { id: 6, name: 'Cool Court', image: hotelCImage, address: '121 Cool Ave', menu: 'Ice Cream, Desserts', description: 'A delightful place for ice cream and sweet desserts. Perfect for a quick treat.', mapLink:'https://g.co/kgs/bdaES99' },
  { id: 7, name: 'Kritunga Restaurant Proddatur', image: hotelDImage, address: '131 Restaurant Ln', menu: 'South Indian, North Indian', description: 'Wide range of South and North Indian dishes. A great spot for a hearty meal.', mapLink: 'https://g.co/kgs/TqejSBe' },
  { id: 8, name: 'Peoples Dine Multiple Cuisine', image: hotelEImage, address: '141 Cuisine St', menu: 'Multi-cuisine', description: 'Offers a variety of cuisines including Indian, Chinese, and Continental. Ideal for diverse tastes.', mapLink: 'https://g.co/kgs/H6vLwBW' },
  { id: 9, name: 'Red Bucket Biriyani', image: hotelFImage, address: '151 Biryani Ave', menu: 'Biryani, Chicken', description: 'Specializes in flavorful biryanis and chicken dishes. A favorite among locals.', mapLink: 'https://maps.app.goo.gl/hfQdryyW5QuzQPLn7' },
  { id: 10, name: 'Kovvur Grand', image: hotelGImage, address: '161 Grand St', menu: 'Multi-cuisine', description: 'Grand restaurant offering a variety of multi-cuisine options. Known for its elegant setting.', mapLink: 'https://maps.app.goo.gl/kKvJXh1XofdZnKEV7' },
  { id: 11, name: 'Hyderabad Chefs', image: hotelHImage, address: '171 Chef Blvd', menu: 'Hyderabadi Cuisine', description: 'Specializes in authentic Hyderabadi cuisine with a variety of traditional dishes.', mapLink: 'https://maps.app.goo.gl/7fTP1m5BFcWEHk1U6' },
  { id: 12, name: 'Green Bucket Biriyani', image: hotelIImage, address: '181 Green St', menu: 'Biryani, Chicken', description: 'Known for its green and aromatic biryanis and delectable chicken dishes.', mapLink: 'https://g.co/kgs/d2bueg4' },
  { id: 13, name: 'Paradise Restaurant', image: hotelJImage, address: '191 Paradise Ln', menu: 'Multi-cuisine', description: 'Offers a diverse menu of multi-cuisine options, perfect for any food lover.', mapLink: 'https://g.co/kgs/7KDrpVD' },
  { id: 14, name: 'CRC Restaurant', image: hotelKImage, address: '201 Restaurant St', menu: 'Multi-cuisine', description: 'A popular restaurant serving a wide variety of multi-cuisine dishes.', mapLink: 'https://g.co/kgs/7KDrpVD' },
  { id: 15, name: 'Hyderabadi Biriyani House', image: hotelLImage, address: '211 Biryani Blvd', menu: 'Biryani, Chicken', description: 'Specializes in spicy Hyderabadi biryani and flavorful chicken dishes.', mapLink: 'https://maps.app.goo.gl/PpZAS5PQSN1HGEej7' },
  { id: 16, name: 'Priya Ice Cream & Fast Foods', image: hotelMImage, address: '221 Ice Cream Ln', menu: 'Ice Cream, Fast Food', description: 'Offers a range of ice cream flavors and fast food options in a friendly setting.', mapLink: 'https://maps.app.goo.gl/TB7zvjhmsAmVpA1E8' },
  { id: 17, name: 'Kelvin Scale-Natural Ice Cream', image: hotelNImage, address: '231 Ice Cream St', menu: 'Ice Cream, Desserts', description: 'Known for its natural and delicious ice cream and sweet desserts.', mapLink: 'https://maps.app.goo.gl/siXvrKkmG93yxyeB6' },
  { id: 18, name: 'Ibaco', image: hotelOImage, address: '241 Ice Cream Ave', menu: 'Ice Cream, Desserts', description: 'Offers a variety of ice cream flavors and indulgent desserts.', mapLink: 'https://maps.app.goo.gl/smmu4xRmtTWxxLRQ6' },
  { id: 19, name: 'Iceberge Organic Ice Creams', image: hotelPImage, address: '251 Organic St', menu: 'Ice Cream, Desserts', description: 'Features organic ice creams and desserts made from the freshest ingredients.', mapLink: 'https://maps.app.goo.gl/wk1SE1MzXt4hGG5M8' },
  { id: 20, name: 'Pizza Hut', image: hotelQImage, address: '261 Pizza Ln', menu: 'Pizza, Fast Food', description: 'Well-known fast-food chain serving a wide range of pizzas and fast food items.', mapLink: 'https://maps.app.goo.gl/cbncDo57wDeP4VYu7' },
  { id: 21, name: 'Mayuri Bakery', image: hotelRImage, address: '271 Bakery St', menu: 'Bakery, Fast Food', description: 'Famous for its baked goods and fast food items, including fresh bread and pastries.', mapLink: 'https://maps.app.goo.gl/CUU4CmX7fbXxA6PM8' },
  { id: 22, name: 'The Spot Cafe', image: hotelSImage, address: '281 Cafe Ln', menu: 'Cafe, Snacks', description: 'A cozy cafe offering a variety of snacks and beverages in a relaxing atmosphere.', mapLink: 'https://maps.app.goo.gl/XcmiNfX6nHPhZ9kw5' },
  { id: 23, name: 'Dark Purple', image: hotelTImage, address: '291 Purple St', menu: 'Cafe, Snacks', description: 'Known for its unique ambiance and a diverse menu of snacks and beverages.', mapLink: 'https://maps.app.goo.gl/RjLen9F5DaLTnejG6' },
  { id: 24, name: 'Jail Food Multicuisine', image: hotelUImage, address: '301 Jail Ln', menu: 'Multi-cuisine', description: 'Offers a wide range of multi-cuisine options in a unique setting.', mapLink: 'https://maps.app.goo.gl/PqQJcwTMj5wgr7Cf7' },
  { id: 25, name: 'Sagar Fast Food', image: hotelVImage, address: '311 Sagar St', menu: 'Fast Food, Snacks', description: 'Popular for its fast food and quick snacks, including burgers and fries.', mapLink: 'https://maps.app.goo.gl/AkQ4Ery159VnJGHF8' },
  { id: 26, name: 'Nirmala South and North India', image: hotelWImage, address: '321 Nirmala Ln', menu: 'South Indian, North Indian', description: 'Serves a variety of South and North Indian dishes, perfect for a diverse meal.', mapLink: 'https://g.co/kgs/7KDrpVD' },
  { id: 27, name: 'KaKe And Koffe', image: hotelXImage, address: '331 Koffee St', menu: 'Cafe, Snacks', description: 'Offers a range of coffee and snacks in a comfortable setting.', mapLink: 'https://maps.app.goo.gl/UyG93iFqSo6SPc4E7' },
  { id: 27, name: 'KaKe And Koffe', image: hotelXImage, address: '331 Koffee St', menu: 'Cafe, Snacks', mapLink: 'https://g.co/kgs/7KDrpVD' },
  { id: 28, name: 'Mr HungryBirdCafe', image: hotelYImage, address: '341 Hungry Ln', menu: 'Cafe, Snacks', description: 'A cozy cafe offering a variety of snacks and beverages in a relaxing atmosphere.',mapLink: 'https://maps.app.goo.gl/qT9bi3HQ7KoG4NmH6' },
  { id: 29, name: 'Alpaharam', image: hotelZImage, address: '351 Alpha St', menu: 'Multi-cuisine',description: 'Offers a diverse menu of multi-cuisine options, perfect for any food lover.', mapLink: 'https://maps.app.goo.gl/LgsAyw3sgPt8VoM36' },
  { id: 30, name: 'Nirmala Bakery And Food', image: hotelAAImage, address: '361 Bakery Ln', menu: 'Bakery, Fast Food',description: 'Famous for its baked goods and fast food items, including fresh bread and pastries.', mapLink: 'https://maps.app.goo.gl/EA2S7e7ahiT8yUVVA' },
  { id: 31, name: 'Snak City', image: hotelABImage, address: '371 Snack St', menu: 'Fast Food, Snacks',description: 'Well-known fast-food chain serving a wide range of pizzas and fast food items.', mapLink: 'https://maps.app.goo.gl/azYeCCdtEYsQJ47y8' },
  { id: 32, name: 'Ghost Pizza', image: hotelACImage, address: '381 Pizza Ln', menu: 'Pizza, Fast Food',description: 'Well-known fast-food chain serving a wide range of pizzas and fast food items.', mapLink: 'https://maps.app.goo.gl/tdr6DZV8RRXRp18C6' },
  { id: 33, name: 'Capital Multi Chicken Hub', image: hotelADImage, address: '391 Chicken St', menu: 'Chicken, Fast Food',description: 'Specializes in flavorful biryanis and chicken dishes. A favorite among locals.', mapLink: 'https://g.co/kgs/BrikTEP' },
  { id: 34, name: 'Mumbai Kulfi Proddutur', image: hotelAEImage, address: '401 Kulfi Ln', menu: 'Kulfi, Desserts', description: 'Features organic ice creams and desserts made from the freshest ingredients.', mapLink: 'https://g.co/kgs/BdJQNXm' },
  { id: 35, name: 'Rayudu Gobi Center', image: hotelAFImage, address: '411 Gobi St', menu: 'Gobi, Fast Food',description: 'Offers a diverse menu of multi-cuisine options, perfect for any food lover.',  mapLink: 'https://g.co/kgs/7KDrpVD' },
  { id: 36, name: 'Mahesh Gobi Center', image: hotelAGImage, address: '421 Gobi Ln', menu: 'Gobi, Fast Food',description: 'Offers a diverse menu of multi-cuisine options, perfect for any food lover.',  mapLink: 'https://maps.app.goo.gl/45rbbSYazafJGYwC7' },
];

const FoodDetailPage = () => {
  const { id } = useParams();
  const foodItem = foodDetails.find(item => item.id === parseInt(id));

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="food-detail-page">
      <h1>{foodItem.name}</h1>
      <img src={foodItem.image} alt={foodItem.name} className="food-detail-image" />
      <p><strong>Address:</strong> {foodItem.address}</p>
      <p><strong>Menu:</strong> {foodItem.menu}</p>
      <p><strong>Description:</strong> {foodItem.description}</p>
      <p><strong>Map:</strong> <a href={foodItem.mapLink} target="_blank" rel="noopener noreferrer">View on map</a></p>
    </div>
  );
};

export default FoodDetailPage;
