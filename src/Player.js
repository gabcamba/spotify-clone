import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './styles/Player.css';
import Sidebar from './Sidebar';
import { useDataLayerValue } from './DataLayer';

function Player({ spotify }) {
  const [{}, dispatch] = useDataLayerValue();

  const play = (id) => {
    spotify
      .play({
        // playerInstance: new Spotify.Player({ name: "..." }),
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });

    spotify
      .transferMyPlayback(['124846fbd260b5cd14dfe32024f2b9e3f573357e'])
      .then((res) => {
        console.log(res, 'transferred to this device!');
      });
  };

  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar spotify={spotify} play={play} />
        <Body spotify={spotify} play={play} />
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
