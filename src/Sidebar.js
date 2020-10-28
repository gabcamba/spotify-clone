import React from 'react';
import './styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import MusicNoteRounded from '@material-ui/icons/MusicNoteRounded';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists, recents }, dispatch] = useDataLayerValue();
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
      {playlists?.items?.map((playlist) => (
        // console.log(playlist.images[0].url)
        <SidebarOption thumbnail={playlist.images[0].url} title={playlist.name} />
      ))}
      <br /> {/*Recently played*/}
      <strong className='sidebar__title'>Recently Played</strong>
      <hr />
      {recents?.items?.map((recent) => (
        <SidebarOption title={recent.track.name} />
      ))}
    </div>
  );
}

export default Sidebar;
