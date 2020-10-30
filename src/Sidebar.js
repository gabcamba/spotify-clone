import React from 'react';
import './styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import MusicNoteRounded from '@material-ui/icons/MusicNoteRounded';
import { useDataLayerValue } from './DataLayer';

function Sidebar( {spotify}) {

  const getPlaylistTracks = (playlistId) => {
    spotify.getPlaylistTracks(playlistId).then(tracks => {
      console.log("from get playlist", tracks)
    })
    console.log(spotify)
  }
  const [{ userPlaylists, savedTracks }] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        alt='logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Library' Icon={MusicNoteRounded} />
      <br /> {/*Playlists*/}
      <strong className='sidebar__title'>Playlists</strong>
      <hr />
      {userPlaylists?.items?.map((playlist) => (
        // console.log(playlist.images[0].url)
        <SidebarOption
          key={playlist?.id + playlist?.snapshot_id}
          playlist={playlist}
          thumbnail={playlist?.images[0]?.url}
          title={playlist.name}
          isPlaylist={true}
          isSong={false}
          getTracks={getPlaylistTracks}
        />
      ))}
      <br /> {/*Recently played*/}
      {/*<strong className='sidebar__title'>Recently Played</strong>
      <hr />
      {savedTracks?.items?.map((recent) => (
        <SidebarOption
          key={recent.track.id + recent.played_at}
          thumbnail={recent.track.album.images[0].url}
          title={recent.track.name}
          isPlaylist={false}
          isSong={true}
          play={play}
          trackId={recent.track.id}
        />
      ))}*/}
    </div>
  );
}

export default Sidebar;
