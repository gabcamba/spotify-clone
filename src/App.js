import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    
    const _token = hash.access_token;
    
    spotify.setAccessToken(_token);
    console.log(_token)
    window.location.hash = "";
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getMyRecentlyPlayedTracks().then((recents) => {
        console.log(recents)
        dispatch({
          type:"SET_RECENTS",
          recents: recents
        })
      })
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
