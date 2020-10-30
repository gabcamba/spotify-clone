import React from 'react';
import './styles/SongRow.css';
function SongRow({ track, play }) {
  const msToSec = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
  return (
    <div onClick={() => play(track.id)} className='songRow'>
      <img className='songRow__album' src={track.album.images[0].url} alt='' />
      <div className='songRow__info'>
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
      <div className='songRow__albumName'>
        <p>{track.album.name}</p>
      </div>
      <div className='songRow__duration'>
        <p>‎‎‎‏‏‎{msToSec(track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default SongRow;
