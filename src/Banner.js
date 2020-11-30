import React from 'react';
import './styles/Banner.css';
import { useDataLayerValue } from './DataLayer';

function Banner({ toggleModal }) {
  const [
    { heroImage, description, displayTitle, owner },
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
        <p onClick={() => toggleModal()} className='playlist__by'>by {owner?.display_name}</p>
      </div>
    </div>
  );
}

export default Banner;
