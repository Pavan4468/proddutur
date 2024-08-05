import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>EXPLORE Proddutur</h1>
      <nav>
        <ul>
          <li onClick={() => navigate('/places')}>Places</li>
          <li onClick={() => navigate('/food')}>Food</li>
          <li onClick={() => navigate('/education')}>Education</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
