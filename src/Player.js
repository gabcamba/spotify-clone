import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./styles/Player.css";
import Sidebar from "./Sidebar";
import { useDataLayerValue } from './DataLayer';

function Player({spotify}) {
  const [{},dispatch] = useDataLayerValue();

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
  };

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar play={play}/>
        <Body play={play} spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
    </div>

  );
}

export default Player;
