import React from 'react';
import './styles/Banner.css';

function Banner({ imageUrl }) {
  return (
    <div className="banner">
      <div className='banner__image'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='banner__info'>
        <strong>Playlist</strong>
        <h2>Your Discover Weekly</h2>
        <p>Playlist details</p>
      </div>
    </div>
  );
}

export default Banner;
