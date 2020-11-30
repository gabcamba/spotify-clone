import React from 'react';
import './styles/SidebarOption.css';
import { useDataLayerValue } from './DataLayer';

function SidebarOption({
  title,
  Icon,
  thumbnail,
  isPlaylist,
  isSong,
  play,
  trackId,
  playlist,
  getTracks,
}) {
  const [{}, dispatch] = useDataLayerValue();

  const handleOptionClick = () => {
    if (isSong) {
      play(trackId);
    } else if (isPlaylist) {
      getTracks(playlist.id);

      dispatch({
        type: 'SET_DISPLAY_IMAGE',
        heroImage: thumbnail,
      });

      dispatch({
        type: 'SET_DISPLAY_TITLE',
        displayTitle: playlist.name,
      });

      dispatch({
        type: 'SET_DISPLAY_DESCRIPTION',
        description: playlist.description,
      });

      dispatch({
        type: 'SET_OWNER',
        owner: playlist.owner.display_name,
      });
    }
  };
  return (
    <div onClick={handleOptionClick} className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon'></Icon>}
      {thumbnail && (
        <img
          className='sidebarOption__playlist_image'
          alt='thumb'
          src={thumbnail}
        ></img>
      )}
      {Icon ? <h5>{title}</h5> : <h6>{title}</h6>}
    </div>
  );
}

export default SidebarOption;
