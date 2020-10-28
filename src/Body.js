import React from 'react';
import './styles/Body.css';
import Header from './Header.js';
import { useDataLayerValue } from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './SongRow.js';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <div style={{display: "flex"}}>
          <img src={discover_weekly?.images[0].url} alt='hero' />
          <div className='body__infoText'>
            <strong>Playlist</strong>
            <h2>Discover weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
          <div className='body__icons'>
            <PlayCircleFilled className='body__shuffle' />
            <Favorite fontSize='large' />
            <MoreHoriz />
          </div>
        </div>

        <div>
          <div className='body__songs'>
            {discover_weekly?.tracks.items.map((item) => (
              <SongRow track={item.track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
