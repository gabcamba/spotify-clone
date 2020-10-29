import React from 'react';
import './styles/Banner.css';

function Banner({ imageUrl }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt='' />
    </div>
  );
}

export default Banner;
