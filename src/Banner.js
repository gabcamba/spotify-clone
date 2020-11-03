import React from 'react';
import './styles/Banner.css';
import { useDataLayerValue } from './DataLayer';

function Banner({ imageUrl }) {
  const [
    { heroImage, description, displayTitle },
    dispatch,
  ] = useDataLayerValue();
  return (
    <div className='banner'>
      <div className='banner__image'>
        <img src={heroImage} alt='' />
      </div>
      <div className='banner__info'>
        <strong>Playlist</strong>
        <h2>{displayTitle}</h2>
        <p>{description}</p>
        <p className="playlist__by">by gabo</p>
      </div>
    </div>
  );
}

export default Banner;
