import React from 'react';
import './styles/SongRow.css';
function SongRow({ item, play }) {
  const date = new Date(item.added_at).toDateString();
  const msToSec = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
  return (
    <div onClick={() => play(item.track.id)} className='songRow'>
      <img
        className='songRow__album'
        src={item.track.album.images[0].url}
        alt=''
      />
      <div className='songRow__info'>
        <h1>{item.track.name}</h1>
        <p>{item.track.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
      <div className='songRow__albumName'>
        <p>{item.track.album.name}</p>
      </div>
      <div className='songRow__dateAdded'>{date}</div>
      <div className='songRow__duration'>
        <p>‎‎‎‏‏‎{msToSec(item.track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default SongRow;
