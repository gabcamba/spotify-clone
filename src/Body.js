import React from 'react';
import './styles/Body.css';
import Header from './Header.js';
import Banner from './Banner.js';

import { useDataLayerValue } from './DataLayer';
// import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './SongRow.js';

function Body({ spotify, play }) {
  const [{ displayList, heroImage }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <Banner imageUrl={heroImage} />
      <div className='body__info'>
        <div className='body__songs'>
          {displayList?.items.map((item) => (
            <SongRow key={item.track.id} play={play} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
